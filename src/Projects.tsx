import "./App.css";
import { Container } from "react-bootstrap";

export function Projects(): JSX.Element {
	return (
		<div>
			<Container className="segment">
				<h1 className="title">Projects</h1>
					<hr/>
						<h5 className="entries">
								<a
								href="https://github.com/ud-cis-discord/Sage"
								className="link_general">
								Sage
								</a>
						</h5>
								<p className="entry_text">The bot utilized by the University of Delaware's Computer & Information Systems' Discord server. Maintained by myself and several colleagues, it services 4,000 members, including current students, alumni, professors, as well as teaching assistants, facilitating tasks performed by admins, professors, and teaching assistants alike. Relevant technologies:
								<ul>
										<li> TypeScript </li>
										<li> discord.js </li>
										<li> MongoDB </li>
										<li> Jenkins </li>
								</ul>
								</p>
				<h5 className="entries">
						<a 
						href="https://simon-b-s-group.github.io/ud-cis-scheduler/"
						className="link_general">
								UD CIS Scheduler
						</a>
				</h5>
						<p className="entry_text"> Collaborative project for CISC275: Introduction to Software Engineering. Made in a group of 4, we utilized Agile programming methodologies to keep on tracked, performing weekly standups. This project allows Computer & Information Systems majors to create a 4-year plan for their courses, and seeing whether it would satisfy the graduation requirements for the general major, as well as the concentrations within the major. Relevant technologies:
								<ul>
										<li> TypeScript </li>
										<li> React </li>
										<li> HTML </li>
										<li> CSS </li>
								</ul>
						</p>

				<h1 className="title">
					ENGL110: First Year Writing
				</h1>
				<hr/>
				<h5 className="entries">
					<a
					href="/ENGL110 Multimodal Reflection.docx"
					download
					className="link_general">
					Multimodal Reflection
					</a>
				</h5>
				<p className="entry_text">
				A writing project on online courses, and the consequences that can result from it, accompanied by an additional mode of expression besides writing. This was a rough semester, and so it was also a reflection on how having too much on my plate affected my engagement in not only ENGL110, but many things I was involved in that semester, accompanied by an additional mode of expression besides writing.
				</p>
				<h1 className="title">
					ENGL312: Written Communications in Business
				</h1>
				<hr/>
				<h5 className="entries">
					<a 
					href="/Corporate Mission Statement.docx"
					download
					className="link_general">
						Corporate Mission Statement
					</a>
				</h5>
				<p className="entry_text">
					An exercise in constructing a corporate mission statement for an organization I belong to/have an interest in, to which I chose the University of Delaware’s Discord server for the Department of Computer and Information Sciences. It is broken down into two parts: the actual corporate mission statement, as well as a breakdown of the word choices and decisions I made while writing it. This exercise is not only about creating a mission statement for those curious about an organization to better understand its values, but also an exercise in the interpretation of one, allowing me to better exemplify the ideals of any organizations I may work with.
				</p>
				<h5 className="entries">
					<a
						href="/Identifying Persuasive Rhetoric .docx"
						download
						className="link_general">
						Identifying Persuasive Rhetoric
					</a>
				</h5>
				<p className="entry_text">
					A rhetorical analysis of writer Jesmyn Ward’s Essay on Grief, where Ward writes about life after losing her husband, and eventually, purpose and solidarity that she experiences as she discovers that she is not the only one who has suffered loss and repression. In business communications, and communication in general, rhetorical appeals allow me to better structure my points, and present a writing that is easy to follow, and without fluff, as business communications should not be a guessing game.
				</p>
				<h5 className="entries">
					<a
					href="/Identifying the Rhetorical Situation of an Advertisement.docx"
					download
					className="link_general">
						Identifying the Rhetorical Situation of an Advertisement
					</a>
				</h5>
				<p className="entry_text">
					An exercise in analyzing the rhetorical situations behind advertisements. In this case, an analysis of the predatory "It's toasted" compaign ran by Lucky Strikes to sell their cigarettes, and what about these ads were so compelling to the consumers of that era. The analysis of rhetorical situations can be invaluable for one to better understand where the writer is coming from. What about their situation may be affecting their word choices? Who are they writing for?
				</p>
				<h5 className="entries">
					<a 
						href="/Short Report.docx"
						download
						className="link_general">
						Short Report
					</a>
				</h5>
					An exercise in writing a short report in memo format, about the skepticism people hold towards artificial intelligence, in the (fictional) viewpoint of someone working in the industry, and how it may be improved with social media outreach, taking notes from the Dell report, and how they spun themselves from a small tech company into a major one with, a social media division with such expertise that over 500 companies a year came to visit and learn from Dell's Social Media and Community team. 
			</Container>
		</div>
	);
}
