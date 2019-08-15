import {getToutiao} from '../news/request'

export function getToutiaoRequest({commit}){
     getToutiao().then( res => {
         commit('getNewsToutiao',res.data.result.data)
     })
}
