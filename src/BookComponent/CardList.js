/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
export var Values = {Total : 0, Books : [], Price: []};
class CardList extends React.Component {    
    render() {     
        const c = this.props.CardLists.map((C, index) => {  
            return (
                <div key={index} className="ui card" style={{border:"2px solid black", boxShadow:"none", borderRadius:"7px"}}>
                    <div className="image">
                        <img src={C.Img} style={{maxHeight:"350px", maxWidth:"250px"}}/>
                    </div>
                    <div className="content">
                        <a href="#" className="header">{C.Name}</a>
                        <div className="meta">
                            <span className="header">{C.Author}</span>
                        </div>
                        <div className="description">Rs.{C.Price}</div>
                    </div>
                    <div className="extra content">
                        <button className="ui primary button" onClick={(event) => {
                            if (Values.Books.includes(C.Name)===false) {
                                Values.Total+=C.Price; 
                                Values.Books.push(C.Name); 
                                Values.Price.push(C.Price);
                            }    
                            console.log(Values);                         
                        }}>Add</button><button className="ui secondary button" onClick={(event) => {
                            if (Values.Books.includes(C.Name)) {
                                Values.Total-=C.Price; 
                                Values.Books.pop(C.Name); 
                                Values.Price.pop(C.Price);
                            }
                            console.log(Values);                         
                        }}>Delete</button>
                    </div>
                </div>                    
            )  
        });
        return( <div style={{margin:"1%"}} className="ui four doubling stackable cards">{c}</div> );
    }
}
export default CardList;