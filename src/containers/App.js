import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

// Tells to the connect function which state to use
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// Dispatch the actions - Flux Pattern
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobot: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // Built in REACT: Lifecycle methods
    // Mounting Order
    // 1.constructor()
    // 2.componentWillMount()
    // 3.render()
    // 4.componentDidMount()
    componentDidMount(){
        this.props.onRequestRobot();
    };
    
    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ? 
            <h1 className="tc">loading...</h1> :
            (
                <div className="tc">
                    <h1>RobotArena</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )

    }
}

// Connect is an High order function: returns another function
export default connect(mapStateToProps, mapDispatchToProps)(App);