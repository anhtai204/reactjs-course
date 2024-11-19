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
            // name: 'AnhTai',
            age: Math.floor((Math.random() * 100) + 1)
        });

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // });
    }

    handleOnMouseOver(event){
        console.log(event.pageX);


    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event, event.target.value);
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }


    // JSX
    render() {
        return (
            <div>
                
                My name is: {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <input type="text" onChange={(event) => {this.handleOnChangeInput(event)}} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
} 

export default MyComponent;