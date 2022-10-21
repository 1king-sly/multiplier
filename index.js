const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const form = document.querySelector("form");

const scores = document.getElementById("score");

const inputEl = document.getElementById("input");

const Ans = num1 * num2;
console.log(Ans);

num1.innerText = randomNum();
num2.innerText = randomNum();

function randomNum(){
 return   Math.ceil(Math.random()*10);
 
}

let score = JSON.parse(localStorage.getItem("score"));


scores.innerText = score;

form.addEventListener("submit",()=>{
    const userans = inputEl.value;
    if( userans === Ans){
        score++;
        storage() 
          
     }
    else{
        score--;
        storage()
    }
})
function storage(){
    localStorage.setItem("score", JSON.stringify(score));
}

