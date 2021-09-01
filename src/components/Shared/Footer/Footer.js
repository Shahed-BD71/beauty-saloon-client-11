import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from "../FooterCol/FooterCol";
import { faFacebook, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
const devName = "SA-Shahed";

const Footer = () => {
  const noNamed = [
    { name: "Emergency Facial Care", link: "/emergency" },
    { name: "Make Up", link: "/makeup" },
    { name: "Treatment of Facial Diseases", link: "/facial-treatment" },
    { name: "Body Wraps", link: "/body-wraps" },
    { name: "Make Up", link: "/makeup" },
  ];
  const services = [
    { name: "Emergency Facial Care", link: "/emergency" },
    { name: "Make Up", link: "/makeup" },
    { name: "Treatment of Facial Diseases", link: "/facial-treatment" },
    { name: "Body Wraps", link: "/body-wraps" },
    { name: "Make Up", link: "/makeup" },
    { name: "Make Up", link: "/makeup" },
    { name: "Make Up", link: "/makeup" },
  ];
  const oralHealth = [
    { name: "Emergency Facial Care", link: "/emergency" },
    { name: "Make Up", link: "/makeup" },
    { name: "Treatment of Facial Diseases", link: "/facial-treatment" },
    { name: "Body Wraps", link: "/body-wraps" },
    { name: "Make Up", link: "/makeup" },
    { name: "Make Up", link: "/makeup" },
    { name: "Make Up", link: "/makeup" },
  ];
   const ourAddress = [
      {name: "New York - 101010 Hudson" , link: "//google.com/map"},
      {name: "Yards" , link: "//google.com/map"}
  ]
   return (
     <footer className="footer-area">
       <div className="justify-content-center pt-3">
         <div className="row py-5 ms-3">
           <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
           <FooterCol key={2} menuTitle="Services" menuItems={services} />
           <FooterCol key={3} menuTitle="Skin Health" menuItems={oralHealth} />
           <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
             <ul className="social-media list-inline">
               <li className="list-inline-item">
                 <a href="//facebook.com">
                   <FontAwesomeIcon
                     className="icon active-icon"
                     icon={faFacebook}
                   ></FontAwesomeIcon>
                 </a>
               </li>
               <li className="list-inline-item">
                 <a href="//google.com">
                   <FontAwesomeIcon className="icon" icon={faGooglePlus} />
                 </a>
               </li>
               <li className="list-inline-item">
                 <a href="//instagram.com">
                   <FontAwesomeIcon className="icon" icon={faInstagram} />
                 </a>
               </li>
             </ul>
             <div className="mt-5">
               <h6>Call now</h6>
               <button className="btn btn-brand w-75">+2025550295</button>
             </div>
           </FooterCol>
         </div>
         <div className="copyRight text-center">
           <p>
             Copyright {new Date().getFullYear()} {devName}, All Rights Reserved
           </p>
         </div>
       </div>
     </footer>
   );
};

export default Footer;