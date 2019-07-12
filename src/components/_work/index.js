import React, { Component } from 'react';
import classNames from 'classnames';

import { ModalContainer, ModalRoute } from 'react-router-modal';
import { BrowserRouter } from 'react-router-dom';

import Table from '../table';
import projects from './projects.json';

import BusinessSetup from './project_business_setup';
import TimecardIntegrations from './project_timecard_integrations';
import SquareDesignSummit from './project_square_design_summit';
import YearEnd from './project_year_end';
import SquareApp from './project_square_app';
import Onboarding from './project_onboarding';
import Chat from './project_chat';
import Guide from './project_guide';
import Garnishments from './project_garnishments';
import PayrollReview from './project_payroll_review';
import Dashboard from './project_dashboard';
import Sections from './project_sections';
import BoxHackathon from './project_box_hackathon';
import Dinobi from './project_dinobi';

import './style.scss';

class Work extends Component {
  constructor() {
    super();

    this.state = {
      posts: {}
    }

  }

  componentWillMount() {
    this.setState({
      posts: projects
    })
  }

  render() {
    const workClasses = classNames('work', this.props.className);

    return (
      <BrowserRouter>
        <div id='work' className={ workClasses }>
          <h4 className='work-title'>Selected Works</h4>
          <Table>
            {
              Object
              .keys(this.state.posts)
              .map(key => <Table.Row key={key} index={key} details={this.state.posts[key]} />)
            }
          </Table>
          <ModalRoute component={ BusinessSetup } path='/project_business_setup' parentPath='/' />
          <ModalRoute component={ TimecardIntegrations } path='/project_timecard_integrations' parentPath='/' />
          <ModalRoute component={ SquareDesignSummit } path='/project_square_design_summit' parentPath='/' />
          <ModalRoute component={ YearEnd } path='/project_year_end' parentPath='/' />
          <ModalRoute component={ SquareApp } path='/project_square_app' parentPath='/' />
          <ModalRoute component={ Onboarding } path='/project_onboarding' parentPath='/' />
          <ModalRoute component={ Chat } path='/project_chat' parentPath='/' />
          <ModalRoute component={ Guide } path='/project_guide' parentPath='/' />
          <ModalRoute component={ Garnishments } path='/project_garnishments' parentPath='/' />
          <ModalRoute component={ PayrollReview } path='/project_payroll_review' parentPath='/' />
          <ModalRoute component={ Dashboard } path='/project_dashboard' parentPath='/' />
          <ModalRoute component={ Sections } path='/project_sections' parentPath='/' />
          <ModalRoute component={ BoxHackathon } path='/project_box_hackathon' parentPath='/' />
          <ModalRoute component={ Dinobi } path='/project_dinobi' parentPath='/' />
          <ModalContainer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Work;
