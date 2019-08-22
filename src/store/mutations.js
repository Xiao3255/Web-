import { getSliceNews } from '../vendors/slicenews'
import { clearbr } from '../vendors/parsenews'

export function syncRequestNewsURL(state,payload){
    state.newsdata = getSliceNews(payload,5);
}

export function syncSendURL(state,payload) {
    state.url = payload;
}

export function syncRequestNewsDataURLAndParse(state,htmlstr){
    let bodyPattern = /<body>(\s.*)*<\/body>/
    let pattern = /<article.*>.*<\/article>/
    let bodyString = htmlstr.match(bodyPattern)[0];
    let noSpaceString = clearbr(bodyString);
    let articleString = noSpaceString.match(pattern)[0]
    state.htmlString = articleString;
}