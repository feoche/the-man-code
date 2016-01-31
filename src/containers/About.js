import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';

import Background from '../components/Background';
import Title from '../components/Title';

export default class About extends Component {
  render() {
    return (
    <div className="bg">
      <div className="about">
        <div className="content">
          <div className="title"></div>
          <div className="character">
              <span>
                <img src="https://pbs.twimg.com/profile_images/662405657979654144/bzYQE3Qz_400x400.jpg"/>
                <a href="https://twitter.com/FlavienAuffret">@FlavienAuffret</a>
              </span>
              <span>
                <div className="name">
                  Flavien Auffret
                </div>
                <div className="role">
                  Entertainment - Pubic relation - Shake That Ass Maker - Scripting
                </div>
              </span>
          </div>
          <div className="character">
              <span>
                <img src="https://pbs.twimg.com/profile_images/566924821133422593/-So3Vg2x_400x400.png"/>
                <a href="https://twitter.com/YoruNoHikage">@YoruNoHikage</a>
              </span>
              <span>
                <div className="name">
                  Alexis Launay
                </div>
                <div className="role">
                  Lead Developer - Talented actor - Sleepy guy
                </div>
              </span>
          </div>
          <div className="character">
              <span>
                <img src="https://pbs.twimg.com/profile_images/646818795877715968/kX9LcqdA_400x400.jpg"/>
                <a href="https://twitter.com/feoche">@feoche</a>
              </span>
              <span>
                <div className="name">
                  François Eoche
                </div>
                <div className="role">
                  Developer - Graphical design - Weirdo
                </div>
              </span>
          </div>
          <button onClick={() => history.push('/')}>Take me back !</button>
        </div>
      </div>
    </div>
    );
  }
}
