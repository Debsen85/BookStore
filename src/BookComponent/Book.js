/* eslint-disable eqeqeq */
import React from 'react';
import './Book.css';
import Search from './Search';
import ConfigCard from './ConfigCard';
import CardList from './CardList';
class Book extends React.Component {
    state = { Card : [] }

    onBut1 = async(e) => {
        e.preventDefault();
        this.setState({Card : ConfigCard.Horror})
    }
    onBut2 = async(e) => {
        e.preventDefault();
        this.setState({Card : ConfigCard.Psychology})
    }
    onBut3 = async(e) => {
        e.preventDefault();
        this.setState({Card : ConfigCard.Fantasy})
    }
    onBut4 = async(e) => {
        e.preventDefault();
        this.setState({Card : ConfigCard.Fiction})
    }
    onSearchSubmit = async(entry) => {
        console.log(entry.toLowerCase());  
        console.log(ConfigCard.Horror);
        if (entry.toLowerCase()=="horror") 
        {
            this.setState({Card : ConfigCard.Horror})
        } 
        else if (entry.toLowerCase()=="psychology") 
        {
            this.setState({Card : ConfigCard.Psychology})
        } 
        else if (entry.toLowerCase()=="fiction") 
        {
            this.setState({Card : ConfigCard.Fiction})
        } 
        else if (entry.toLowerCase()=="fantasy") 
        {
            this.setState({Card : ConfigCard.Fantasy})
        }
        else if (entry.toLowerCase()=="all") 
        {
            const ListArray=[];
            Array.prototype.push.apply(ListArray, ConfigCard.Horror);
            Array.prototype.push.apply(ListArray, ConfigCard.Psychology);
            Array.prototype.push.apply(ListArray, ConfigCard.Fantasy);
            Array.prototype.push.apply(ListArray, ConfigCard.Fiction);
            console.log(ListArray)
            this.setState({Card : ListArray})
        } 
    }   
    render() {        
        return(
            <div className="BookDiv1">
                <div className="BookDiv2">
                    <h1 style={{color:"floralwhite"}}>Genres</h1>
                    <div className="sidenav">
                        <button className="Bookbut" onClick={this.onBut1}>Horror</button>
                    </div>
                    <div className="sidenav">
                        <button className="Bookbut" onClick={this.onBut3}>Fiction</button>
                    </div>
                    <div className="sidenav">
                        <button className="Bookbut" onClick={this.onBut2}>Psychology</button>
                    </div>
                    <div className="sidenav">
                        <button className="Bookbut" onClick={this.onBut4}>Fantasy</button>
                    </div>
                </div>
                <div className="BookDiv3">
                    <h1 style={{color:"black"}}>Book Search</h1>
                    <div className="ui container" style={{margin: "28px"}}><Search onSearchSubmit={this.onSearchSubmit}/>We have found {this.state.Card.length} books</div>
                    <CardList CardLists={this.state.Card}/>
                </div>
            </div>
        )
    }
} 
export default Book;