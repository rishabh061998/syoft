import react from "react"
import './App.css';
import {useState,useEffect} from "react"


function App() {
  const[fake,setFake]=useState([])
  console.log(fake)
  useEffect(()=>{
    fakestore()
  },[])

const fakestore=async()=>{
  const response=await fetch("https://fakestoreapi.com/products")
  const jsondata=await response.json()
  setFake(jsondata)
}
    return (
    <div className="App">
     <div className="container">
 {
  fake.map((values)=>{
    return(
      <>
      <div className="box">
        <div className="content">
          <h5>{values.title}</h5>
          <h5>{values.description}</h5>

        </div>
        <img src={values.image}></img>
      </div>
      </>
    )
  })
 }

     </div>
    </div>
  );
}

export default App;
