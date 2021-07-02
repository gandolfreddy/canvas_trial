let index = 0; //當前題目編號
let myAnswers = []; //存放每一題使用者的作答
let isReview = false; //是否進入檢討模式

function renderQuiz() {

    resetOptionColor(); //重置選項的顏色
    isReview = (myAnswers[index]) ? true : false;
    console.log(myAnswers);
    console.log(isReview);


    let q = data[index]; //根據 index 數值取出對應的題目

    $('#title').text(`第 ${index + 1} 題 - ${q.title}`); //更新題目標題
    $('#description').text(q.description); //更新題目描述
    $('#a').text('(A) ' + q.a); //更新 a 選項文字
    $('#b').text('(B) ' + q.b); //更新 b 選項文字
    $('#c').text('(C) ' + q.c); //更新 c 選項文字
    $('#d').text('(D) ' + q.d); //更新 d 選項文字

    let myOption = myAnswers[index];

    //如果進入檢討模式，就顯示正確與錯誤
    $('.js-success, .js-fail').hide();
    if (isReview) {
        $('.js-submit').hide();
        if (myOption == q.answer) { //如果選取的選項和正確答案一樣時
            $('#' + myOption).addClass('text-white bg-success'); //選取按鈕變綠色
            $('.js-success').show();
        } else { //否則
            $('#' + q.answer).addClass('text-white bg-success'); //正確按鈕變綠色
            $('#' + myOption).addClass('text-white bg-danger'); //錯誤按鈕變紅色
            $('.js-fail').show();
        }
    } else {
        $('.js-submit').show();
        $('#' + myOption).addClass('text-white bg-warning'); //選取的按鈕變橘黃色
    }
}

function clickOnOption() {
    if (!isReview) {
        resetOptionColor(); //重置選項的顏色
        $(this).addClass('bg-warning text-white'); //點擊的選項變成橘黃色
        let answer = $(this).attr('id'); //取出被選取的選項 id 作為作答選項
        myAnswers[index] = answer; //將作答選項紀錄至 myAnswers 陣列中
    }
}

function next() {
    if (index < data.length - 1) {
        if (!isReview)
            myAnswers[index] = null;
        index += 1; //題號加 1
        renderQuiz(); //根據 index 題號更新題目內容
    } else {
        alert('已經是最後一題！');
    }
}

function prev() {
    if (index > 0) {
        if (!isReview)
            myAnswers[index] = null;
        index -= 1; //題號減 1
        renderQuiz(); //根據 index 題號更新題目內容
    } else {
        alert('已經是第一題！');
    }
}

function submit() {
    isReview = true; //進入檢討模式
    renderQuiz(); //根據 index 題號更新題目內容
}

// 重置按鈕顏色
function resetOptionColor() {
    $('.js-option').removeClass('bg-warning bg-danger bg-success'); //背景移除橘色、紅色、綠色背景色
    $('.js-option').removeClass('text-white'); //字體顏色恢復成黑色
}

$('.js-option').click(clickOnOption); // 4 個選項被點擊時，執行 clickOnOption 函式
$('.js-prev').click(prev); //上一題按鈕被點擊時，執行 prev 函式
$('.js-next').click(next); //下一題按鈕被點擊時，執行 next 函式
$('.js-submit').click(submit); //提交按鈕被點擊時，執行 submit 函式


renderQuiz(); // 將第一題內容顯示出來
$('.js-success, .js-fail').hide(); //預設隱藏
