import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <footer className="footer">
        <div className="container-fluid">
          <nav className="float-left">
            <ul>
              <li>
                <a href="{#}">
                  Home
                </a>
              </li>
              <li>
                <a href="{#}">
                  Company
                </a>
              </li>
              <li>
                <a href="{#}">
                  Protfolio
                </a>
              </li>
              <li>
                <a href="{#}">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
        )
    }
}

export default Footer;