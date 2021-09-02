import { useEffect } from 'react'

import TextTitle from "../text/TextTitle"
import TextUltra from "../text/TextUltra"

const Header: React.FC = props => {
  useEffect(() => {
    const header : any = document.getElementById('header-landing')

    window.addEventListener('scroll', () => {
      header.style.backgroundSize = 160 - +window.pageYOffset/12 + '%'
    })
  }, [])

  return (
    <header id="header-landing">
      <TextUltra color="light">Travel Norway</TextUltra>
      <TextTitle color="semi-light">With confidence</TextTitle>
    </header>
  )
}

export default Header;