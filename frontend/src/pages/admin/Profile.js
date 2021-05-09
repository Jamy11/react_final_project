import {useContext} from "react";
import {UserContext} from "../../components/UserContext";

const AdminProfile = () => {
    const admin = useContext(UserContext);

    return (
        <div className="container mx-auto">
            <h1 className={`lg:text-6xl sm:text-4xl font-medium`}>
                {admin.name.charAt(0).toUpperCase() + admin.name.slice(1)}'s Profile
            </h1>
            <div className="flex flex-row flex-wrap">
                <div className="flex flex-col">
                    <p>Name: <span>{admin.name}</span></p>
                    <p>Email: <span>{admin.email}</span></p>
                    <p>Address: <span>{admin.address}</span></p>
                    <p>Account Type: <span>{admin.user_type}</span></p>
                    <p>Created At: <span>{admin.created_at}</span></p>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;