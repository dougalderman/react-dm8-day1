import React, { Component } from 'react';

export default class App extends Component {
    
    constructor(props) {
        
        super(props);
        
    }
        
    
    render() {

        return (
            <div>
                <div>{this.props.header}:</div>
                    {
                        this.props.team.map( (player) => {
                            return <li>{player}</li>;
                        })

                    }
            </div>
        )
    }
}