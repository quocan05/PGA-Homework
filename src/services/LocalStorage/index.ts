export const setLocalStorage = (key: string, value: string) =>{
    localStorage.setItem(key, value);
}

export const getLocalStorage = (key: string) => {
    const result = localStorage.getItem(key);
    return result !==null ? result : "";
}

export const deleteFromLocalStorage = (key: string) => {
    key !=="" && localStorage.removeItem(key);
}

export const clearAllLocalStorage =() => {
    localStorage.clear();
}