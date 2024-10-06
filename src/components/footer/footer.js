import React from 'react'
import './footer.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
function Footer() {
  return (
    <>
    <div className='footer-content'>
        <footer className='footer-body'>
            <span className='footer-title'>my page</span>
            <ul className='footer-socials'>
              <li><a href="#"><i className='fa-brands fa-facebook'></i></a></li>
              <li><a href="#"><i className='fa-brands fa-twitter'></i></a></li>
              <li><a href="#"><i className='fa-brands fa-instagram'></i></a></li>
            </ul>
            <div className='footer-info'>
              <ul>
                <li className='footer-list-header'>offers</li>
                <li><a href="#">products</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">categories</a></li>
                <li><a href="#">contact</a></li>
              </ul>

              <ul>
                <li className='footer-list-header'>documents</li>
                <li><a href="#">about</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">term of services</a></li>
                <li><a href="#">cookies</a></li>
              </ul>

              <ul>
                <li className='footer-list-header'>for you</li>
                <li><a href="#">Affilite</a></li>
                <li><a href="#">collaboration</a></li>
                <li><a href="#">sponsorship</a></li>
                <li><a href="#">parternship</a></li>
              </ul>

              <ul>
                <li className='footer-list-header'>for you</li>
                <li><a href="#">Affilite</a></li>
                <li><a href="#">collaboration</a></li>
                <li><a href="#">sponsorship</a></li>
                <li><a href="#">parternship</a></li>
              </ul>
            </div>
            <p>&copy; 2024 my website</p>
        </footer>
        </div>
    </>
  )
}

export default Footer