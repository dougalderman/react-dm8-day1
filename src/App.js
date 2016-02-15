import React, { Component } from 'react';
import PlayerInput from './textInputAndAdd';
import TeamList from './list';

export default class App extends Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            currentTeam: 1,
            team1: [],
            team2: []
        };
        
        this.addPlayer = this.addPlayer.bind(this);
            
    }
    
    addPlayer(playerName) {
        // get value out of the input box
//        var playerName = this.state.playerName;
//        console.log('playerName = ' + playerName);
        // Add it to the currentTeam
        var teamName = "team" + this.state.currentTeam;
        console.log('currentTeam = ' + teamName)
        var newState = {playerName: ''};
        var team = this.state[teamName];
        team.push(playerName);
        newState[teamName] = team;
        
        this.setState(newState);
        
    }
    
    selectTeam(teamNumber) {
        this.setState({
            currentTeam: teamNumber
        });
        
    }
    
    
    render() {
        
        return (
            <div>
                 <div>
                        <button onClick={() => this.selectTeam(1)}>Team 1</button>
                        <button onClick={() => this.selectTeam(2)}>Team 2</button>
                  </div>
                  <PlayerInput addPlayer={this.addPlayer} />
                  <div>
                     <TeamList header="Team 1" team={this.state.team1} />
                     <TeamList header="Team 2" team={this.state.team2} />   
                </div>
            </div>
            
        );
  }
}
