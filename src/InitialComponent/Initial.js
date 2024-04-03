import React from 'react';
import './Initial.css';
import { Link } from 'react-router-dom';

export var Name="";
class Initial extends React.Component {
    render() {
        return(
            <div>
                <div className="headstyle">
                    <h1>Meet Book Press</h1>
                    <p>Book press is a website where we can buy books, that can further strengthen our knowledge</p>
                </div>
                <div className="InitDiv1">
                    <div className="InitDiv2">
                        <h2 syle={{textAlign:"center", fonrWeight:"bolder"}}>Login Form</h2>
                        <form className="ui form"  onSubmit={this.onName}>
                            <div className="field">
                                <label>Full Name</label>
                                <input type="text" name="first-name" placeholder="Full Name" onChange={(event)=>{Name=event.target.value}} required/>
                            </div>
                            <div className="field">
                                <label>Username</label>
                                <input type="text" name="first-name" placeholder="Username" required/>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input type="password" name="last-name" placeholder="Password" required/>
                            </div>                    
                            <Link to="Home"><button className="ui button">Login</button></Link>
                        </form>
                    </div>                
                    <div className="InitDiv2">
                        <h2 syle={{textAlign:"center", fonrWeight:"bolder"}}>Signup Form</h2>
                        <form className="ui form" onSubmit={this.onName}>
                            <div className="field">
                                <label>Full Name</label>
                                <input type="text" name="first-name" placeholder="Full Name" onChange={(event)=>{Name=event.target.value}} required/>
                            </div>
                            <div className="field">
                                <label>Username</label>
                                <input type="text" name="first-name" placeholder="Username" required/>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input type="password" name="last-name" placeholder="Password" required/>
                            </div>
                            <Link to="Home"><button className="ui button">Signup</button></Link>
                        </form>
                    </div>
                </div>
                <div className="Foot">        
                    <p> This website serves a purpose for learning and gaining vivid knowledge about any particular subject </p>              
                </div>
            </div>
        )
    }
} 
export default Initial;