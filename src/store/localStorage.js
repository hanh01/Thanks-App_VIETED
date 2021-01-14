export const loadState = () => {
    const authUser = localStorage.getItem('authUser')
    if (!authUser) return {}
    return JSON.parse(authUser)
}
export const saveState = (state) => {
    const authUser = JSON.stringify(state)
    localStorage.setItem('authUser', authUser)
}
export const clearState = () => {
    localStorage.removeItem('authUser')
}
