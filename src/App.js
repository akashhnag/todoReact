import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Todo from './components/Todo';
import EnterTodo from './components/EnterTodo';
import About from './components/pages/About';

class App extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then((res) => {
            console.log(res.data);
            this.setState({
                items: res.data
            });
        })
    }

    marked(data) {
        console.log(data);
    }

    deleteItem = id => {
        console.log('delete clicked and id is', id);
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            this.setState({
                items: [...this.state.items.filter(item => item.id !== id)]
            });
        })

    };

    addTodo = data => {
        console.log(data);
        let newId = this.state.items.length + 1;
        let newItem = {
            id: newId,
            title: data
        };
        axios.post('https://jsonplaceholder.typicode.com/todos', newItem).then((res) => {
            this.setState({
                items: [...this.state.items, newItem]
            });
        })

    };

    render() {
        console.log(this.state);

        return (
            <BrowserRouter >
                <div>
                    <Route exact path='/' render={props => (
                        <div>
                            <EnterTodo addTodo={this.addTodo} />
                            <Todo items={this.state.items} marked={this.marked} del={this.deleteItem} />
                        </div>
                    )}>
                    </Route>
                    <Route path='/about' component={About}>

                    </Route>

                </div>
            </BrowserRouter>

        );
    }
}

export default App;
