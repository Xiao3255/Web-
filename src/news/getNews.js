const axios = require('axios');

const Appkey = '22fb50ced4cea4b35c15378fdae790db';


export const getToutiao = () => {
    return axios.get(`/api/index?type=top&key=${Appkey}`)
}















