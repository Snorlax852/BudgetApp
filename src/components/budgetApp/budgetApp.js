import React from "react";
import Balance from '../Balance/balance';
import TransactionList from '../transactions/transactionList';
import Add from '../add/add'

class BudgetApp extends React.Component {
    constructor (props) {
        super(props);
        this.dataset = [
            {description: "hummus", cost: 20},
            {description: "poke", cost: 30},
            {description: "boba", cost: 5}
        ];

        this.state = {
            data: this.dataset, 
            total: 0,
        }
     
        this.addTransaction = this.addTransaction.bind(this)
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
                <TransactionList data={this.dataset} ></TransactionList>

                <Balance total={this.state.total}></Balance>
            </div>
        )
    }


    
}

export default BudgetApp;