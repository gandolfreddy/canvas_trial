let data = []; // 儲存代辦清單資料的陣列

// 新增元素至介面上
function addItem(item) {
    // 組合 HTML 字串，把資料 id 也寫在 div 裡面刪除或修改時會使用到它
    let html = `
        <div class="item ${item.checked ? 'done' : ''}" data-id="${item.id}">
            <div class="item-checkbox"></div>
            <span class="item-text">${item.text}</span>
            <button class="item-delete">–</button>
        </div>
    `
    $('#list').append(html);
}

// 當輸入框按下任意按鍵時執行此函式
function onKeypress(event) {

    if (event.keyCode == 13) {
        let text = $(this).val();
        $(this).val('');

        let item = {
            id: Math.floor(Math.random() * 1000000), // 給予一個隨機數當作 id，刪除或修改時會透過它來找對應的資料
            text: text,
            checked: false
        }

        addItem(item); // 將 item 物件資料新增至介面上
        data.push(item); // 將 item 物件資料新增至陣列中
    }

    saveData(); // 將資料儲存至瀏覽器中
}

// 刪除事項
function deleteItem() {
    // 要移除的是整個項目而不是刪除按鈕，透過 .parent 可以取得上一層的父元素
    let id = $(this).parent().data('id'); // 取得元件 data-id 屬性裡面的值
    $(this).parent().remove(); // 移除元素

    let newData = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].id != id) { // 迴圈資料逐一取出比對，id 一樣表示是要移除的資料，就不加入 newData 陣列中
            newData.push(data[i]);
        }
    }
    data = newData; // 替換 data 陣列
    saveData(); // 將資料儲存至瀏覽器中
}

// 設定是否完成
function toggleCheck() {
    let id = $(this).data('id'); // 取得元件 data-id 屬性裡面的值
    $(this).toggleClass('done');

    // 迴圈將資料從 data 陣列中逐一讀取，找到符合 id 的資料並修改其 checked 屬性
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data[i].checked = $(this).hasClass('done'); // 判斷此元素有沒有 done 的 class
        }
    }

    saveData(); // 將資料儲存至瀏覽器中
}

// 將資料存入瀏覽器中
function saveData() {
    let dataString = JSON.stringify(data);
    // 將 data 資料轉換成字串，可以印出 dataString 看看長什麼樣子

    localStorage.setItem('apple', dataString);
    // 將轉換後的字串資料存入瀏覽器的資料庫中，apple 可以任意命名，就像是幫這筆資料加上名稱，日後讀取資料時才能找到
}

// 從瀏覽器中載入資料
function loadData() {
    let dataString = localStorage.getItem('apple');
    // 從瀏覽器的資料庫中讀取出字串資料，apple 是當初我們存入資料時給予的名稱

    if (dataString) data = JSON.parse(dataString);
    // 將字串資料恢復成陣列和物件的複合式資料，如果 dataString 不存在就不理會它，因為使用者可能是第一次執行這個網頁
}

$('#list').on('click', '.item', toggleCheck);
$('#list').on('click', '.item-delete', deleteItem);
$('#submit').keypress(onKeypress);

loadData(); //網頁載入後預設執行 loadData 將資料從瀏覽器中讀出
data.forEach(addItem); //將資料更新至介面上