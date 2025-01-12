import './All.css';
import Coming from './Comings00n';
import Header from './header';
// import Team from './Team';
import Footer from './AdminFooter';
import Time from '../time';

function Final() {
    
  return (
    <>
      <Header />
      {/* <Time></Time> */}
      {/* Wrap the routing components inside the Router */}
      <Time/>

      <Footer />
    </>
  );
}

export default Final;
