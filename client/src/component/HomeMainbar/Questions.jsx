import React from "react";


const Questions = ({question}) => {
    return(
        <div className='display-ans-container'>
            <div className='display-ans-vote'>
                <p>{question.votes}</p>
                <p>votes</p>
            </div>
            <div className="display">

            </div>
        </div>
    )
}

export default Questions