import home from "../home.svg"
import Navigation from "../components/Navigation";

const Home = () => {
  
  return (
    <div className="container">
        <Navigation />
    
        <div className="home"> 
        <h2 className="welcome">WELCOME TO JEYODs ACADEMY</h2>
            <img src={home} alt="home"  />
         </div>
         
        
      
       
    </div>
  );
};

export default Home;
