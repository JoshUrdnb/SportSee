export function getModelUser(data) {
    return {
        id: data.id,
        firstname: data.userInfos.firstname,
        lastname: data.userInfos.lastname,
        age: data.userInfos.age,
        todayScore: data.todayScore,
        keyData: data.keyData,
    }
}