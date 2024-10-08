import React, { Component } from 'react'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'
import Image from 'next/image'

export default class Header extends Component {

    state = {
        isSearchShow: false,
    }

    searchHandler = () => {
        this.setState({
            isSearchShow: !this.state.isSearchShow
        })
    }



    render() {
        const { isSearchShow } = this.state;

        const SubmitHandler = (e) => {
            e.preventDefault()
        }

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }
        return (
            <header id="header" className={this.props.topbarNone}>
                <div className={`wpo-site-header ${this.props.hclass}`}>
                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div className="mobail-menu">
                                        <MobileMenu />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-6">
                                    <div className="navbar-header">
                                        <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={this.props.Logo}
                                            alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <button className="menu-close"><i className="ti-close"></i></button>
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} href="/">Accueil</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/cause">A propos</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/cause">Cause</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/cause-single/Poor-Children">Cause Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/">Causes</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/event">Events</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/event-s2">Events S2</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/event-single/Help-Children">Events Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/">Actualités</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service">Service</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service/Clean-Water">Service Single</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/project">Project</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/project/African-Macaw-Bird">Project Single</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/donate">Donate</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/volunteer">Volunteer</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/404">Error 404</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/register">Sign Up</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} href="/#blog">Actions</Link>
                                                {/* <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                    <li className="menu-item-has-children">
                                                        <Link onClick={ClickHandler} href="#blog">Blog details</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link onClick={ClickHandler} href="/blog-single/Make-Someone’s">Blog details right sidebar</Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Make-Someone’s">Blog details left
                                                                sidebar</Link></li>
                                                            <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Make-Someone’s">Blog details
                                                                fullwidth</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li><Link onClick={ClickHandler} href="/contact">Equipe</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-2 col-2">
                                    <div className="header-right">
                                        <div className="close-form">
                                            <Link onClick={ClickHandler} className="theme-btn" href="/donate">Faire un don</Link>
                                        </div>
                                        {/* <div className="header-search-form-wrapper">
                                            <div className="cart-search-contact">
                                                <button onClick={this.searchHandler} className="search-toggle-btn"><i
                                                    className={`${isSearchShow ? 'ti-close' : 'ti-search'}`}></i></button>
                                                <div className={`header-search-form ${isSearchShow ? 'header-search-content-toggle' : ''}`}>
                                                    <form onSubmit={SubmitHandler}>
                                                        <div>
                                                            <input type="text" className="form-control"
                                                                placeholder="Search here..." />
                                                            <button type="submit"><i
                                                                className="fi flaticon-search"></i></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
