import React, { Component } from "react";
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Dropdown
} from "react-bootstrap";

import img2 from "./logo.svg";

import "./AppNav.css";

import { Link } from "react-router-dom";

export default class AppNav extends Component {
	render() {
		return (
			<div>
				<Navbar
					bg="light"
					expand="lg"
					style={{ marginBottom: 50 }}
					className="shadow"
				>
					<Navbar.Brand>
						<img src={img2} className="App-logo" height="30" alt="logo" />{" "}
						<Link to="/">EdMan MySql React</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Form inline>
								<Button variant="outline-success">Search{""}</Button>
								<FormControl
									type="text"
									placeholder="Search"
									className="mr-sm-2"
								/>
							</Form>

							<Nav.Link>Home</Nav.Link>
							<Link to="/modal">Modal</Link>

							<Nav.Link>Link</Nav.Link>
							<Nav.Link style={{ marginRight: -17 }}>
								<i class="fas fa-user-circle" />
							</Nav.Link>
							<NavDropdown
								// id="dropdown-basic-button"
								// class="fas fa-user-circle"
								// title="User"
								alignRight
							>
								<div className="shadow">
									<NavDropdown.Item>
										<Link to="/login">Login</Link>
									</NavDropdown.Item>

									<NavDropdown.Item>
										<Link to="/singin">SingIn</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to="/singup">SingUp</Link>
									</NavDropdown.Item>
								</div>
							</NavDropdown>

							<Nav.Link>Link</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
