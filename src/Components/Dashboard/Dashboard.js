import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddAdmin from "./AddAdmin/AddAdmin";
import AddService from "./AddService/AddService";
import ManageService from "./ManageService/ManageService";
import OrderList from "./OrderList/OrderList";



const routes = [
  {
    path: "/addService",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <AddService></AddService>
  },
  {
    path: "/addAdmin",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <AddAdmin></AddAdmin>
  },
  {
    path: "/orderList",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <OrderList></OrderList>
  },
  {
    path: "/manageService",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <ManageService></ManageService>
  }
  
 
 
];

 function Dashboard() {
  return (
    <Router>
      <div style={{ display: "flex"}}>
        <div
          style={{
            padding: "5px",
            width: "10%",
            height:"100vh",
            backgroundImage:'linear-gradient(75deg, pink,rgb(204, 136, 148))',
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link className="text-decoration-none text-white" to="/addService">Add Service</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white" to="/addAdmin">Add Admin</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white" to="/orderList">Order List</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white" to="/manageService">Manage Service</Link>
            </li>
            
           
          </ul>

          <Switch>
            {routes.map((route, index) => (
            
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
             
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default Dashboard;