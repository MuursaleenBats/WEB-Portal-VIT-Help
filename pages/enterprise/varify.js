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
    var passwd = localStorage.getItem("vh-pass");
    var org = JSON.parse(localStorage.getItem("vh-orgOtp"));
    //console.log(event);
    
    const postData = {
      password: passwd
    }
    const varifyOtp = await axios.get("http://65.2.142.67:3001/otp/verify",{
      params: {
        phoneNumber: org[0].phoneNumber,
        otp: event.target[0].value
      }
    });
    if(varifyOtp.data.type == "success"){
    const postResponse = await axios.patch(`http://65.2.142.67:3001/data/enterprisephnNo/${org[0].phoneNumber}`,postData);
    alert("Password Updated");
    window.location.href="/enterprise/login";
    }
    else{
      alert("Invalid Otp");
    }
  }

  const resendOtp = async (event) =>{
    event.preventDefault();
    var org = JSON.parse(localStorage.getItem("vh-orgOtp"));
    const resendOTP = await axios.get("http://65.2.142.67:3001/otp/resend",{
      params: {
        phoneNumber: org[0].phoneNumber
      }
    });
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
                className="my-4" color="primary" onClick={resendOtp}
                type="submit">
                  Resend Otp
                </Button>
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
