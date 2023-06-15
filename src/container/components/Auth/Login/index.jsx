import { useState, useEffect } from "react";
import Router from "next/router";
import { loginUser } from "../../../../lib/auth";
import { removeToken } from "../../../../lib/token";
import React from "react";

import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { Box } from "@mui/material";

export function LoginForm() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Remove the User's token which saved before.
    removeToken();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      // API call:
      const data = await loginUser(username, password);
      // console.log("Data is :", data);
      // console.log("Payload is :" , data.payload);
      // console.log("Token is :" , data.payload.token);
      if (data.payload && data.payload.token) {
        if (rememberMe) {
          window.localStorage.setItem("token", data.payload.token);
        } else {
          window.sessionStorage.setItem("token", data.payload.token);
        }
        setTimeout(() => {
          Router.push("/admin/default/Home/Home");
        }, 1000);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/*<div>
        <Button auto color="warning" shadow onPress={handler}>
          Open modal
        </Button>
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={20}>
                  Iniciar Sesion
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
                  <Text
                    size={14}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  >
                    Remember me
                  </Text>
                </Checkbox>
                <Text size={14}>Olvidaste tu contraseña?</Text>
              </Row>
              {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
            </Modal.Body>
            <Modal.Footer>
              <Button /*tauto*//* flat color="error" onPress={closeHandler}>
                Cerrar
              </Button>
              <Button type="submit" auto disabled={isLoading} >
                Login
              </Button>
            </Modal.Footer>
          </Box>
        </Modal>
      </div> */}

      {<form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="h1">Login</legend>
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
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="RememberMeInput"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="RememberMeInput">
                Remember Me
              </label>
            </div>
          </div>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            Login
          </button>
        </fieldset>
          </form>}
    </>
  );
}
