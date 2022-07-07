import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = props => {

    const token = localStorage.getItem('token');

    if(!token || token === ""){
        return <Redirect to="/" />;
    }
    return <Route {...props}/>;
}

export default ProtectedRoute;