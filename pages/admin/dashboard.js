import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import axios from 'axios';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Dashboard = (props) => {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  
  const [graphData, setGraphData] = React.useState(undefined);
  const loadGraphData = async () => {
    var org = JSON.parse(localStorage.getItem("vh-org"));
    const graphDDataGetResponse = await axios.get(`http://localhost:3001/data/totalCasesByMonth`,{
      params:{
        onlyAccepted: true
      }
    });
    setGraphData(graphDDataGetResponse.data);
  }
  React.useEffect(loadGraphData, []);

  const [barData, setBarData] = React.useState(undefined);
  const loadBarData = async () => {
    var org = JSON.parse(localStorage.getItem("vh-org"));
    const barDataGetResponse = await axios.get(`http://localhost:3001/data/solvedCasesByMonth`,{
      params:{
        onlyAccepted: true
      }
    });
    setBarData(barDataGetResponse.data);
  }
  React.useEffect(loadBarData, []);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                <div className="col">
                                    <h6 className="text-uppercase text-light ls-1 mb-1">
                                      Overview
                                    </h6>
                                    <h2 className="text-black mb-0">Total Cases</h2>
                                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                {graphData &&
                    <Line
                      data={(canvas) => {
                        return {
                          labels: Object.keys(graphData),
                          datasets: [
                            {
                              label: "Solved Cases",
                              data: Object.values(graphData),
                            },
                          ],
                        };
                      }}
                      options={chartExample1.options}
                      getDatasetAtEvent={(e) => console.log(e)}
                    />
                  }

                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Analytics
                    </h6>
                    <h2 className="mb-0">Cases Solved</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                      data={(canvas) => {
                        return {
                          labels: Object.keys(barData),
                          datasets: [
                            {
                              label: "Solved Cases",
                              data: Object.values(barData),
                            },
                          ],
                        };
                      }}
                      options={chartExample1.options}
                      getDatasetAtEvent={(e) => console.log(e)}
                    />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
