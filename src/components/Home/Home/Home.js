import React from 'react';
import Header from "../Header/Header";
import Navbar from '../../Shared/Navbar/Navbar';
import FeaturedService from "../FeaturedService/FeaturedService"
import Services from '../Services/Services';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Fashion from '../Fashion/Fashion'
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Beautician from '../Beautician/Beautician'
import Subscribe from "../Subscribe/Subscribe"
import Footer from "../../Shared/Footer/Footer"
import Blogs from '../Blogs/Blogs';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
   return (
     <main>
       <Navbar/>
       <Header />
       <FeaturedService />
       <Services></Services>
       <BusinessInfo/>
       <HomeAppointment/>
       <Fashion/>
       <Testimonial/>
       <Blogs/>
       <Beautician/>
       <Subscribe/>
       <Footer/>
     </main>
   );
};

export default Home;