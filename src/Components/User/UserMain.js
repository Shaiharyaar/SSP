import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Row, Image, Col, Container } from "react-bootstrap";
import "react-pro-sidebar/dist/css/styles.css";
import axiosInstance from "../../Jwt";

function UserPage(props) {
  const data = JSON.parse(localStorage.getItem("UserInfo"));
  console.log(data.User.image);
  const history = useHistory();
  // if (data) {
  //   history.push("/login");
  // } else {
  //   history.push("/login");
  // }

  const logout = async () => {
    axiosInstance.logOut();
    history.push("/");
  };

  return (
    <div>
      <nav className="main-menu">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image className="image" src={data.User.image} roundedCircle />
            </Col>
          </Row>
        </Container>
        <ul>
          <li>
            <NavLink to="/userPage">
              <a>
                <i className="fa fa-home fa-2x"></i>
                <span className="nav-text">Dashboard</span>
              </a>
            </NavLink>
          </li>
          <li className="has-subnav">
            <NavLink to="/userProfile">
              <a>
                <i className="fa fa-laptop fa-2x"></i>
                <span className="nav-text">User Profile</span>
              </a>
            </NavLink>
          </li>
          <div className="dropdown">
            <li>
              <NavLink to="/userProfile">
                <a>
                  <i className="fa fa-bar-chart-o fa-2x"></i>
                  <span className="nav-text">Graphs {"&"} Statistics </span>
                </a>
              </NavLink>
            </li>
            <div className="dropdown-content">
              <li className="has-subnav">
                <NavLink to="/userProfile">
                  <a>
                    <i className="fa fa-twitter fa-2x" />
                    <span className="nav-text"> Twitter Charts</span>
                  </a>
                </NavLink>
              </li>
              <li className="has-subnav">
                <NavLink to="/userProfile">
                  <a>
                    <i className="fa fa-facebook fa-2x" />
                    <span className="nav-text">Facebook Charts</span>
                  </a>
                </NavLink>
              </li>
              <li className="has-subnav">
                <NavLink to="/userProfile">
                  <a>
                    <i className="fa fa-youtube fa-2x" />
                    <span className="nav-text"> youtube Charts</span>
                  </a>
                </NavLink>
              </li>
              <li className="has-subnav">
                <NavLink to="/userProfile">
                  <a>
                    <i className="fa fa-instagram fa-2x" />
                    <span className="nav-text"> Instagram Charts</span>
                  </a>
                </NavLink>
              </li>
            </div>
          </div>
        </ul>

        <ul className="logout">
          <li>
            <a href="#" onClick={logout}>
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="MainScreen">{props.children}</div>
    </div>
  );
}
export default UserPage;
