import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Homepage/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Pricing from './Pages/Pricing/Pricing';
import AuthProvider from './AuthContext/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Registration></Registration>
            </Route>
            <Route exact path="/pricing">
              <Pricing></Pricing>
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
