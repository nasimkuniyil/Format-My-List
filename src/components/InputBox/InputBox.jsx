import "./InputBox.css";
import Button from "../elements/Button/Button";
import TextArea from "../elements/TextArea/TextArea";

function InputBox(props) {
  function handleChange(event) {
    props.setInputData(event.target.value);
  }

  function handleClear() {
    props.setInputData("");
  }

  function handleGenerate() {
    // let abc= props.inputData.trim().split("\n").filter(item=>item!=="").reduce((str,item,index)=> str+=`${index+1}. ${item}\n`,"")
    let abc = props.inputData
      .trim()
      .split("\n")
      .filter((item) => item !== "")
      .map((item, index) => `${index + 1}. ${item}\n`);
    props.setOutputData(abc);
  }

  return (
    <div className="input-box">
       <p className="title">Enter your list</p>
      <div className="text-area-wrapper">
        <TextArea
          text="list items..."
          onChange={handleChange}
          value={props.inputData}
        />
      </div>
      <div className="buttons">
        <Button onClick={handleClear} name={"Clear"} theme={"light"} />
        <Button
          onClick={handleGenerate}
          name={"Generate"}
          theme={"blue"}
          disabled={!props.inputData}
        />
      </div>
    </div>
  );
}

export default InputBox;
