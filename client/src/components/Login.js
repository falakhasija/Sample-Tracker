import React, {useState} from 'react';
import cn from 'classnames';

import styles from './Login.module.scss';

export default function Login(props) {
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async function(){
    let payload = {username, password};

    let response = await fetch("https://patient-sample-tracker-backend-urtjok3rza-wl.a.run.app/login/", {
      method:"POST",
      mode: 'cors',
      credentials: 'include',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(payload)
    });

    setUsername('');
    setPassword('');

    if(response.status === 200){
      response = await response.json();
      localStorage.setItem("user", JSON.stringify(response.data))
      
      if(response.data.is_lab){
        localStorage.setItem('token', response.data.access);
        props.history.push("/lab");
      }
      else if(response.data.is_clinic){
        localStorage.setItem('token', response.data.access);
        props.history.push("/clinic");
      }

    }
    else
      alert("Username and Password do not match!")
    
  }

  return (
    <div className={cn('login', styles.block, styles.block_layout)}>
      <div className={cn(styles.block_item)}>
        <div className={cn(styles.cover_block1, styles.cover_block1_layout)}>
          <div
            style={{ '--src': `url(${require('assets/2ccef20c763932314a8364c4dcb755de.png').default})` }}
            className={cn(styles.decorator, styles.decorator_layout)}
          />

          <div className={cn(styles.flex, styles.flex_layout)}>
            <div className={cn(styles.flex1, styles.flex1_layout)}>
              <div className={cn(styles.flex1_item)}>
                <div
                  style={{ '--src': `url(${require('assets/79f9358d920542f24c04fe2b976e583c.png').default})` }}
                  className={cn(styles.image, styles.image_layout)}
                />
              </div>
              <div className={cn(styles.flex1_spacer)} />
              <h1 className={cn(styles.big_title_box, styles.big_title_box_layout)}>
                <pre className={cn(styles.big_title)}>{'Find My Sample '}</pre>
              </h1>
            </div>

            <div
              style={{ '--src': `url(${require('assets/f738877beba65cca2d60bb813356e74e.png').default})` }}
              className={cn(styles.cover_block, styles.cover_block_layout)}>
              <div className={cn(styles.cover_block_item)}>
                <div className={cn(styles.box1, styles.box1_layout)} />
              </div>
              <div className={cn(styles.cover_block_spacer)} />
              <div className={cn(styles.cover_block_item1)}>
                <div
                  style={{ '--src': `url(${require('assets/1f1174818b9d2a5339bd598ffacabec0.png').default})` }}
                  className={cn(styles.image1, styles.image1_layout)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.block_spacer)} />
      <div className={cn(styles.block_item1)}>
        <div className={cn(styles.flex2, styles.flex2_layout)}>
          <h1 className={cn(styles.hero_title, styles.hero_title_layout)}>{'Login'}</h1>
          <h1 className={cn(styles.big_title1, styles.big_title1_layout)}>{'Member ID'}</h1>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>

          <div className={cn(styles.flex3, styles.flex3_layout)}>
            <h1 className={cn(styles.big_title1, styles.big_title1_layout1)}>{'Password'}</h1>
            <div className={cn(styles.flex3_spacer)} />
          </div>

          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
          <h3 className={cn(styles.subtitle, styles.subtitle_layout)}>{'Forgot Password?'}</h3>

          <div className={cn(styles.block1, styles.block1_layout)}>
            <h1 className={cn(styles.big_title2, styles.big_title2_layout)} onClick={login} style={{cursor:"pointer"}}>{'Login'}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.inStorybook = true;
