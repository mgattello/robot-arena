import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
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
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ? 
            <h1 className="tc">loading...</h1> :
            (
                <div className="tc">
                    <h1>RobotArena</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )

    }
}


export default App;