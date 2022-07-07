import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Landing.module.scss';

export default function Landing(props) {
  return (
    <div className={cn('landing', styles.group, styles.group_layout)}>
      <div
        style={{ '--src': `url(${require('assets/5316791efdc0ef40dcd129685ad49204.png').default})` }}
        className={cn(styles.img, styles.img_layout)}
      />

      <div className={cn(styles.flex, styles.flex_layout)}>
        <div className={cn(styles.flex1, styles.flex1_layout)}>
          <div className={cn(styles.flex1_item)}>
            <div
              style={{ '--src': `url(${require('assets/79f9358d920542f24c04fe2b976e583c.png').default})` }}
              className={cn(styles.img, styles.img_layout1)}
            />
          </div>
          <div className={cn(styles.flex1_spacer)} />
          <div className={cn(styles.txt_box, styles.txt_box_layout)}>
            <pre className={cn(styles.txt)}>{'Find My Sample '}</pre>
          </div>
          <div className={cn(styles.flex1_spacer1)} />
          <div className={cn(styles.txt1, styles.txt1_layout)}>{'Home'}</div>
          <div className={cn(styles.flex1_spacer2)} />
          <Link to='/patientLogin' style={{ textDecoration: 'none' }} className={cn(styles.txt2, styles.txt2_layout)}>{'Track My Sample'}</Link>
          <div className={cn(styles.flex1_spacer3)} />
          <Link to='/testimonial' style={{ textDecoration: 'none' }} className={cn(styles.txt3, styles.txt3_layout)}>{'Testimonials'}</Link>
          <div className={cn(styles.flex1_spacer4)} />
          <Link to='/aboutus' style={{ textDecoration: 'none' }} className={cn(styles.txt4, styles.txt4_layout)}>{'About Us'}</Link>
          <div className={cn(styles.flex1_spacer5)} />
          <div className={cn(styles.flex1_item1)}>
            <div className={cn(styles.group1, styles.group1_layout)}>
              <px-posize track-style='{"flexGrow":1}' x="23px 97fr 0fr" y="6px minmax(0px, 28fr) 19fr">
                <Link to='/login' className={cn(styles.txt5)} style={{ textDecoration: 'none' }}>{'Login'}</Link>
              </px-posize>
            </div>
          </div>
        </div>

        <div className={cn(styles.flex2, styles.flex2_layout)}>
          <div className={cn(styles.flex2_item)}>
            <div className={cn(styles.flex3, styles.flex3_layout)}>
              <div className={cn(styles.txt6_box, styles.txt6_box_layout)}>
                <pre className={cn(styles.txt6)}>{'Diagnostics industry will grow by \n15% CAGR'}</pre>
              </div>
              <div className={cn(styles.txt7, styles.txt7_layout)}>{'Growth is more in tier 2 and 3 cities'}</div>
              <div className={cn(styles.txt8, styles.txt8_layout)}>
                {'Would you like to expand your Path Lab footprint\rby upto 20%?'}
              </div>

              <div className={cn(styles.group2, styles.group2_layout)}>
                <div className={cn(styles.rect, styles.rect_layout)} />
                <Link to='/login' style={{ textDecoration: 'none' }} className={cn(styles.txt9, styles.txt9_layout)}>{'Start Today'}</Link>
              </div>
            </div>
          </div>
          <div className={cn(styles.flex2_spacer)} />
          <div className={cn(styles.flex2_item1)}>
            <div
              style={{ '--src': `url(${require('assets/cca22116023d88bfc96d6367910fe271.png').default})` }}
              className={cn(styles.img, styles.img_layout2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Landing.inStorybook = true;
