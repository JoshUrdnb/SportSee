import "./performance.scss"
import { useEffect, useState } from "react"
import { ApiFactory } from '../../api/factory'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts"

const Performance = () => {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const userId = 12

    useEffect(() => {
        const getUserPerformanceData = async () => {
            try {
                const response = await ApiFactory.fetchUserPerformance(userId)

                // Transformer les données pour les adapter à Recharts
                const formattedData = response.data.data.map((item) => ({
                    value: item.value,
                    kind: response.data.kind[item.kind], // Convertir l'ID en texte
                }))

                setUserData(formattedData)
            } catch (err) {
                console.error(err)
                setError("Erreur lors de la récupération des performances utilisateur.")
            }
        };

        getUserPerformanceData()
    }, [])

    if (error) return <div>{error}</div>
    if (!userData) return <div>Chargement...</div>

    return (
        <section className="performance-container">
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius="70%" data={userData}>
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{ fill: "white", fontSize: 12 }}
                    />
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </section>
    )
}

export default Performance