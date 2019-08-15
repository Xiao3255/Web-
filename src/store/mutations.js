import { getSliceNews } from '../vendors/slicenews'

export function getNewsToutiao(state,payload){
    state.newsdata = getSliceNews(payload,5);
}
