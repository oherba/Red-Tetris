import React from "react";

import Cell from './Cell';
import {randomTetromino} from '../tetrominos';
import {StyledStage} from './styles/styledStage'

// console.log(randomTetromino());
// console.log(stage);
const  stage = ({stage}) => {
    console.log(stage[0].length);
    return (
    <StyledStage width={stage[0].length} height={stage.length} >
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </StyledStage>
    );
    }

export default stage;