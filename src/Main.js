import React from "react";
import HornedBeast from "./HornedBeast";


class Main extends React.Component {
  render() {
    return(
      <>
        <main>
        <HornedBeast
        title="Kelly"
        imageUrl= "public/k.jpg"
        description="A very kind beast"
        alt ="Pic of Kelly"
         />
        <HornedBeast 
          title="Hello"
          imageUrl="public/h.png"
          description="A not very kind beast"
          alt ="Pic of Hello"
        />
        </main>
      </>
    )
  };
};


export default Main;