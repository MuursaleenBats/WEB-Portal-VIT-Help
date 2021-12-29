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
import axios from "axios";
function ResetPassword() {

  const handleSubmit = async (event) =>{
    event.preventDefault();
      const postData = {
        phoneNumber : event.target[0].value
    }
    //console.log(getResponse.data);
    if(event.target[0].value===""){ 
      alert("Please enter phone number");
    }
    else{
    const getResponse = await axios.get(`http://3.6.32.110:3001/data/enterprisePhone/${postData.phoneNumber}`);
    
    if(getResponse.data.length === 0){

      alert("Please enter valid phone number");

    }
    else{
     if(event.target[1].value !="" && event.target[2].value != ""){
      if(event.target[1].value===event.target[2].value){
        localStorage.setItem("vh-password", event.target[2].value);
        localStorage.setItem("vh-orgOtp", JSON.stringify(getResponse.data));
        const otpSend = await axios.get("http://3.6.32.110:3001/otp/send",{
          params: {
            phoneNumber: postData.phoneNumber,
          }
        });
        window.location.href="/enterprise/varify";
      }
      else{
        alert("Please make sure you have entered correct password second time");
      }
     }
     else{
       alert("Please enter password");
     }
    }
   }
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

            <Form role="form" onSubmit={handleSubmit}>
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
                //href="/enterprise/varify"
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

ResetPassword.layout = Auth;

export default ResetPassword;
