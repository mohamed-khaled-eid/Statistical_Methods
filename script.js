// استرجاع آخر فصل تم فتحه
document.addEventListener('DOMContentLoaded', () => {
    const lastChapter = localStorage.getItem('lastChapter');
    if(lastChapter){
        alert(`مرحباً! آخر فصل قمت بفتحه كان: ${lastChapter}`);
    }

    // إضافة حدث لكل روابط الفصول
    const chapterLinks = document.querySelectorAll('.chapter-card a:first-child');
    chapterLinks.forEach(link => {
        link.addEventListener('click', () => {
            const chapterName = link.parentElement.querySelector('h3').textContent;
            localStorage.setItem('lastChapter', chapterName);
        });
    });

    // إضافة حدث لكل روابط الكويز
    const quizLinks = document.querySelectorAll('.chapter-card a:last-child');
    quizLinks.forEach(link => {
        link.addEventListener('click', () => {
            const chapterName = link.parentElement.querySelector('h3').textContent;
            localStorage.setItem('lastQuiz', chapterName);
        });
    });
});
