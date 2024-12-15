import "./App.css";
import { Container, Col, Row } from 'react-bootstrap';


export function About(): JSX.Element {
	return (
		<div>
 <header className="App-header">
	    <Container>
		<Row>
		    <Col>
					<div>
						<img src="/me.jpg" alt="Me" height="300px" width="225" />
					</div>
		    </Col>
		    <Col>
					<p style={{ fontSize:"medium" }}>
						Leo Chen is a current senior at the University of Delaware, majoring in Computer Science with a concentration in Artificial Intelligence and Robotics hailing from Brooklyn, New York. He is a teaching assistant within the department, and manages the community Discord server of four thousand members, including students current and past, as well as professors. For these roles, he received the Computer and Information Sciences Undergraduate Honorable Mention award at the College of Engineering Honors Day in May 2024. After graduation, he plans to pursue a career in artificial intelligence, but also holds an interest in teaching. His hobbies include reading, learning new programming concepts, video games, and most recently, tea.
					</p>
		    </Col>
		</Row>
	    </Container>
	</header>
		</div>
	);
}

