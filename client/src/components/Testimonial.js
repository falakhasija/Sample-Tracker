import React from 'react';
import cn from 'classnames';

import styles from './Testimonial.module.scss';
import { Link } from 'react-router-dom';

export default function Testimonial(props) {
  return (
    <div className={cn('testimonial', styles.block, styles.block_layout)}>
      <div
        style={{ '--src': `url(${require('assets/e8546f4158e5e133af71fb462cb9a700.png').default})` }}
        className={cn(styles.image, styles.image_layout)}
      />
      <div
        style={{ '--src': `url(${require('assets/9dd383d4ae67e30c7412deecfc92a964.png').default})` }}
        className={cn(styles.decorator, styles.decorator_layout)}
      />

      <div className={cn(styles.flex, styles.flex_layout)}>
        <div className={cn(styles.flex1, styles.flex1_layout)}>
          <div className={cn(styles.flex1_item)}>
            <div
              style={{ '--src': `url(${require('assets/85c92818c315d0fdd655b5c916ca65e0.png').default})` }}
              className={cn(styles.image1, styles.image1_layout)}
            />
          </div>
          <div className={cn(styles.flex1_spacer)} />
          <h2 className={cn(styles.medium_title_box, styles.medium_title_box_layout)}>
            <pre className={cn(styles.medium_title)}>{'Find My Sample '}</pre>
          </h2>
          <div className={cn(styles.flex1_spacer1)} />
          <Link to='/' style={{ textDecoration: 'none' }} className={cn(styles.big_title, styles.big_title_layout)}>{'Home'}</Link>
          <div className={cn(styles.flex1_spacer2)} />
          <Link to='/patientLogin' style={{ textDecoration: 'none' }} className={cn(styles.big_title2, styles.big_title2_layout)}>{'Track My Sample'}</Link>
          <div className={cn(styles.flex1_spacer3)} />
          <h1 className={cn(styles.big_title3, styles.big_title3_layout)}>{'Testimonials'}</h1>
          <div className={cn(styles.flex1_spacer4)} />
          <Link to='/aboutus' style={{ textDecoration: 'none' }} className={cn(styles.big_title, styles.big_title_layout1)}>{'About Us'}</Link>
          <div className={cn(styles.flex1_spacer5)} />
          <div className={cn(styles.flex1_item1)}>
            <div className={cn(styles.block1, styles.block1_layout)}>
              <Link to='/login' style={{ textDecoration: 'none' }} className={cn(styles.big_title1, styles.big_title1_layout)}>{'Login'}</Link>
            </div>
          </div>
        </div>

        <h1 className={cn(styles.hero_title, styles.hero_title_layout)}>{'Don’t take our word for it.'}</h1>

        <div className={cn(styles.flex2, styles.flex2_layout)}>
          <div className={cn(styles.flex2_item)}>
            <div className={cn(styles.cover_block2, styles.cover_block2_layout)}>
              <div className={cn(styles.flex3, styles.flex3_layout)}>
                <div className={cn(styles.flex4, styles.flex4_layout)}>
                  <div className={cn(styles.flex4_item)}>
                    <div
                      style={{ '--src': `url(${require('assets/59eb8595b6792dbf5c782094a5893f43.png').default})` }}
                      className={cn(styles.icon, styles.icon_layout)}
                    />
                  </div>
                  <div className={cn(styles.flex4_spacer)} />
                  <div className={cn(styles.flex4_item1)}>
                    <div className={cn(styles.flex5, styles.flex5_layout)}>
                      <h1 className={cn(styles.big_title5, styles.big_title5_layout)}>{'Medikare'}</h1>
                      <h4 className={cn(styles.highlights, styles.highlights_layout)}>{'June 1st, 2022'}</h4>
                    </div>
                  </div>
                </div>

                <h1 className={cn(styles.big_title4, styles.big_title4_layout)}>
                  {
                    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
                  }
                </h1>
              </div>
            </div>
          </div>
          <div className={cn(styles.flex2_spacer)} />
          <div className={cn(styles.flex2_item1)}>
            <div className={cn(styles.flex6, styles.flex6_layout)}>
              <div
                style={{ '--src': `url(${require('assets/b4b690cd62ae5682501c51ff3b5350c3.png').default})` }}
                className={cn(styles.image2, styles.image2_layout)}
              />

              <div className={cn(styles.cover_block, styles.cover_block_layout)}>
                <div className={cn(styles.flex7, styles.flex7_layout)}>
                  <div className={cn(styles.flex8, styles.flex8_layout)}>
                    <div className={cn(styles.flex8_item)}>
                      <div
                        style={{ '--src': `url(${require('assets/463b66cbd10f620816628c07393badd5.png').default})` }}
                        className={cn(styles.icon, styles.icon_layout)}
                      />
                    </div>
                    <div className={cn(styles.flex8_spacer)} />
                    <div className={cn(styles.flex8_item1)}>
                      <div className={cn(styles.flex9, styles.flex9_layout)}>
                        <h1 className={cn(styles.big_title5, styles.big_title5_layout1)}>{'Red Cross'}</h1>
                        <h4 className={cn(styles.highlights, styles.highlights_layout1)}>{'February 21st, 2022'}</h4>
                      </div>
                    </div>
                  </div>

                  <h1 className={cn(styles.big_title4, styles.big_title4_layout1)}>
                    {
                      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
                    }
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className={cn(styles.flex2_spacer1)} />
          <div className={cn(styles.flex2_item)}>
            <div className={cn(styles.flex10, styles.flex10_layout)}>
              <div className={cn(styles.flex10_spacer)} />

              <div className={cn(styles.cover_block, styles.cover_block_layout1)}>
                <div className={cn(styles.flex11, styles.flex11_layout)}>
                  <div className={cn(styles.flex12, styles.flex12_layout)}>
                    <div className={cn(styles.flex12_item)}>
                      <div
                        style={{ '--src': `url(${require('assets/eb3b81502b3c61652a29020fbac0143a.png').default})` }}
                        className={cn(styles.icon, styles.icon_layout)}
                      />
                    </div>
                    <div className={cn(styles.flex12_spacer)} />
                    <div className={cn(styles.flex12_item1)}>
                      <div className={cn(styles.flex13, styles.flex13_layout)}>
                        <h1 className={cn(styles.big_title5, styles.big_title5_layout)}>{'DiagnosisHub'}</h1>
                        <h4 className={cn(styles.highlights, styles.highlights_layout2)}>{'February 21st, 2022'}</h4>
                      </div>
                    </div>
                  </div>

                  <h1 className={cn(styles.big_title4, styles.big_title4_layout2)}>
                    {
                      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
                    }
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Testimonial.inStorybook = true;
