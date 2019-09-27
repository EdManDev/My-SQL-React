import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
	Form
} from "reactstrap";

import { FormControl } from "react-bootstrap";

import img2 from "./logo.svg";

import "./AppNav.css";

export default class AppNav extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar
					color="light"
					light
					expand="md"
					style={{ marginBottom: 50 }}
					className="shadow"
				>
					<NavbarBrand>
						<img src={img2} className="App-logo" height="30" alt="logo" />
						<Link to="/">EdMan MySql React</Link>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<Form inline>
								<FormControl
									type="text"
									placeholder="Search"
									className="mr-sm-2"
								/>
								<Button variant="outline-success">Search{""}</Button>
							</Form>
							<NavItem>
								<NavLink href="/components/">Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">
									GitHub
								</NavLink>
							</NavItem>

							<Link to="/modal">Modal</Link>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									<i class="fas fa-user-circle" />
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										<Link to="/login">Login</Link>
									</DropdownItem>
									<DropdownItem divider />

									<DropdownItem>
										<Link to="/singin">SingIn</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/singup">SingUp</Link>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

// import React, { Component } from "react";
// import {
// 	Navbar,
// 	Nav,
// 	NavDropdown,
// 	Form,
// 	FormControl,
// 	Button,
// 	Dropdown
// } from "react-bootstrap";

// import img2 from "./logo.svg";

// import "./AppNav.css";

// import { Link } from "react-router-dom";

// export default class AppNav extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<Navbar
// 					bg="light"
// 					expand="lg"
// 					style={{ marginBottom: 50 }}
// 					className="shadow"
// 				>
// 					<Navbar.Brand>
// 						<img src={img2} className="App-logo" height="30" alt="logo" />{" "}
// 						<Link to="/">EdMan MySql React</Link>
// 					</Navbar.Brand>
// 					<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 					<Navbar.Collapse id="basic-navbar-nav">
// 						<Nav className="ml-auto">
// 							<Form inline>
// 								<Button variant="outline-success">Search{""}</Button>
// 								<FormControl
// 									type="text"
// 									placeholder="Search"
// 									className="mr-sm-2"
// 								/>
// 							</Form>

// 							<Nav.Link>Home</Nav.Link>
// 							<Link to="/modal">Modal</Link>

// 							<Nav.Link>Link</Nav.Link>
// 							<Nav.Link style={{ marginRight: -17 }}>
// 								<i class="fas fa-user-circle" />
// 							</Nav.Link>

// 							<NavDropdown
// 								// id="dropdown-basic-button"
// 								// class="fas fa-user-circle"
// 								// title="User"
// 								alignRight
// 							>
// 								<div className="shadow">
// 									<NavDropdown.Item>
// 										<Link to="/login">Login</Link>
// 									</NavDropdown.Item>

// 									<NavDropdown.Item>
// 										<Link to="/singin">SingIn</Link>
// 									</NavDropdown.Item>
// 									<NavDropdown.Item>
// 										<Link to="/singup">SingUp</Link>
// 									</NavDropdown.Item>
// 								</div>
// 							</NavDropdown>

// 							<Nav.Link>Link</Nav.Link>
// 						</Nav>
// 					</Navbar.Collapse>
// 				</Navbar>
// 			</div>
// 		);
// 	}
// }
