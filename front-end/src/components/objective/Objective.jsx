import "./objective.scss"
import PropTypes from "prop-types"
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts"

const Objective = ({ score }) => {

    const percentage = (score.todayScore || score.score || 0) * 100
    const data = [{ name: "Score", value: percentage, fill: "#FF0000" }]

    return (
        <section className="objective-container">
            <p>Score</p>
            <div className="objective-chart">
                <ResponsiveContainer width="100%" height={200}>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="80%"
                        outerRadius="100%"
                        barSize={10}
                        data={data}
                        startAngle={90} 
                        endAngle={450}
                    >
                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                        <RadialBar dataKey="value" background={{ fill: "#EAEAEA" }} />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="objective-text">
                    <span className="percentage">{percentage}%</span>
                    <span className="goal-text">de votre <br /> objectif</span>
                </div>
            </div>
        </section>
    )
}

Objective.propTypes = {
    score: PropTypes.shape({
        todayScore: PropTypes.number,
        score: PropTypes.number // Au cas où `score` soit utilisé à la place de `todayScore`
    }).isRequired
}


export default Objective