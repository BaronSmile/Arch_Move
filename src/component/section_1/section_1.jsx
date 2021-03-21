import React from 'react';

import css from './section_1.module.scss';
import section_1_img from '../../assets/img/section_1.jpg'

function Section1() {
  return (
    <main className={css.container}>
      <h1>Build Your Dream <span>House</span></h1>
      <div className={css.info}>
        <div className={css.description}>
          <p>The first and most trusted marketplace of design & build house in The World. 100% guaranteed Build safe,
            comfortable and transparent with a project management for the best result</p>
          <button>Free Consultation</button>
        </div>
        <img src={section_1_img} alt="pic"/>
      </div>
    </main>
  );
}

export default Section1;