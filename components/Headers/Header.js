import React from "react";
import Data from "variables/variable.js";
import axios from "axios";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
function Header() {
  const [countData, setCountData] = React.useState(undefined);

  React.useEffect(async () => {
    const countDataGetResponse = await axios.get("http://localhost:3001/data/orgCount");
    setCountData(countDataGetResponse.data);
    //console.log(countDataGetResponse.data);
  }, []);

  const [voluntcountData, setvoluntCountData] = React.useState(undefined);

  React.useEffect(async () => {
    const voluntCountDataGetResponse = await axios.get("http://localhost:3001/data/voluntCount");
    setvoluntCountData(voluntCountDataGetResponse.data);
    //console.log(voluntCountDataGetResponse.data);
  }, []);

  // const [closedCaseCount, setclosedCaseCount] = React.useState(undefined);

  // React.useEffect(async () => {
  //   const closedCaseCountData = await axios.get("http://localhost:3001/data/voluntCount");
  //   setvoluntCountData(closedCaseCountData.data);
  //   console.log(closedCaseCountData.data);
  // }, []);

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
                          {voluntcountData}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
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
                        <span className="h2 font-weight-bold mb-0">{Data.adminStatistic.noOfCaseSolved}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
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
                        <span className="h2 font-weight-bold mb-0">{Data.adminStatistic.totalNoOfCases}</span>
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
                          No of Organizations
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{countData}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-users" />
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

export default Header;
