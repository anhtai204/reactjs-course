// class component
// function component

import React from "react";


class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        address: 'Ha Noi',
        age: 26
    };

    handleClick(event){
        // console.log(">>> click me button")
        console.log(event.target)
    }

    handleOnMouseOver(event){
        console.log(event.pageX);
    }



    // JSX
    render() {
        return (
            <div>
                
                My name is: {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        );
    }
} 

export default MyComponent;