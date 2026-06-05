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



export const getPostData = async (id) => {
    let result = null
    try {
        const res = await apiConnector("GET", `${url}/${id}`)
        console.log(res);
        if (res) {

            result = res.data;
            return result;
        }


    } catch (err) {
        console.log(err);
    }
}
