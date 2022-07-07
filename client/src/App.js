import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from 'components/Landing';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './App.css';
import './fonts.css';
import Login from 'components/Login';
import PatitentLogin from 'components/PatitentLogin';
import PatientOTP from 'components/PatientOTP';
import ProtectedRoute from 'components/ProtectedRoute';
import PatientRoute from 'components/PatientRoute';
import Clinic from 'components/Clinic';
import CreateSample from 'components/CreateSample';
import CreatePatient from 'components/CreatePatient';
import Testimonial from 'components/Testimonial';
import Samples from 'components/Samples';
import Reports from 'components/Reports';
import Aboutus from 'components/Aboutus';
import Lab from 'components/Lab';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/patientLogin" component={PatitentLogin} />
          <Route exact path="/otp" component={PatientOTP} />
          <ProtectedRoute exact path="/clinic" component={Clinic} />
          <ProtectedRoute exact path="/sample" component={CreateSample} />
          <ProtectedRoute exact path="/patient" component={CreatePatient} />
          <Route exact path="/testimonial" component={Testimonial} />
          <PatientRoute exact path="/samples" component={Samples} />
          <PatientRoute exact path="/reports" component={Reports} />
          <Route exact path="/aboutus" component={Aboutus} />
          <ProtectedRoute exact path="/lab" component={Lab} />
        </Switch>
      </Router>
    );
  }
}

export default App;
