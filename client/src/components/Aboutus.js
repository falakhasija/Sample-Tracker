import React from 'react';
import cn from 'classnames';

import styles from './Aboutus.module.scss';
import { Link } from 'react-router-dom';

export default function Aboutus(props) {
  return (
    <div className={cn('aboutus', styles.block, styles.block_layout)}>
      <div
        style={{ '--src': `url(${require('assets/9dd383d4ae67e30c7412deecfc92a964.png').default})` }}
        className={cn(styles.decorator, styles.decorator_layout)}
      />

      <div className={cn(styles.flex, styles.flex_layout)}>
        <div className={cn(styles.flex1, styles.flex1_layout)}>
          <div className={cn(styles.flex1_item)}>
            <div
              style={{ '--src': `url(${require('assets/85c92818c315d0fdd655b5c916ca65e0.png').default})` }}
              className={cn(styles.image2, styles.image2_layout)}
            />
          </div>
          <div className={cn(styles.flex1_spacer)} />
          <h2 className={cn(styles.medium_title_box, styles.medium_title_box_layout)}>
            <pre className={cn(styles.medium_title)}>{'Find My Sample '}</pre>
          </h2>
          <div className={cn(styles.flex1_spacer1)} />
          <Link to='/' style={{ textDecoration: 'none' }} className={cn(styles.big_title, styles.big_title_layout)}>{'Home'}</Link>
          <div className={cn(styles.flex1_spacer2)} />
          <Link to='/patientLogin' style={{ textDecoration: 'none' }}className={cn(styles.big_title, styles.big_title_layout)}>{'Track My Sample'}</Link>
          <div className={cn(styles.flex1_spacer3)} />
          <Link to='/testimonial' style={{ textDecoration: 'none' }} className={cn(styles.big_title, styles.big_title_layout1)}>{'Testimonials'}</Link>
          <div className={cn(styles.flex1_spacer4)} />
          <h1 className={cn(styles.big_title2, styles.big_title2_layout)}>{'About Us'}</h1>
          <div className={cn(styles.flex1_spacer5)} />
          <div className={cn(styles.flex1_item1)}>
            <div className={cn(styles.block1, styles.block1_layout)}>
              <Link to='/login' style={{ textDecoration: 'none' }} className={cn(styles.big_title1, styles.big_title1_layout)}>{'Login'}</Link>
            </div>
          </div>
        </div>

        <div className={cn(styles.flex2, styles.flex2_layout)}>
          <div className={cn(styles.flex2_item)}>
            <div className={cn(styles.flex3, styles.flex3_layout)}>
              <h1 className={cn(styles.hero_title_box, styles.hero_title_box_layout)}>
                <pre className={cn(styles.hero_title)}>
                  {'We handle your patients’ blood \nsamples, so you don’t have to.'}
                </pre>
              </h1>
              <h1 className={cn(styles.big_title3_box, styles.big_title3_box_layout)}>
                <pre className={cn(styles.big_title3)}>
                  {'Right from the moment you collect the samples, \ntill the correct diagnosis reaches your patients.'}
                </pre>
              </h1>

              <div className={cn(styles.group, styles.group_layout)}>
                <div
                  style={{ '--src': `url(${require('assets/7047e697f0a73771f0f713f88796a14a.png').default})` }}
                  className={cn(styles.image1, styles.image1_layout)}
                />
                <h1 className={cn(styles.big_title4_box, styles.big_title4_box_layout)}>
                  <pre className={cn(styles.big_title4)}>
                    <span className={cn(styles.big_title4_span0)}>
                      {
                        'Find My Sample helps you at very point of that\njourney with simple dashboards, insightful data\n'
                      }
                    </span>
                    <span className={cn(styles.big_title4_span1)}>{'& a lot more.'}</span>
                  </pre>
                </h1>
              </div>
            </div>
          </div>
          <div className={cn(styles.flex2_spacer)} />
          <div className={cn(styles.flex2_item1)}>
            <div className={cn(styles.group, styles.group_layout1)}>
              <div
                style={{ '--src': `url(${require('assets/e8546f4158e5e133af71fb462cb9a700.png').default})` }}
                className={cn(styles.image, styles.image_layout)}
              />
              <div
                style={{ '--src': `url(${require('assets/b5002f8e30f1dee04b217caa1737e1d7.png').default})` }}
                className={cn(styles.image3, styles.image3_layout)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Aboutus.inStorybook = true;
