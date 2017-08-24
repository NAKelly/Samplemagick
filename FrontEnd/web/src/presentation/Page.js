import React from 'react';
import { IndexLink, Link} from 'react-router'

export const PageView = (props) => {
  return (
    <div>
      <Header component={props.component} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export const LoadingScreen = (props) => {
  return (
    <div>Loading...</div>
  )
}

const Header = (props) => {
  let component = props.component;
  return(
    <header>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <div className="left">
            <a href="#mobile-menu" data-activates="mobile-menu" className="button-collapse icon-menu-mobile" onClick={(e) => {component.toggleMobileMenu(e).bind(component)}}><i className="material-icons">menu</i></a>
            <IndexLink to={'/'} activeClassName="active" className="left hide-on-large-only">
              <img src={require('./../assets/img/logo.svg')} alt="title" className="margin-top-10"/>
            </IndexLink>
            <IndexLink to={'/'} activeClassName="active" className="left hide-on-med-and-down">
              <img src={require('./../assets/img/logo.svg')} alt="title" className="margin-top-10 padding-left-15 padding-right-15"/>
            </IndexLink>
            <ul className="left hide-on-med-and-down">
              <li>
                <IndexLink to={'/'} activeClassName="active" className="nav-link">Home</IndexLink>
              </li>
              <li>
                <Link to={'/about'} activeClassName="active" className="nav-link">About</Link>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-menu">
              <div className="icon-close">
                <i className="material-icons pointer" onClick={() => {
                  window.$('.icon-menu-mobile').sideNav('hide') 
                }}>close</i>
              </div>
              <li>
                <img src={require('./../assets/img/logo.svg')} alt="title" className="margin-top-10 margin-left-15"/>
              </li>
              <li>
                <IndexLink to={'/'} activeClassName="active" className="nav-link">Home</IndexLink>
              </li>
              <li>
                <Link to={'/about'} activeClassName="active" className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Footer = (props) => {
  return(
    <footer>
      <div className="container">Footer</div>
    </footer>
  )
}