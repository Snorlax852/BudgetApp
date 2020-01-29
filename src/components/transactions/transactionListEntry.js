import React from "react";

class TransactionListEntry extends React.Component {
    constructor (props) {
        super(props)

    }
    render() {
        return (
            <div>
                <p>${this.props.cost} {this.props.description}</p>
            </div>
        )
    }
}

export default TransactionListEntry