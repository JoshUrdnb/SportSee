import "./objective.scss"
import { useEffect, useState } from "react"
import { ApiFactory } from '../../api/factory'
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts"

const Objective = () => {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const userId = 12

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await ApiFactory.fetchUserData(userId)
                setUserData(response.data)
            } catch (err) {
                console.error(err)
                setError("Erreur lors de la récupération des données utilisateur.")
            }
        };

        getUserData()
    }, [])

    if (error) {
        return <div>{error}</div>
    }

    if (!userData) {
        return <div>Chargement...</div>
    }

    const percentage = userData.todayScore * 100
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

export default Objective