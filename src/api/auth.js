import client from "./client";
export async function loginuser(email, password){
    try {
    const response = await client.post(
        "/auth/login",
        {
            userMail: email,
            plainPass: password
        }
    )
    return response.data;
    } 
    catch (error) {
    console.error(error);
    return {error: error.response?.data?.detail}
    } 
};

export async function registerUser(username, email, password){
    try{
        const response = await client.post(
            '/auth/register/',
            {
                userName: username,
                userMail: email,
                plainPass: password
            }
        )
        return response.data
    }
    catch(error){
        console.error(error)
    }
}