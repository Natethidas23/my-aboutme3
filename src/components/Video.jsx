import { Container,Row,Col } from "react-bootstrap";

export default function Video(){
    return(
        <section>
            <Container>
                <Row>
                    <Col>
                    <iframe src="https://player.vimeo.com/video/819769383?h=4ee51af0eb&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1000" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Life"></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}