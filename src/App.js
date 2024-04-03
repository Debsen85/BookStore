import React, { Fragment } from 'react';
import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';
import Initial from './InitialComponent/Initial';
import Home from './HomeComponent/Home';
import About from './AboutComponent/About';
import Book from './BookComponent/Book';
import Cart from './CartComponent/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>            
            <Switch>
                <Route path="/" exact component={Initial}/>
                <Fragment>
                    <Header/>                     
                    <Route path="/Home" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Book" component={Book}/>
                    <Route path="/Cart" component={Cart}/>
                    <Footer/>
                </Fragment>       
            </Switch>      
        </BrowserRouter>
    );
}
export default App;