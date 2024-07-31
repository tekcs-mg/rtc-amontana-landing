import React from "react";
import Teams from '../../api/team'
import Slider from "react-slick";
import Link from 'next/link'
import Image from "next/image";
import { useEffect } from "react";
import { getAllMembers } from "../../services/members.service";
import { FILE_URL } from "../../utils/constants";


const TeamSection = () => {

    const [members, setMembers] = React.useState([]);

    // const alphabeticalOrederedTeams = Teams.sort((a, b) => a.name.localeCompare(b.name))

    const settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    useEffect(() => {
        (async () => {
            const membersList = await getAllMembers();
            setMembers(membersList);
        })();
    }, []);

    return (
        <div className="wpo-team-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Membres</span>
                            <h2>Découvrez nos volontaires</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form,</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="team-slider">
                        <Slider {...settings}>
                            {members.map((Team, index) => (
                                <div className="wpo-team-item" key={index}>
                                    <div className="wpo-team-img">
                                        <Image 
                                            src={FILE_URL(Team.collectionId, Team.id, Team.image)} 
                                            alt={Team.fullname} 
                                            width={1000} 
                                            height={1000}
                                        />
                                    </div>
                                    <div className="wpo-team-content">
                                        <h2><Link onClick={ClickHandler} href='/team-single/[slug]' as={`/team-single/${Team.fullname}`}>{Team.fullname}</Link></h2>
                                        <span>{Team.function}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamSection;