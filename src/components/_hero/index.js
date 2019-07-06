import React, { Component } from 'react';
import classNames from 'classnames';

import Nav from '../_nav';

import Profile1 from '../../assets/profile_1.svg';
import Profile2 from '../../assets/profile_2.svg';

import ScrollTo from 'react-scroll-into-view';

import './style.scss';
import '../button/style.scss';

class Hero extends Component {
  render() {
    const heroClasses = classNames('hero', this.props.className);

    return (
      <div className={ heroClasses }>
        <Nav className='hero-nav' />
        <div className='hero-profile-1'><img src={ Profile1 } alt='' /></div>
        <div className='hero-profile-2'><img src={ Profile2 } alt='' /></div>
        <div className='hero-block'>
          <h1 className='hero-block-title'>Hello There</h1>
          <div className='hero-block-desc'>
            I'm Dora, a product and systems designer located in the foggy city of San Francisco
          </div>
          <div className='hero-block-ctas'>
            <ScrollTo selector='#work' className='btn btn-primary block-ctas-btn'>Show Me</ScrollTo>
            <ScrollTo selector='#contact' className='btn btn-secondary block-ctas-btn'>Contact Me</ScrollTo>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
