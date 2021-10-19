var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    layout: "/enterprise",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-black",
    layout: "/enterprise",
  },
  {
    path: "/volunteers",
    name: "No Of Volunteers",
    icon: "ni ni-single-02 text-yellow",
    layout: "/enterprise",
  },
  // {
  //   path: "/notification",
  //   name: "Notifications",
  //   icon: "ni ni-bell-55 text-gray",
  //   layout: "/enterprise",
  // },
  {
    path: "/active",
    name: "Active Cases",
    icon: "ni ni-user-run text-red",
    layout: "/enterprise",
  },
  {
    path: "/closed",
    name: "Closed Cases",
    icon: "ni ni-check-bold text-green",
    layout: "/enterprise",
  },
  {
    path: "/caseDetails",
    name: "Case Details",
    icon: "fas fa-signal",
    layout: "/enterprise",
  },
/*  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    layout: "/auth",
  },*/
];
export default routes;
