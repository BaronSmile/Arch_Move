import React from 'react';

import img5 from '../../assets/img/image6.png';
import css from './section_5.module.scss';

function Section5(props) {
  return (
    <section className={css.section5}>
      <div className={css.container}>
        <img src={img5} alt="pic arc"/>
        <div className={css.text}>
          <h1>Realize your dream project with <span>Archmove</span></h1>
          <button>FREE CONSULTATION</button>
        </div>
      </div>
    </section>
  );
}

export default Section5;