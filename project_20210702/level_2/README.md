## 任務1 - 選項文字顏色 done
當我們選取選項時，選項會變成橘黃色，當我們送出答案後，正確或選對的選項會變成綠色，選錯的選項會變成紅色。
當這些選項從白色變成這三種顏色時，我們要讓選項的文字變成白色這樣更好襯托出來，就像是底下三個按鈕的字一樣是白色。

根據文件 jQuery 我們可以使用 addClass 或 removeClass 來動態的新增刪除元素的 class 內容
[addClass 語法使用](https://api.jquery.com/addclass/)

而 Bootstrap 也提供了幾個基本背景顏色和文字顏色的 class 讓我們使用
[背景顏色](https://getbootstrap.com/docs/5.0/utilities/background/#background-color)
[文字顏色](https://getbootstrap.com/docs/5.0/utilities/colors/)

你會在 JS 程式中看到當選項被點擊時或是按下提交按鈕，這些選項是如何變化顏色，
現在我們除了背景顏色變化外文字也要變成白色才行！

提示：
可以偷看一下 level_3 是怎麼做到的！