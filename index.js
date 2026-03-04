let choice = "income"

const parentOfChoice = document.querySelector(".type-toggle");
const expenseChoice = document.getElementById("expense");
const incomeChoice = document.getElementById("income");
const form = document.querySelector(".transaction-form");

const description = document.getElementById("text");
const cashFlow = document.getElementById("number");
const cashDate = document.getElementById("date");

parentOfChoice.addEventListener("click", function(event){
    console.log(event.target);

    if(event.target.id === "expense") {
        expenseChoice.classList.add("choice");
        incomeChoice.classList.remove("choice");    
        choice = "expense"  
    }

    if(event.target.id === "income") {
        expenseChoice.classList.remove("choice");
        incomeChoice.classList.add("choice");     
        choice = "income"
    }
})

form.addEventListener("click", function(event) {
    event.preventDefault();
})
