import './activity.scss'
import { useEffect, useState } from "react"
import { fetchUserActivity } from '../../api/userActivityService'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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
            <h2>Activité quotidienne</h2>

            <ResponsiveContainer width="80%" height={200}>
                <BarChart
                    data={userData.sessions}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" tickFormatter={(day) => day.slice(8)} /> {/* Affiche uniquement le jour */}
                    <YAxis yAxisId="kilogram" orientation="right" />
                    <YAxis yAxisId="calories" orientation="left" hide />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[10, 10, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </section>
    )
}

export default Activity
