/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Values } from '../BookComponent/CardList';
class BillPrice extends React.Component {    
    render() { 
        var Key = 0;
        const c = Values.Price.map((C) => { 
            Key++;
            return(
                <div key={Key} style={{textAlign:"center", margin:"10% 0% 10% 0%"}}>{C}</div>
            ) 
        });
        return( <div>{c}</div> );
    }
}
export default BillPrice;