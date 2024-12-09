import { useState } from 'react';
import './App.css';
import { Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap';

function App() {
	const [page, setPage] = useState<string>("About")

  return (
    <div className="App">
			<Navbar data-bs-theme="dark">
      	<Container>
	    <Navbar.Brand className="text">Leo Chen</Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	    <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="nav-button">
	    <Nav.Link className="nav-button" onClick={ () => { setPage("About") } }>About Me</Nav.Link>
	    <Nav.Link className="nav-button" nav-button={ () => { setPage("Resume") } }>Resume</Nav.Link>
	    <NavDropdown 
				title={
		    	<span className="nav-button">Writing Projects</span>
				}>
	    <NavDropdown.Item>Action</NavDropdown.Item>
	    <NavDropdown.Item>
		Another action
	    </NavDropdown.Item>
	    <NavDropdown.Item>Something</NavDropdown.Item>
	    <NavDropdown.Divider />
	    <NavDropdown.Item>
		Separated link
	    </NavDropdown.Item>
	    </NavDropdown>
	    </Nav>
	    </Navbar.Collapse>
      	</Container>
    	</Navbar>
	{page === "About" && <header className="App-header">
	    <Container>
		<Row>
		    <Col>
					<div style={{
						borderRadius: "25px"
					}}>
						<img src="/me.jpg" alt="Me" height="300px" width="225" />
					</div>
		    </Col>
		    <Col>
					Senior Computer Science Student
					<br/>
					@
					<br/>
					University of Delaware
		    </Col>
		</Row>
	    </Container>
			<p className="clickable" onClick={ () => { setPage("Resume") }}> Resume </p>
	</header>}
    </div>
  );
}

export default App;
