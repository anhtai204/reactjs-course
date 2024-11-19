// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'Hoi DAn IT', age: '16'},
            {id: 2, name: 'Eric', age: '25'},
            {id: 3, name: 'Anh', age: '19'},

        ] 
    }

    // JSX
    render() {
        const myAge = 26;
        return (
            <div>
                <UserInfor/>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }
} 

export default MyComponent;