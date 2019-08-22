//工具函数 生成一个随机数 range: min ~ max
const simpleRandomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

/* 
 data: Array<any>
 count: Number 切割的份数
*/
export function getSliceNews(data, count) {
    let randomIndex = simpleRandomGenerator(0, count);
    let newsArr = [];
    let maxIndex = data.length / count;

    for (var i = 1; i <= count; i++) {
        let temparr = [];
        for (var y = maxIndex * i - maxIndex; y < maxIndex * i; y++) {
            temparr.push(data[y]);
        }
        newsArr.push(temparr);
    }
    return newsArr[randomIndex];
}
