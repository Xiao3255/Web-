import { requestNewsDataURL, requestNewsURL } from '../news/request'


export function asyncRequestNewsURL({ commit }, type) {
    requestNewsURL(type).then(res =>
        commit('syncRequestNewsURL', res.data.result.data)
    )
}

export function asyncRequestNewsAndNoSlice({ commit }, type) {
    requestNewsURL(type).then(res => {
        commit('addNews', res.data.result.data);
    })
}

export function asyncRequestNewsDataURL({ commit }, { url }) {
    requestNewsDataURL(url).then(res =>
        commit('syncRequestNewsDataURLAndParse', res.data)
    )
}
