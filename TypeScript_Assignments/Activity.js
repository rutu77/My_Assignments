
//Activity 1
// let arr = [0, 1, 0, 3, 12];
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//     if (arr[i] == 0) {
//         let temp = arr[i];
//         arr[i] = arr[n - 1];
//         arr[n - 1] = temp;
//         n--;
//         i--; 
//     }
// }


// let arr =[0, 1, 0, 3, 12];
// let n=arr.length;
// let j =0;

// for (let i=0;i<n;i++) {
//     if (arr[i]!=0) {
//         arr[j++]=arr[i];
//     }
// }

// for (let i=j; i<n;i++) {
//     arr[i]=0;
// }
// console.log(arr); 


// Quiz Game
let Questions = [];
let Answers = [];

function QuizGame() {
    let score=0;
    let questionCount=0;

    return {
        AddQuestion:function(que, ans) {
            Questions.push(que);
            Answers.push(ans);
        },

        DisplayQuestions:function() {
            Questions.forEach((que, i) => {
                console.log(`Question ${i + 1}: ${que}`);
            });
        },
        KeepTrackofScores: function(userAns, qindex) {
            if (Answers[qindex] === userAns) {
                score++;
            }
            questionCount++;
        },
        EndGame: function() {
            if (questionCount === 1) {
                console.log(`Game Over! Your score: ${score}`);
            }
        }
    }
}

var g = QuizGame();
g.AddQuestion("What is a cat?","Animal");
g.DisplayQuestions();
g.KeepTrackofScores("Animal", 0);
g.EndGame();
