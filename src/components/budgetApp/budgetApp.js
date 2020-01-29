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
    }
    render() {    
        return (

            <div>

                <Add></Add>    
                <TransactionList data={this.dataset} ></TransactionList>
        
                <Balance total={-40}></Balance>
            </div>
        )
    }


    
}

export default BudgetApp;