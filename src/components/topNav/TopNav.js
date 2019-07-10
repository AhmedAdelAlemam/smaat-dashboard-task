import React from 'react';

class TopNav extends React.Component {
    render(){
        return(
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a className="navbar-brand" href="{#}">Material Dashboard</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <form className="navbar-form">
              <div className="input-group no-border">
                <input type="text" className="form-control" placeholder="Search..."/>
                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                  <i className="fas fa-search"></i>
                  <div className="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="{#}" title="dashboard">
                  <i className="fas fa-th-large"></i>
                  <p className="d-lg-none d-md-block">Stats</p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="{#}" title="notifications">
                  <i className="fas fa-bell"></i>
                  <p className="d-lg-none d-md-block">Some notifications</p>                  
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="{#}" title="profile">
                  <i className="fas fa-user-alt"></i>
                  <p className="d-lg-none d-md-block">User profile</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        )
    }
}

export default TopNav;