import React, {useState} from 'react';
import cn from 'classnames';

import styles from './PatientOTP.module.scss';
import { Link } from 'react-router-dom';

export default function PatientOTP(props) {

  const number = props.location.state.number;

  const [otp,setOTP] = useState("");

  async function login(){
    const payload = {number, otp};

    let response = await fetch("https://patient-sample-tracker-backend-urtjok3rza-wl.a.run.app/otplogin/", {
      method:"POST",
      mode: 'cors',
      credentials: 'include',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log(response)

    if(response.status === 200){
      response = await response.json();
      localStorage.setItem('username', number)
      props.history.push('/samples');

    }
    else
      alert("Invalid OTP!")

  }

  return (
    <div className={`patient-ot-p ${cn(styles.block, styles.block_layout)}`}>
      <div
        style={{ '--src': `url(${require('assets/e29ba1f51b6de9c8ea7e6ac286abc2f1.png').default})` }}
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
              <Link to='/login' style={{ textDecoration: 'none' }} className={cn(styles.big_title3, styles.big_title3_layout)}>{'Login'}</Link>
            </div>
          </div>
        </div>

        <div className={cn(styles.group, styles.group_layout)}>
          <div className={cn(styles.flex2, styles.flex2_layout)}>
            <div className={cn(styles.flex2_item)}>
              <div
                style={{ '--src': `url(${require('assets/5dbe768c9f0bf6464e62eccf011d788f.png').default})` }}
                className={cn(styles.image, styles.image_layout)}
              />
            </div>
            <div className={cn(styles.flex2_item1)}>
              <div
                style={{ '--src': `url(${require('assets/032956172437d2d42d5b9c5ee2c5eb8b.png').default})` }}
                className={cn(styles.image, styles.image_layout1)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={cn(styles.cover_block5, styles.cover_block5_layout)}>
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
              <h1 className={cn(styles.big_title, styles.big_title_layout)}>{'Track My Sample'}</h1>
              <h2 className={cn(styles.medium_title1, styles.medium_title1_layout)}>{'Enter Username'}</h2>

              <input type="text" className={cn(styles.box2, styles.box2_layout)}/>

              <h2 className={cn(styles.medium_title1, styles.medium_title1_layout1)}>{'Enter OTP'}</h2>
              <h3 className={cn(styles.subtitle2, styles.subtitle2_layout)}>
                {'Please enter the OTP sent to '+ number}
              </h3>

              <input type="text" onChange={(e)=>setOTP(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>

              <div className={cn(styles.flex6, styles.flex6_layout)}>
                <h3 className={cn(styles.subtitle1, styles.subtitle1_layout)}>{'Resend OTP'}</h3>
              </div>

              <div className={cn(styles.block1, styles.block1_layout)}>
                <h2 className={cn(styles.medium_title, styles.medium_title_layout)} onClick={login} style={{cursor:"pointer"}}>{'Login'}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PatientOTP.inStorybook = true;
