import myQuestions from "../js/questions.js";

class Game {
    constructor() {
        this.screenOne = document.querySelector('#screen-one');
        this.screenTwo = document.querySelector('#screen-two');
        this.screenThree = document.querySelector('#screen-three');
        this.startBtn = document.querySelector('.start-btn');
        this.problemDisplayed = document.querySelector('.problem-displayed')
        this.answersDisplayed = document.querySelector('.all-answers')
        this.scoreBoard = document.querySelector(".score")
        this.clickedImages = []
        this.restartButton = document.querySelector(".restart-btn")

        //  keep track of questions
        this.currentQuestionIndex = 0

        //keep track of score
        this.score = 0       

        // Add event listener to the start button
        this.startBtn.addEventListener('click', () => this.startGame());


        // Add event listener to the restart button
        this.restartButton.addEventListener('click', () => this.restartGame());
    }

    startGame() {
        this.screenOne.style.display = "none";
        this.screenTwo.style.display = "block";
        // load each problem from the MyQuestions array in the problemDisplayed div
        this.loadQuestion();
    }

    displayQuestion(question) {
        const html = `<h3 class='the-problem'> Customer ${this.currentQuestionIndex + 1}: ${question.problem} </h3>`;
        this.problemDisplayed.innerHTML = html;
        

    }

    displayAnswers(answers) {
        answers.forEach((answer) => {
            const imgElement = document.createElement('img');
            imgElement.src = `./spareparts/${answer}`;
            imgElement.classList.add('answer');
            imgElement.setAttribute('data-answer', answer);

            // CSS styling
            imgElement.style.width = "300px";
            imgElement.style.height = "300px";
            imgElement.style.borderRadius = "50px";
            imgElement.style.margin = "10px";
            imgElement.style.boxShadow = "17px 16px 5px -3px rgba(0,0,0,0.1)";
            imgElement.style.cursor = "pointer"

            this.answersDisplayed.appendChild(imgElement);

            // Add event listener to handle image click
            imgElement.addEventListener('click', () => this.handleImageClick(imgElement));
        });
    }

    handleImageClick(imgElement) {
        console.log("I have been clicked");
        if (this.clickedImages.length < 2) {
            const clickedImage = imgElement.getAttribute('src').split("./spareparts/")[1];
            this.clickedImages.push(clickedImage);
        }

        if (this.clickedImages.length === 2) {
            const answers = myQuestions[this.currentQuestionIndex - 1].correctAnswers;
            // to check for the images clicked if correct
            const isCorrect = this.clickedImages.every((clickedImage) => answers.includes(clickedImage));

            if (isCorrect) {
                this.score += 10
                this.scoreBoard.textContent = this.score

                this.loadNextQuestion()
            }else{
                this.loadNextQuestion()
            }

            // Reset the clicked Images array to empty for the next comparison
            this.clickedImages = [];
        }
    }

    loadQuestion() {
        const question = myQuestions[this.currentQuestionIndex];
        this.displayQuestion(question);
        this.displayAnswers(question.allAnswers);

        this.currentQuestionIndex++;
    }

    loadNextQuestion() {
        if (this.currentQuestionIndex < myQuestions.length) {
            const question = myQuestions[this.currentQuestionIndex];
            this.displayQuestion(question);

            // Clear existing content in the answers container
            this.answersDisplayed.innerHTML = "";
            this.displayAnswers(question.allAnswers);

            this.currentQuestionIndex++;
        } else {
            this.endGame();
        }
    }

    endGame() {
        this.screenTwo.style.display = "none"
        this.screenThree.style.display = "block";
        document.querySelector('.final-salary').textContent=this.score
        
    }


// restarts game-the score is not resetting to zero!
    restartGame(){
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answersDisplayed.innerHTML = "";
        this.scoreBoard.textContent = this.score
        this.startGame()
    }
}

const game = new Game()  
