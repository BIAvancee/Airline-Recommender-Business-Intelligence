import request from '../utils/client.utils'

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', "*");
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST','PUT','DELETE', 'OPTIONS');

//headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));


export async function recommendation(registred){
    try {
        const response = await request({
            method: 'POST',
            url: '/test/recommend',
            data: registred, 
            headers: headers,
        })
        console.log("step1");
        console.log(response);
                return response

    } catch (error) {
        throw (error.response || error.message)
    }
}
export async function getReco(user, country){
    try {
        const response = await request({
            method: 'GET',
            url: `/test/top/${user}/${country}`,
        })
        console.log("step1");
        console.log(response);
                return response.data

    } catch (error) {
        throw (error.response || error.message)
    }
}