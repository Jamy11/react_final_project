import {useContext} from "react";
import {UserContext} from "../../components/UserContext";


const AdminDashboard = (props) => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1 className={`text-lg font-medium`}>Hola {user.name}!</h1>
        </div>
    );
};

export default AdminDashboard;