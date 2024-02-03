import React, { useState } from 'react'
import "./BurgerMenu.scss"
import BurgerLogoTab from "../../resources/svg/Logo.svg"
import BurgerLogoMob from "../../resources/svg/BurgerLogoMob.svg"
import CloseButton from "../../resources/svg/closeButton.svg"
import giveSvg from '../../layouts/SvgFunction'
import ArrowRight from "../../resources/svg/arrowRightBurger.svg"
import Profile from "../../resources/svg/Profile.svg"
import Balance from "../../resources/svg/balance.svg"

export const BurgerMenu = ({setOpenBurger,openBurger,modalInfo}) => {
  const [open, setOpen] = useState(false)
  const [activeLng, setActiveLng] = useState("Укр")
  const [passiveLng, setPassiveLng] = useState("Eng")
  return (
    <div className='burger' style={openBurger ? {displey: "block"} : {display:"none"}}>
        <div className='burger_head'>
            <img src={window.innerWidth <= 465 ? BurgerLogoMob : BurgerLogoTab} alt='Burger_logo'/>
            <img src={CloseButton} onClick={() => setOpenBurger(false)} alt='close_burger'/>
        </div>
        <div className='line'></div>
        <div className='burger_container'>
          <div className='burger_language' onClick={() => setOpen(!open)}>
            <div style={{display: "flex", alignItems: "end"}}>
              <p>{activeLng}</p>
              {giveSvg("arrowDropLng")}
            </div>
            <p style={open ? {display: "block"}: {display: "none"}} onClick={() => {
              setActiveLng(passiveLng)
              setPassiveLng(activeLng)
            }}>{passiveLng}</p>
          </div>
          <ul>
            <li className='burger_item'>
              <div style={{display: "flex", alignItems: "center"}}>
                <img src={Profile} style={{marginRight: "16px"}} alt='Profile'/>Профіль користувача
              </div>
            </li>
            <li className='burger_item'>
              <div style={{display: "flex", alignItems: "center"}}>
                <img src={Balance} style={{marginRight: "16px"}} alt='Balance'/>Порівняння
              </div>
            </li>
            {modalInfo.map((item, i) => {
              return (
                <li className='burger_item' style={i === 5 ? {color: "#F79009"} : null}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <img src={item.tabsImg} className='burger_icon' alt='Profile'/>{item.catalog}
                  </div>
                  <img src={ArrowRight} alt='Arrow'/>
                </li>
              )})}
          </ul>
        </div>
    </div>
  )
}