import React, { Component } from 'react';
import classNames from 'classnames';

import { Fade } from 'react-reveal';

import Post from '../post';
import Profile4 from '../../assets/profile_4.svg';

import Burger from '../../assets/burger.png';
import Form from '../../assets/form.png';
import Research from '../../assets/research.png';

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
          <Post title='Blog Entry 2' linkTo='https://medium.com/@doralchan/netlify-and-next-js-form-f46149b7a222' imgSrc={ Form }>
            <strong>Netlify and Next.js Form</strong>
          </Post>
        </Fade>
        <Fade bottom delay={ 400 }>
          <Post title='Blog Entry 3' linkTo='https://medium.com/@doralchan/avoiding-bias-in-user-interviews-d23aa2fb4fd2' imgSrc={ Research }>
            <strong>Avoid Bias in User Interviews</strong>
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
