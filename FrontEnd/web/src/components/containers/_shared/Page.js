import React from 'react';

import {PageView, LoadingScreen} from './../../views/_shared/Page'

class Page extends React.Component {

  hasData() {
    return true;
  }

  componentDidMount() {
    window.$(".icon-menu-mobile").sideNav({closeOnClick: false});
  }

  mobileMenuShown() {
    return window.$("#mobile-menu").attr('style') === "transform: translateX(0px);"
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.children !== prevProps.children && this.mobileMenuShown()){
      window.$(".icon-menu-mobile").sideNav('hide');
    }
  }

  toggleMobileMenu(event){
    event.preventDefault();
    if (this.mobileMenuShown()){
      window.$(".icon-menu-mobile").sideNav('hide');
    } else {
      window.$(".icon-menu-mobile").sideNav('show');
    }
  }

  render () {
    if (this.hasData()) {
      return <PageView {...this.props} component={this} />
    } else {
      return <LoadingScreen />
    }
  }
}

export default Page;