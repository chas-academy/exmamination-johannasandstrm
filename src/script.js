
const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balance = document.getElementById("balance");

let income = [];
let expenses = [];

function createTransaction(type) {
    const transactionDesc = desc.value;
    const transactionAmount = Number(amount.value);

    const newTransactionObject = {
        description: transactionDesc,
        amount: transactionAmount,
        type: type
    };

        if(type === "income"){
        income.push(newTransactionObject);
    }

    else{
        expenses.push(newTransactionObject);
    }

    desc.value = "";
    amount.value = "";

    clearTransaction();
    updatedBalance();
}

function clearTransaction(){

    incomeList.innerHTML ="";
    expenseList.innerHTML ="";

    for(const transaction of income){
        const li = document.createElement("li");
        li.textContent = `${transaction.description} - ${transaction.amount} kr (Inkomst)`;
        incomeList.appendChild(li);
}

    for(const transaction of expenses){
        const li = document.createElement("li");
        li.textContent = `${transaction.description} - ${transaction.amount} kr (Utgift)`;
        expenseList.appendChild(li);
}
}

incomeBtn.addEventListener("click", () => {
    createTransaction("income");
});

expenseBtn.addEventListener("click", () => {
    createTransaction("expense");
});

function updatedBalance() {
    let totalBalance = 0;

    for(const total of income) {
        totalBalance += total.amount;
    }

    for(const total of expenses) {
        totalBalance -= total.amount;
    }

     balance.textContent = totalBalance;   
}


