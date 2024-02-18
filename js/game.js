import myQuestions from "../js/questions.js";



class Game{
    constructor() {
       this.screenOne = document.querySelector('#screen-one');
        this.screenTwo = document.querySelector('#screen-two');
        this.screenThree = document.querySelector('#screen-three');
        this.startBtn = document.querySelector('.start-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.problemDisplayed = document.querySelector('.problem-displayed')
        this.answersDisplayed = document.querySelector('.all-answers')



        //let's keep track of questions
        this.currentQuestionIndex = 0

        //Add event listener to the start button
        this.startBtn.addEventListener( 'click', () => this.startGame())
    }


    startGame(){
        this.screenOne.style.display= "none";
        this.screenTwo.style.display= "block";
        //load each problem from the MyQuestions array in the problemDisplayed div
        this.loadQuestion()
        this.loadNextQuestion()
    }

      loadQuestion(){
                //display the current Question
                const question = myQuestions[this.currentQuestionIndex]
                const html = `<h3> ${this.currentQuestionIndex + 1}. ${question.problem} </h3>`
                this.problemDisplayed.innerHTML = html;  

                const answerImage =  myQuestions[this.currentQuestionIndex].allAnswers
                 answerImage.forEach((answer) => {
                const imgElement = document.createElement('img');
                imgElement.src = `./spareparts/${answer}`
                imgElement.classList.add('answer');
                imgElement.setAttribute('data-answer', answer);
                
                //css
                imgElement.style.width = "300px"
                imgElement.style.height = "300px"
                imgElement.style.borderRadius = "50px"

                this.answersDisplayed.appendChild(imgElement);
            });

               this.currentQuestionIndex ++
         

    }


    loadNextQuestion(){
                //when we click on the next button, we want to display the next question
                this.nextBtn.addEventListener('click', () =>{
                if(this.currentQuestionIndex < myQuestions.length){
                //display the current Question
                const question = myQuestions[this.currentQuestionIndex]
                const html = `<h3> ${this.currentQuestionIndex + 1}. ${question.problem} </h3>`
                this.problemDisplayed.innerHTML = html;
              

                //clear any existing content in the answers container
                this.answersDisplayed.innerHTML = ""
                 const allAnswers = myQuestions[this.currentQuestionIndex].allAnswers;

                allAnswers.forEach((answer) => {
                const imgElement = document.createElement('img');
                imgElement.src = `./spareparts/${answer}`
                imgElement.classList.add('answer');
                imgElement.setAttribute('data-answer', answer);
                
                //css
                imgElement.style.width = "300px"
                imgElement.style.height = "300px"
                imgElement.style.borderRadius = "50px"

                this.answersDisplayed.appendChild(imgElement);
                


                // You can now use the clickedImageSrc to check against the correct answers, etc.
                //guidelines
                imgElement.addEventListener('click', (event) => {
                const clickedImageSrc = event.target.getAttribute('src');
                console.log('Clicked image source:', clickedImageSrc);

    });
            });

              this.currentQuestionIndex ++

            } else{
              this.endGame()
            }
                })

    }



    endGame(){
        alert('Game Ended')

        //end the game after all 10 questions answered

    //load the screenThree
    //this.screenThree.style.display = "block";

    //use .TextContent to write 'You Won' or 'You lost' by calling checkIfWon

    //Use innerHTML to display the salary in the 'final-salary' span

    //Use innerHTML to display the number of happy faces in the happy-customers div

    //EXTRA: add a cheers sound
    }

}


 



export default Game
