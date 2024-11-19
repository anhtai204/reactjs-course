// class component
// function component

import React from "react";


class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        address: 'Ha Noi',
        age: 26
    };

    handleClick = (event) =>{
        // console.log(">>> click me button")
        console.log(event.target)
        // console.log("My name is: ", this.state.name);
        console.log('random ', Math.floor((Math.random()*100) + 1))

        this.setState({
            name: 'AnhTai',
            age: Math.floor((Math.random() * 100) + 1)
        });

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // });
    }

    handleOnMouseOver(event){
        console.log(event.pageX);


    }


    // JSX
    render() {
        return (
            <div>
                
                My name is: {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        );
    }
} 

export default MyComponent;