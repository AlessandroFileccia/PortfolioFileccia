document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById('logo');
    image.style.animationName = 'rotate';
    image.style.animationDuration = '6s';
    image.style.animationTimingFunction = 'linear';
    image.style.animationIterationCount = 'infinite';
  });


  document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
});



  