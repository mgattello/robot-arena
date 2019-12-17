import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }
    // Built in REACT: Lifecycle methods
    // Mounting Order
    // 1.constructor()
    // 2.componentWillMount()
    // 3.render()
    // 4.componentDidMount()
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => {return response.json();})
            .then( users => {this.setState({robots: users});})
    };

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
        if (this.state.robots.length === 0){
            return <h1 className="tc">loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1>RobotArena</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            )
        }

    }
}


export default App;