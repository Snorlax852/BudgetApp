import React from "react";
import TransactionListEntry from './transactionListEntry';


class TransactionList extends React.Component {
  

   

    render() {
        return (
            <div>
                {this.props.data.map((entry) => 
                    
                    <div key={entry.id}>
                        
                        <TransactionListEntry 
                            cost={entry.cost} 
                            description={entry.description} 
                            checked={entry.checked} 
                            id={entry.id} 
                            toggleChecked={this.props.toggleChecked} 
                            updateTransaction={this.props.updateTransaction}>

                        </TransactionListEntry>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default TransactionList