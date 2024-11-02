import React, { useState } from 'react'
import InputBox from '../InputBox/InputBox'
import OutputBox from '../OutputBox/OutputBox'
import './Home.css'

function Home() {
    let [inputData,setInputData] = useState("");
    let [outputData,setOutputData] = useState([]);

  return (
    <div className='home'>
        <InputBox inputData={inputData} setInputData={setInputData} outputData={outputData} setOutputData={setOutputData}/>
        <OutputBox outputData={outputData} setOutputData={setOutputData}/>
    </div>
  )
}

export default Home