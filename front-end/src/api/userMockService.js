import {userInfoData} from '../mocks/userMock'
import { getModelUser } from '../models/serviceModel'

export const fetchUserData = async (userId) => {
  const user = userInfoData.find((user) => user.id === userId)
  if (!user) throw new Error('Utilisateur introuvable')
  return { data: getModelUser(user) } // return getModelUser(user) // Ajout de la clé "data" pour correspondre à l'appel dans Stats.jsx
}