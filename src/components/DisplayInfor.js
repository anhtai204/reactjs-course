import React from "react";
import UserInfor from "./UserInfor";

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
            <div>
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