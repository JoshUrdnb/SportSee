const BASE_URL = "http://localhost:3000"
import { getModelPerformance, getModelAverage, getModelActivity, getModelUser } from '../models/serviceModel'

export const ApiService = {
    async fetchUserData(userId) {
        try {
            const response = await fetch(`${BASE_URL}/user/${userId}`)
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des données utilisateur")
            }
            const data = await response.json()
            return { data: getModelUser(data.data) }
        } catch (error) {
            console.error("Erreur API:", error);
            throw new Error("Impossible de contacter le serveur. Vérifiez votre connexion.")
        }
    },

    async fetchUserActivity(userId) {
        try {
            const response = await fetch(`${BASE_URL}/user/${userId}/activity`)
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des activités utilisateur")
            }
            const data = await response.json()
            return { data: getModelActivity(data.data) }
        } catch (error) {
            console.error("Erreur API:", error);
            throw new Error("Impossible de contacter le serveur pour récupérer les activités.")
        }
    },

    async fetchAverageData(userId) {
        try {
            const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`)
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des durées session utilisateur")
            }
            const data = await response.json()
            return { data: getModelAverage(data.data) }
        } catch (error) {
            console.error("Erreur API:", error);
            throw new Error("Impossible de contacter le serveur pour récupérer les sessions moyennes.")
        }
    },

    async fetchUserPerformance(userId) {
        try {
            const response = await fetch(`${BASE_URL}/user/${userId}/performance`)
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des performances utilisateur")
            }
            const data = await response.json()
            return { data: getModelPerformance(data.data) }
        } catch (error) {
            console.error("Erreur API:", error);
            throw new Error("Impossible de contacter le serveur pour récupérer les performances.")
        }
    }
}