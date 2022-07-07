import { Redirect, Route } from "react-router-dom";

const PatientRoute = props => {

    const username = localStorage.getItem('username');

    if(!username || username === ""){
        return <Redirect to="/" />;
    }
    return <Route {...props}/>;
}

export default PatientRoute;