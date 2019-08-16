import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import ReactiveChat from '../../assets/chat_online_reactive.png';
import ProactiveChat from '../../assets/chat_online_proactive.png';
import OfflineChat from '../../assets/chat_offline.png';

class Chat extends Component {
  render() {
    return (
      <Modal
        title='Chat'
        handleClose={ this.props.closeModal }
        path='/project_guide'>
        <Modal.Detail subtitle='Context'>
          Previous to Gusto offering benefits, chat was not required to comply with the Health Insurance Portability and Accountability Act (HIPAA). With the new release of the benefits product, we needed to immediately switch vendors while taking into account our existing care ticketing system. The goal was to design and implement a customer facing chat tool to be used by both product and sales. This needed to address future scaling needs and reinforce branding attributes.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          Major considerations in this project was internal team availability and the desire for automation. In a matrix, we were looking at online v. offline hours and proactive v. reactive interactions. Online hours meant we had customer support agents available for questions, while offline meant we needed to rely on alternative resources. Proactive meant we would try and anticipate their needs, sharing common articles relevant to the content on the page. Reactive refers to the typical chat we have today in most products. Mirroring the customer interface was the support interface. This internal tool needed to provide chat functionality for incoming messages and display salient customer data, such as business names, phone numbers, past tickets, etc.
        </Modal.Detail>
        <Modal.Gallery columns={ 1 }>
          <Image imgSrc={ ReactiveChat } />
          <Image imgSrc={ ProactiveChat } />
          <Image imgSrc={ OfflineChat } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Chat;
