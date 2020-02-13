import React from "react";
import Balance from '../Balance/balance';
import TransactionList from '../transactions/transactionList';
import Add from '../add/add';
import Delete from '../delete/delete';

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

    isChecked(idx) {
        console.log(idx);
        let newData= this.state.data;
        newData[idx].checked = true;
        
        this.setState(
            {data: newData}
        )
        
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

            <div>

                <Add addTransaction={this.addTransaction}></Add>    
                <Delete deleteTransaction={this.deleteTransaction}></Delete>
                <TransactionList data={this.dataset} isChecked={this.isChecked}></TransactionList>
                
                <Balance total={this.state.total}></Balance>
            </div>
        )
    }


    
}

export default BudgetApp;