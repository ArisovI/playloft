import React from "react";
import { Header, Kids, Main, Platforms, Recommendation } from "./components";

const App = () => {
  return (
    <div className="h-screen bg-main-background bg-cover">
      <Header />
      <Main />
      <Recommendation />
      <Platforms />
      <Kids />
    </div>
  );
};

export default App;
