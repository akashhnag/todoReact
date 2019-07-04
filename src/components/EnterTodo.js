import React, { Component } from 'react';

class EnterTodo extends Component {
    state = {
        itemInput: ''
    };

    typing = e => {
        this.setState({
            itemInput: e.target.value
        });
    };

    submit = () => {
        this.props.addTodo(this.state.itemInput);
        this.setState({
            itemInput: ''
        });
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.typing} value={this.state.itemInput} /> <button onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default EnterTodo;
