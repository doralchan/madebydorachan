import React, { Component } from 'react';
import Modal from '../modal';

import Mapping from '../../assets/project_onboarding_mapping.svg';

import Onboarding1 from '../../assets/onboarding_landing.png';
import Onboarding2 from '../../assets/onboarding_signup.png';
import Onboarding3 from '../../assets/onboarding_login.png';
import Onboarding4 from '../../assets/onboarding_basics.png';
import Onboarding5 from '../../assets/onboarding_locations.png';
import Onboarding6 from '../../assets/onboarding_registration.png';
import Onboarding7 from '../../assets/onboarding_completion.png';
import Onboarding8 from '../../assets/onboarding_tour_intro.png';
import Onboarding9 from '../../assets/onboarding_tour_people.png';
import Onboarding10 from '../../assets/onboarding_dash.png';
import Onboarding11 from '../../assets/onboarding_directory.png';
import Onboarding12 from '../../assets/onboarding_payroll.png';
import Onboarding13 from '../../assets/onboarding_schedule.png';

class Onboarding extends Component {
  render() {
    return (
      <Modal
        title='Onboarding'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context' imgSrc={ Mapping }>
          Gusto was originally ZenPayroll, a startup with an onboarding experience designed for those who were already sold on payroll. It had been years since this flow was touched. With the widening user base, it became a major strain to the funnel of customers coming in who simply wanted to browse the product. The goal was to introduce the brand while progressively demonstrating value and building trust. NBD. While this was the primary goal, I had a secondary goal of reducing the need for manual data entry. Integrations introduced an opportunity for automation, and increased probability of feature adoption.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          This was one of the largest projects I've completed at Gusto. It required major collaboration with multiple internal teams, including growth, risk, engineering, and more. Onboarding required research on multiple fronts since it heavily touched entry points at the landing page, pricing, navigation, dashboard and promotional content. With the massive scope of this project, it was necessary to break it down by phases.
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <div><img src={ Onboarding1 } alt='' /></div>
          <div><img src={ Onboarding2 } alt='' /></div>
          <div><img src={ Onboarding3 } alt='' /></div>
          <div><img src={ Onboarding4 } alt='' /></div>
          <div><img src={ Onboarding5 } alt='' /></div>
          <div><img src={ Onboarding6 } alt='' /></div>
          <div><img src={ Onboarding7 } alt='' /></div>
          <div><img src={ Onboarding8 } alt='' /></div>
          <div><img src={ Onboarding9 } alt='' /></div>
          <div><img src={ Onboarding10 } alt='' /></div>
          <div><img src={ Onboarding11 } alt='' /></div>
          <div><img src={ Onboarding12 } alt='' /></div>
          <div><img src={ Onboarding13 } alt='' /></div>
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Onboarding;
