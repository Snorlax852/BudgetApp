import React from 'react';

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this)
    }

    delete() {
        this.props.deleteTransaction();
    }


    render() {
        return (
            <div>
                <button onClick={this.delete}>
                    Delete
                </button>
            </div>
        )
    }
}

export default Delete;