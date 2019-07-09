import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Fade } from 'react-reveal';

import Card from '../card';
import Icon from '../icon';

import Profile3 from '../../assets/profile_3.svg';
import IconHexagon from '../../assets/icon-hexagon.svg';
import IconTriangle from '../../assets/icon-triangle.svg';
import IconSquare from '../../assets/icon-square.svg';

import './style.scss';

class SkillsCard extends Component {
  static propTypes = {
    iconSrc: PropTypes.string,
    cardTitle: PropTypes.string
  }

  render() {
    return (
      <Card className='skills-card'>
        <Icon iconSize='sm' iconSrc={ this.props.iconSrc } className='skills-card-icon' />
        <div className='skills-card-content'>
          <h5 className='margin-bottom-8px'>{ this.props.cardTitle }</h5>
          <div>{ this.props.children }</div>
        </div>
      </Card>
    )
  }

}

class Skills extends Component {
  renderUX () {
    return (
      <Fade bottom className='skill'>
        <SkillsCard cardTitle='User Experience' iconSrc={ IconHexagon }>
            I believe empathy helps create better experiences. By identifying painpoints, common behaviors and expectations, we give the user a voice which provides guidance in design. Meaningful results are achieved by listening - not what's trending.
        </SkillsCard>
      </Fade>
    );
  }

  renderFrontEnd () {
    return (
      <Fade bottom className='skill' delay={ 200 }>
        <SkillsCard cardTitle='Front-End' iconSrc={ IconTriangle }>
          Staying up to date with modern languages and frameworks empower me to become a better collaborator. I'm able to scope user-facing projects more reliably, provide rapid prototypes for interaction design and generate production level code with testing.
        </SkillsCard>
      </Fade>
    );
  }

  renderSystems () {
    return (
      <Fade bottom className='skill' delay={ 300 }>
        <SkillsCard cardTitle='Design Systems' iconSrc={ IconSquare }>
          Systems enable efficiency and provide a platform for others to design off of. A good one helps maintain what works, discourages repeat failures, and remains flexible enough to respond to changing environments. I frequently advocate for modularization.
        </SkillsCard>
      </Fade>
    );
  }

  render() {
    const skillsClasses = classNames('skills', this.props.className);

    return (
      <div id='skills' className={ skillsClasses }>
        <div className='skills-cards'>
          { this.renderUX() }
          { this.renderFrontEnd() }
          { this.renderSystems() }
        </div>
        <div className='skills-background' />
        <div className='skills-profile'><img src={ Profile3 } alt='' /></div>
      </div>
    )
  }
}

export default Skills;
