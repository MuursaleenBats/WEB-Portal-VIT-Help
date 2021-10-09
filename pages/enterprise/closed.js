import React from "react";
import Link from 'next/link'
import { Button } from "reactstrap";
import Data from "variables/variable.js";
import axios from "axios";

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

  const [caseData, setCaseData] = React.useState(undefined);
  const loadCaseData = async () => {
    var org = JSON.parse(localStorage.getItem("vh-org"));
    const caseDataGetResponse = await axios.get("http://65.2.142.67:3001/data/closedCases",{
      params: {
        onlyAccepted: true,
        EnterpriseId: org.Id
      }
    });
    setCaseData(caseDataGetResponse.data);
  }
  React.useEffect(loadCaseData, []);
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
                <h3 className="mb-0">Closed Cases</h3>
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
                {caseData && caseData.map((thisCase, idx) => (
                  <tr key={thisCase.Id}>
                    <td >{thisCase.Id}</td>
                    <td >{new Date(thisCase.TimeStamp).toDateString()}</td>
                    <td >{thisCase.statuses[0].user.Name}</td>
                    <td>{thisCase.helptype.HelpType}</td>
                    <td>

                    <Button outline
                    onClick={() => setModalDefaultOpen(true)}
                    color="success" type="button">
                            Show Details
                          </Button>
                          <Modal
                    isOpen={modalDefaultOpen}
                    toggle={() => setModalDefaultOpen(false)}
                    >
                    <div className=" modal-header">
                      <h3 className=" modal-title" id="modal-title-default">
                      Case Details
                      </h3>
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
                        {/* \\---  Case Details  ---// */}
                      </p>
                      <p>
                      <b>Name of Distressed:</b> {thisCase.Name}<br/>
                      <b>Phone Number:</b> {thisCase.PhoneNumber}<br/>
                      <b>Address:</b> {thisCase.Address}
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
