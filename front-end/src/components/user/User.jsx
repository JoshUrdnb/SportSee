import PropTypes from "prop-types"
import "./user.scss"

const User = ({ firstname = "Utilisateur introuvable" }) => {

    return (
        <section className="user-container">
            <h1 className="font-size">
                Bonjour <span className="text-red">{firstname}</span>
            </h1>
            <p className="text">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
        </section>
    )
}

User.propTypes = {
    firstname: PropTypes.string.isRequired,
}

export default User