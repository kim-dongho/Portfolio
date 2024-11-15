import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const headerStyle = css`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 10px;
    font-weight: 600;
    font-size: 18px;
  }
`

const Header = () => {
  return (
    <header css={headerStyle}>
      <h2>PORTFOLIO</h2>
      <ul>
        <li>HOME</li>
        <li>RESUME</li>
        <li>PROJECT</li>
      </ul>
    </header>
  )
}

export default Header
