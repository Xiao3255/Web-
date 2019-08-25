import { getSliceNews } from '../vendors/slicenews'
import { clearbr } from '../vendors/parsenews'

export function syncRequestNewsURL(state, payload) {
    state.newsdata = getSliceNews(payload, 5);
    state.randomNews = state.newsdata['randomNews'];
    state.partNews = state.randomNews;
}

export function syncSendURL(state, payload) {
    state.url = payload;
}

export function syncRequestNewsDataURLAndParse(state, htmlstr) {
    let bodyPattern = /<body>(\s.*)*<\/body>/
    let pattern = /<article.*>.*<\/article>/
    let bodyString = htmlstr.match(bodyPattern)[0];
    let noSpaceString = clearbr(bodyString);
    let articleString = noSpaceString.match(pattern)[0]
    state.htmlString = articleString;
}

export function changeStatus(state, payload) {
    state.currentType = payload.currentType;
    state.isMerge = payload.isMerge;
}

export function mergeNews(state) {

    state.partNews = state.partNews.concat(...state.newsdata['onceNews']);
    state.isMerge = true;
    state.type = state.currentType;

}

export function addNews(state, payload) {
    state.partNews = state.partNews.concat(...payload)
}