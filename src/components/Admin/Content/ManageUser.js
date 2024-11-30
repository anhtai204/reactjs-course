import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers } from '../../../services/apiServices'
import ModalUpdateUser from "./ModalUpdateUser"
import ModalViewUser from "./ModalViewUser"
import ModalDeleteUser from "./ModalDeleteUser"


const ManageUser = () => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);

    const [showModalViewUser, setShowModalViewUser] = useState(false);

    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});

    const [dataView, setDataView] = useState({});

    const [dataDelete, setDataDelete] = useState({});


    const [listUsers, setListUsers] = useState([]);

    // componentDidMount
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if(res.EC === 0){
            setListUsers(res.DT);
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
        // console.log('update user: ', user)
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
        console.log('view user: ', user)
    }


    const resetUpdateData = () => {
        setDataUpdate({});
    }

    
    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
        console.log('delete user: ', user)
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" 
                    onClick={() => setShowModalCreateUser(true)}> 
                    <FcPlus/>Add new user</button>
                </div>
                <div className="table-users-container">
                    <TableUser 
                    listUsers={listUsers}
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnView={handleClickBtnView}
                    handleClickBtnDelete={handleClickBtnDelete}/>

                </div>
                <ModalCreateUser show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers = {fetchListUsers}
                />
                <ModalUpdateUser 
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers = {fetchListUsers}
                    resetUpdateData = {resetUpdateData}
                />
                <ModalViewUser 
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                />

                <ModalDeleteUser 
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                />
            </div>
        </div>
    )
}

export default ManageUser