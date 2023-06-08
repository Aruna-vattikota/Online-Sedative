import React from "react"
import { Container,Row,Col } from "reactstrap"
import Base from "./Base"
import TextTransition, { presets } from "react-text-transition";


function About(){

    const TEXTS = [
        "Forest",
        "Building",
        "Tree",
        "Color"
      ];

    

    return(
        <Base>
            <Container className="mt-10"> 
                <Row>
                    <Col>
                    <h1 className="text-center" style={{fontWeight:1000}}>Welcome to Online sedative  </h1>
                    <p>An online pharmacy, internet pharmacy, or mail-order pharmacy is a pharmacy that operates over the Internet and 
                        sends orders to customers through mail, shipping companies, or online pharmacy web portal. 
                         Online pharmacies include: Pharmacy benefits managers – Entities that administrate corporate prescription drug plans.
                         
                         
                         
                         </p>
                    </Col>
                </Row>
            </Container>
 </Base>
    )
   
   
}

export default About
