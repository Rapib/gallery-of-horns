import React from "react";
import "./HornedBeast.css"


class HornedBeast extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      favorites: 0
    };
  }
  clickFav = () => {
    this.setState (
      {favorites: this.state.favorites + 1,}
    )
  }
  render (){
    // console.log(this.props.data);

  
    return (
      <>
      <div className="box">
        <h2>{this.props.title}</h2>
        <p>{this.state.favorites} 💖Favorites</p>
        <img onClick={this.clickFav} src={this.props.image_url} alt={this.props.keyword} title={this.props.title}/>
        <p>{this.props.description}</p>
      </div>
      </>
    )
  };

}

export default HornedBeast;