import './activity.scss'
import { useEffect, useState } from "react"
import { fetchUserActivity } from '../../api/userMockService'
// import { fetchUserActivity } from "../../api/userApiService.js"
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

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={userData.sessions}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barGap={8}
                    barCategoryGap={12}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" tickFormatter={(day) => day.slice(8)} tickLine={false} />
                    <YAxis yAxisId="kilogram" orientation="right" domain={['dataMin - 1', 'dataMax + 1']} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="calories" orientation="left" hide />
                    <Tooltip />
                    <Legend align="right" verticalAlign="top" iconType="circle" wrapperStyle={{ paddingBottom: 10 }} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[10, 10, 0, 0]} barSize={10} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} barSize={10} />
                </BarChart>
            </ResponsiveContainer>
        </section>
    )
}

export default Activity
