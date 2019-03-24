import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let mainClass
    let layoutSplit

    if (location.pathname === rootPath) {
      header = (
        <div className="Layout__left">
          <h1 className="logo">
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </div>
      )
      mainClass = ("Layout__right")
      layoutSplit = ("Layout-split")
    } else {
      header = (
        <h3
          style={{
            fontFamily: `CompassPro, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
      mainClass = ("Layout__wrong")
      layoutSplit = ("Layout-merge")
    }
    return (
      <div className="App">
        <div className={layoutSplit}>
          <header>{header}</header>
          <main className={mainClass}>{children}</main>
          </div>
          
      </div>
    )
  }
}

export default Layout
