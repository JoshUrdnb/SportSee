const BASE_URL = "http://localhost:3000"
import { getModelPerformance, getModelAverage, getModelActivity, getModelUser } from '../models/serviceModel'

export const ApiService = {
    // API ENDPOINTS :

    // Récupérer les données principales d'un utilisateur
    async fetchUserData(userId) {
        const response = await fetch(`${BASE_URL}/user/${userId}`)
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données utilisateur")
        }
        const data = await response.json()
        return { data: getModelUser(data.data) }
    },

    // Récupérer les données d'activité journalière d'un utilisateur
    async fetchUserActivity(userId) {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`)
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des activités utilisateur")
        }
        const data = await response.json()
        return { data: getModelActivity(data.data) }
    },

    // Récupérer les données average session
    async fetchAverageData(userId) {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`)
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des durées session utilisateur")
        }
        const data = await response.json()
        return { data: getModelAverage(data.data) }
    },

    // Récupérer les données de performance de l'utilisateur
    async fetchUserPerformance(userId) {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`)
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des performances utilisateur")
        }
        const data = await response.json()
        return { data: getModelPerformance(data.data) }
    }
}
