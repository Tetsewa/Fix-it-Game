
      loadQuestion(){
                //display the current Question
                const question = myQuestions[this.currentQuestionIndex]
                const html = `<h3> Customer ${this.currentQuestionIndex + 1}: ${question.problem} </h3>`
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
                imgElement.style.borderRadius = "50px";
                imgElement.style.margin = "10px";
                imgElement.style.boxShadow = "17px 16px 5px -3px rgba(0,0,0,0.1)"

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
                const html = `<h3> Customer ${this.currentQuestionIndex + 1}: ${question.problem} </h3>`
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
                imgElement.style.margin = "10px";
                imgElement.style.boxShadow = "17px 16px 5px -3px rgba(0,0,0,0.1)"

                this.answersDisplayed.appendChild(imgElement);
                

                //checkIfCorrect()
              // You can now use the clickedImageSrc to check against the correct answers, etc.
                //guidelines
            imgElement.addEventListener('click', (event) => {
              const clickedImageSrc = event.target.getAttribute('src');
              console.log('Clicked image source:', clickedImageSrc);
             

              //const correctAnswer = myQuestions[this.currentQuestionIndex].correctAnswers;
              //console.log(correctAnswer)
              //if(clickedImageSrc===)
                    
        });
                
            });

              this.currentQuestionIndex ++

            } else{
              this.endGame()
            }
                })

    }
