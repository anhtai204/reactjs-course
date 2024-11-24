import ModalCreateUser from "./ModalCreateUser"

const ManageUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <button>Add new user</button>
            </div>
            <div>
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser