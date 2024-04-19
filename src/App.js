import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import About from './components/About/About';
import Services from "./components/services/Services"
import Guarantee from './components/guarantee/guarantee';
import Quote from './components/get-quote/Quote';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Testimonals from './components/Testimonals/testimonals';


function App() {
  return (
    <div className="">
    <Navbar/>
    <Header/>
    <About/>
    <Services />
    <Testimonals />
    <Guarantee />
    <Quote />
    <Footer />
    </div>
  );
}

export default App;
