import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>© NCG {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  </div>
)
