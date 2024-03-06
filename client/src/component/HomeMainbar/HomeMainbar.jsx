import React from "react";
import {Link, useLocation} from 'react-router-dom';
import './HomeMainbar.css';
import Question from "./Questions";
import Questions from "./Questions";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
   
   var questionsList = [{
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionsTittle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1"
   },{
      id: 2,
      votes: 0,
      noOfAnswers: 0,
      questionsTittle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1"
   },{
      id: 3,
      votes: 1,
      noOfAnswers: 0,
      questionsTittle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1"
   }]

   const location = useLocation();

   return(
    <div className="home-mainbar">
      <div className="home-mainbar-header">
         {
            location.pathname === "/" ? <h1>Top Questions</h1> : <h1>All Questions</h1>
         }
      </div>
      <Link to = "/AskQuestion" className = "ask-btn">Ask Question</Link>
      <div>
         {
            questionsList === null ? 
            <h1>Loading...</h1> :
            <>
               <p>{questionsList.length} questions</p>
               <questionsList QuestionList={QuestionList} />
            </>
         }
      </div>
    </div>
   )
}
export default HomeMainbar