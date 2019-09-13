import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import SingUp from "./components/SignUp";
import SingIn from "./components/SingIn";
import AppNav from "./components/Layout/AppNav";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class Routes extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<AppNav />
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/singup" component={SingUp} />
						<Route path="/singin" component={SingIn} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
