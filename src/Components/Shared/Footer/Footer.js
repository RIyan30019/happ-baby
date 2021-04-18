import React from 'react';
import './Footer.css';
import work from '../../../images/playtime.png';
import play from '../../../images/star.png';
import pacifier from '../../../images/pacifier.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';
// import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const footerData = [
        {
            title: 'Working Hours',
            img: work,
            time:'10:00 am  to 10:00pm '
        },
        {
            title: 'About Us',
            img: play,
            time:'location-Mohhammadpur,Dhaka'
        },

        {
            title: 'Services',
            img: pacifier,
            time:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, adipisci.'
        }

    ]
    return (

        <footer className="footer">
            <div className="row">
                {
                    footerData.map(works => <FooterCol works={works}></FooterCol>)
                }
            </div>

                <div className="text-secondary">
                    <h6 className="text-center">NewsLetter</h6>
                <div style={{width:"50%", alignContent:"center"}}class="input-group  ms-5 p-3" >
               
               <input type="email" class="form-control" placeholder="email" aria-label="email" aria-describedby="button-addon2" />
               <button class="btn btn-brand" type="button" id="button-addon2">Submit</button>
           </div>
                </div>
                    
                <div className=" mt-3">
                
                <h5 className="text-secondary d-flex justify-content-center p-3">Contact us</h5>
                <div className="d-flex justify-content-center">
                <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                <FontAwesomeIcon className="icon active-icon" icon={faFacebookF} />
                </div>
                        
                </div>

            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </footer>


    );
};

export default Footer;