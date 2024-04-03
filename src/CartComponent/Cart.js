import React from 'react';
import { Values } from '../BookComponent/CardList';
import './Cart.css';
import BillBook from './BillBook';
import BillPrice from './BillPrice';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class Cart extends React.Component {    
    render() {
        return(
            <div className="CartDiv1">
                <h1>Invoice</h1>
                <hr/>
                <div className="CartDiv2">                
                    <div className="CartDiv3">
                        <h3>Books</h3>
                        <hr/>
                        <BillBook/>
                    </div>
                    <div className="CartDiv4">
                        <h3>Price</h3>
                        <hr/>
                        <BillPrice/>
                    </div>
                </div>
                <div className="CartDiv5">
                    <hr/>
                    <h3>Total : Rs.{Values.Total}</h3>
                    <Link to="Home" style={{color:"floralwhite"}}><button className="ui primary button">Check Out</button></Link>
                </div>                
            </div>
        );         
    }
}
export default Cart