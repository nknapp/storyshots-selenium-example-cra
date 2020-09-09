import React from "react";
import "./App.css";
import {Layout} from "./layout/Layout";
import {Logo} from "./components/Logo";
import {Sidebar} from "./components/Sidebar";

function App() {
  return (
    <Layout
      navigation={
        <div>
          <Logo style={{ width: "2rem", height: "2rem", transform: "rotate(10deg)" }} />
        </div>
      }
      sidebar={
        <Sidebar />
      }
      content={
        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      }
    />
  );
}

export default App;
