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

  const updateOrg = async (event) => {
    event.preventDefault();
    var pass = localStorage.getItem("vh-pass");
    var vol = JSON.parse(localStorage.getItem("vh-vol"));
    //console.log(event);
    console.log(pass);
    console.log(vol);
    const postData = {
      password: pass
    }
    const postResponse = await axios.patch(`http://localhost:3001/data/enterprisephnNo/${vol[0].phoneNumber}`,postData);
    console.log(postResponse.data);
    alert("Password Updated");
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

            <Form role="form" onSubmit={updateOrg}>
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
                //href="/enterprise/dashboard"
                className="my-4" color="primary" 
                type="submit">
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
