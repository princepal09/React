import axios from "axios";

export const getProfileData = async ({params}) => {
    const {username} = params

    try {
        let result = null;
        const res = await axios.get(`https://api.github.com/users/${username}`);
        console.log(res.data);
        result = res.data
        return result;
    } catch (err) {
        console.log(err);
    } 
};