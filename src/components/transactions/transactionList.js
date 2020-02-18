import React from "react";
import TransactionListEntry from './transactionListEntry';
import Update from '../update/update';


class TransactionList extends React.Component {
    
    constructor (props) {
        super (props);
        console.log(this.props.data);
        
    }

   

    render() {
        return (
            <div>
                {this.props.data.map((entry, idx) => 
                    <div key={idx}>
                        <TransactionListEntry cost={entry.cost} description={entry.description} checked={entry.checked} idx={idx} toggleChecked={this.props.toggleChecked} updateTransaction={this.props.updateTransaction}></TransactionListEntry>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default TransactionList