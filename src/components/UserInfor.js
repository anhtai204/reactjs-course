import React from "react";

class UserInfor extends React.Component {

    state = {
        name: 'Eric',
        address: 'Ha Noi',
        age: 26
    };


    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event, event.target.value);
    }

    handleChangeAge = (event) =>{
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }



    render() {
        return (
            <div>
                My name is: {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <label>Your name: </label>
                    <input type="text"
                     value={this.state.name}
                     onChange={(event) => {this.handleOnChangeInput(event)}} />


                    <label>Your age: </label>
                    <input type="text"
                     value={this.state.age}
                     onChange={(event) => {this.handleChangeAge(event)}} />
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}

export default UserInfor;