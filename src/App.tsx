import React from "react";
import { Header, Main, Platforms, Recommendation } from "./components";

const App = () => {
  return (
    <div className="h-screen bg-main-background bg-cover">
      <Header />
      <Main />
      <Recommendation />
      <Platforms />
    </div>
  );
};

export default App;
