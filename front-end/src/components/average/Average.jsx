import './average.scss'
import { useEffect, useState } from "react"
import { fetchAverageData } from '../../api/userAverageService'

const Average = () => {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const userId = 12

    useEffect(() => {
        const getUserAverageData = async () => {
            try {
                const response = await fetchAverageData(userId)
                setUserData(response.data)
            } catch (err) {
                console.error(err)
                setError('Erreur lors de la récupération des données utilisateur.')
            }
        }

        getUserAverageData()
    }, [])

    if (error) {
        return <div>{error}</div>
    }

    if (!userData) {
        return <div>Chargement...</div>
    }

    return (
        <section className='average-container'>
            <h1>Durée moyennes des sessions</h1>
            <ul>
                {userData.sessions.map((session) => (
                    <li key={session.day}>
                        Jour {session.day} : {session.sessionLength} minutes
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Average