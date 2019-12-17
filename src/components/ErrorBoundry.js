import React, { Component }from 'react';

class ErrorBoundry extends Component { 
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hadError: true});
    }

    render (){
        if(this.state.error) {
            return <h1>Ooops. This is not good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;