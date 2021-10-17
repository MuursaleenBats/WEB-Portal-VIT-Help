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
    if(window.localStorage.getItem("vh-admin")) {
      router.push("/admin/dashboard");
    }
  });

  const handleSubmit = async (event) =>{
    event.preventDefault();
      const postData = {
      phoneNumber: parseInt(event.target[0].value),
      password: event.target[1].value
    }
    //console.log(getResponse.data);
    if(event.target[0].value===""){
      alert("Please enter data in all fields")
    }else{
    const getResponse = await axios.get(`http://65.2.142.67:3001/data/admin/${postData.phoneNumber}`);
      if(getResponse.data[0] === undefined){
        alert("Admin Phone Number is not valid ");
      }
      else{
        if(getResponse.data[0].pass != postData.password){
            alert("Invalid Credentials");
         
        }
        else{
         localStorage.setItem("vh-admin", JSON.stringify(getResponse.data));
         window.location.href="/admin/dashboard";
        }
     }
   }
 }

 useEffect(() => {
  
 }, []);

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
                href="/admin/ResetPassword"
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
