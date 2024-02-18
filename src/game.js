// import { myQuestions } from "./questions";

export class Game {
    constructor(){
        this.screenOne = document.querySelector('#screen-one');
        this.screenTwo = document.querySelector('#screen-two');
        this.screenThree = document.querySelector('#screen-three');
        this.salary = 100;
        this.happyCustomers = [];
        this.gameIsOver = false;
        this.myQuestions=myQuestions;
        this.problemDisplayed = document.querySelector('.problem-displayed');

    }

    

//defining the method to start the game
    startGame(){
        //hide screen one
        this.screenOne.style.display = "none";

        //load screen two
        this.screenTwo.style.display = "block";

        //load each problem from the MyQuestions array in the problemDisplayed div
        //BELOW NOT WORKING!!

        //loadProblem(element);

        this.loadProblems();
        this.loadAllAnswers();

        //OR
        // this.myQuestions.forEach((element )=> {
        //     html= `<h3> ${this.myQuestions[i].problem}</h3>`
        // });
        // problemDisplayed.innerHTML = html
    
   

        //load allAnswers for that problem
        //loadAllAnswers

        
    }


         loadProblems(){
            let html = "";
            this.myQuestions.forEach((question, index) => {
                html += `<h3> ${index + 1}. ${question.problem} </h3>`
            });

            this.problemDisplayed.innerHTML = html;
        }
    
   


   
    checkCorrectAnswers(){
        //checks that index of the answers clicked by player are the same as the problem's index

        //define the click event in the script.js and call here


        
    }

    checkIfWon(){
        //if each checkCorrectAnswers is true,

        //add 10 to the salary
        this.salary+=10;

        //add a happy face to the array
        this.happyCustomers.push('happy-face.png')



        //else statement: if each checkCorrectAnswers is false
        this.salary-=10;

    }

  

    endGame(){}
    //end the game after all 10 questions answered

    //load the screenThree
    //this.screenThree.style.display = "block";

    //use .TextContent to write 'You Won' or 'You lost' by calling checkIfWon

    //Use innerHTML to display the salary in the 'final-salary' span

    //Use innerHTML to display the number of happy faces in the happy-customers div

    //EXTRA: add a cheers sound


    //method to restart the game after game ends
    restartGame(){
        //load screen one 
        this.screenOne.style.display = "block";
        //define salary back to 100
        this.salary = 100;
        //empty happy customers arrray
        this.happyCustomers = [];

    }

    




}



