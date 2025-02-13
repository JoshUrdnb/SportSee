import "./performance.scss"
import PropTypes from "prop-types"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"

const Performance = ({ performanceData }) => {
    // if (!performanceData || performanceData.length === 0) {
    //     return <div>Chargement...</div>;
    // }

    return (
        <section className="performance-container">
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius="70%" data={performanceData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
                    <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </section>
    )
}

Performance.propTypes = {
    performanceData: PropTypes.arrayOf(
        PropTypes.shape({
            kind: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default Performance