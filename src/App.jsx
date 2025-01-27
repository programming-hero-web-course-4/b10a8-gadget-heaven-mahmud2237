import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-7xl font-bold">React</h1>
      <Main></Main>
      <button className="btn btn-primary">DaisyUi</button>
      <Footer />
    </>
  );
}

export default App;
