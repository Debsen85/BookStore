import React from 'react';
import './About.css';

const About = () =>{
    return(        
        <div style={{marginTop:"2%"}}>
            <h1 className="AboutHead1">Our Motif</h1>
            <hr className="AboutHr"/>
            <h3 className="AboutHead2">Provide the content you need</h3>
            <div className="AboutDiv1">                                
                <div className="AboutDiv21"></div>
                <div className="AboutDiv3">
                    <p>
                        We at Book Press provide all the necessary content that you need. It might be small or big, but priceless and as we all know what is the cost of ignorance. Afterall its our wisdom that guides us to glory not our ego.
                    </p>
                </div>
            </div>
            <h3 className="AboutHead2">Sharing our wisdom</h3>          
            <div className="AboutDiv1">                      
                <div className="AboutDiv22"></div>
                <div className="AboutDiv3">
                    <p>
                        We at Book Press are very happy to share the vast collection of books that we have for our readers. It gives opportunity for the rich or poor to gain knowledge as we don't charge for reading it online.
                    </p>
                </div>
            </div>
            <h3 className="AboutHead2">Variety of genres</h3>  
            <div className="AboutDiv1">                           
                <div className="AboutDiv23"></div>
                <div className="AboutDiv3">
                    <p>
                         We at Book Press are glad that we have wide range of books starting from psychology to horror to sci-fi, or whatever your mind needs to satisfy its thirst. We also a better reading experience for the user.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;