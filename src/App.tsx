import { useState } from 'react';
import './App.css';
import { About } from './About';
import { Projects } from './Projects';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
	const [page, setPage] = useState<string>("About")

  return (
    <div className="App">
	<Navbar data-bs-theme="dark">
      	<Container>
	    <Navbar.Brand className="text">Leo Chen</Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
	    <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="nav-button">
	    <Nav.Link className="nav-button" onClick={ () => { setPage("About") } }>
		About Me
	    </Nav.Link>
	    <Nav.Link className="nav-button" onClick={ () => { setPage("Projects") } }>
		Projects
	    </Nav.Link>
	    </Nav>
	    </Navbar.Collapse>
      	</Container>
    	</Navbar>
	{page === "About" && <About/>} 
	{page === "Projects" && <Projects/>}
    </div>
  );
}

export default App;
