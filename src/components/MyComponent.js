// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {

    // JSX
    render() {
        const myAge = 26;
        return (
            <div>
                <UserInfor/>
                <br></br>
                <DisplayInfor name="Hoi Dan IT" age="30"/>
                <hr />
                <DisplayInfor name="Eric" age={myAge} marry={true}/>
            </div>
        );
    }
} 

export default MyComponent;