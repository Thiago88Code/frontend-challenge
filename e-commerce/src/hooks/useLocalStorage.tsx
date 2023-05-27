import { useState } from "react";

export function useLocalStorage(item: string) {

    const [value, setValue] = useState(localStorage.getItem(item) ?? "")

    const updateLocalStorage = (newValue: string) => {
        setValue(newValue)
        localStorage.setItem(item, JSON.stringify(newValue))
    }
    return {
        value,
        updateLocalStorage
    }
}