import React from "react";
import Questions from "./Questions";

const QuestionList = ({questionList}) => {
    return(
        <>
          {
            QuestionList.map((question) => (
                <Questions question={question} key={question.id} />
            ))
          }
        </>
    )
}

export default QuestionList