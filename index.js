let choice = "income";

let expenseMoney = 0;
let totalMoney = 0;
let balanceMoney ;

const parentOfChoice = document.querySelector(".type-toggle");
const expenseChoice = document.getElementById("expense");
const incomeChoice = document.getElementById("income");
const incomeDisplay= document.getElementById("income-display");
const expenseDisplay = document.getElementById("expense-display");
const balAccount = document.getElementById("bal-account");
const transactionDisplay = document.getElementById("transaction-display");
const form = document.querySelector(".transaction-form");
const empty = document.getElementById("empty");
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

form.addEventListener("submit", function(event) {
    event.preventDefault();
    

    if (choice === "expense") {
        expenseMoney = expenseMoney + Number(cashFlow.value);
        balanceMoney = totalMoney - expenseMoney;
        expenseDisplay.innerHTML = `$${expenseMoney}`;
        balAccount.innerHTML = `$${balanceMoney}`;
        console.log(balanceMoney);
    }

    else if (choice === "income") {
        totalMoney = totalMoney + Number(cashFlow.value);
        balanceMoney = totalMoney - expenseMoney;
        incomeDisplay.innerHTML = `$${totalMoney}`;
        balAccount.innerHTML = `$${balanceMoney}`;
        console.log(balanceMoney);
        
    }

    if(empty && empty.parentNode) {
        empty.parentNode.removeChild(empty);
    }
    
    const eachTransaction = document.createElement("div");
    eachTransaction.classList.add("each-record");
    eachTransaction.innerHTML = `<p class="item">${description.value}</p>
                                    <p class="item">${cashDate.value}</p>
                                    <p class="item">${choice}</p>
                                    <p class="item">${cashFlow.value}</p>
                                    <p class="option"><i class="fa-solid fa-ellipsis"></i></p>`;

    transactionDisplay.appendChild(eachTransaction);

    form.reset();

});
