import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="col solutions">
                    <h6>Solutions</h6>
                    <ul>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Analytics</a></li>
                        <li><a href="#">Commerce</a></li>
                        <li><a href="#">Insights</a></li>
                    </ul>
                </div>
                <div className="col support">
                    <h6>Support</h6>
                    <ul>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">API Status</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h6>Company</h6>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h6>Legal</h6>
                    <ul>
                        <li><a href="#">Claim</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
                <div className="col-subscribe">
                    <h6>Subscribe to our newsletter</h6>
                    <p>
                        The latest news, articles, and resources, sent to your inbox weekly.
            </p>
                    <div className="subscribe">
                        <input type="email" placeholder="Enter your email" /><button>
                            Subscribe
              </button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="content">
                    <div className="rights">
                        <p>&copy; Workflow, Inc. All rights reserved.</p>
                    </div>
                    <div>
                        <FaFacebook size={20} style={{color: '#d3d3d3', marginRight:'10px'}} />
                        <FaInstagram size={20} style={{color: '#d3d3d3', marginRight:'10px'}}  />
                        <FaTwitter size={20} style={{color: '#d3d3d3', marginRight:'10px'}} />
                        <FaGithub size={20} style={{color: '#d3d3d3', marginRight:'10px'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
