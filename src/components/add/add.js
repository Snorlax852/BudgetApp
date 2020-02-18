import React from "react";

class Add extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            description: "",
            cost: 0
        }
        this.add = this.add.bind(this)
    }
    
    add() {
        this.props.addTransaction(this.state.description, this.state.cost)
    }
    updateDescription(evt) {

        this.setState({
            description: evt.target.value
            }
        )
    }

    updateCost(evt) {
        this.setState( {
            cost: evt.target.value
        })
    }
    render() {
        return (
            <div>
                <form id="entry">
                    Description: 
                    <input 
                        type = "text" 
                        name="description" 
                        value={this.state.description} 
                        onChange={evt=> {this.updateDescription(evt)}}>
                    </input> &nbsp;
                    <br></br>
                    Cost: 
                    <input 
                        type = "number" 
                        name="cost" 
                        value={this.state.cost}
                        onChange={evt => {this.updateCost(evt)}}>
                    </input> &nbsp;
                </form>
                <button onClick={this.add}>
                    Add
                </button>

            </div>
        )
    }

}

export default Add;