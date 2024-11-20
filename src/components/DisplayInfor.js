import React from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {

    constructor(props){
        console.log('>>> call constructor')
        super(props);
        this.state = {
            isShowListener: true
        }
    }
    

    componentDidMount(){
        console.log('>>> call component did mount');
        setTimeout(() => {
            document.title = 'Eric'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('>>> call component did update', this.prevProps, prevProps);
        if(this.props.listUsers !== prevProps.listUsers){
            if(this.props.listUsers.length === 5){
                alert('you got 5 users');
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListener: !this.state.isShowListener
        });
    }

    
    render() {
        console.log('>>> call render')
        // const {age, name} = this.props;
        const {listUsers} = this.props;
        // console.log(this.props)
        // console.table(this.props);
        // props => properties
        return (
            <div className="display-infor-container">
                {/* <img src={logo} className="img" /> */}
                <div>
                    <span onClick={() => {this.handleShowHide()}}>
                        {this.state.isShowListener ? 'Hide list users' : 'Show list users'}
                        </span>
                </div>
                { this.state.isShowListener && 
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age>18 ? 'green' : 'red'}>
                                    <div>My name's is {user.name}</div>
                                    <div>My name's is {user.age}</div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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

}

export default DisplayInfor;