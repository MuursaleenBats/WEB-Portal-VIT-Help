import React, { useEffect } from "react";

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

import {useRouter} from "next/router";

function Login() {

  const router = useRouter();
  useEffect(() => {
    if(window.localStorage.getItem("vh-org")) {
      router.push("/enterprise/dashboard");
    }
  });

  const handleSubmit = async (event) =>{
    event.preventDefault();
    console.log(event);
      const postData = {
        Email: event.target[0].value,
        password: event.target[1].value
    }

    if(event.target[0].value==""){
      alert("Please enter data in all fields")
    }else{
     const getResponse = await axios.get(`http://3.6.32.110:3001/data/enterprise/${postData.Email}`);
     console.log(getResponse)
     if(getResponse.data === null){
      alert("Enterprise does not exist or has been removed by the administrator");
     }
     else{
      if(getResponse.data.password != postData.password){
          alert("Invalid Credentials");
       }
      else{
        // alert("good");
        if(getResponse.data.Status === null){
          alert("Waiting for approval from administrator");
        }else{
        localStorage.setItem("vh-org", JSON.stringify(getResponse.data));

        // var org = JSON.parse(localStorage.getItem("vh-org"));
        // org.Name

        // localStorage.removeItem("vh-org");

        window.location.href="/enterprise/dashboard";
      }
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
          <h1 className="text-black">Enterprise</h1>
          </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">

            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83"/>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
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

              <a
                className="text-black"
                style={{float : 'right', paddingRight : '5px'}}
                href="/enterprise/register"
                //  onClick={(e) => e.preventDefault()}  // NEED TO ASSIGN APPROPRIATE FUNCTION
              >
                <small>Click To Register</small>
              </a>
              </div>

              <div className="text-center">
                <Button
                //href="/enterprise/dashboard"
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
