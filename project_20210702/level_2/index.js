let myAnswer; //存放每一題使用者的作答

function clickOnOption() {
    $('.js-option').removeClass('bg-warning'); //恢復所有選項為白底
    $(this).addClass('bg-warning'); //將選取的選項變成橘黃色
    myAnswer = $(this).attr('id'); //取出被選取的選項 id 作為作答選項
    console.log(myAnswer); //打開主控台看看，每次點擊選項時會印出什麼
}

function submit() {
    $('.js-option').removeClass('bg-warning'); //恢復所有按鈕顏色為白底

    if (myAnswer === 'c') { // 判斷是不是選擇 c
        $('#c').addClass('bg-success'); //將正確選項變綠色
        $("#c").addClass("text-white");
        $('.js-success').show(); // 顯示「你答對了！」文字框
    } else {
        $('#c').addClass('bg-success'); //將正確選項變綠色
        $("#c").addClass("text-white");
        $('#' + myAnswer).addClass('bg-danger'); //將選錯選項變紅色
        $('#' + myAnswer).addClass("text-white");
        $('.js-fail').show(); // 顯示「你答錯了！」文字框
    }
}

$('.js-option').click(clickOnOption); // 4 個選項被點擊時，執行 clickOnOption 函式
$('.js-submit').click(submit); //提交按鈕被點擊時，執行 submit 函式

$('.js-success, .js-fail').hide(); //預設隱藏結果文字框