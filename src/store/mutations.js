import { getSliceNews } from '../vendors/slicenews'

export function getNewsToutiao(state,payload){
    state.newsdata = getSliceNews(payload,5);
}

export function sendurl(state,payload) {
    state.url = payload;
}
