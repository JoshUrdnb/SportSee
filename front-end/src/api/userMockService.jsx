import { userInfoData, userActivityData, userAverageData, userPerformanceData } from '../mocks/userMock'
import { getModelUser, getModelActivity, getModelAverage, getModelPerformance } from '../models/serviceModel'

export const MockService = {

  async fetchUserData(userId) {
    const user = userInfoData.find((user) => user.id == userId)
    if (!user) throw new Error('Erreur lors de la récupération des données utilisateur de User, Stats et Objectif')
    return { data: getModelUser(user) }
  },

  async fetchUserActivity(userId) {
    const userActivity = userActivityData.find((activity) => activity.userId == userId)
    if (!userActivity) throw new Error('Erreur lors de la récupération des données d\'activité utilisateur')
    return { data: getModelActivity(userActivity) }
  },

  async fetchAverageData(userId) {
    const userAverage = userAverageData.find((user) => user.userId == userId)
    if (!userAverage) throw new Error('Erreur lors de la récupération des données de session moyenne utilisateur')
    return { data: getModelAverage(userAverage) }
  },

  async fetchUserPerformance(userId) {
    const userPerformance = userPerformanceData.find((performance) => performance.userId == userId)
    if (!userPerformance) throw new Error('Erreur lors de la récupération des données de performance utilisateur')
    return { data: getModelPerformance(userPerformance) }
  }

}