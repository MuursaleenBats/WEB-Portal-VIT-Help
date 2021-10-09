import React from "react";
import Link from 'next/link'
import { Button } from "reactstrap";
import Data from "variables/variable.js";
import { useEffect, useState } from 'react';
import Axios from 'axios';


Axios.defaults.withCredentials = true;


// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
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

const Requests = () => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(-1);
const [countryCode, setCountryCode] = useState("");

const [orgData, setOrgData] = React.useState(undefined);
const loadOrgData = async () => {
  const orgDataGetResponse = await axios.get("http://65.2.142.67:3001/data/orgData");
  setOrgData(orgDataGetResponse.data);
}

React.useEffect(loadOrgData, []);

const updateStatus = async (event, idx) => {
  event.preventDefault();
  //console.log(event);
  const postData = {
    Status: "True"
  }
  const postResponse = await axios.patch(`http://65.2.142.67:3001/data/updateOrgStatus/${orgData[idx].Id}`, postData);
  console.log(postResponse.data);
  await loadOrgData();
}

const deleteOrgByIndex = async (event, index) =>{
  event.preventDefault();
  const postResponse = await axios.delete(`http://65.2.142.67:3001/data/deleteOrg/${orgData[index].Id}`);
  // console.log(postResponse.data);
  await loadOrgData();
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
                <h3 className="mb-0">Requests</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name Of Organizations</th>
                    <th scope="col">Type</th>
                    <th scope="col">Control</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {orgData && orgData.map((orgdata, idx) => (
                    <tr key={orgdata.Id}>
                    <td >{orgdata.Id}</td>
                    <td >{orgdata.NameofOrg}</td>
                    <td >{orgdata.orgType}</td>
                    <td>

                    <Button outline
                    onClick={() => setModalDefaultOpen(idx)}
                    color="primary" type="button">
                            Show Details
                          </Button>
                          <Modal
                    isOpen={modalDefaultOpen === idx}
                    toggle={() => setModalDefaultOpen(-1)}
                    >
                    <div className=" modal-header">
                      <h6 className=" modal-title" id="modal-title-default">
                      {orgdata.NameofOrg}
                      </h6>
                      <button
                        aria-label="Close"
                        className=" close"
                        onClick={() => setModalDefaultOpen(false)}
                        type="button"
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>
                    <div className=" modal-body">
                      <p>
                        {/* \\---  Organizations Details  ---// */}
                      </p>
                      <p>
                      Id: {orgdata.Id}<br/>
                      Name: {orgdata.NameofOrg}<br/>
                      Email: {orgdata.Email}<br/>
                      Phone Number: {orgdata.phoneNumber}<br/>
                      Type: {orgdata.orgType}<br/>
                      </p>

                    </div>
                    <div className=" modal-footer">
                      <Button
                        className=" ml-auto"
                        color="link"
                        onClick={() => setModalDefaultOpen(false)}
                        type="button"
                      >
                        Close
                      </Button>
                    </div>
                    </Modal>
                    </td>



                    <td>
                    <Button outline color="success" type="submit" 
                    onClick={(event) => updateStatus(event, idx)}>
                          Accept
                    </Button>
                    </td>

                    <td>
                    <Button outline color="danger" type="submit"
                    onClick={(event) => {deleteOrgByIndex(event, idx)}}>
                            Reject
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

Requests.layout = Admin;

export default Requests;
