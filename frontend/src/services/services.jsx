import request from '../utils/client.utils'


export async function recommendation(registred){
    try {
        const response = await request({
            method: 'POST',
            url: '/recommend',
            data: registred, 
        })
        console.log("step1");
        console.log(response);
                return response

    } catch (error) {
        throw (error.response || error.message)
    }
}