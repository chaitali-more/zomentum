import Description from './Components/Description';
import 'bootstrap/dist/css/bootstrap.min.css';

import {SectionDescription} from './Components/SectionDescription';
import About from './Components/About';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';


function App() {

  return (
    <div className="App">
      <Navigation/>

     <HeroSection/>
     <About/> 
{
    SectionDescription.map( ({id,imgSource,description,heading}) =>
      <Description key={id} heading={heading} description={description} imgSource={imgSource} id={id}/>
    )

}
<Footer/>
   </div>
  );
}

export default App;
