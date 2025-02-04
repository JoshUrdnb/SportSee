import "./user.scss"
import { useEffect, useState } from "react"
import { fetchUserData } from "../../api/userMockService.js"

const User = () => {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const userId = 12

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await fetchUserData(userId)
                setUserData(response.data)
            } catch (err) {
                console.error(err)
                setError("Erreur lors de la récupération des données utilisateur.")
            }
        };

        getUserData()
    }, []);

    if (error) {
        return <div>{error}</div>
    }

    if (!userData) {
        return <div>Chargement...</div>
    }

    return (
        <section className="user-container">
            <h1 className="font-size">
                Bonjour <span className="text-red">{userData.firstname}</span>
            </h1>
            <p className="text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    )
}

export default User