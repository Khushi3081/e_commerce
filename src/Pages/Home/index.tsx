import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
    return (
   <div className="container">
      <div className="text-center" style={{marginTop:"60px"}}>
        <button className="btn btn-primary" onClick={()=>navigate("../dashboard")}>Let's start the Shopping</button>
      </div>
    </div>
  )
}

export default Home