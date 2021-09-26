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


const Admins = ({sam}) => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
 const [modalFormOpen, setModalFormOpen] = React.useState(false);
 const [modalUpdateOpen, setModalUpdateOpen] = React.useState(false);
 const [modalShowOpen, setModalShowOpen] = React.useState(false);


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

                  <Form role="form">
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

                           <div className=" custom-file">
          <input
            className=" custom-file-input"
            id="customFileLang"
            lang="en"
            type="file"
          ></input>
          <label className=" custom-file-label" htmlFor="customFileLang">
            File If Any
          </label>
        </div>
                    <div className=" text-center">
                      <Button className=" my-4" color="warning" type="button">
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
                {Data.adminUserData.map(reqDataP => (
                  <tr key={reqDataP.adminId}>
                    <td >{reqDataP.adminId}</td>
                    <td >{reqDataP.adminName}</td>
                    <td >{reqDataP.adminEmail}</td>
                    <td >{reqDataP.adminMobile}</td>
                    <td >{reqDataP.adminAddress}</td>

                    <td>



                    <Button outline
                    onClick={() => setModalShowOpen(true)}
                    color="primary" type="button">
                            Show Details
                          </Button>
                          <Modal isOpen={modalShowOpen} toggle={() => setModalShowOpen(false)}>
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
                          <div className=" custom-file">
                          <input
                          className=" custom-file-input"
                          id="customFileLang"
                          lang="en"
                          type="file"
                          ></input>
                          <label className=" custom-file-label" htmlFor="customFileLang">
                          File If Any
                          </label>
                          </div>
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
                    onClick={() => setModalUpdateOpen(true)}
                    color="success" type="button">
                    Update Details
                    </Button>
                    <Modal isOpen={modalUpdateOpen} toggle={() => setModalUpdateOpen(false)}>
                    <div className=" modal-body p-0">
                    <Card className=" bg-secondary shadow border-0">
                    <CardHeader className=" bg-white pb-5">
                    <div className="text-center">
                    <small>Update Admin Details</small>
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
                        <Input placeholder="Admin ID" type="text"></Input>
                      </InputGroup>
                    </FormGroup>

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
                    <div className=" custom-file">
                    <input
                    className=" custom-file-input"
                    id="customFileLang"
                    lang="en"
                    type="file"
                    ></input>
                    <label className=" custom-file-label" htmlFor="customFileLang">
                    File If Any
                    </label>
                    </div>
                    <div className=" text-center">
                    <Button className=" my-4" color="warning" type="button">
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
                    <Button outline color="danger" type="button">
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
