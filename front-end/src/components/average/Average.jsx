import './average.scss'
// import { useEffect, useState } from "react"
// import { ApiFactory } from '../../api/factory'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip-average' style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px" }}>
                <p style={{ color: "#000" }}>{`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}

const Average = ({ averageData }) => {
    // const [userData, setUserData] = useState(null)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     const getUserAverageData = async () => {
    //         try {
    //             const response = await ApiFactory.fetchAverageData(userId)
    //             setUserData(response.data)
    //         } catch (err) {
    //             console.error(err)
    //             setError('Erreur lors de la récupération des données utilisateur.')
    //         }
    //     }

    //     getUserAverageData()
    // }, [userId])

    // if (error) return <div>{error}</div>
    // if (!userData || !userData.sessions || userData.sessions.length === 0) return <div>Chargement...</div>

    const daysMapping = ["L", "M", "M", "J", "V", "S", "D"]
    const formattedData = averageData.sessions.map((session, index) => ({
        day: daysMapping[index],
        sessionLength: session.sessionLength
    }))

    return (
        <section className='average-container'>
            <p className='average-title'>Durée moyenne des <br /> sessions</p>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={formattedData}>
                    <XAxis dataKey="day" tick={{ fill: "rgba(255, 255, 255, 0.7)" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} dot={false} activeDot={{ r: 6, fill: "#FFF" }} />
                </LineChart>
            </ResponsiveContainer>
        </section>
    )
}

Average.propTypes = {
    averageData: PropTypes.shape({
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
                sessionLength: PropTypes.number.isRequired
            })
        ).isRequired
    }).isRequired
}

export default Average