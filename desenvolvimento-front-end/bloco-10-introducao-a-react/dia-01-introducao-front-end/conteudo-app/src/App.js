import logo from './logo.svg';
import React from './React';
import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';

class App extends React.component {
  render () {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
  

export default App;
