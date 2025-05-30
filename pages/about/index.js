import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import VideoSec from '../../components/VideoSec';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import Service from '../../components/Service';
import AboutS2 from '../../components/AboutS2';
import FunFact from '../../components/FunFact';
import CauseSection from '../../components/CauseSection';
import TeamSection from '../../components/TeamSection';
import PartnerSection from '../../components/PartnerSection';


const AboutPage =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Rotaract Club Amontana'} pagesub={'A Propos'}/> 
            <VideoSec/>
            {/* <Service Fclass={'wpo-features-section-s2'}/> */}
            {/* <AboutS2/> */}
            {/* <FunFact/> */}
            {/* <CauseSection/> */}
            {/* <TeamSection/> */}
            {/* <PartnerSection tNone={'title-none'}/>  */}
            <div className="wpo-donate-header">
                <h2>Page en cours de construction</h2>
            </div>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
