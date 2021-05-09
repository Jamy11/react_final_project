import {Redirect} from 'react-router-dom';

export default function Logout({callbacks}) {
    const {setLogout, setLoggedAdmin, setLoggedUser, setCurrentUser} = callbacks;

    setLogout(true);
    setLoggedAdmin(false);
    setLoggedUser(false);
    setCurrentUser({});

    return (
        <Redirect to={`/`} />
    );
}