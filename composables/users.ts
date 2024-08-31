type users = {
    name: string | null,
    age: number | null,
    isLoggedIn: boolean
}
export const useCurrentData = () => {
    return useState('currentData', () => {
        return shallowRef<users>({
            name: null,
            age: null,
            isLoggedIn: false
        })
    })
}