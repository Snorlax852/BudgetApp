import React from "react";

class TransactionListEntry extends React.Component {
    constructor (props) {
        super(props)
        this.state= {
            description: this.props.description,
            cost:this.props.cost
        }


        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.update= this.update.bind(this);
        
    

    }

    handleCheckChange(evt) {
        this.props.toggleChecked(evt.target.name)       

    }

    handleCostChange(evt) {
        this.setState({
            cost:evt.target.value
        })
    }

    handleDescChange(evt) {
        this.setState({
            description:evt.target.value
        })
    }

    update() {
        // debugger;
        this.props.updateTransaction(this.props.id, this.state.description, this.state.cost)
    }
    render() {
        return (
            <div>
                <input type="checkbox" name={this.props.id} checked={this.props.checked} onChange={(evt) => this.handleCheckChange(evt)}></input> 
                {this.props.checked ?
                    <div>
                        <input type="text" name="newCost" placeholder={this.props.cost} onChange={(evt) => this.handleCostChange(evt)}></input>
                        <input type="text" name="newDesc" placeholder={this.props.description}onChange={(evt) => this.handleDescChange(evt)}></input>
                        <button onClick={this.update}>
                            Update
                        </button>
                        
                    </div>
                :
                    <div>
                        <label>${this.props.cost} {this.props.description}</label>
                    </div>
                }
            </div>
        )
    }
}

export default TransactionListEntry