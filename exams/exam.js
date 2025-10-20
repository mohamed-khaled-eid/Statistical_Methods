const examQuestions = [
    {q:"Population represents:", options:["A sample","The entire population"], answer:1},
    {q:"A Dichotomous variable has:", options:["Two categories","Many categories"], answer:0},
    {q:"Mean is a measure of:", options:["Dispersion","Central tendency"], answer:1},
    {q:"Standard deviation measures:", options:["Central tendency","Dispersion"], answer:1},
];

const examSection = document.getElementById('exam-questions');

examQuestions.forEach((item, index) => {
    const qDiv = document.createElement('div');
    qDiv.classList.add('exam-question');
    qDiv.innerHTML = `<p>${index+1}. ${item.q}</p>`;
    item.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => {
            if(i === item.answer){
                alert('إجابة صحيحة!');
            } else {
                alert('إجابة خاطئة!');
            }
        };
        qDiv.appendChild(btn);
    });
    examSection.appendChild(qDiv);
});

function submitExam(){
    alert('تم تقديم الامتحان!');
}
