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

import { IoIosContactOutline } from "react-icons/lib/io";

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
								<NavLink href="https://github.com/edmandev">
									{/* <NavLink href="https://github.com/reactstrap/reactstrap"> */}
									GitHub
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>
									<Link to="/modal">Modal</Link>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>
									<Link to="#">Link1</Link>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>
									<Link to="#">Link2</Link>
								</NavLink>
							</NavItem>
							<UncontrolledDropdown>
								<DropdownToggle className="btn btn-light" caret>
									<IoIosContactOutline className="IoIosContactOutline" />
								</DropdownToggle>
								<DropdownMenu right className="shadow">
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
