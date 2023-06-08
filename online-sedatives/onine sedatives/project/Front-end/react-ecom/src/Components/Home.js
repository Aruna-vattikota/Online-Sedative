

import { useNavigate } from "react-router-dom";
import {card,CardHeader,CardBody, Container,Row,Col, Button} from "reactstrap";
import Base from './Base'


/*we Use Home(Props)  then we have fech dynamically data from  props.title ,props.description,
props.buttonName under return  <h1>{props.title}</h1>> 

but here is problem we can't pass Default value so we use 
object Distrutre 

so inside Home(props) we Use Home({title="Learn code",description="cording",buttonName="like"}) and return
<h1>{title}</h1>

here we set default value
*/




const Home=({title="default titile",description="default Description ",buttonName="Defalut Button",myFun})=>{
    let styleOb={
        padding:'20px',
        background:'#e2e2e2',
        border:'1px solid red',
        margin:'10px'
      }
      const navigate=useNavigate()
      
    return(
        // Dynamic Value By props from App.js

        
/*<h1>{title}</h1>
        <h2>{description}</h2>
        <button onClick={myFun}>{buttonName}</button> */
        //    <div >     
        // <card>
        //     <CardBody>
        //     <h3>{title}</h3>
        //     <p>{description}</p>
        //     </CardBody>
        //    <CardHeader>
        //    <button onClick={myFun}>{buttonName}</button>
        //    </CardHeader>
            
        // </card>
        // </div> 
      

       <Base >
       <div className="banner" style={{ backgroundColor: 'blue'}}>
            <Container >
                <Row>
                    <Col>
                        <h1 className="text-center" style={{fontWeight:1000,textTransform:"uppercase"}} >Welcome To my Online Store</h1>
                        <p className="text-center">
                        An online pharmacy, internet pharmacy, or mail-order pharmacy is a pharmacy that operates over the Internet and 
                        sends orders to customers through mail, shipping companies, or online pharmacy web portal. 
                        Online pharmacies include: Pharmacy benefits managers – Entities that administrate corporate prescription drug plans.
                        </p>

                    <Container className="text-center" >
                        <Button style={{marginBlock:10}} onClick={()=>navigate("/store/all")} className="rounded-0" size="lg" color="success"   >Go to Store</Button>
                    </Container>
            
                    </Col>
                </Row>
            </Container>



        </div>
       </Base>
        
        


    );
}

export default Home