import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Skills, UpdatedHeader, Work } from "./container";
function App() {
  return (
    <div className="app">
      <Navbar />
      <UpdatedHeader />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
