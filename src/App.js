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
import Contact from './Components/Home/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Nav from './Components/Home/Shared/Navbar/Navbar';
import Experince from './Components/Home/Experience/Experience';
import Footer from './Components/Home/Footer/Footer';


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
            <Footer/>
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/experience">
            <Nav />
            <Experince />
            <Footer/>
          </Route>
          <Route path="/contact">
            <Nav/>
            <Contact />
            <Footer/>
          </Route>
          <Route path="*">
            <NotFound />
            <Footer/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
