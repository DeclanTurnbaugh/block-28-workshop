import "./App.css";
import MainSection from "./components/main-section/main-section";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
      <div id="container">
        <Navbar />
        <MainSection />
        <Footer />
      </div>
  );
}

export default App;
