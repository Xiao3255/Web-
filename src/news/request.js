const axios = require('axios');

const APP_CODE = '90c4c6b2e04a431fbd8cd2a7213e0bfa'

export const getToutiao = () => {
    return axios.get('http://toutiao-ali.juheapi.com/toutiao/index?type=top',
        {
            headers: { Authorization: 'APPCODE ' + APP_CODE }
        })
}















