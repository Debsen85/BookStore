import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import About from './AboutComponent/About';
import Book from './BookComponent/Book';
import Cart from './CartComponent/Cart';
import Footer from './FooterComponent/Footer';
import Header from './HeaderComponent/Header';
import Home from './HomeComponent/Home';
import Initial from './InitialComponent/Initial';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
test('renders learn app', () => {
    render(<App/>);
});

test('renders learn about', () => {
    render(<About/>);
});

test('renders learn book', () => {
    render(<Book/>);
});

test('renders learn cart', () => {
    render(<BrowserRouter><Cart/></BrowserRouter>);
});

test('renders learn footer', () => {
    render(<Footer/>);
});

test('renders learn header', () => {
    render(<BrowserRouter><Header/></BrowserRouter>);
});

test('renders learn home', () => {
    render(<Home/>);
});

test('renders learn initial', () => {
    render(<BrowserRouter><Initial/></BrowserRouter>);
});