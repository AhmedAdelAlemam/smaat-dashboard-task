import React from 'react';

class SideNav extends React.Component {
    render(){
        return(
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
              <a href="{#}" className="simple-text logo-normal">
                Creative Tim
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="nav-item active  ">
                  <a className="nav-link" href="{#}">
                  <i className="fas fa-th-large"></i>
                    <p>Dashboard</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="{#}">
                  <i className="fas fa-user-alt"></i>
                    <p>User Profile</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="{#}">
                    <i className="far fa-clipboard"></i>
                    <p>Table List</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="{#}">
                    <i className="fas fa-clone"></i>
                    <p>Typography</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="{#}">
                  <i className="fas fa-icons"></i>
                    <p>Icons</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="{#}">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Maps</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="{#}">
                    <i className="fas fa-bell"></i>
                    <p>Notifications</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}

export default SideNav;