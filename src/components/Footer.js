import React from 'react'
import './Footer.css'
import { Link } from 'gatsby'

import { Linkedin, Globe, Mail, Twitter } from 'react-feather'

export default () => (
  <div>
    <footer className="footer">
      <div className="container row mx-auto">
        <div className="col-lg-3 mx-auto text-center">
          <ul>
            <li>
              <h5>Pages</h5>
            </li>
            <li>
              <Link to="/services/">Services</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 mx-auto text-center">
          <ul>
            <li>
              <h5>Services</h5>
            </li>
            <li>
              <Link to="/services/">Consumer Products</Link>
            </li>
            <li>
              <Link to="/services/">Business Development</Link>
            </li>
            <li>
              <Link to="/contact/">Strategic Partnerships</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 mx-auto text-center">
          <ul>
            <li>
              <h5>Contact</h5>
            </li>
            <li>
              <Link to="###">hello@ncg.com</Link>
            </li>
            <li>
              <Link to="/blog/">Broadway Denver, CO</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="credit">
        <div className="py-4">
          <span className="text-center">
            © {new Date().getFullYear()}&nbsp;
            <Link to="/" alt="National Concessions Group">
              National Concessions Group
            </Link>
            .
          </span>
        </div>

        <div className="container col-lg-6 text-center">
          <a href="#" alt="#" target="_blank" rel="noopener noreferrer">
            <Linkedin size="3rem" className="footer-li p-2" />
          </a>
          <a href="#" alt="#" target="_blank" rel="noopener noreferrer">
            <Twitter size="3rem" className="footer-li p-2" />
          </a>
          <a href="#" alt="#" target="_blank" rel="noopener noreferrer">
            <Mail size="3rem" className="footer-li p-2" />
          </a>
        </div>
      </div>
    </footer>
  </div>
)
