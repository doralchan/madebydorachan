import React, { Component } from 'react';
import classNames from 'classnames';

import { Fade } from 'react-reveal';

import Post from '../post';
import Profile4 from '../../assets/profile_4.svg';
import Coffee from '../../assets/spot-illo-coffee.svg';

import Burger from '../../assets/burger.png';

import './style.scss';

class Blog extends Component {
  render() {
    const blogClasses = classNames('blog', this.props.className);

    return (
      <div id='blog' className={ blogClasses }>
        <div className='blog-profile'><img src={ Profile4 } alt='' /></div>
        <Fade bottom>
          <Post title='Blog Entry 1' linkTo='https://medium.com/@doralchan/css-grid-burger-b2df6991c194' imgSrc={ Burger }>
            CSS Grid Burger
          </Post>
          <Post title='Blog Entry 2'>
            Planning a Tiny Design Summit
          </Post>
        </Fade>
        <Fade bottom delay={ 400 }>
          <Post title='Blog Entry 3'>
            Avoid Bias in User Research
          </Post>
          <Post title='Blog Entry 4'>
            Building a Wedding Website
          </Post>
        </Fade>
        <div className='blog-coffee'><img src={ Coffee } alt='' /></div>
      </div>
    )
  }
}

export default Blog;
