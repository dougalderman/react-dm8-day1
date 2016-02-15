import React, { Component } from 'react';

export default class App extends Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {};
        
        this.add = this.add.bind(this);
    }
        
        add() {
            var playerName = this.state.playerName;
            this.setState({playerName: ''});
            
            this.props.addPlayer(playerName);
        }
        
        render() {
            return (
                <div>
                    <input placeholder="Player name"
                        onChange={ (event) => this.setState({playerName: event.target.value})}
                    />
                    <button onClick={this.add}>Add</button>
               </div>
            )
        }            
    }