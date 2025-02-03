import './performance.scss'
import { useEffect, useState } from "react"
import { fetchUserPerformance } from '../../api/userMockService' 
// import { fetchUserPerformance } from "../../api/userApiService.js"

const Performance = () => {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const userId = 12

    useEffect(() => {
        const getUserPerformanceData = async () => {
            try {
                const response = await fetchUserPerformance(userId)
                setUserData(response.data)
            } catch (err) {
                console.error(err)
                setError('Erreur lors de la récupération des performances utilisateur.')
            }
        }

        getUserPerformanceData()
    }, [])

    if (error) {
        return <div>{error}</div>
    }

    if (!userData) {
        return <div>Chargement...</div>
    }

    return (
        <section className='performance-container'>
            <h2>Performance</h2>
            <ul>
                {userData.data.map((item) => (
                    <li key={item.kind}>
                        {userData.kind[item.kind]} : {item.value}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Performance