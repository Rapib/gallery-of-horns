import React from "react";
import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import data from "./data.json"
// import Modal from 'react-bootstrap/Modal'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image_url: '',
      title: '',
      description:'',
      isShown: false
    }
  }

  // more functions

  openModal = (title,url,description) => {
    this.setState({
      isShown: true,
      image_url: url,
      title: title,
      description: description,
    })
  }

  closeModal = () => {
    this.setState({
      isShown: false
    })
  }

  render(){
    return (
    <>
    <Header/>
    <Main 
    data = {data}
    openModal = {this.openModal}
    />
    <Footer />
      <SelectedBeast 
      show={this.state.isShown}
      onHide={this.closeModal}
      src={this.state.image_url}
      alt={this.state.title}
      title = {this.state.title}
      description = {this.state.description}
      />
     
    </>
    );
  }
};

export default App;