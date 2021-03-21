import React from 'react';

import css from './section_3.module.scss';
import img5 from '../../assets/img/img-5.jpg';

function Section3() {
  return (
    <section className={css.container}>
      <h1>Build your needs with Archmove</h1>
      <div className={css.description}>
        <img src={img5} alt="team pic"/>
        <div className={css.text}>

          <article className={css.paragraph1}>
            <h4>100% guaranteed project completion</h4>
            <p>Build safe, comfortable and transparent with a project management
              application with a joint account.</p>
          </article>


          <article className={css.paragraph2}>
            <h4>No additional fees</h4>
            <p>There are no hidden costs. The value of the offer you get is the value you paid.</p>
          </article>

          <article className={css.paragraph3}>
            <h4>Get escort from the Team </h4>
            <p>Monitor reports from the Arsitag team who check directly in the field.</p>
          </article>

          <button>FREE CONSULTATION</button>
        </div>
      </div>
    </section>
  );
}

export default Section3;
