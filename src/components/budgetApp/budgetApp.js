import React from "react";
import Balance from '../Balance/balance';
import TransactionList from '../transactions/transactionList';
import Add from '../add/add';
import Delete from '../delete/delete';
import Update from '../update/update';
import './budgetApp.css';

class BudgetApp extends React.Component {
    constructor (props) {
        super(props);
        this.dataset = [
            {description: "hummus", cost: 20, checked: false},
            {description: "poke", cost: 30, checked: false},
            {description: "boba", cost: 5, checked: false}
        ];

        this.state = {
            data: this.dataset, 
            total: 0,
        }
     
        this.addTransaction = this.addTransaction.bind(this);
        this.deleteTransaction = this.deleteTransaction.bind(this);
        this.updateTransaction = this.updateTransaction.bind(this);
        this.toggleChecked = this.toggleChecked.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    componentDidMount() {
        this.calculateTotal(this.dataset)
    }

    addTransaction(desc, cost) {
        let newData = this.state.data;
        newData.push({"description": desc, "cost": cost});
        
        this.setState(
            {data: newData}
        )
        this.calculateTotal(newData)

    }

    deleteTransaction() {
        let newData = this.state.data;

        newData.forEach((item, idx) => {
            if (item.checked === true) {
                delete newData[idx];
            }
        })
        

        this.setState(
            {data: newData}
        )
        this.calculateTotal(newData);
    }

    updateTransaction(idx, newDesc, newCost) {
        let newData = this.state.data;

        newData[idx].description = newDesc;
        newData[idx].cost = newCost;
        this.toggleChecked(idx);
        
        this.setState(
            {data: newData}
        )

        this.calculateTotal(newData)
        
    }

    toggleChecked(idx) {
        console.log(idx);
        let newData= this.state.data;
        newData[idx].checked = !newData[idx].checked;
           
        
        this.setState(
            {data: newData}
        )
        
    }
    isChecked(arr) {
        let hasChecked = false;
        arr.forEach(element => {
            if (element.checked === true) {
                hasChecked = true;
            }
        })
        return hasChecked;
    }

    calculateTotal(arr) {
        console.log("hello")
        let x = 0
        arr.forEach(element => {
            x += Number(element.cost);
        });
        
        this.setState(
            {total: x}
        )
    }
    render() {    
        return (
            
            <body>
                <div class = "flex-container">
                    <header class="header">Budget App</header>

                
                    <div class = "flex-item">
                        <Add addTransaction={this.addTransaction}></Add>  <br></br>  
                        
                    
                 
                        
                    </div>

                    <div class = "flex-item">
                        <TransactionList data={this.dataset} toggleChecked={this.toggleChecked} updateTransaction={this.updateTransaction}></TransactionList>
                        {this.isChecked(this.dataset) ? <Delete deleteTransaction={this.deleteTransaction}></Delete> : null}
                        <Balance total={this.state.total}></Balance>
                    </div>
                </div>
        </body>
        )
    }


    
}

export default BudgetApp;