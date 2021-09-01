import React from 'react';
import "./BeauticianDetails.css"
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";




const BeauticianDetails = ({artist}) => {
   return (
     <div className="col-md-3 pb-4">
       <div className="artist-member shadow-sm rounded">
         <figure className="effect-zoe p-1">
           <div>
             <img
               className="img-fluid"
               src={`data:image/png;base64,${artist.image.img}`}
               alt=""
             />
           </div>
           <div className="artist-attr mt-4 mb-4">
             <h5 className="text-brand artist-name">{artist.name}</h5>
             <span className="fst-italic">{artist.position}</span>
           </div>
           <figcaption className="">
             <p className="icon-links">
               <Link to={artist.facebook}>
                 <FontAwesomeIcon icon={faFacebook} />
               </Link>
               <Link to={artist.instagram}>
                 <FontAwesomeIcon icon={faInstagram} />
               </Link>
               <Link>
                 <FontAwesomeIcon icon={faEnvelope}  />
               </Link>
             </p>
             <p className="phone-number">
               <a>
                 <FontAwesomeIcon icon={faPhone} className="" />
                 {artist.phone}
               </a>
             </p>
           </figcaption>
         </figure>
       </div>
       <div className="dividewhite4"></div>
     </div>
   );
};

export default BeauticianDetails;