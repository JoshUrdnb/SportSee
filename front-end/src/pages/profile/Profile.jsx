import "./profile.scss"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { ApiFactory } from "../../api/factory"

import User from '../../components/user/User'
import Stats from '../../components/stats/Stats'
import Objective from '../../components/objective/Objective'
import Activity from '../../components/activity/Activity'
import Average from '../../components/average/Average'
import Performance from '../../components/performance/Performance'

const kindMapping = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Énergie",
    6: "Cardio"
}

const Profile = () => {
    const { userId } = useParams()
    const [userData, setUserData] = useState(null)
    const [statsData, setStatsData] = useState(null)
    const [activityData, setActivityData] = useState(null)
    const [averageData, setAverageData] = useState(null)
    const [objectiveData, setObjectiveData] = useState(null)
    const [performanceData, setPerformanceData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await ApiFactory.fetchUserData(userId)
                setUserData(userResponse.data)

                const statsResponse = await ApiFactory.fetchUserData(userId)
                setStatsData(statsResponse.data)

                const activityResponse = await ApiFactory.fetchUserActivity(userId)
                setActivityData(activityResponse.data)

                const averageResponse = await ApiFactory.fetchAverageData(userId)
                setAverageData(averageResponse.data)

                const objectiveResponse = await ApiFactory.fetchUserData(userId)
                setObjectiveData(objectiveResponse.data)

                // Récupération des performances avec mapping et tri
                const performanceResponse = await ApiFactory.fetchUserPerformance(userId)
                const formattedPerformanceData = performanceResponse.data.data
                    .map(item => ({
                        value: item.value,
                        kind: kindMapping[item.kind]
                    }))
                    .sort((a, b) => Object.values(kindMapping).indexOf(a.kind) - Object.values(kindMapping).indexOf(b.kind))

                setPerformanceData(formattedPerformanceData)

            } catch (err) {
                console.error(err)
                setError("Erreur lors de la récupération des données.")
            }
        }

        fetchData()
    }, [userId])

    if (error) return <div className="error-message">{error}</div>
    if (!userData || !statsData || !activityData || !averageData || !objectiveData || !performanceData) return <div className="loading-message">Chargement...</div>

    return (
        <div className="profile">
            <div className="user">
                <User firstname={userData.firstname} />
            </div>
            <div className="activity">
                <Activity activityData={activityData} />
            </div>
            <div className="details">
                <Average averageData={averageData} />
                <Performance performanceData={performanceData} />
                {/* <Objective objectiveData={userData.todayScore || userData.score} /> */}
                <Objective score={{ todayScore: userData.todayScore || userData.score }} />
            </div>
            <div className="sidebar-user">
                <Stats userData={userData} />
            </div>
        </div>
    )
}

export default Profile