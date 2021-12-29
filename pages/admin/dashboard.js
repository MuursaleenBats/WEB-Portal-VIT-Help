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
    const graphDDataGetResponse = await axios.get(`http://3.6.32.110:3001/data/totalCasesByMonth`,{
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
    const barDataGetResponse = await axios.get(`http://3.6.32.110:3001/data/solvedCasesByMonth`,{
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
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}       <div className="chart">
                {graphData &&
                    <Line
                      data={(canvas) => {
                        return {
                          labels: Object.keys(graphData),
                          datasets: [
                            {
                              label: "Total Cases",
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
                {barData &&
                    <Bar
                      data={(canvas) => {
                        return {
                          labels: Object.keys(barData),
                          datasets: [
                            {
                              label: "Total Cases",
                              data: Object.values(barData),
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
        </Row>

      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
