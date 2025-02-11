import './activity.scss'
import { useEffect, useState } from "react"
import { ApiFactory } from '../../api/factory'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value}`}Kg</p>
                <p className="label-2">{`${payload[1].value}`}Kcal</p>
            </div>
        );
    }
    return null
};

CustomTooltip.propTypes = { active: PropTypes.bool, payload: PropTypes.array }

const Activity = () => {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const userId = 12

    useEffect(() => {
        const getUserActivityData = async () => {
            try {
                const response = await ApiFactory.fetchUserActivity(userId)
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
            <p className='activity-title'>Activité quotidienne</p>
            <ResponsiveContainer width="100%" height={280}>
                <BarChart
                    data={userData.sessions}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barGap={10}  // Espacement plus large
                    barCategoryGap={15}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />

                    <XAxis
                        dataKey="day"
                        tickFormatter={(day) => day.slice(9)}
                        tickLine={false}
                        stroke="#9B9EAC"
                    />

                    <YAxis
                        yAxisId="kilogram"
                        orientation="right"
                        domain={['dataMin - 2', 'dataMax + 1']}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9B9EAC" }} // Texte gris clair
                        tickCount={3}
                    />

                    <YAxis
                        yAxisId="calories"
                        orientation="left"
                        hide
                        tickCount={3}
                    />

                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ fill: "rgba(196, 196, 196, 0.5)" }} // Fond gris au survol
                    />

                    <Legend
                        align="right"
                        verticalAlign="top"
                        iconType="circle"
                        wrapperStyle={{ lineHeight: '24px', fontSize: 14 }}
                        iconSize="10"
						height={60}
                    />

                    <Bar
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        fill="#282D30"
                        name="Poids (kg)"
                        radius={[10, 10, 0, 0]}
                        barSize={7} // Barres plus fines
                    />
                    <Bar
                        yAxisId="calories"
                        dataKey="calories"
                        fill="#E60000"
                        name="Calories brûlées (kCal)"
                        radius={[10, 10, 0, 0]}
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </section>

    )
}

export default Activity