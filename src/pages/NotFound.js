import notFound from "../notfound.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/");
  };

  return (
    <> 
      <img src={notFound} alt="Not found" width="500px" />
      <h1 style={{ marginTop: "10px", textAlign: "center" }}>
        Oops! couldn't find Page
      </h1>
      <button
        onClick={goHomeHandler}
        style={{
          padding: "15px 30px",
          border: "1px solid black",
          backgroundColor: "white",
          marginTop: "30px",
        }}
      >
        Go Home
      </button>
    </>
  );
};

export default NotFound;
