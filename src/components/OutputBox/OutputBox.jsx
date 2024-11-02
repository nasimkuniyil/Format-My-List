import React from "react";
import "./OutputBox.css";
import Button from "../elements/Button/Button";
import TextArea from "../elements/TextArea/TextArea";
import copy from "copy-to-clipboard";

function OutputBox(props) {

    function makeCopy(){
        copy(props.outputData.reduce((str,item)=>str+=item,""));
        alert("text copied")
    }

    function handleClear(){
        props.setOutputData([]);
    }

  return (
    <div className="output-box">
        <p className="title">Total list items : {props.outputData.length}</p>
      <div>
        <TextArea value={props.outputData.reduce((str,item)=>str+=item,"")} />
      </div>
      <div className="buttons">
        <Button onClick={handleClear} name={"Clear"} theme={"light"} />
        <Button onClick={makeCopy} name={"Copy"} theme={"light"} disabled={props.outputData.length==0}/>
      </div>
    </div>
  );
}

export default OutputBox;
