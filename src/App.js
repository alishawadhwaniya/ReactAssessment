import { useState } from "react";

function App() {
  const [citizenCheck,setCitizenCheck]=useState(false);
  const [ageCheck,setAgeCheck]=useState(false);
  const citiChangeHandler=event=>{
    if(event.target.checked){
      setCitizenCheck(true);
    }else{
      setCitizenCheck(false);
    }
  }
  const ageChangeHandler=event=>{
    if(event.target.checked){
      setAgeCheck(true);
    }else{
      setAgeCheck(false);
    }
  }
  return (
    <>
    <h1>Are you a Citizen?</h1>
    <h1>{`${citizenCheck?'Yes':'No'}`}</h1>
    <h2>Are you over 21?</h2>
    <h2>{`${ageCheck?'Yes':'No'}`}</h2>
    <hr />
    <div>
      <label htmlFor="c">Are you a Citizen?</label>
      <input type="checkbox" name="check" id="c" onChange={citiChangeHandler}/>
    </div>
    <br />
    <div>
      <label htmlFor="a">Are you over 21?</label>
      <input type="checkbox" name="check" id="a" onChange={ageChangeHandler}/>
    </div>
    </>
  );
}

export default App;
