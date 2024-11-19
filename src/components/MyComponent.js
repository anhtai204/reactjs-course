// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'Hoi DAn IT', age: '16'},
            {id: 2, name: 'Eric', age: '25'},
            {id: 3, name: 'Anh', age: '19'},

        ] 
    }

    handleAddNewUser = (userObject) => {
        // let listUsersNew = [...this.state.listUsers];
        // listUsersNew.unshift(userObject);
        // this.setState({
        //     listUsers: listUsersNew
        // })



        // console.log('>>> check data from parent: ', userObject);
        this.setState({
            listUsers: [userObject, ...this.state.listUsers]
        })
    }

    // JSX
    render() {
        const myAge = 26;
        return (
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br></br>
                    <DisplayInfor 
                        listUsers={this.state.listUsers}
                    />
                </div>

                <div className="b">

                </div>
            </>
        );
    }
} 

export default MyComponent;