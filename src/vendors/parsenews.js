export function clearbr(key) {
    key = key.replace(/[\r\n]/g, "");
    return key;
}