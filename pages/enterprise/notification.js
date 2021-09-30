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
    const caseDataGetResponse = await axios.get("http://localhost:3001/data/cases",{
      params: {
        onlyNotAccepted: true,
        EnterpriseId: org.Id
      }
    });
    setCaseData(caseDataGetResponse.data);
    //console.log(caseDataGetResponse.data);
  }
  React.useEffect(loadCaseData, []);

  const [volunteerData, setVolunteerData] = React.useState(undefined);
  const loadOrgData = async () => {
    var org = JSON.parse(localStorage.getItem("vh-org"));
    const volunteerDataGetResponse = await axios.get(`http://localhost:3001/data/orgvolunt/${org.Id}`);
    setVolunteerData(volunteerDataGetResponse.data);
    //console.log(volunteerDataGetResponse.data);
  }
  React.useEffect(loadOrgData, []);

  const updateCaseStat = async (event, idx) => {
    event.preventDefault();
    //console.log(event);
    const postData = {
      Status: "Accepted",
      serviceRole: "Volunteer",
      CaseId: caseData[idx].Id,
      UserId: volunteerData[idx].Id
    }
    console.log(postData.CaseId);
    const postResponse = axios.post(`http://localhost:3001/data/updateCaseStat`, postData);
    console.log(postResponse.data);
    await loadCaseData();
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
                <h3 className="mb-0">Notifications</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Case Id</th>
                    <th scope="col">Date</th>
                    <th scope="col">Volunteer NAME</th>
                    <th scope="col">Type</th>
                    <th scope="col">Details</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {caseData && caseData.map((thisCase, idx) => (
                    volunteerData && volunteerData.map((volunteer, idx) => (
                    <tr key={thisCase.Id && volunteer.Id}>
                      <td >{thisCase.Id}</td>
                      <td >{new Date(thisCase.TimeStamp).toDateString()}</td>
                      <td >{volunteer.Name}</td>
                      <td >{thisCase.helptype.HelpType}</td>
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
                    <td>
                    <Button outline color="success" 
                    onClick={(event) => updateCaseStat(event, idx)}
                    type="submit">
                          Accept Case
                    </Button>
                    </td>






                  </tr>
                ))))}
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
