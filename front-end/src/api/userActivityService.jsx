import { userActivityData } from '../mocks/userActivityMock'
import { getModelActivity } from '../models/serviceModel'

export const fetchUserActivity = async (userId) => {
    const userActivity = userActivityData.find((activity) => activity.userId === userId)

    if (!userActivity) throw new Error('Activité introuvable')
        
    return { data: getModelActivity(userActivity) } // On formate avant de retourner
}