export const urlApi = {
    userMainData(userId) {
        return `http://localhost:3000/user/${userId}/`
    },
    userAverageSessionData(userId) {
        return `http://localhost:3000/user/${userId}/average-sessions`
    },
    userActivityData(userId) {
        return `http://localhost:3000/user/${userId}/activity`
    },
    userActivityTypesData(userId) {
        return `http://localhost:3000/user/${userId}/performance`
    }
}