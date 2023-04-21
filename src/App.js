import About from "./components/About.jsx"
import PicQuote from "./components/PicQuote.jsx";
import Footer from "./components/Footer.jsx";
import Grid from "./components/Grid.jsx";
import Video from "./components/Video.jsx";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="About Me">
      <About/>
      <Grid/> 
      <PicQuote/>
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;
