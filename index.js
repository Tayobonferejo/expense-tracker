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
const summaryBal = document.getElementById("summary-bal");
const summaryTotal = document.getElementById("summary-total");
const summaryExpense = document.getElementById("summary-expense");

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
        expenseDisplay.innerHTML = `-$${expenseMoney}`;
        balAccount.innerHTML = `$${balanceMoney}`;
        summaryBal.innerText = `$${balanceMoney}`;
        summaryExpense.innerText = `$${expenseMoney}`;
    }

    else if (choice === "income") {
        totalMoney = totalMoney + Number(cashFlow.value);
        balanceMoney = totalMoney - expenseMoney;
        incomeDisplay.innerHTML = `$${totalMoney}`;
        balAccount.innerHTML = `$${balanceMoney}`;

        summaryBal.innerText = `$${balanceMoney}`;
        summaryTotal.innerText = `$${totalMoney}`;
        
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
                                    <div class="option">
                                        <i class="fa-solid fa-ellipsis menu-btn"></i>

                                        <div class="menu">
                                            <p class="delete">Delete</p>
                                        </div>
                                    </div>`;

    transactionDisplay.appendChild(eachTransaction);

    form.reset();

});


transactionDisplay.addEventListener("click", function (e) {

  // OPEN MENU
  if (e.target.classList.contains("menu-btn")) {
    const menu = e.target.nextElementSibling;
    menu.classList.toggle("show");
  }

  // DELETE RECORD
  if (e.target.classList.contains("delete")) {
    const record = e.target.closest(".each-record");

    // get all item fields
    const items = record.querySelectorAll(".item");

    // cashFlow is the 4th item
    const cashFlowValue = items[3].textContent;

    let choiceValue = items[2].textContent

    if(choiceValue === "income") {
        totalMoney = totalMoney - Number(cashFlowValue);
        balanceMoney = totalMoney - expenseMoney;
        incomeDisplay.innerHTML = `$${totalMoney}`;
        balAccount.innerHTML = `$${balanceMoney}`;

        summaryBal.innerText = `$${balanceMoney}`;
        summaryTotal.innerText = `$${totalMoney}`;
    }

    else if(choiceValue === "expense") {
        expenseMoney = expenseMoney - Number(cashFlowValue);
        balanceMoney = totalMoney - expenseMoney;
        expenseDisplay.innerHTML = `-$${expenseMoney}`;
        balAccount.innerHTML = `$${balanceMoney}`;

        summaryBal.innerText = `$${balanceMoney}`;
        summaryExpense.innerText = `$${expenseMoney}`;
    }

    record.remove();
  }

});