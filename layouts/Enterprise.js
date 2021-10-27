import React from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import EnterpriseNavbar from "components/Navbars/EnterpriseNavbar.js";
import EnterpriseFooter from "components/Footers/EnterpriseFooter.js";
import Sidebar from "components/Sidebar/SidebarEnterprise.js";

import routes from "enterprise.js";

function Enterprise(props) {
  // used for checking current route
  const router = useRouter();
  let mainContentRef = React.createRef();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, []);
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "VITHELP";
  };
  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/enterprise/index",
          imgSrc: require("assets/img/brand/VITLogo.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <EnterpriseNavbar {...props} brandText={getBrandText()} />
        {props.children}
        <Container fluid>
        </Container>
      </div>

    </>
  );
}

export default Enterprise;
