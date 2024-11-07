import React from "react";
import {FormControl} from "react-bootstrap";


const InputBox = (props) => {

    return (<div className="Input_Box">
        <FormControl autoFocus={ props.autofocus === true ? true:false} name={props.name} className={props.hasError === true?"hasError":""} type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.defaultVal} disabled={props.disabled} maxLength={props.maxLength} onKeyUp={props.onKeyUp}/>
    </div>);
}

export default InputBox;