import React from "react";

const About = (props) => {

  return (
    <div className="pt-4"  style={{height:"100vh", backgroundColor: props.Mode==="dark" ? "#404041":"white",color: props.Mode==="light" ? "black":"white"}}>
      <h2 className={`text-center pt-5 container`}>About Us</h2>
      <div className={`container accordion my-3`} id="accordionExample">
        <div className={`accordion-item bg-${props.Mode}`}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor:"#f8f9fa"}}
            >
              <strong>What is Word_Counter?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body "
             style={{backgroundColor: props.Mode==="dark" ? "#404041":"white",color: props.Mode==="light" ? "black":"white"}}
             >
              <strong>Text Count is an web application.</strong> It is usefull for changing the text format.You can simply convert the text into uppercase as well as into lowercase, after that you can copied it and past it where you want. Remove extra space (Button) is provided for remove all extra spaces which are present in your text.It give the reading time in seconds also.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor:"#f8f9fa"}}
            >
             <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse "
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"
             style={{backgroundColor: props.Mode==="dark" ? "#404041":"white",color: props.Mode==="light" ? "black":"white"}}
             >
              <strong>Text Count application is free to use. </strong>  It provide Information about your text. It count the number of character and number of words present in your text.
            </div>
          </div>
        </div>
        <div className={`accordion-item`}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor:"#f8f9fa"}}
            >
              <strong>Text Count works in </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"
             style={{backgroundColor: props.Mode==="dark" ? "#404041":"white",color: props.Mode==="light" ? "black":"white"}}
             >
              <strong>This text count application works in  </strong> many browser such as Internet Explorer, Chrome, Safari, Mozila, FireFox, Opera.
            </div>
          </div>
        </div>
      </div> 
     
    </div>
  );
};

export default About;
