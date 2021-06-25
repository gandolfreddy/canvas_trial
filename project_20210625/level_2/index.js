// 當輸入框按下任意按鍵時執行此函式
function onKeypress(event) {

    // event 參數下有一個 keyCode 數值代表觸發的按鍵，數值 13 表示 enter 按鍵
    if (event.keyCode == 13) {
        let text = $(this).val(); // 讀取輸入框的資料
        $(this).val(''); // 設定輸入框的資料，設定空字串表示清空它

        // 組合 HTML 字串
        let html = `
        <div class="item">
            <div class="item-checkbox"></div>
            <span class="item-text">${text}</span>
            <button class="item-delete">–</button>
        </div>
        `

        $('#list').append(html); // 將 html 字串寫入 id 為 list 的元素內
    }
}

// 刪除事項
function deleteItem() {
    // $(this).parent().remove(); // 移除元素
    $(this).parent().fadeOut(); // 移除元素
}

// 設定是否完成
function toggleCheck() {
    $(this).toggleClass('done');
}

$('#list').on('click', '.item', toggleCheck);
$('#list').on('click', '.item-delete', deleteItem);
// $('.item').on('click', toggleCheck); // 當 .item 元素被點擊時，執行 toggleCheck
// $('.item-delete').on('click', deleteItem); // 當 .item-delete 元素被點擊時，執行 deleteItem
$('#submit').keypress(onKeypress); //當 #submit 輸入框正在輸入時執行 onKeypress