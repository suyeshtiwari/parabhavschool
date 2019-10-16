import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Navigation from './components/navigation/navigation'
import Home from './containers/home/home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './containers/aboutUs/aboutUs';
import ContactUs from './containers/contactUs/contactUs';
function App() {
  return (
    <div className="App">
      <Header></Header>
      
      {/* <Home /> */}
      <Router>
      <Navigation />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
