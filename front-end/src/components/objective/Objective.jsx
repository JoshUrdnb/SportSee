import "./objective.scss"
import { useEffect, useState } from "react"
import { fetchUserData } from "../../api/userMockService.js"
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"

const Objective = () => {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const userId = 12

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await fetchUserData(userId)
                setUserData(response.data)
            } catch (err) {
                console.error(err)
                setError("Erreur lors de la récupération des données utilisateur.")
            }
        };

        getUserData()
    }, []);

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
            <h3>Score</h3>
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
                        endAngle={-270}
                    >
                        <RadialBar minAngle={15} background dataKey="value" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <p>{percentage}% de votre objectif</p>
        </section>
    )
}

export default Objective