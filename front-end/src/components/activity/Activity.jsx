import './activity.scss'
import { useEffect, useState } from "react"
import { fetchUserActivity } from '../../api/userActivityService'

const Activity = () => {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const userId = 12

    useEffect(() => {
        const getUserActivityData = async () => {
            try {
                const response = await fetchUserActivity(userId)
                setUserData(response.data)
            } catch (err) {
                console.error(err)
                setError('Erreur lors de la récupération des données utilisateur.')
            }
        }

        getUserActivityData()
    }, [])

    if (error) {
        return <div>{error}</div>
    }

    if (!userData) {
        return <div>Chargement...</div>
    }

    return (
        <section className='activity-container'>
            <h2>Activité de l utilisateur</h2>
            <ul>
                {userData.sessions.map((session, index) => (
                    <li key={index}>
                        Jour {session.day} - Poids : {session.kilogram} kg - Calories : {session.calories} kcal
                    </li>
                ))}
            </ul>
        </section>
    )    
}

export default Activity