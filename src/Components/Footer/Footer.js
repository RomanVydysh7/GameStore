import React from 'react'
import "./Footer.scss"
import { FooterDesktop } from './FooterDesktop/FooterDesktop'
import { FooterTabs } from './FooterTabs/FooterTabs'
import { FooterMobile } from './FooterMobile/FooterMobile'
export const Footer = () => {
  return (
    <div className='footer'>
        <img/>
        <img/>
        <div className="footer_desktop">
            <FooterDesktop />
        </div>
        <div className="footer_tabs">
            <FooterTabs/>
        </div>
        <div className="footer_mobile">
            <FooterMobile/>
        </div>
    </div>
  )
}