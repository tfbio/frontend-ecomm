import { useState } from "react";
import { BiArrowToTop } from 'react-icons/bi';
import styles from './backtotop.module.scss';
import { useEffect } from "react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  function toggleVisility() {
    const scrolledPage = document.documentElement.scrollTop
    
    if(scrolledPage > 280) {
      setIsVisible(true)
    } else{
      setIsVisible(false)
    }
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(()=>{
    window.addEventListener('scroll', toggleVisility)
  },[])
  

  return(
    isVisible ? (
      <button className={styles.button} onClick={() => scrollToTop()}>
        <BiArrowToTop />
      </button>
    ) : (
      <></>
    )
  )
}
