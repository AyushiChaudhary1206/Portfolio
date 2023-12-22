import React from 'react';
import pfpic from "./pfpic.jpg"
import "./Home.css";

 
export default function Home(props) {
  return (
    <>
 

<div className="row">
<div className="container col-lg-7">
<h1 className="heading">Hello, It's Me <br /> Ayushi Chaudhary <br/></h1>
<div className="wrapper">
<span className="text-first">I'm a passionate</span>
<div className="text-second">
 <span class="stu"> Student </span> 
  <span className="and">and a </span>
  <span class="web">Web Developer</span>

</div>



</div>
</div>
<div className="img col-lg-5" >
<img src={pfpic} alt="" />
</div>


</div>



 </>
)
}
