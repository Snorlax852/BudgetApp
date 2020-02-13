import React from "react";
import TransactionListEntry from './transactionListEntry';


class TransactionList extends React.Component {
    
    constructor (props) {
        super (props);
        console.log(this.props.data);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(evt) {
        this.props.isChecked(evt.target.name)
        console.log(this.props.data);
        

    }

    render() {
        return (
            <div>
                {this.props.data.map((entry, idx) => 
                    <div key={idx}>
                        <input type="checkbox" name={idx} onChange={(evt) => this.handleInputChange(evt)}></input> 
                        <label>${entry.cost} {entry.description}</label>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default TransactionList