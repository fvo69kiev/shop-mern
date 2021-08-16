import React, {useState} from 'react'


const ScrollTop = () =>{

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    }

    const scrollToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    window.addEventListener('scroll', checkScrollTop)

    return (
        <span
            className="scrollTop"
            onClick={scrollToTop}
            style={{display: showScroll ? 'flex' : 'none'}}
        >
            <i className="fas fa-chevron-circle-up fa-3x" title='To Top'></i>
        </span>
    )
}

export default ScrollTop