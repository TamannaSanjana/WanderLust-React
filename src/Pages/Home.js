import About from '../components/about';
import Carosel from '../components/carosel';
import Services from '../components/services';
import Destination from '../components/destination';
import Tour from '../components/tour';
import Package from '../components/package';
import Booking from '../components/booking';
import Guide from '../components/guide';
import Blogs from '../components/blogs';
import Clients from '../components/clients';
import NewsLetter from '../components/newsletter';


function Home() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <>
      <>
      <Carosel/>
      <About/>
    <Services/>
    <Destination/>
    <Tour/>
    <Package/>
    <Booking/>
    <Guide/>
    <Blogs/>
    <Clients/>
    <NewsLetter/>
      </>
      </>
    );
  }
  
  export default Home;