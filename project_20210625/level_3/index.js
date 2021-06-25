// 使用 data 陣列存放清單的資料，每一筆資料是一個物件，該物件有兩個屬性分別是項目描述的字串以及是否完成的布林值
let data = [
    { text: '撿飛碟', checked: true },
    { text: '收集太空元素', checked: true },
    { text: '尋找太空貓', checked: false },
    { text: '幫媽媽倒垃圾', checked: false },
]

// 使用迴圈將資料從陣列中逐一取出，並透過 addItem 將資料新增至畫面上
// for (let i = 0; i < data.length; i++) {
//     addItem(data[i]);
// }
data.forEach(elem => {
    addItem(elem);
});

function addItem(item) {
    let html = `
		<div class="item ${item.checked ? 'done' : ''}">
			<div class="item-checkbox"></div>
			<span class="item-text">${item.text}</span>
			<button class="item-delete">–</button>
		</div>
	`
    $('#list').append(html);
}

function onKeypress(event) {
    if (event.keyCode == 13) {
        let text = $(this).val();
        $(this).val('');
        addItem({ text: text, checked: false });
    }
}

function deleteItem() {
    // $(this).parent().remove();
    $(this).parent().fadeOut();
}

function toggleCheck() {
    $(this).toggleClass('done');
}

$('#list').on('click', '.item', toggleCheck);
$('#list').on('click', '.item-delete', deleteItem);
$('#submit').keypress(onKeypress);