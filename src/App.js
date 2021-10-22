import Navbar from './navbar'
import HomePage from './homepage'
import CreateBlog from './CreateBlog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
