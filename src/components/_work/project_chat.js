import React, { Component } from 'react';
import Modal from '../modal';

import ReactiveChat from '../../assets/chat_online_reactive.png';
import ProactiveChat from '../../assets/chat_online_proactive.png';
import OfflineChat from '../../assets/chat_offline.png';

class Chat extends Component {
  render() {
    return (
      <Modal
        title='Chat'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          Previous to Gusto offering benefits, chat was not required to comply with the Health Insurance Portability and Accountability Act (HIPAA). With the new release of this product, we needed to immediately switch vendors while taking into account our existing care ticketing system. The goal was to design and implement a customer facing chat tool to be used by both product and sales. This needed to address future scaling needs and reinforce branding attributes.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          Major considerations in this project was internal team availability and the desire for automation. In a matrix, we were looking at online v. offline hours and proactive v. reactive interactions. Customers facing issues off hours were the most vulnerable. We wanted to try to anticipate and address their needs by proactively engaging with them through Gus, the bot.
        </Modal.Detail>
        <Modal.Gallery columns={ 1 }>
          <div><img src={ ReactiveChat } alt='' /></div>
          <div><img src={ ProactiveChat } alt='' /></div>
          <div><img src={ OfflineChat } alt='' /></div>
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Chat;
