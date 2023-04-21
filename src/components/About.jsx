import { Container,Row,Col } from "react-bootstrap";
import Nate from "../images /Nate.jpg"
export default function About(){
    return(
        <Container>
        <Row>
        <Col>
        <main className="About">
         <img src={Nate} alt="Avatar" className="About-pic" />
        <h1 className="name">Nate Thidas</h1>
        <p>I was born December 4th in Broward County Florida south Floridian at heart 
            ,but will continue to venture my options I dont settle. I dont care for 
            fame but I do share birthdays with the great Jay Z and gorgeous Tyra banks.
            I dont care to be rich but I strive to live comfortable we are all human I am far from 
            perfect life is a constant battle yet I fight. I love music it gets me through alot I 
            listen to a little of everything. I've came a long way in my journey gained lost yet i've never gave up. </p>
        </main>
        </Col>
        </Row>
        </Container>
        
    )
    }