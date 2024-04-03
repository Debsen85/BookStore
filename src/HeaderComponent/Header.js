import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Name } from '../InitialComponent/Initial';

class Header extends React.Component{
    render() {
        return(
            <div>
                <nav className="navstyle">
                    <ul>
                        <li> <Link to="Home"><i className="fa fa-home"></i> Home </Link> </li>
                        <li> <Link to="About"><i className="fa fa-id-card-o"></i> About  </Link> </li>
                        <li> <Link to="Book"><i className="fa fa-book"></i> Books </Link> </li>
                        <li> <Link to="Cart"><i className="fa fa-shopping-cart"></i> Cart  </Link> </li>  
                        <li> <Link to=""><i className="fa fa-sign-out"></i> Logout  </Link> </li>       
                    </ul>
                </nav>
                <div className="headstyle">
                    <h1>Meet Book Press</h1>
                    <p>Book press is a website where we can buy books, that can further strengthen our knowledge</p>
                    <p><i className="fa fa-user"></i> &nbsp;&nbsp; {Name}</p>
                </div>
            </div>
        )
    }
} 
export default Header;