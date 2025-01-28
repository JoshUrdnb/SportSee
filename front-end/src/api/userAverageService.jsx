import { userAverageData } from '../mocks/userAverageMock'
import { getModelAverage } from '../models/serviceModel'

export const fetchAverageData = async (userId) => {
    const userAverage = userAverageData.find((user) => user.userId === userId)
    if (!userAverage) throw new Error('Utilisateur introuvable')
    return { data: getModelAverage(userAverage) }
}