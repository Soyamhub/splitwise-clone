function createQuizSystem() {
    const quizContainers = document.querySelectorAll('.quiz-container');

    quizContainers.forEach(container => {
        // Get the correct answer from the HTML data attribute
        const correctAnswer = container.dataset.correctAnswer;

        // Find buttons and feedback within THIS container only
        const buttons = container.querySelectorAll(".answer-btn");
        const feedback = container.querySelector(".feedback");

        // Add click listeners to each button in this quiz
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                // Clear previous styling
                feedback.className = 'feedback';

                // Check if this button has the correct answer
                if (this.textContent.trim() === correctAnswer) {
                    feedback.textContent = "🎉 Correct! Well done!";
                    feedback.classList.add('correct');
                } else {
                    // Wrong answer
                    feedback.textContent = `❌ Sorry! The correct answer is: ${correctAnswer}`;
                    feedback.classList.add('incorrect');
                }
            })
        })
    })
}

document.addEventListener('DOMContentLoaded', createQuizSystem);