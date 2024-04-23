import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
   <div className="container">
      <div className="text-center" style={{marginTop:"60px"}}>
        <button className="btn btn-primary" onClick={()=><Link to={"dashboard"}/>}>Let's start the Shopping</button>
      </div>
    </div>
  )
}

export default Home