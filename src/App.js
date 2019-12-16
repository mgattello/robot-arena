import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    // Everytime you use your own methods components use this syntax
    // functionName = () => {}    
    onSearchChange = (event) => {
        // Allows changes on state
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className="tc">
                <h1>RobotArena</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterRobots}/>
            </div>
        )
    }
}


export default App;