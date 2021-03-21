import React from 'react';

import css from './our-partner.module.scss';

function OurPartner() {
  return (
    <section className={css.ourPartners}>
      <div className={css.container}>
      <h1>Our Partners</h1>
      <div className={css.partners_logo}>
        <span className={css.partner1}/>
        <span className={css.partner2}/>
        <span className={css.partner3}/>
        <span className={css.partner4}/>
        <span className={css.partner5}/>
      </div>
      </div>
    </section>
  );
}

export default OurPartner;
