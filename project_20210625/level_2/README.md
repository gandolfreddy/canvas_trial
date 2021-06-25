## 多了 JS 程式
現在我們在網頁中載入 jQuery 框架以及我們自己撰寫的 index.js 程式來控制網頁，
我們試著加上一些功能，讓我們可以新增、刪除、修改清單項目。

## this 是什麼？
在這裏 this 指的就是觸發該事件的元素，如果是刪除按鈕被點擊而執行 deleteItem
在函式中 this 就是那個刪除按鈕。

## 任務1 - 有 BUG DONE
這個專案目前可以透過輸入框新增事項，也可以點擊刪除按鈕刪除事項，或是點擊事項可以完成事項，
但是你有發現它其實潛藏著一個 BUG ?

試著玩出這個專案的 BUG 看看，並將第 32, 33 行程式，改成以下來修正問題。
```javascript
$('#list').on('click', '.item', toggleCheck);
$('#list').on('click', '.item-delete', deleteItem);
```

## 任務2 - 動畫 DONE
JS 程式中第 24 行會移除整個項目元素，它可以寫成如下：
```javascript
btn = $(this); // btn 是刪除按鈕
item = $(this).parent(); // item 是刪除按鈕的父元素，也就是包住按鈕的 div
item.remove(); // 將整個 div 元素刪除就是移除整個項目
```
當然最終我們可以直接串接簡寫成現在程式裡的樣子。

試著把 .remove() 改成 .fadeOut()，它就會從移除元素變成淡出元素並消失，
試試看吧！

## 任務3 - 再次點擊清單事項，可以將完成的狀態改回未完成 DONE
在 level_1 的挑戰裡握我們發現只要 item 元素加上 `done` 這個樣式類別，介面就會變成完成的樣子。在第 29 行的程式中，我們使用了 .addClass 語法來幫元素動態加上 `done` 類別，當然一樣在 jQuery 中我們也可以使用 .removeClass 語法可以從元素上移除指定的類別。
但如果要判斷有沒有其類別，有的話就刪掉沒有就新增，可以使用 toogleClass。

請將 addClass 改成 toggleClass 並執行看看！

官方文件：
https://api.jquery.com/toggleclass/
https://api.jquery.com/addClass/
https://api.jquery.com/removeClass/