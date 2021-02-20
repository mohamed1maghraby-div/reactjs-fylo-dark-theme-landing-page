import './App.css';
import Intro from './components/Intro';
import Features from './components/Features';
import StayProductive from './components/StayProductive';
import Testimonials from './components/Testimonials';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="fylo">
      <Intro />
    </div>
    <Features />
    <StayProductive />
    <Testimonials />
    <EarlyAccess />
    <Footer />
    </>
  );
}

export default App;
