import React from "react";
//import Data from "variables/variable.js";
import axios from "axios";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
function EnterpriseHeader() {

  const [orgVoluntcountData, setorgVoluntCountData] = React.useState(undefined);

  React.useEffect(async () => {
    var org = JSON.parse(localStorage.getItem("vh-org"));
    const voluntCountDataGetResponse = await axios.get(`http://35.154.87.215:3001/data/orgVoluntCount/${org.Id}`);
    setorgVoluntCountData(voluntCountDataGetResponse.data);
    //console.log(voluntCountDataGetResponse.data);
  }, []);

  const [closedCaseCount, setvoluntCountData] = React.useState(undefined);

  React.useEffect(async () => {
    var org = JSON.parse(localStorage.getItem("vh-org"));
    const closedCaseCountData = await axios.get("http://35.154.87.215:3001/data/closedCasesCount",{
      params: {
        onlyAccepted: true,
        EnterpriseId: org.Id
      }
    });
    setvoluntCountData(closedCaseCountData.data);
    //console.log(closedCaseCountData.data);
  }, []);

   const [activeCaseCount, setactiveCountData] = React.useState(undefined);

   React.useEffect(async () => {
    var org = JSON.parse(localStorage.getItem("vh-org"));
    const activeCaseCountData = await axios.get("http://35.154.87.215:3001/data/activeCasesCount",{
      params: {
        onlyAccepted: true,
        EnterpriseId: org.Id
      }
    });
    setactiveCountData(activeCaseCountData.data);
    //console.log(activeCaseCountData.data);
  }, []);

  const [totalCaseCount, setTotalCountData] = React.useState(undefined);

  React.useEffect(async () => {
   var org = JSON.parse(localStorage.getItem("vh-org"));
   const totalCaseCountData = await axios.get("http://35.154.87.215:3001/data/orgTotalCasesCount",{
     params: {
       onlyAccepted: true,
       EnterpriseId: org.Id
     }
   });
   setTotalCountData(totalCaseCountData.data);
   //console.log(totalCaseCountData.data);
 }, []);

  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          No of Volunteers
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {orgVoluntcountData}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-user" />
                        </div>
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          No of Cases Solved
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{closedCaseCount}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                          <i className="fas fa-check" />
                        </div>
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total No of Cases
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{totalCaseCount}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-signal" />
                        </div>
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          No of Active Cases
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{activeCaseCount}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-red text-white rounded-circle shadow">
                          <i className="fas fa-running" />
                        </div>
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default EnterpriseHeader;
