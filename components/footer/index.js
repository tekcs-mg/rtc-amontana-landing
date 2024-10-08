import React from 'react'
import Link  from 'next/link'
import Logo from '/public/images/Club-Rotaract_LogoLockup_FR21.png'
import Projects from '../../api/projects'
import Image from 'next/image'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    const currentYear = new Date().getFullYear();

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Image src={Logo} alt="blog"/>
                            </div>
                            <p>Ensemble, construisons un avenir meilleur. Le Rotaract Club unit les jeunes pour servir leur communauté.</p>
                            <ul>
                                <li>
                                    <Link href="https://www.facebook.com/profile.php?id=100064547237957" target='_blank'>
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Menu </h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} href="/about">A propos</Link></li>
                                <li><Link onClick={ClickHandler} href="/cause">Causes</Link></li>
                                <li><Link onClick={ClickHandler} href="/blog">Actualités</Link></li>
                                <li><Link onClick={ClickHandler} href="/contact">Actions</Link></li>
                                <li><Link onClick={ClickHandler} href="/event">Prochainement</Link></li>
                                <li><Link onClick={ClickHandler} href="/gallery">Equipe</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <p>Si vous avez des questions, n'hésitez pas à nous contacter</p>
                                <ul>
                                    <li><i className="fi flaticon-mail"></i>amontana.rotaract@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+261 XX XX XXX XX</li>
                                    <li><i className="fi flaticon-location"></i>Madagascar – Antananarivo, 101</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Actions et événements</h3>
                            </div>
                            <ul className="d-flex">
                                {Projects.slice(0,6).map((project, pitem)=>(
                                    <li className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}>
                                                <Image src={project.projectImg} alt=""/>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; {currentYear} Rotaract Club Amontana.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;