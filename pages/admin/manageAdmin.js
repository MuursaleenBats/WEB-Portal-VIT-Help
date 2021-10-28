import React from "react";
import Link from 'next/link'
import { Button } from "reactstrap";
import Data from "variables/variable.js";


// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Modal,
  UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";
import axios from "axios";

const Admins = ({sam}) => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
 const [modalFormOpen, setModalFormOpen] = React.useState(false);
 const [modalUpdateOpen, setModalUpdateOpen] = React.useState(-1);
 const [modalShowOpen, setModalShowOpen] = React.useState(-1);

 
 const [adminData, setAdminData] = React.useState(undefined);
 
 const loadAdminData = async () => {
   const adminDataGetResponse = await axios.get("http://65.2.142.67:3001/data/adminData");
   setAdminData(adminDataGetResponse.data);
  }
  
  React.useEffect(loadAdminData, []);
  
  const handleSubmit = async (event) =>{
   event.preventDefault();
   //console.log(event);
   const postData = {
     Name:  event.target[0].value,
     mobile_no: parseInt(event.target[1].value),
     Email: event.target[2].value,
     Address: event.target[3].value,
     pass: event.target[4].value,
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
   }else{
       const postResponse = await axios.post("http://65.2.142.67:3001/data/admin", postData);
       
       await loadAdminData();
     }
  }

const updateAdmin = async (event, idx) => {
  event.preventDefault();
  console.log(event);
  const postData = {
    ...(event.target[1].value) && {Name: event.target[1].value},
    ...(event.target[2].value) && {phoneNumber: event.target[2].value},
    ...(event.target[3].value) && {Email: event.target[3].value},
    ...(event.target[4].value) && {Address: event.target[4].value},    
  }
  const postResponse = await axios.patch(`http://65.2.142.67:3001/data/updateAdmin/${adminData[idx].Id}`, postData);
  console.log(postResponse.data);
  await loadAdminData();
}

const deleteAdminByIndex = async (event, index) => {
  event.preventDefault();
  const postResponse = await axios.delete(`http://65.2.142.67:3001/data/deleteAdmin/${adminData[index].Id}`);
  // console.log(postResponse.data);
  await loadAdminData();
}
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-3">Admins</h3>
          <Button
            color="warning"
            onClick={() => setModalFormOpen(true)}
            type="button"
          >
           Add Admin
          </Button>
          <Modal isOpen={modalFormOpen} toggle={() => setModalFormOpen(false)}>
            <div className=" modal-body p-0">
              <Card className=" bg-secondary shadow border-0">
                <CardHeader className=" bg-white pb-5">
                  <div className="text-center">
                    <small>Add Admin Details</small>
                  </div>

                </CardHeader>
                <CardBody className=" px-lg-5 py-lg-5">

                  <Form role="form" onSubmit={handleSubmit}>
                    <FormGroup className=" mb-3">
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text"></Input>
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-mobile-button"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Phone Number" type="tel"></Input>
                      </InputGroup>
                    </FormGroup>

                      <FormGroup>
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email ID" type="email"></Input>
                      </InputGroup>
                    </FormGroup>

                           <FormGroup className=" mb-3">
                             <InputGroup className=" input-group-alternative">
                               <InputGroupAddon addonType="prepend">
                                 <InputGroupText>
                                   <i className=" ni ni-square-pin"></i>
                                 </InputGroupText>
                               </InputGroupAddon>
                               <Input placeholder="Address" type="text"></Input>
                             </InputGroup>
                           </FormGroup>

          <FormGroup className=" mb-3">
                             <InputGroup className=" input-group-alternative">
                               <InputGroupAddon addonType="prepend">
                                 <InputGroupText>
                                   <i className=" ni ni-lock-circle-open"></i>
                                 </InputGroupText>
                               </InputGroupAddon>
                               <Input placeholder="Default Password" type="password"></Input>
                             </InputGroup>
                           </FormGroup>

                     <div className=" text-center">
                      <Button className=" my-4" color="warning" type="submit">
                        ADD
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Modal>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
         	      <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Address</th>
                    <th scope="col">Control</th>
                  </tr>
                </thead>
                <tbody>
                {adminData && adminData.map((admindata, idx) => (
                    <tr key={admindata.Id}>
                    <td >{admindata.Id}</td>
                    <td >{admindata.Name}</td>
                    <td >{admindata.mobile_no}</td>
                    <td >{admindata.Address}</td>
                    <td>



                    <Button outline
                    onClick={() => setModalShowOpen(idx)}
                    color="primary" type="button">
                            Show Details
                          </Button>
                          <Modal isOpen={modalShowOpen === idx} toggle={() => setModalShowOpen(-1)}>
                          <div className=" modal-body p-0">
                          <Card className=" bg-secondary shadow border-0">
                          <CardHeader className=" bg-white pb-5">
                          <div className="text-center">
                          <small>Admin Details</small>
                          </div>

                          </CardHeader>
                          <CardBody className=" px-lg-5 py-lg-5">

                          <Form role="form">
                                       <FormGroup className=" mb-3">
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder={admindata.Name} type="text"></Input>
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-mobile-button"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder={admindata.mobile_no} type="tel"></Input>
                      </InputGroup>
                    </FormGroup>

                      <FormGroup>
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder={admindata.Email} type="email"></Input>
                      </InputGroup>
                    </FormGroup>

                           <FormGroup className=" mb-3">
                             <InputGroup className=" input-group-alternative">
                               <InputGroupAddon addonType="prepend">
                                 <InputGroupText>
                                   <i className=" ni ni-square-pin"></i>
                                 </InputGroupText>
                               </InputGroupAddon>
                               <Input placeholder={admindata.Address} type="text"></Input>
                             </InputGroup>
                           </FormGroup>
                          <div className=" text-center">

                          </div>
                          </Form>
                          </CardBody>
                          </Card>
                          </div>
                          </Modal>
                    </td>
                    <td>

                    <Button outline
                    onClick={() => setModalUpdateOpen(idx)}
                    color="success" type="button">
                    Update Details
                    </Button>
                    <Modal isOpen={modalUpdateOpen === idx} toggle={() => setModalUpdateOpen(-1)}>
                    <div className=" modal-body p-0">
                    <Card className=" bg-secondary shadow border-0">
                    <CardHeader className=" bg-white pb-5">
                    <div className="text-center">
                    <small>Update Admin Details</small>
                    </div>

                    </CardHeader>
                    <CardBody className=" px-lg-5 py-lg-5">

                    <Form role="form" onSubmit={(event) => updateAdmin(event, idx)}>
<FormGroup className=" mb-3">
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder={admindata.Id} type="text"></Input>
                      </InputGroup>
                    </FormGroup>

                              <FormGroup className=" mb-3">
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder={admindata.Name} type="text"></Input>
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-mobile-button"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder={admindata.mobile_no} type="tel"></Input>
                      </InputGroup>
                    </FormGroup>

                      <FormGroup>
                      <InputGroup className=" input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder={admindata.Email} type="email"></Input>
                      </InputGroup>
                    </FormGroup>

                           <FormGroup className=" mb-3">
                             <InputGroup className=" input-group-alternative">
                               <InputGroupAddon addonType="prepend">
                                 <InputGroupText>
                                   <i className=" ni ni-square-pin"></i>
                                 </InputGroupText>
                               </InputGroupAddon>
                               <Input placeholder={admindata.Address} type="text"></Input>
                             </InputGroup>
                           </FormGroup>
                    <div className=" text-center">
                    <Button className=" my-4" color="warning"
                    type="submit">
                    Update
                    </Button>
                    </div>
                    </Form>
                    </CardBody>
                    </Card>
                    </div>
                    </Modal>
                    </td>




                    <td>
                    <Button outline color="danger" 
                    onClick={(event) => {deleteAdminByIndex(event, idx)}}
                    type="submit">
                          Remove
                          </Button>
                    </td>


                  </tr>
                ))}
                </tbody>
              </Table>

            </Card>
          </div>
        </Row>
        {/* Dark table */}

      </Container>
    </>
  );
}

Admins.layout = Admin;

export default Admins;
