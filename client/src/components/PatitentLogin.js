import React, {useState} from 'react';
import cn from 'classnames';

import styles from './PatitentLogin.module.scss';
import { Link } from 'react-router-dom';

export default function PatitentLogin(props) {
  const [number,setNumber] = useState("");

  async function login() {

    const payload = {number};
    
    let response = await fetch("https://patient-sample-tracker-backend-urtjok3rza-wl.a.run.app/otpgen/", {
      method:"POST",
      mode: 'cors',
      credentials: 'include',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(payload)
    });

    if(response.status === 200){
      response = await response.json();
      
      props.history.push("/otp",{number});

    }
    else
      alert("User not registered");
  }

  return (
    <div className={`patitent-login ${cn(styles.block, styles.block_layout)}`}>
      <div
        style={{ '--src': `url(${require('assets/2c18f36b363f4636f9b019c983f03297.png').default})` }}
        className={cn(styles.decorator, styles.decorator_layout)}
      />

      <div className={cn(styles.flex, styles.flex_layout)}>
        <div className={cn(styles.flex1, styles.flex1_layout)}>
          <div className={cn(styles.flex1_item)}>
            <div
              style={{ '--src': `url(${require('assets/79f9358d920542f24c04fe2b976e583c.png').default})` }}
              className={cn(styles.image1, styles.image1_layout)}
            />
          </div>
          <div className={cn(styles.flex1_spacer)} />
          <h1 className={cn(styles.big_title1_box, styles.big_title1_box_layout)}>
            <pre className={cn(styles.big_title1)}>{'Find My Sample '}</pre>
          </h1>
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
              <Link to='/login' style={{ textDecoration: 'none' }}className={cn(styles.big_title3, styles.big_title3_layout)}>{'Login'}</Link>
            </div>
          </div>
        </div>

        <div className={cn(styles.group, styles.group_layout)}>
          <div className={cn(styles.flex2, styles.flex2_layout)}>
            <div className={cn(styles.flex2_item)}>
              <div
                style={{ '--src': `url(${require('assets/57d1cd2bbffb8ba8491bddcf650739fb.png').default})` }}
                className={cn(styles.image, styles.image_layout)}
              />
            </div>
            <div className={cn(styles.flex2_item1)}>
              <div
                style={{ '--src': `url(${require('assets/f0bd07e485033110860f477987bc834b.png').default})` }}
                className={cn(styles.image, styles.image_layout1)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={cn(styles.cover_block1, styles.cover_block1_layout)}>
        <div className={cn(styles.flex3, styles.flex3_layout)}>
          <div className={cn(styles.flex3_item)}>
            <div
              style={{ '--src': `url(${require('assets/9d66fbd2c7c82b5c2658127bc4fed25f.png').default})` }}
              className={cn(styles.image2, styles.image2_layout)}
            />
          </div>
          <div className={cn(styles.flex3_spacer)} />
          <div className={cn(styles.flex3_item1)}>
            <div className={cn(styles.flex4, styles.flex4_layout)}>
              <h1 className={cn(styles.hero_title, styles.hero_title_layout)}>{'Track My Sample'}</h1>
              <h2 className={cn(styles.medium_title, styles.medium_title_layout)}>
                {'Login to track the status of your sample'}
              </h2>
              <h1 className={cn(styles.big_title, styles.big_title_layout)}>{'Mobile Number'}</h1>

              <input type="text" onChange={(e)=>setNumber(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>

              <h3 className={cn(styles.subtitle, styles.subtitle_layout)}>{'An OTP will be sent on this number'}</h3>

              <div className={cn(styles.block1, styles.block1_layout)}>
                <h3 className={cn(styles.subtitle1, styles.subtitle1_layout)} onClick={login} style={{cursor:"pointer"}}>{'Proceed'}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PatitentLogin.inStorybook = true;
