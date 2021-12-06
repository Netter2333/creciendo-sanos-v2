import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import ContactUs from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import SignIn from './components/pages/SignIn';
import InfoGral from './components/pages/InfoGral';
import Calendar from './components/pages/Calendar';
import Profile from './components/pages/Profile';
import Percentil from './components/pages/Percentil';
import PercentilAltura from './components/pages/PercentilAltura';
import PercentilPeso from './components/pages/PercentilPeso';
import Forgetpassword from './components/pages/ForgetPassword';
import RegistroControlPediatrico from './components/pages/RegistroControlPediatrico';
import RegistrarVacunas from './components/pages/RegistrarVacunas';
import ChildProfile from './components/pages/ChildProfile';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/services' exact component={Services} />
					<Route path='/contact-us' exact component={ContactUs} />
					<Route path='/sign-in' exact component={SignIn} />
					<Route path='/sign-up' exact component={SignUp} />
					<Route path='/InfoGral' exact component={InfoGral} />
					<Route path='/Calendar' exact component={Calendar} />
					<Route path='/Profile' exact component={Profile} />
					<Route path='/Percentil' exact component={Percentil} />
					<Route path='/PercentilAltura' exact component={PercentilAltura} />
					<Route path='/PercentilPeso' exact component={PercentilPeso} />
					<Route
						path='/registro-control-pediatrico'
						exact
						component={RegistroControlPediatrico}
					/>
					<Route path='/registrar-vacunas' exact component={RegistrarVacunas} />
					<Route path='/child-profile' exact component={ChildProfile} />
					<Route path='/ForgetPassword' exact component={Forgetpassword} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
