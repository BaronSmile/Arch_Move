import React from 'react';

import css from './section_4.module.scss';

function Section4() {
  return (
    <section className={css.section4}>
      <div className={css.container}>
        <h1>Sound Too Good To Be True?</h1>
        <p className={css.comment}>
          <span className={css.symbol}>&#10077;</span>
          <blockquote>
            We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our
            Petite cabin and receive feedback from people from all over the U.S. and even further.
            <p className={css.user}><span className={css.name}>Adam Morph </span>— CEO Alfatech</p>
          </blockquote>

        </p>

        <div className={css.arrow}>
          <button/>
          <button className={css.rightArrow}/>
        </div>

      </div>
    </section>
  );
}

export default Section4;