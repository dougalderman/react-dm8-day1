import React, { Component } from 'react';

export default class App extends Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            listName: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        console.log('event.target.value', event.target.value);
        this.setState({listName : event.target.value});
        
    }
    
    handleSubmit() {
        addPlayer(name);
        this.state.listName = '';
    }
        
          render() {
        
                return (
                    <div className="text-center">
                         <h3>Create New List</h3>
                         <input onChange={this.handleChange} />
                         <button onClick={() => this.handleSubmit} className="btn btn-primary"></button>
                       
                    </div>

                );
          }
  }