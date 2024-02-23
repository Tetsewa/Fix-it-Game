import myQuestions from "../js/questions.js";

class Game {
    constructor() {
        
        //selecting all elements
        this.screenOne = document.querySelector('#screen-one');
        this.screenTwo = document.querySelector('#screen-two');
        this.screenThree = document.querySelector('#screen-three');
        this.startBtn = document.querySelector('.start-btn');
        this.problemDisplayed = document.querySelector('.problem-displayed');
        this.answersDisplayed = document.querySelector('.all-answers');
        this.scoreBoard = document.querySelector(".score");
        this.restartButton = document.querySelector(".restart-btn");
        this.status = document.querySelector('.final-status');
        this.happyCustomers = document.querySelector('.happy-customers');
        this.happyText = document.querySelector('.happy-text');

        //to store the array of happy faces
        this.happyFaceArray = [];

        //to store the clicked images
        this.clickedImages = [];

        //  keep track of questions
        this.currentQuestionIndex = 0;

        //keep track of score
        this.score = 0  ;     

        // Add event listener to the start button
        this.startBtn.addEventListener('click', () => this.startGame());

        // Add event listener to the restart button
        this.restartButton.addEventListener('click', () => this.restartGame());
    }
    // to start the game
    startGame() {
        //to toggle between first and second screens
        this.screenOne.style.display = "none";
        this.screenTwo.style.display = "block";
        // load each problem from the MyQuestions array in the problemDisplayed div
        this.loadQuestion();
    }
    //method to add questions from the myQuestions array to the DOM
    displayQuestion(question) {
        const html = `<h3 class='the-problem'> Customer ${this.currentQuestionIndex + 1}: ${question.problem} </h3>`;
        this.problemDisplayed.innerHTML = html;
    }

    //method to add answer images from the myQuestions array to the DOM
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
    //method to determine which images should be clicked as correct answers
    handleImageClick(imgElement) {
        console.log("I have been clicked");
        if (this.clickedImages.length < 2) {
            const clickedImage = imgElement.getAttribute('src').split("./spareparts/")[1];
            this.clickedImages.push(clickedImage);
        }
        //to make sure 2 images are clicked
        if (this.clickedImages.length === 2) {
            const answers = myQuestions[this.currentQuestionIndex - 1].correctAnswers;
            // to check for the images clicked if correct
            const isCorrect = this.clickedImages.every((clickedImage) => answers.includes(clickedImage));

            if (isCorrect) {
                //play correct sound
                document.getElementById("play-correct").play();

                //add 10 to the player's score
                this.score += 10;
                //display the current score
                this.scoreBoard.textContent = this.score;

                //displays a happy face if the answer is correct
                this.happyFaceArray.push(this.happyFace);
                

                this.loadNextQuestion();

            }else{
                //play wrong sound
                document.getElementById("play-wrong").play();

                this.loadNextQuestion();
            }

            // Reset the clicked Images array to empty for the next comparison
            this.clickedImages = [];
        }
    }
    //method to load question 
    loadQuestion() {
        const question = myQuestions[this.currentQuestionIndex];
        this.displayQuestion(question);
        this.displayAnswers(question.allAnswers);

        this.currentQuestionIndex++;
    }
     //method to load next questions in the myQuestions array
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
        //  Winning condition
        if(this.score >= 70){
            //play crowd cheer audio
            document.getElementById("crowd-cheer").play();

            //display status message 
            this.status.textContent = `YOU DID IT!!!🎉😊 CONGRATULATIONS`;
            this.happyText.textContent = `And these customers are happy because of you!!!`;
            
            //create the happy face and append one for each correct answer
            this.happyFaceArray.forEach((score) => {

                let happyDiv = document.createElement('img');
                happyDiv.src = `./images/happy-face.png`;
                happyDiv.classList.add('smiley');
                this.happyCustomers.appendChild(happyDiv);
                
            // CSS styling
            happyDiv.style.width = "80px";
            happyDiv.style.height = "80px";
            })

        }
        //losing condition
        else {
            //play wah-wah audio
            document.getElementById("wah-wah").play();
            
            //display status message 
            this.status.textContent = `YOU LOST!!!`;
            this.happyText.textContent = `Many customers are sad😞😞😞!!!`;
            this.happyCustomers.innerHTML=``;
        }  

        //hide screen two and display screen three
        this.screenTwo.style.display = "none"
        this.screenThree.style.display = "block";
        //display the final score
        document.querySelector('.final-score').textContent=this.score;
        
        
    }


// restarts game
    restartGame(){
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answersDisplayed.innerHTML = "";
        this.scoreBoard.textContent = this.score;
        this.happyFaceArray = [];
        this.happyCustomers.innerHTML=``;
        this.startGame();
    }
}

const game = new Game();  
