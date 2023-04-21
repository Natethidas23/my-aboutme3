import { Container,Row,Col} from "react-bootstrap";
import Vince from "../images /vince-lombardi-.jpg"
import bible from "../images /bible.jpg"
export default function PicQuote(){
    return(
        <Container>
            <Row>
            <Col>
            <main>
            <img src={Vince}/>
            <h1>Vince Lombardi</h1>
            <p>"The quality of a person's life is in direct proportion to their 
            commitment to excellence, regardless of their chosen field of endeavor."</p>
            <img src={bible} className="fit-image"/>
            <h2>Bible Verses</h2>
            <p>"Salvation does not come through experiencing or seeing physical healing. 
                Salvation comes through hearing and believing the gospel"- Rom. 10:17.</p>
            <p>"In all your ways acknowledge Him,. And He shall direct your paths."- Prov. 3:6</p>
            </main>
            </Col>
            </Row>
     </Container>
        
    )
 }