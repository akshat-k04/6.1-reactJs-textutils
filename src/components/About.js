import React, { useState } from 'react'

export default function About(hello) {

    const [myStyle,setMyStyle] = useState({
        color : 'black' ,
        backgroundColor : 'white',
        
    })
    const[outerStyle, setouterstyle]= useState({
        color:'black' ,
        backgroundColor: 'gray'
    })

    setMyStyle( document.body.style.backgroundColor === 'white' ? {color:'white',backgroundColor:'gray'}:{color:'black',backgroundColor:'white'});

     const to =()=> {
        
     }
    // const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'gray',
                
    //         });
    //         setouterstyle({
    //             color: 'white',
    //             backgroundColor: 'black',
                
    //         })
    //         changer('enable light mode');

    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         });
    //         setouterstyle({
    //             color: 'black',
    //             backgroundColor: 'gray'
    //         })
    //         changer('enable dark mode');

    //     }
    // }

    const [btton , changer] = useState('enable dark made');
    


  return (
      <div className="container py-1" style={outerStyle}>

    <h1 className="head my-3">About us</h1>
          <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
                          Accordion Item #1
                      </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne"  className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body">
                          <strong>This is the first item's accordion body.</strong> 
                          It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the 
                          <code>.accordion-body</code>
                          , though the transition does limit overflow.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                          Accordion Item #2
                      </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body">
                          <strong>This is the second item's accordion body.</strong>
                           It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the 
                           <code>.accordion-body</code>
                           , though the transition does limit overflow.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button collapsed" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                          Accordion Item #3
                      </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body">
                          <strong>This is the third item's accordion body.</strong> 
                          It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the 
                          <code>.accordion-body</code>
                          , though the transition does limit overflow.
                      </div>
                  </div>
              </div>
          </div>
          <button type="button" className="btn btn-dark mx-3 my-3" onClick={to}>{btton}</button>
    </div>
  )
}
