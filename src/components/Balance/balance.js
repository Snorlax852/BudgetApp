import React from "react";

class Balance extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            color: {"color": props.total > 0 ? 'green' : 'red'},
        }
    }
    render() {
        return (
            <div>
                <p>Balance</p>
                <p style = {this.state.color}>${this.props.total}</p>
                
            </div>
        )
    }
  }


export default Balance