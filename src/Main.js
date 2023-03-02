import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css'



class Main extends React.Component {
  render() {
    let beast = this.props.data.map((i, idx) => {
      return <HornedBeast
        title={i.title}
        image_url={i.image_url}
        keyword={i.keyword}
        key={idx}
        description={i.description}
        alt={i.keyword}
        horns={i.horns}
        openModal={this.props.openModal}
      />
    });

// filter out 1 horn beast
    // let beast1 = beast.filter( i =>
    //     i.props.horns === 1
    //   );
    // console.log(beast1);


    return (
      <>
        <main>

          {beast}
        </main>
      </>
    )
  };
};


export default Main;