/**
 * @Author shunli  2023/9/20 20:46
 * @Desc 排序算法
 */


/**
 * 冒泡排序
 */
const bubbleSort = (arr) => {
    const len = arr.length

    for (let i = 0; i < len; i++) {
        let flag = false
        for (let j = 0; j < len - 1 - i; j++) {
        // 当前值大于后面的值
            if(arr[j] > arr[j+1]) {
                flag = true
                let tem = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tem
            }
        }

        if(!flag) break
    }

    return arr
}


/**
 * 插入排序
 */
const insertSort = (arr) => {
    const len = arr.length
    for (let i = 1; i < len; i++) {
        let preIndex = i -1
        const current = arr[i]
        while (preIndex >=0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }

    console.log(arr)
}

/**
 * 选择排序
 */
const selectSort = (arr) => {
    const len = arr.length
    let minIndex = 0, temp;
    for (let i = 0; i < len; i++) {
        minIndex = i
        for (let j = i +1 ; j < len; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    console.log(arr)
}

selectSort( [4,3,2,5,6])


