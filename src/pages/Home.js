import home from "../home.svg"
import Navigation from "../components/Navigation";

const Home = () => {
  
  return (
    <>
        <Navigation />
        <h2 style={{ marginTop: "40px", textAlign: "center" }}>WELCOME TO JEYODs ACADEMY</h2>
        <img src={home} alt="home" width="500px" style={{marginTop: "60px", marginLeft:"400px"}} />
        
       
    </>
  );
};

export default Home;
