import React from "react";
import "./HornedBeast.css"


class HornedBeast extends React.Component {

  render (){
    // console.log(this.props.data);


    return (
      <>
      <div className="box">
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title}/>
        <p>{this.props.description}</p>
      </div>
      </>
    )
  }

}

export default HornedBeast;