import React, { Component } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Age: "",
      Salary: "",
      Hobby: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    return new Promise((res, req) => {
      e.preventDefault();
      console.log(this.state);

      axios
        .post(
          "https://sheet.best/api/sheets/25c5035d-5874-48ff-8f4d-2d2509ae64f9",
          this.state
        )
        .then((response) => {
          console.log(response);
        });
    });
  };

  render() {
    const { Name, Age, Salary, Hobby } = this.state;
    return (
      <div>
        <Header as="h2">React Google Sheets!</Header>

        <Container className="container">
          <Form className="form" onSubmit={this.submitHandler}>
            <Form.Field>
              <label>Name</label>
              <input
                placeholder="Enter your name"
                type="text"
                name="Name"
                value={Name}
                onChange={this.changeHandler}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Age</label>
              <input
                placeholder="Enter your age"
                type="number"
                name="Age"
                value={Age}
                onChange={this.changeHandler}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Salary</label>
              <input
                placeholder="Enter your salary"
                type="number"
                name="Salary"
                value={Salary}
                onChange={this.changeHandler}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Hobby</label>
              <input
                placeholder="Enter your hobby"
                type="text"
                name="Hobby"
                value={Hobby}
                onChange={this.changeHandler}
                required
              />
            </Form.Field>

            <Button color="blue" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
