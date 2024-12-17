import "./App.css";
import { Container, Col, Row, Accordion } from 'react-bootstrap';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';


export function About(): JSX.Element {
	return (
		<div>
		<header className="App-header">
	    <Container className="segment">
				<Row>
						<Col>
						<div>
								<img src="/me.jpg" alt="Me" height="300px" width="225" />
						</div>
						<a href="mailto:leochen@udel.edu"
								className="link_email">
								<FaEnvelope size={20} color="white"/>
								leochen@udel.edu
						</a>
						<br/>
						<a href="https://github.com/leo-cx" target="_blank"
								rel="noopener noreferrer"
								className="link_github">
								<FaGithub size={20} color="black" />
								/leo-cx
						</a>
						<br/>
						<a
								href="https://www.linkedin.com/in/leochenudel"
								target="_blank"
								rel="noopener noreferrer"
								className="link_linkedin"
							>
								<FaLinkedin size={20} color="#0077B5"/>
								/leochenudel
						</a>
						<p className="text">Newark, Delaware</p>
						<a
								href="/Resume.pdf"
								download
								className="link_general">
								Resume
						</a>
						</Col>
						<Col>
								<br/>
								<p className="entry_text">
						Leo Chen is a current senior at the University of Delaware, majoring in Computer Science with a concentration in Artificial Intelligence and Robotics. He is a teaching assistant within the department, and manages the community Discord server of 4,000 members, including students current and past, as well as professors. For these roles, he received the Computer and Information Sciences Undergraduate Honorable Mention Award at the College of Engineering Honors Day in May 2024. After graduation, he plans to pursue a career in software engineering, but also holds an interest in teaching. His hobbies include reading, learning new programming concepts, video games, and most recently, tea. He hails from Brooklyn, New York.
							</p>
						</Col>
				</Row>
	    </Container>
			<hr style={{ color: "#1E1E2E" }}/>
			<br/>
			<Container className="segment">
				<h1 className="title">
						Experience
				</h1>	
				<h5
						className="entries">
						Undergraduate Teaching Assistant
				</h5>
				<p className="years"> Aug 2023 - Present</p>
				<p className="entry_text">
						Hosted weekly labs and office hours to reinforce lecture topics for the following courses:
						<ul>
								<li> CISC181: Introduction to Computer Science II </li>
								<li> CISC210: Introduction to Systems Programming </li>
								<li> CISC275: Introduction to Software Engineering </li>
						</ul>
				</p>
				<h5 className="entries">
						Discord Bot Maintainer and Server Manager
				</h5>
				<p className="years"> Jun 2023 - Present</p>
				<p className="entry_text">
						Managed the UD Computer & Information Systems' Discord server of 4,000 members, including students, staff, and faculty, and serviced and maintained the server's bot, Sage.
				</p>
				<hr className="bar"/>

						<h1 className="title">
								Skills
						</h1>
						<h5 className="entries">
								Technologies
						</h5>
						<p className="entry_text">
								Python, Java, C, Bash, C++, Assembly, JavaScript/TypeScript, CUDA, Pthreads, OpenCV, Linux, Windows, OSX
						</p>
				</Container>
	</header>
		</div>
	);
}

