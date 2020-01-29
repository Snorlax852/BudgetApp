import React from "react";

class Add extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    add() {
        console.log("click")
    }

    render() {
        return (
            <div>
                Description: <input type = "text" name="description"></input> &nbsp;
                Cost: <input type = "text" name="cost"></input> &nbsp;
                <button onClick={this.add}>
                    Add
                </button>

            </div>
        )
    }
}

export default Add;