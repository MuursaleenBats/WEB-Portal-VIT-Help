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

function Register() {
  const handleSubmit = async (event) =>{
    event.preventDefault();
    console.log(event);
    const postData = {
      NameofOrg:  event.target[0].value,
      orgType: event.target[1].value,
      orgLicenseId: event.target[2].value,
      Email: event.target[3].value,
      phoneNumber: parseInt(event.target[4].value),
      password: event.target[5].value
    }
    if(event.target[0].value===""){
      alert("Please enter data in all fields")
    } else if(event.target[1].value ===""){
      alert("Please enter data in all fields")
    } else if(event.target[2].value==="")
    {
      alert("Please enter data in all fields")
    } else if(event.target[3].value ==="")
    {
      alert("Please enter data in all fields")
    } else if(event.target[4].value==="")
    {
      alert("Please enter data in all fields")
    }else if(event.target[5].value==""){
      alert("Please enter data in all fields")
    }else{
      const postResponse = await axios.post("http://localhost:3001/data/enterprise", postData);
      console.log(postResponse.data);
      window.href="/enterprise/login";
    }
  }
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-center">
              <small>Enterprise Sign Up</small>
            </div>

          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">

            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name Of Organization" type="text" />
                </InputGroup>
              </FormGroup>

     <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
 <Input size="sm" type="select">
        <option value="option one">Organization type</option>
        <option value="NGO" >NGO</option>
        <option value="HOSPITAL" >HOSPITAL</option>
        <option value="POLICE STATION" >POLICE STATION</option>
      </Input>
 </InputGroup>
              </FormGroup>

    <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-paper-diploma" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="License ID" type="text" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
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
                <InputGroup className="input-group-alternative mb-3">
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

              <Row className="my-4">
                <Col xs="12">
                  <div>


                      <span className="text-muted">
                        By Clicking Create Account You will be agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Terms and Conditions
                        </a>
                      </span>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Register.layout = Auth;

export default Register;
