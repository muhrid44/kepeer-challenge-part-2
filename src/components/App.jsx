import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

let App = () => {
  return (
    <div>
      <Header />
      {notes.map((index) => {
        return (
          <Note key={index.key} title={index.title} content={index.content} />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
