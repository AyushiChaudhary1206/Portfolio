import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <>
<h1 className="text-center contactheading">Contact Me</h1>
<div className="contact">

<div className="contact ">
<form action="#">
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="E-MAIL"/>
        <input type="text" placeholder="Comment" colspan="6"/>

        <button class="btn btn-light">SEND MESSAGE</button>
        </form>
        </div>
        <div className="contact">
<div className="box">
<ul class="wrappers">
        <li class="icon instagram">
           <a href="https://www.instagram.com/happy_.sunshine13?igsh=dnoxbm40Znk5YzB5" target="_blank" rel="noreferrer">
            <span class="tooltip">Instagram</span>
            <span class="logo"><i class="fa-brands fa-instagram fa-lg"></i></span>
        </a>
        </li>
        <li class="icon LinkedIn">
        <a href="https://www.linkedin.com/in/ayushi-chaudhary-07986027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <span class="tooltip">LinkedIn</span>
            <span class="logo"><i class="fa-brands fa-linkedin fa-lg"></i></span>
            </a>
        </li>
        <li class="icon github">
            <a href="https://github.com/AyushiChaudhary1206" target="_blank" rel="noreferrer">
            <span class="tooltip">Github</span>
            <span class="logo"><i class="fa-brands fa-github fa-lg"></i></span>
            </a>
        </li>
    </ul>

</div>

        </div>
        </div>
       
    </>
  )
}
