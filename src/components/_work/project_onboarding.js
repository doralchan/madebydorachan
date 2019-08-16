import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

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
        handleClose={ this.props.closeModal }
        path='/project_chat'>
        <Modal.Detail subtitle='Context'>
          Gusto was originally ZenPayroll, a startup with an onboarding experience designed for those who were already sold on payroll. It had been years since this flow was touched. With the widening user base, it became a major strain to the funnel of customers coming in who simply wanted to browse the product. The goal was to introduce the brand while progressively demonstrating value and building trust. NBD. While this was the primary goal, I had a secondary goal of reducing the need for manual data entry. Integrations introduced an opportunity for automation, and increased probability of feature adoption.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          This was one of the largest projects I've completed at Gusto. It required major collaboration with multiple internal teams, including growth, risk, engineering, and more. Onboarding required research on multiple fronts since it heavily touched entry points at the landing page, pricing, navigation, dashboard and promotional content. With the massive scope of this project, it was necessary to break it down by phases.
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ Onboarding1 } />
          <Image imgSrc={ Onboarding2 } />
          <Image imgSrc={ Onboarding3 } />
          <Image imgSrc={ Onboarding4 } />
          <Image imgSrc={ Onboarding5 } />
          <Image imgSrc={ Onboarding6 } />
          <Image imgSrc={ Onboarding7 } />
          <Image imgSrc={ Onboarding8 } />
          <Image imgSrc={ Onboarding9 } />
          <Image imgSrc={ Onboarding10 } />
          <Image imgSrc={ Onboarding11 } />
          <Image imgSrc={ Onboarding12 } />
          <Image imgSrc={ Onboarding13 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Onboarding;
