import './App.css';
import Navbar from './navbar';
import Home from './home';
import Contact from './Contact';
import NewBlog from './NewBlog';
import About from './About';
import BlogDetails from './blogDetails';
import NotFound from './NotFound';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="appContainer">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/newBlog">
            <NewBlog />
        </Route>
        <Route exact path="/contact">
            <Contact />
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
        <Route exact path="/blogs/:id">
            <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
