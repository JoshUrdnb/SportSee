import './average.scss'
import { useEffect, useState } from "react"
import { ApiFactory } from '../../api/factory'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const Average = () => {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const userId = 12

    useEffect(() => {
        const getUserAverageData = async () => {
            try {
                const response = await ApiFactory.fetchAverageData(userId)
                setUserData(response.data)
            } catch (err) {
                console.error(err)
                setError('Erreur lors de la récupération des données utilisateur.')
            }
        }

        getUserAverageData()
    }, [])

    if (error) return <div>{error}</div>
    if (!userData) return <div>Chargement...</div>

    const daysMapping = ["L", "M", "M", "J", "V", "S", "D"]
    const formattedData = userData.sessions.map((session, index) => ({
        day: daysMapping[index],
        sessionLength: session.sessionLength
    }))

    return (
        <section className='average-container'>
            <p>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height={220}>
                <LineChart data={formattedData}>
                    <XAxis dataKey="day" tick={{ fill: "rgba(255, 255, 255, 0.7)" }} />
                    <Tooltip />
                    <Line type="basis" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </section>
    )
}

export default Average