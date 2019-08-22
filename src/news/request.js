const axios = require('axios');

const APP_CODE = '90c4c6b2e04a431fbd8cd2a7213e0bfa'

export const requestNewsURL = (type) => {
    return axios.get('http://toutiao-ali.juheapi.com/toutiao/index?type='+type,{
        headers: { Authorization: 'APPCODE ' + APP_CODE }
    })
}

export function requestNewsDataURL(URL) {
    return axios.get(URL)
}














