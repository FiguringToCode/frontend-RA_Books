import { useEffect, useState } from "react"


export const useLocalStorage = (key, initialValue) => {
    const storedValue = () => {
        try {
            const data = window.localStorage.getItem(key)
            return data ? JSON.parse(data) : initialValue
        } catch (error) {
            console.log("Error reading localStorage: ", error)
            return initialValue
        }
    }

    const [value, setValue] = useState(storedValue)

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }, [key, value])

    return {value, setValue}
}