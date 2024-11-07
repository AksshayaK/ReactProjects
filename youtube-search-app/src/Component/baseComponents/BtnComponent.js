
import React from 'react';
import {Button} from 'react-bootstrap';

const BtnComponent = ({BtnClick,BtnText}) => {

    const handleClk = () => {
        BtnClick();
    }
    return (<div className="Input_Box">
        <Button variant="primary" onClick={handleClk}>{BtnText}</Button>
    </div>);
}

export default BtnComponent;