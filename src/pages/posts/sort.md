---
title: "排序算法"
pubDate: "2023-09-21"
slug: "how-to-compare-dates-in-javascript"
description: "排序算法"
hero: "/images/javascript-logo-banner.jpg"
tags: ["math"]
layout: "../../layouts/BlogPostLayout.astro"
---

## 时间复杂度为 n^2 的排序



> 关注点： 在循环时是应该全部长度循环还是部分长度循环， 要看当前循环应该走到哪里结束。

### 冒泡排序
```js
const bubbleSort = (arr) => {
    const len = arr.length
    // 当前元素和下一个元素相比较， 所以当前元素只用走到 len -1 
    for (let i = 0; i < len - 1; i++) {
        // i 为已经排序的元素
        for (let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j + 1]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

```

> 关注点： 在循环时是应该全部长度循环还是部分长度循环， 要看当前循环应该走到哪里结束。


### 插入排序
```js
const insertSort = (arr) => {
    const len = arr.length
    // 从 第一个元素开始向前比较插入
    for (let i = 1; i < len; i++) {
        // 如果前一个元素大于当前元素， 并且前一个元素没有出界
        let preIndex = i - 1
        const current = arr[i]
         while (preIndex >= 0 && arr[preIndex] > current) {
            // 这里需要使用  preIndex + 1 表示， 因为后续的while 循环中要根据 preIndex 确定位置
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
         }
         arr[preIndex +1] = current
    }
    
    return arr
}
```

### 选择排序
```js
const selectSort = (arr) => {
    const len = arr.length
    let minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; i < len; j++) {
            if(arr[j] < arr[i]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    
    return arr
}
```


