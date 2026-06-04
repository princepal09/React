import { apiConnector } from "../apiConnector";




const url = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = async () => {
    let result = null
    try {
        const res = await apiConnector("GET", url)
        if (res) {

            result = res.data;
            return result;
        }

    } catch (err) {
        console.log(err);
    }
}