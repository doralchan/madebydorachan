import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import Dashboard1 from '../../assets/dashboard_main.png';
import Dashboard2 from '../../assets/dashboard_list.png';
import Dashboard3 from '../../assets/dashboard_engagement.png';
import Dashboard4 from '../../assets/dashboard_planning.png';

class Dashboard extends Component {
  render() {
    return (
      <Modal
        title='Dashboard'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          Certified public accountants perform multiple engagements every year for clients. These could either be in the form of audits or reviews depending on the size of the client. The larger the client, the more complex the engagement. Each engagement has three general phases of review - planning, program and completion. These do not have to be completed in order and can be worked on simultaneously. Within each phase are sections that require thorough review and approval.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          The goal was to provide a method for customers to access their most important engagements. Targeted, procedural goals were to get quick status updates, see recent activity, and navigate to each engagement for a deeper dive into each section. There are permissions considerations where specific CPAs are assigned to engagement teams. They cannnot see the details of other engagments, seeing that it might compromise client privacy. The average range of engagements our customers were conducting at any given time were 1-3. Since they were signing in on a daily basis, we knew a dashboard for status updates and recent activity was ideal. From there, they should be able to jump straight into the engagement. Each phase can have a status since they are worked on simultaneously. This then goes deeper into each section.
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ Dashboard1 } />
          <Image imgSrc={ Dashboard2 } />
          <Image imgSrc={ Dashboard3 } />
          <Image imgSrc={ Dashboard4 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Dashboard;
