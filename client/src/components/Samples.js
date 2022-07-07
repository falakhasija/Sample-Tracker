import React from 'react';
import cn from 'classnames';

import styles from './Samples.module.scss';
import { Link } from 'react-router-dom';
import SampleTable from './SampleTable';

export default function Samples(props) {
  const logout = function(){
    localStorage.removeItem('username');
    props.history.push("/");
  }
  return (
    <div className={cn('samples', styles.block, styles.block_layout)}>
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
          <Link to='/' style={{ textDecoration: 'none' }} className={cn(styles.big_title2, styles.big_title2_layout)}>{'Home'}</Link>
          <div className={cn(styles.flex1_spacer2)} />
          <h1 className={cn(styles.big_title4, styles.big_title4_layout)}>{'Track My Sample'}</h1>
          <div className={cn(styles.flex1_spacer3)} />
          <Link to='/testimonial' style={{ textDecoration: 'none' }} className={cn(styles.big_title2, styles.big_title2_layout1)}>{'Testimonials'}</Link>
          <div className={cn(styles.flex1_spacer4)} />
          <Link to='/aboutus' style={{ textDecoration: 'none' }} className={cn(styles.big_title2, styles.big_title2_layout2)}>{'About Us'}</Link>
          <div className={cn(styles.flex1_spacer5)} />
          <div className={cn(styles.flex1_item1)}>
            <div className={cn(styles.block2, styles.block2_layout)}>
              <h1 onClick={logout} style={{cursor:"pointer"}} className={cn(styles.big_title3, styles.big_title3_layout)}>{'Logout'}</h1>
            </div>
          </div>
        </div>

        <div className={cn(styles.flex2, styles.flex2_layout)}>
          <div className={cn(styles.flex2_item)}>
            <div className={cn(styles.content_box1, styles.content_box1_layout)}>
              <div
                style={{ '--src': `url(${require('assets/a01bb70472530a62a4dc677ca0c63ed8.png').default})` }}
                className={cn(styles.icon, styles.icon_layout)}
              />
              <h1 className={cn(styles.big_title1, styles.big_title1_layout)}>{'My Samples'}</h1>
            </div>
          </div>
          <div className={cn(styles.flex2_spacer)} />
          <div className={cn(styles.flex2_item1)}>
            <div className={cn(styles.group, styles.group_layout)}>
              <div
                style={{ '--src': `url(${require('assets/e8546f4158e5e133af71fb462cb9a700.png').default})` }}
                className={cn(styles.image, styles.image_layout)}
              />

              <div className={cn(styles.content_box, styles.content_box_layout)}>
                <div
                  style={{ '--src': `url(${require('assets/ae282a3e93c153147233aff7301cb48f.png').default})` }}
                  className={cn(styles.icon1, styles.icon1_layout)}
                />
                <Link to='/reports' style={{ textDecoration: 'none' }} className={cn(styles.big_title, styles.big_title_layout)}>{'My Reports'}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={cn(styles.group, styles.group_layout1)}>
          <div
            style={{ '--src': `url(${require('assets/7047e697f0a73771f0f713f88796a14a.png').default})` }}
            className={cn(styles.image1, styles.image1_layout)}
          />

          <div className={cn(styles.cover_block7, styles.cover_block7_layout)}>
            <div className={cn(styles.flex3, styles.flex3_layout)}>
              <h1 className={cn(styles.big_title5, styles.big_title5_layout)}>{'My Samples'}</h1>
              <br/>
              <br/>
              <SampleTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Samples.inStorybook = true;
