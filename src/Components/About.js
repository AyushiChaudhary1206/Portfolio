import React from 'react'
import "./About.css"

export default function About() {
  return (
   <>
   {/* <div classNameName="row">
    <div classNameName="image col-lg-6">
    <img src={pfpic2} alt="" />
    </div>
    <div classNameName="About col-lg-6 text-center">
      <h1>About</h1>
      <p>I'm a currently pursuing Bachelor Of Technology in Computer Science 
        and Engineering.I'm a 
      </p>
    </div>
   </div> */}
   <section id="education">
<div className="rows">
<p className="qualification">What I have done so far</p>
<span className="qua">Qualification</span>
<div className="box">
  <div className="details">

    <div className="vertical">
      <span className="data">Xth </span><br/>
      (2019) <br/>
      Euro International School

    </div>
  </div>
  <div className="details ">
    <div className="vertical">
      <span className="data">XIIth </span><br/>
      (2021) <br/>
      Euro International School
    </div>
  </div>
  <div className="details">
    <div className="vertical">
      <span className="data"> Btech </span> <br/>

      (2021-25) <br/>
      R.V Institute Of Technology
    </div>
  </div>


</div>
</div>

</section>

   </>
  )
}
