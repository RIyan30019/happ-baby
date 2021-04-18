import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BookingList from "./BookingList/BookingList";
import Review from "./Review/Review";

const routes = [
  {
    path: "/bookinglist",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <BookingList></BookingList>
  },
  {
    path: "/clientReview",
    sidebar: () => <div></div>,
    main: () => <Review></Review>
  }
 
];

 function User() {
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
              <Link className="text-decoration-none text-white" to="/bookinglist">Booking List</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white" to="/clientReview">Review</Link>
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
export default User;