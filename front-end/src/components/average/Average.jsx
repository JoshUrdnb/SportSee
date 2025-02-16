import './average.scss'
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