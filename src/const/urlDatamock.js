export const urlApiMock = {
    userMainData(userId) {
        return `/data/${userId}/main-data.json`
    },
    userAverageSessionData(userId) {
        return `data/${userId}/average-sessions.json`
    },
    userActivityData(userId) {
        return `/data/${userId}/activity.json`
    },
    userActivityTypesData(userId) {
        return `/data/${userId}/performance.json`
    }
}