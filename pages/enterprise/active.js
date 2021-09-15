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
import Enterprise from "layouts/Enterprise.js";
// core components
import Header from "components/Headers/EnterpriseHeader.js";


const Organizations = ({sam}) => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);

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
                <h3 className="mb-0">Active Cases</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Case</th>
                    <th scope="col">Date</th>
                    <th scope="col">Volunteer NAME</th>
                    <th scope="col">Type</th>
                    <th scope="col">Details</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {Data.activeCases.map(reqDataP => (
                  <tr key={reqDataP.caseId}>
                    <td >{reqDataP.caseId}</td>
                    <td >{reqDataP.caseDate}</td>
                    <td >{reqDataP.volunteerName}</td>
                    <td>{reqDataP.caseType}</td>
                    <td>

                    <Button outline
                    onClick={() => setModalDefaultOpen(true)}
                    color="danger" type="button">
                            Show Details
                          </Button>
                          <Modal
                    isOpen={modalDefaultOpen}
                    toggle={() => setModalDefaultOpen(false)}
                    >
                    <div className=" modal-header">
                      <h6 className=" modal-title" id="modal-title-default">
                      Case Name Here
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
                        \\---  Case Details  ---//
                      </p>
                      <p>
                      \\---  Case Details  ---//
                      </p>

                    </div>
                    <div className=" modal-footer">
                      <Button color="danger" type="button">
                        Document if any
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

Organizations.layout = Enterprise;

export default Organizations;
