import {userInfoData, userActivityData, userAverageData, userPerformanceData} from '../mocks/userMock'
import { getModelUser, getModelActivity, getModelAverage, getModelPerformance } from '../models/serviceModel'

export const MockService = {

  async fetchUserData (userId) {
    const user = userInfoData.find((user) => user.id === userId)
    if (!user) throw new Error('Utilisateur introuvable')
    return { data: getModelUser(user) } // return getModelUser(user) // On formate avant de retourner // Ajout de la clé "data" pour correspondre à l'appel dans Stats.jsx
  },
  
  async fetchUserActivity  (userId) {
      const userActivity = userActivityData.find((activity) => activity.userId === userId)
  
      if (!userActivity) throw new Error('Activité introuvable')
          
      return { data: getModelActivity(userActivity) }
  },
  
  async fetchAverageData  (userId) {
      const userAverage = userAverageData.find((user) => user.userId === userId)
      if (!userAverage) throw new Error('Utilisateur introuvable')
      return { data: getModelAverage(userAverage) }
  },
  
  async fetchUserPerformance  (userId) {
    const userPerformance = userPerformanceData.find((performance) => performance.userId === userId)
  
    if (!userPerformance) throw new Error('Performance introuvable')
  
    return { data: getModelPerformance(userPerformance) }
  }
  
}