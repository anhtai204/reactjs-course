import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'

const ManageUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <button>Add new user</button>
            </div>
            <div>
                table users
            </div>

            <ModalCreateUser />
        </div>
    )
}

export default ManageUser