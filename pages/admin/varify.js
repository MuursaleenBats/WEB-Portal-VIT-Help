import React from "react";
import axios from "axios";
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

function varify() {
  const updateAdmin = async (event) => {
    event.preventDefault();
    var passwd = localStorage.getItem("vh-pass");
    var admin = JSON.parse(localStorage.getItem("vh-admin"));
    //console.log(event);
    console.log(passwd);
    console.log(admin);
    const postData = {
      pass: passwd
    }
    const postResponse = await axios.patch(`http://65.2.142.67:3001/data/adminphnNo/${admin[0].mobile_no}`,postData);
    console.log(postResponse.data);
    alert("Password Updated");
    window.location.href="/admin/login";
    //await loadOrgData();
  }
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

            <Form role="form" onSubmit={updateAdmin}>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Enter OTP"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>

              <div className="text-center">
                <Button
                //href="/admin/dashboard"
                className="my-4" color="primary" type="submit">
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

varify.layout = Auth;

export default varify;
