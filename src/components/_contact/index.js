import React, { Component } from 'react';
import classNames from 'classnames';

import Link from '../link';

import LinkedIn from '../../assets/icon-linkedin.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Dribbble from '../../assets/icon-dribbble.svg';
import Github from '../../assets/icon-github.svg';
import WomenWhoDesign from '../../assets/icon-women.svg';
import Medium from '../../assets/icon-medium.svg';
import Pinterest from '../../assets/icon-pinterest.svg';

import './style.scss';

class Contact extends Component {
  render() {
    const contactClasses = classNames('contact', this.props.className);

    return (
      <div id='contact' className={ contactClasses }>
        <div className='contact-block'>
          <h4 className='contact-block-title'>Contact</h4>
          <div className='contact-block-blurb'>
            If you'd like to chat or see more projects, feel free to ping me @doralchan in any of the ways listed below. I'm usually available for coffee, tacos or boardgames.
          </div>
          <ul className='contact-block-list'>
            <li className='list-item'>
              <Link to='https://www.linkedin.com/in/doralchan/'>
                <img src={ LinkedIn } className='list-item-icon' alt='' />
              </Link>
            </li>
            <li>
              <Link to='https://twitter.com/doralchan'>
                <img src={ Twitter } className='list-item-icon' alt='' />
              </Link>
            </li>
            <li>
              <Link to='https://dribbble.com/doralchan'>
                <img src={ Dribbble } className='list-item-icon' alt='' />
              </Link>
            </li>
            <li>
              <Link to='https://github.com/doralchan'>
                <img src={ Github } className='list-item-icon' alt='' />
              </Link>
            </li>
            <li>
              <Link to='https://womenwho.design/'>
                <img src={ WomenWhoDesign } className='list-item-icon' alt='' />
              </Link>
            </li>
            <li>
              <Link to='https://medium.com/@doralchan'>
                <img src={ Medium } className='list-item-icon' alt='' />
              </Link>
            </li>
            <li>
              <Link to='https://www.pinterest.com/doralchan/'>
                <img src={ Pinterest } className='list-item-icon' alt='' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact;
