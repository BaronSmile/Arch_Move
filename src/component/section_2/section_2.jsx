import React from 'react';

import css from './section_2.module.scss';
import img1 from '../../assets/img/img-01.png';
import img2 from '../../assets/img/img-02.png';
import img3 from '../../assets/img/img-03.png';
import img4 from '../../assets/img/img-04.png';

function Section2() {
  return (
    <section className={css.section_2}>
      <div className={css.title}>
        <h1 className={css.title}>Build professional valuable room for you</h1>
        <div className={css.arrow}>
          <button/>
          <button className={css.rightArrow}/>
        </div>
      </div>
      <div className={css.gallery}>
        <img src={img1} alt="image1 gallery"/>
        <img src={img2} alt="image2 gallery"/>
        <img src={img3} alt="image3 gallery"/>
        <img src={img4} alt="image4 gallery"/>
      </div>
    </section>
  );
}

export default Section2;