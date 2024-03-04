import React from "react";
import comment from '../../assets/message-regular.svg';
import pen from '../../assets/pen-solid.svg';
import blacklogo from '../../assets/blacklogo.svg';
import logo from '../../assets/icon.png';

const Widget = () => {
    return(
        <div className="widget">
            <h4>Upcoming Events</h4> 
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={blacklogo} alt="blacklogo" width='12' />
                    <p><span>2024 Community Moderator Election</span> ends March 13</p>
                </div>
            </div>

            <h4>The Overflow Blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='12' />
                    <p>It’s RAG time for LLMs that need a source of truth</p>
                </div>
                <div className="right-sidebar-div-2">
                   <img src={pen} alt="pen" width='12' />
                   <p>Defining socially responsible AI: How we select partners</p>
                </div>
            </div>

            <h4>Featured</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                   <img src={blacklogo} alt="blacklogo" width='12' />
                   <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
                </div>
                <div className="right-sidebar-div-2">
                   <img src={blacklogo} alt="blacklogo" width='12' />
                   <p>2024 Moderator Election Q&A – Question Collection</p>
                </div>
            </div>

                <h4>Hot Meta Posts</h4>
                <div className="right-sidebar-div-1">
                  <div className="right-sidebar-div-2">
                    <p>51</p>
                    <p>What does the new Google AI Partnership mean?</p>
                  </div>
                </div>
            
        </div>
        
    )
}

export default Widget