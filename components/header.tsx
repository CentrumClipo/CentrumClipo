"use client";

import React, { Dispatch, SetStateAction } from 'react'
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { HiBars2, HiXMark, HiOutlineHome, HiOutlineIdentification, HiOutlineUserGroup, HiOutlineSwatch, HiOutlineQuestionMarkCircle, HiOutlinePaperAirplane } from "react-icons/hi2"
import '../styles/index.css'

interface Props {
  isVisible: boolean;
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const Header = ({isVisible, isOpened, setOpened} : Props) => {

  return (
    <header className={`fixed top-0 left-0 header flex flex-auto justify-between w-screen  z-50 ${!isVisible && 'bg-teal-700 drop-shadow-sm'} transition-all duration-150`}>
        <div className={`header_links flex py-1 px-2`}>
          <a className={`header_link hover:text-transparent border-teal-600 cursor-pointer ${!isVisible && 'text-2xl hover:opacity-90 hover:text-transparent border-teal-600 hover:border-teal-600 '} logo text-transparent`} onClick={() => window.scrollTo(0, 0)} href='/#' >
            <BsInstagram />
          </a>
          <a target='_blank' href="https://www.facebook.com/CLiPOpl" className={`header_link text-teal-600 border-teal-600 ${!isVisible && 'text-5xl text-white hover:opacity-90 p-0 hover:text-white border-transparent hover:border-transparent'}`}>
            <BsFacebook />
          </a>
          <span className={`${isVisible && 'hidden'} text-white flex justify-center items-center ml-5 text-xs md:text-md md:font-bold lg:text-lg`}>
            CLiPO | Centrum Leczenia i Profilaktyki Otyłości
          </span>
        </div>

        <button onClick={() => setOpened(prev => !prev)} className={`header_burger-btn font-light text-4xl text-center flex justify-center align-center px-4 py-2 z-50 my-auto drop-shadow-sm ${(!isVisible || isOpened) ? 'text-white' : 'text-teal-600'}`}>{isOpened ? <HiXMark /> : <HiBars2 />}</button>

        <div className={`fixed flex m-0 delay-75 ${!isOpened && 'translate-x-full'} z-40 w-screen`}>
          <div className={`w-1/2 md:w-2/3 ${!isOpened && 'scale-0'} transition-all duration-75 ${isOpened && 'bg-gray-600 scale-1'} opacity-50 blur-md relative`} onClick={() => setOpened(false)} />
          <ul className={`nav ${isOpened ? 'translate-x-0' : 'translate-x-full'} text-white transition-all h-dvh w-3/4 md:w-1/3 px-5 py-10 bg-slate-700 rounded-l-2xl shadow-lg`}>
            <li className={`nav_el`}>
              <a onClick={() => {
                  setOpened(false)
                }} href="/#" className={`nav_link cursor-pointer`} >
                <span className={`nav_icon`}>
                  <HiOutlineHome />
                </span>
                Strona główna
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#o-nas" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlineIdentification />
                </span>
                O nas
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#uslugi" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlineSwatch />
                </span>
                Usługi
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#nasi-specjalisci" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlineUserGroup />
                </span>
                Nasi specjaliści
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#faq" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlineQuestionMarkCircle />
                </span>
                Najczęściej zadawane pytania
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#kontakt" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlinePaperAirplane />
                </span>
                Kontakt
              </a>
            </li>
          </ul>
          <span className={`text-[.5rem] text-gray-200 italic absolute bottom-1 right-1`}>
            Centrum Leczenia i Profilaktyki Otyłości
          </span>
        </div>
    </header>
  )
}

export default Header