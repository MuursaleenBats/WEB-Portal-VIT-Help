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

function Login() {
  const handleSubmit = async (event) =>{
    event.preventDefault();
      const postData = {
      phoneNumber: parseInt(event.target[0].value),
      password: event.target[1].value
    }
    const getResponse = await axios.get(`http://localhost:3001/data/admin/${postData.phoneNumber}`);
    console.log(getResponse.data);
    if(getResponse.data === null){
      alert("Please enter data")
    }else{
      if(getResponse.data[0] === undefined){
        alert("Admin Phone Number is not valid ");
      }
      else{
        if(getResponse.data[0].pass != postData.password){
            alert("Invalid Credentials");
         
        }
        else{
         window.location.href="/admin/dashboard";
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
          <h1 className="text-black">ADMIN</h1>
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
              <div >

              <a
                className="text-black"
                href="/enterprise/ResetPassword"
              //  onClick={(e) => e.preventDefault()}  // NEED TO ASSIGN APPROPRIATE FUNCTION
              >
                <small>Forgot password?</small>
              </a>
              </div>
              <div className="text-center">
                <Button
                //href="/admin/dashboard"
                className="my-4" color="primary" type="submit">
                  Sign in
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

Login.layout = Auth;

export default Login;
