import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";

function ResetPassword() {
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
          <div className="text-center">
          <h1 className="text-black">Reset Password</h1>
          </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">

            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-mobile-button" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Phone Number"
                    type="tel"

                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>

              <div className="text-center">
                <Button
                href="/enterprise/varify"
                className="my-4" color="primary" type="button">
                  Change Password
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">

          </Col>
          <Col className="text-right" xs="6">

          </Col>
        </Row>
      </Col>
    </>
  );
}

ResetPassword.layout = Auth;

export default ResetPassword;
