import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Projects from './Components/Home/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';
import NotFound from './Components/NotFound/NotFound';
import Nav from './Components/Home/Shared/Navbar/Navbar';
import Experince from './Components/Home/Experience/Experience';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/blog">
            <Blog />
            <Footer/>
          </Route> */}
          <Route path="/projects">
            <Projects />
            
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/experience">
            <Nav />
            <Experince />
          </Route>
          <Route path="/contact">
            <Nav/>
            <ContactMe />
            {/* <Footer/> */}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
