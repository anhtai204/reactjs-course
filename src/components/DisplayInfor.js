import React from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {

    state = {
        isShowListener: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListener: !this.state.isShowListener
        });
    }
    
    render() {
        // const {age, name} = this.props;
        const {listUsers} = this.props;
        console.log(this.props)
        // console.table(this.props);
        // props => properties
        return (
            <div className="display-infor-container">
                <img src={logo} className="img" />
                <div>
                    <span onClick={() => {this.handleShowHide()}}>
                        {this.state.isShowListener ? 'Hide list users' : 'Show list users'}
                        </span>
                </div>
                { this.state.isShowListener && 
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age>18 ? 'green' : 'red'}>
                                    <div>My name's is {user.name}</div>
                                    <div>My name's is {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }

}

export default DisplayInfor;