
const key = "todo";

export const setLocalStorage = (value) =>{
    return localStorage.setItem(key,JSON.stringify(value))
}


export const getLocalStorage = () =>{
    const getVal = localStorage.getItem(key);
    if(!getVal) return[];
    return JSON.parse(getVal)

}