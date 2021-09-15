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

const Requests = () => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
const [countryCode, setCountryCode] = useState("");



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
                {Data.adminPendingRequest.map(reqDataP => (
                  <tr key={reqDataP.requestId}>
                    <td >{reqDataP.requestId}</td>
                    <td >{reqDataP.nameOfOrganization}</td>
                    <td >{reqDataP.typeOfOrganization}</td>

                    <td>

                    <Button outline
                    onClick={() => setModalDefaultOpen(true)}
                    color="primary" type="button">
                            Show Details
                          </Button>
                          <Modal
                    isOpen={modalDefaultOpen}
                    toggle={() => setModalDefaultOpen(false)}
                    >
                    <div className=" modal-header">
                      <h6 className=" modal-title" id="modal-title-default">
                      Organizations Name Here
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
                        \\---  Organizations Details  ---//
                      </p>
                      <p>
                      \\---  Organizations Details  ---//
                      </p>

                    </div>
                    <div className=" modal-footer">
                      <Button color="primary" type="button">
                        Document
                      </Button>
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
                    <Button outline color="success" type="button">
                          Accept
                    </Button>
                    </td>

                    <td>
                    <Button outline color="danger" type="button">
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
