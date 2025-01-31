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

export function getModelActivity(data) {
    return {
        userId: data.userId,
        sessions: data.sessions.map((session) => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
        }))
    }
}

export function getModelAverage(data) {
    return {
        userId: data.userId,
        sessions: data.sessions.map((session) => ({
            day: session.day,
            sessionLength: session.sessionLength
        }))
    }
}