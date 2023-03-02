import React from "react";
import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import data from "./data.json"
import FormSelect from "./form"
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image_url: '',
      title: '',
      description: '',
      isShown: false,
      selectHorns: '',
      selectData: data
    }
  }

  // more functions

  openModal = (title, url, description) => {
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

  filterHorns = (e) => {
    e.preventDefault();
    if (this.state.selectHorns === "4") {
      let newData = data.filter( i =>
        i.horns >= 4
      );
      this.setState({
        selectData: newData
      })
    } else if (this.state.selectHorns === "1") {
      let newData = data.filter( i =>
        i.horns === 1
      );
      this.setState({
        selectData: newData
      })
    } else if (this.state.selectHorns === "2") {
      let newData = data.filter( i =>
        i.horns === 2
      );
      this.setState({
        selectData: newData
      })
    } else if (this.state.selectHorns === "3") {
      let newData = data.filter( i =>
        i.horns === 3
      );
      this.setState({
        selectData: newData
      })

  } else if (this.state.selectHorns === "all") {
    this.setState({
      selectData: data
    })

}
}

  select = (e) => {
    this.setState({
      selectHorns:e.target.value
    })
  }

  render() {
    return (
      <>
        <Header />

        <FormSelect 
        filterHorns={this.filterHorns}
        select={this.select}

        />

        <Main
          data={this.state.selectData}
          openModal={this.openModal}
        />
        <Footer />
        <SelectedBeast
          show={this.state.isShown}
          onHide={this.closeModal}
          src={this.state.image_url}
          alt={this.state.title}
          title={this.state.title}
          description={this.state.description}
        />

      </>
    );
  }
};

export default App;