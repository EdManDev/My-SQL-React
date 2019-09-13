import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";

export default class Login extends Component {
	render() {
		return (
			<div>
				<Card
					style={{ marginRight: "10%", marginLeft: "10%", marginTop: 20 }}
					className="shadow"
				>
					<Card.Header>
						{" "}<h1>hi from login</h1>
					</Card.Header>
					<Form style={{ marginRight: "10%", marginLeft: "10%" }}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Button variant="primary" type="submit" style={{ margin: "10px" }}>
							Submit
						</Button>
					</Form>
				</Card>
			</div>
		);
	}
}
