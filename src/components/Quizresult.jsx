import { Container,Row,Col ,Button} from "react-bootstrap";

export default function Quizresult ({score,handleReset, quizLength}) {

    return (

        <section>
            <Container className= "quiz-result">
                <Row>
                    <Col>
                    <h2>Quiz Result</h2>
                    <p>You Scored{score}out of {quizLength}.</p>
                    <Button onClick ={handleReset}>Reset</Button>
                    </Col>
                </Row>
            </Container>
        </section>
)
}






