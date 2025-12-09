// 全局变量
let currentCategory = 'physiology'; // 默认科目
let currentCount = 0; // 计数器
let currentQuestion = null; // 当前抽取的对象

// 页面加载完成后初始化
window.onload = function() {
    updateStatus();
};

// 1. 切换科目
function switchCategory() {
    currentCategory = currentCategory === 'physiology' ? 'training' : 'physiology';
    const subjectName = getSubjectName();
    document.getElementById('card').innerHTML = `✅ <strong>切换成功</strong><br><br>当前科目：${subjectName}`;
    updateStatus();
}

// 2. 随机抽取题目或显示答案
function showRandomItem() {
    const arr = window.questionBank[currentCategory];
    if (!arr || arr.length === 0) {
        document.getElementById('card').innerText = '该科目题库为空！';
        return;
    }

    // 如果当前已经有题目显示，且还没显示答案，则显示答案
    const cardElement = document.getElementById('card');
    if (currentQuestion && !cardElement.innerText.includes('答案')) {
        cardElement.innerHTML = `<strong>💡 答案：</strong><br><br> ${currentQuestion.a}`;
        return;
    }

    // 否则，抽取新题目
    const randomIndex = Math.floor(Math.random() * arr.length);
    currentQuestion = arr[randomIndex];
    
    cardElement.innerHTML = `<strong>📋 题目：</strong><br><br> ${currentQuestion.q}`;
    currentCount++;
    updateStatus();
}

// 更新状态栏
function updateStatus() {
    document.getElementById('currentSubject').innerText = getSubjectName();
    document.getElementById('count').innerText = currentCount;
}

// 获取科目名称
function getSubjectName() {
    return currentCategory === 'physiology' ? '运动生理学' : '运动训练学';
}