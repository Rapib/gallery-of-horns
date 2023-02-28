import React from "react";
import HornedBeast from "./HornedBeast";
// import data from "./data.json"



class Main extends React.Component {
  render() {
    let beast = this.props.data.map( (i,idx) => {
      return <HornedBeast 
      title = {i.title}
      image_url = {i.image_url}
      keyword = {i.keyword}
      key = {idx}
      description = {i.description}
      alt={i.keyword}
      />
    });
    return(
      <>
        <main>

        {beast}
        </main>
      </>
    )
  };
};


export default Main;