import {Container, Row, Col} from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export default function Footer () {
    const currentYear = new Date ().getFullYear();
    const gitHubLink = "https://github.com/veronicadfl/quiz-app"
    return (
        <footer>
            <Container>
            <Row>
            <Col>
            <p><small>&copy;{currentYear}</small>
            <br />
            <Github/>
            <a  href= {gitHubLink} target="_blank" rel="noreferrer">Code in GitHub</a>
            </p>
            </Col>
            </Row>
            </Container>
        </footer>
    )
}