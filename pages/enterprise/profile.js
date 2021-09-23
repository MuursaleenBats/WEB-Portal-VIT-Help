import React from "react";
import { Col, Form, FormGroup, Label, FormText } from 'reactstrap';
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
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Modal,
  UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Enterprise from "layouts/Enterprise.js";
// core components
import Header from "components/Headers/EnterpriseHeader.js";


const Profile = ({sam}) => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);

  return (
    <>
      <Header />
      {/* Page content */}

      <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label >Name</Label>
                <Input defaultValue={Data.enterpriseProfileData.organizationName} type="text" name="name" id="nameOfOrganization" placeholder="Name Of Organization" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label >Type</Label>
                <Input defaultValue={Data.enterpriseProfileData.addressOfOrganization} type="text" name="type" id="typeOfOrganization" placeholder="Type Of Organization" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input defaultValue={Data.enterpriseProfileData.typeOfOrganization} type="text" name="address" id="addressOfOrganization" placeholder="Address Of Organization"/>
          </FormGroup>

        </Form>
    </>
  );
}

Profile.layout = Enterprise;

export default Profile;
