import { About, Footer, Header, More, Skills, Work } from './container/index';
import { Navbar } from './components/index';
import './App.scss';
import Experience from './container/experience/Experience';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work />
      <About />
      <Experience/>
      <Skills />
      <Footer />

    </div>
  );
}

export default App;
