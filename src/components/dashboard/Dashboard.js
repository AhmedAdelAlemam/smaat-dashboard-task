import React from 'react';

import SideNav from '../sidenav/SideNav';
import TopNav from '../topNav/TopNav';
import Cards from '../cards/Cards';
import Charts from '../charts/Charts';
import Tables from '../tables/Tables';
import Footer from '../footer/Footer';

class Dashboard extends React.Component {
    render(){
        return(
  <div className="wrapper">
    <SideNav />
    <div className="main-panel">
      <TopNav />
      <div className="content">
        <div className="container-fluid">
          <Cards />
          <Charts />
          <Tables />
        </div>
      </div>
      <Footer />
    </div>
  </div>
        )
    }
}

export default Dashboard;