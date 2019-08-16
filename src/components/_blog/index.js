import React, { Component } from 'react';
import classNames from 'classnames';

import { Fade } from 'react-reveal';

import Post from '../post';
import Profile4 from '../../assets/profile_4.svg';

import Burger from '../../assets/burger.png';
import WomenWhoDesign from '../../assets/women_who_design.png';

import './style.scss';

class Blog extends Component {
  render() {
    const blogClasses = classNames('blog', this.props.className);

    return (
      <div id='blog' className={ blogClasses }>
        <div className='blog-profile'><img src={ Profile4 } alt='' /></div>
        <Fade bottom>
          <Post title='Blog Entry 1' linkTo='https://medium.com/@doralchan/css-grid-burger-b2df6991c194' imgSrc={ Burger }>
            <strong>CSS Grid Burger</strong>
          </Post>
          <Post title='Blog Entry 2' linkTo='https://womenwho.design/' imgSrc={ WomenWhoDesign }>
            <strong>See Product Designers</strong>
          </Post>
        </Fade>
        <Fade bottom delay={ 400 }>
          <Post title='Blog Entry 3'>
            <strong>Avoid Bias in Research</strong>
            <div><small>(Work in Progress)</small></div>
          </Post>
          <Post title='Blog Entry 4'>
            <strong>Building a Wedding Site</strong>
            <div><small>(Work in Progress)</small></div>
          </Post>
        </Fade>
      </div>
    )
  }
}

export default Blog;
