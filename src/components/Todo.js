import React, { Component } from 'react';
class Todo extends Component {
    constructor(props) {
        super();
        console.log(props);
    }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.items.completed ? 'line-through' : 'none'
        };
    };

    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.items.map(item => (
                    <p key={item.id}>
                        <input type="checkbox" onChange={this.props.marked.bind(this, item.id)} /> {item.title}{' '}
                        <button style={btnStyle} onClick={this.props.del.bind(this, item.id)}>
                            X
                        </button>
                    </p>
                ))}
            </div>
        );
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer'
    //float: 'right'
};

export default Todo;
