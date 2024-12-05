import React, { Component } from 'react';


class Navbar extends Component {
    state = {  } 
    render() { 
        return (<ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
          </li>
        </ul>);
    }
}
 
export default Navbar;