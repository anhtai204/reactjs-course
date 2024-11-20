import React from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss';
import logo from './../logo.svg';


// stateless vs stateful
// class DisplayInfor extends React.Component {

    
//     render() {
//         console.log('>>> call render')
//         // const {age, name} = this.props;
//         const {listUsers} = this.props;
//         // console.log(this.props)
//         // console.table(this.props);
//         // props => properties
//         return (
//             <div className="display-infor-container">
//                 { true && 
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age>18 ? 'green' : 'red'}>
//                                     <div>My name's is {user.name}</div>
//                                     <div>My name's is {user.age}</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }

// }

const DisplayInfor = (props) => {
    const {listUsers} = props;
    return (
        <div className="display-infor-container">
            { true && 
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age>18 ? 'green' : 'red'}>
                                <div>My name's is {user.name}</div>
                                <div>My name's is {user.age}</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;