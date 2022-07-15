// =====================================
// ============== ACCORDION ============
// =====================================

const questionAnswer = window.document.querySelectorAll(".question--answer");
const answer = window.document.querySelector(".answer");

for(let i = 0; i < questionAnswer.length; i++) {
  questionAnswer[i].addEventListener('click', function() {
    this.classList.toggle("active");
  })
}