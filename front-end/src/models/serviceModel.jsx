export function getModelUser(data) {
    return {
        id: data.id,
        firstname: data.userInfos.firstName,
        lastname: data.userInfos.lastName,
        age: data.userInfos.age,
        todayScore: data.todayScore ?? data.score, // On prend "todayScore" s'il existe, sinon "score"
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

export function getModelPerformance(data) {
    return {
        userId: data.userId,
        kind: data.kind,
        data: data.data.map((item) => ({
            value: item.value,
            kind: item.kind
        }))
    }
}