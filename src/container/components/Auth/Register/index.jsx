import { useState } from "react";
import { registerUser } from "../../../../lib/auth";
import Router from "next/router";
import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";

export function RegisterForm() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await registerUser({
        username,
        password,
        email,
      });
      // console.log(data);

      if (data.isSuccessful) {
        Router.push("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <Button auto color="warning" shadow onPress={handler}>
          Open modal
        </Button>
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={handleSubmit}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Welcome to
              <Text b size={18}>
                NextUI
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Email"
              contentLeft={<Mail fill="currentColor" />}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Usuario"
              contentLeft={<Mail fill="currentColor" />}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Password"
              contentLeft={<Password fill="currentColor" />}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Row justify="space-between">
              <Checkbox>
                <Text size={14}>Remember me</Text>
              </Checkbox>
              <Text size={14}>Olvidaste tu contraseña?</Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button tauto flat color="error" /*onPress={closeHandler}*/>
              Close
            </Button>
            <Button type="submit" auto onPress={closeHandler}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

     {/* <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="h1">Register</legend>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="emailInput"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="usernameInput"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="passwordInput"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
  </form> */}
    </>
  );
}
