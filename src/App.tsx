import {
  Connect,
  Footer,
  Header,
  Kids,
  Main,
  Platforms,
  Recommendation,
} from "./components";

const App = () => {
  return (
    <div className="h-screen bg-main-background bg-cover">
      <Header />
      <Main />
      <Recommendation />
      <Platforms />
      <Kids />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
