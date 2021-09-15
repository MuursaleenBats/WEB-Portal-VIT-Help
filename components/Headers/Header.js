import React from "react";
import Data from "variables/variable.js";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
function Header() {
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
                          {Data.adminStatistic.noOfVolunteers}
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
                        <span className="h2 font-weight-bold mb-0">{Data.adminStatistic.noOfOrganization}</span>
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
