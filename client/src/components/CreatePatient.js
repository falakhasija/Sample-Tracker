import React, {useState} from 'react';
import cn from 'classnames';

import styles from './CreatePatient.module.scss';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreatePatient(props) {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [dob,setDob] = useState("");
  const [gender,setGender] = useState("");
  const [bloodGroup,setBloodGroup] = useState("");
  const [address,setAddress] = useState("");

  const notify = (msg) => toast(msg);

  const cancel = function(){
    clearInput();
  }

  const submit = async function(){

    const token = localStorage.getItem('token');

    let payload = {
      "number":mobile,
      "name":firstName
    }

    clearInput();
    notify("Patient added successfully");

    await fetch("https://patient-sample-tracker-backend-urtjok3rza-wl.a.run.app/clinic/", {
      method:"POST",
      mode: 'cors',
      credentials: 'include',
      headers:{
        'Authorization': 'Bearer '+ token,
        "Content-Type":"application/json",
        "Accept":"application/json",

      },
      body: JSON.stringify(payload)
    });
  }

  const clearInput = () => {
    setFirstName('');
    setLastName('');
    setMobile('');
    setEmail('');
    setAge('');
    setDob('');
    setGender('');
    setBloodGroup('');
    setAddress('');
  }

  const logout = function(){
    localStorage.removeItem('token');
    props.history.push("/");
  }
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className={`create-patient ${cn(styles.block, styles.block_layout)}`}>
      <div className={cn(styles.content_box, styles.content_box_layout)}>
        <div className={cn(styles.content_box_item)}>
          <div
            style={{ '--src': `url(${require('assets/85c92818c315d0fdd655b5c916ca65e0.png').default})` }}
            className={cn(styles.image1, styles.image1_layout)}
          />
        </div>
        <div className={cn(styles.content_box_spacer)} />
        <h2 className={cn(styles.medium_title2_box, styles.medium_title2_box_layout)}>
          <pre className={cn(styles.medium_title2)}>{'Find My Sample '}</pre>
        </h2>
        <div className={cn(styles.content_box_spacer1)} />
        <div className={cn(styles.content_box_item1)}>
          
        </div>
        <div className={cn(styles.content_box_spacer2)} />
        <div className={cn(styles.content_box_item2)}>
          <div
            style={{ '--src': `url(${require('assets/f9990a6ccce09f2dd40e9867ac8a4912.png').default})` }}
            className={cn(styles.icon, styles.icon_layout)}
          />
        </div>
        <div className={cn(styles.content_box_spacer3)} />
        <h3 className={cn(styles.subtitle2, styles.subtitle2_layout)}>{user.username}</h3>
      </div>

      <div className={cn(styles.group1, styles.group1_layout)}>
        <div
          style={{ '--src': `url(${require('assets/9dd383d4ae67e30c7412deecfc92a964.png').default})` }}
          className={cn(styles.decorator, styles.decorator_layout)}
        />

        <div className={cn(styles.flex1, styles.flex1_layout)}>
          <div className={cn(styles.flex1_item)}>
            <div className={cn(styles.group2, styles.group2_layout)}>
              <div className={cn(styles.block4, styles.block4_layout)}>
                <div className={cn(styles.flex2, styles.flex2_layout)}>
                  <div className={cn(styles.flex3, styles.flex3_layout)}>
                    <div className={cn(styles.flex3_item)}>
                      <div
                        style={{ '--src': `url(${require('assets/d44f785f78c3b3ee872fb90f269ff249.png').default})` }}
                        className={cn(styles.icon3, styles.icon3_layout)}
                      />
                    </div>
                    <div className={cn(styles.flex3_spacer)} />
                    <Link to='/clinic' style={{ textDecoration: 'none' }} className={cn(styles.subtitle3, styles.subtitle3_layout)}>{'Dashboard'}</Link>
                  </div>

                  <div className={cn(styles.flex4, styles.flex4_layout)}>
                    <div className={cn(styles.flex4_item)}>
                      <div className={cn(styles.box8, styles.box8_layout)} />
                    </div>
                    <div className={cn(styles.flex4_spacer)} />
                    <h3 className={cn(styles.subtitle4, styles.subtitle4_layout)}>{'Register Patient'}</h3>
                  </div>

                  <div className={cn(styles.flex5, styles.flex5_layout)}>
                    <div className={cn(styles.flex5_item)}>
                      <div
                        style={{ '--src': `url(${require('assets/ad05bf1076d56927db97ee74541dd626.png').default})` }}
                        className={cn(styles.icon3, styles.icon3_layout1)}
                      />
                    </div>
                    <div className={cn(styles.flex5_spacer)} />
                    <Link to='/sample' style={{ textDecoration: 'none' }} className={cn(styles.subtitle3, styles.subtitle3_layout1)}>{'Create Sample'}</Link>
                  </div>

                  <div className={cn(styles.flex6, styles.flex6_layout)}>
                    <div className={cn(styles.flex6_item)}>
                      <div
                        style={{ '--src': `url(${require('assets/0b2ead06631e2085e80fd3e23c98993d.png').default})` }}
                        className={cn(styles.icon4, styles.icon4_layout)}
                      />
                    </div>
                    <div className={cn(styles.flex6_spacer)} />
                    <h3 onClick={logout} style={{cursor:"pointer"}} className={cn(styles.subtitle3, styles.subtitle3_layout2)}>{'Logout'}</h3>
                  </div>
                </div>
              </div>

              <px-posize x="61fr 24px 237fr" y="199px 24px 751px" absolute>
                <div
                  className={cn(styles.icon31)}
                  style={{ '--src': `url(${require('assets/2726a212fe214ca9b91955ee9cd1db84.png').default})` }}
                />
              </px-posize>
            </div>
          </div>
          <div className={cn(styles.flex1_spacer)} />
          <div className={cn(styles.flex1_item1)}>
            <div className={cn(styles.flex7, styles.flex7_layout)}>
              <h1 className={cn(styles.big_title, styles.big_title_layout)}>{'Register a new patient'}</h1>

              <div className={cn(styles.cover_block8, styles.cover_block8_layout)}>
                <div className={cn(styles.flex8, styles.flex8_layout)}>
                  <div className={cn(styles.flex9, styles.flex9_layout)}>
                    <h3 className={cn(styles.subtitle_box, styles.subtitle_box_layout)}>
                      <div className={cn(styles.subtitle)}>
                        <span className={cn(styles.subtitle_span0)}>{'First Name '}</span>
                        <span className={cn(styles.subtitle_span1)}>{'*'}</span>
                      </div>
                    </h3>
                    {/* <div className={cn(styles.flex9_spacer)} /> */}
                    <h3 className={cn(styles.subtitle1_box, styles.subtitle1_box_layout)}>
                      <div className={cn(styles.subtitle)}>
                        <span className={cn(styles.subtitle1_span0)}>{'Last Name '}</span>
                        <span className={cn(styles.subtitle1_span1)}>{'*'}</span>
                      </div>
                    </h3>
                  </div>

                  <div className={cn(styles.flex10, styles.flex10_layout)}>
                    <div className={cn(styles.flex10_item)}>
                    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                    {/* <div className={cn(styles.flex10_spacer)} /> */}
                    <div className={cn(styles.flex10_item)}>
                    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                  </div>

                  <div className={cn(styles.flex11, styles.flex11_layout)}>
                    <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout)}>
                      <div className={cn(styles.subtitle)}>
                        <span className={cn(styles.subtitle5_span0)}>{'Mobile Number '}</span>
                        <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                      </div>
                    </h3>
                    {/* <div className={cn(styles.flex11_spacer)} /> */}
                    <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout1)}>
                      <div className={cn(styles.subtitle)}>
                        <span className={cn(styles.subtitle5_span0)}>{'Email Address '}</span>
                        <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                      </div>
                    </h3>
                  </div>

                  <div className={cn(styles.flex12, styles.flex12_layout)}>
                    <div className={cn(styles.flex12_item)}>
                    <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                    {/* <div className={cn(styles.flex12_spacer)} /> */}
                    <div className={cn(styles.flex12_item)}>
                      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                  </div>

                  <div className={cn(styles.flex13, styles.flex13_layout)}>
                    <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout2)}>
                      <div className={cn(styles.subtitle)}>
                        <span className={cn(styles.subtitle5_span0)}>{'Age '}</span>
                        <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                      </div>
                    </h3>
                    {/* <div className={cn(styles.flex13_spacer)} /> */}
                    <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout3)}>
                      <div className={cn(styles.subtitle)}>
                      <span className={cn(styles.subtitle5_span0)}>{'DOB '}</span>
                        <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                        
                        
                        
                      </div>
                    </h3>
                  </div>

                  <div className={cn(styles.flex14, styles.flex14_layout)}>
                    <div className={cn(styles.flex14_item)}>
                      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                    {/* <div className={cn(styles.flex14_spacer)} /> */}
                    <div className={cn(styles.flex14_item)}>
                      <input type="text" value={dob} onChange={(e)=>setDob(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                  </div>

                  <div className={cn(styles.flex15, styles.flex15_layout)}>
                    <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout4)}>
                      <div className={cn(styles.subtitle)}>
                        <span className={cn(styles.subtitle5_span0)}>{'Gender '}</span>
                        <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                      </div>
                    </h3>
                    {/* <div className={cn(styles.flex15_spacer)} /> */}
                    <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout5)}>
                      <div className={cn(styles.subtitle)}>
                        <span className={cn(styles.subtitle5_span0)}>{'Blood Group '}</span>
                        <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                      </div>
                    </h3>
                  </div>

                  <div className={cn(styles.flex16, styles.flex16_layout)}>
                    <div className={cn(styles.flex16_item)}>
                      <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                    {/* <div className={cn(styles.flex16_spacer)} /> */}
                    <div className={cn(styles.flex16_item)}>
                      <input type="text" value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                  </div>

                  <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout6)}>
                    <pre className={cn(styles.subtitle5)}>{'Residential Address '}</pre>
                  </h3>

                  <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                </div>
              </div>

              <div className={cn(styles.flex17, styles.flex17_layout)}>
                <div className={cn(styles.flex17_item)}>
                  <div className={cn(styles.block2, styles.block2_layout)}>
                    <h2 onClick={cancel} style={{cursor:"pointer"}} className={cn(styles.medium_title1, styles.medium_title1_layout)}>{'Cancel'}</h2>
                  </div>
                </div>
                <div className={cn(styles.flex17_spacer)} />
                <div className={cn(styles.flex17_item1)}>
                  <div className={cn(styles.block1, styles.block1_layout)}>
                    <h2 onClick={submit} style={{cursor:"pointer"}} className={cn(styles.medium_title, styles.medium_title_layout)}>{'Submit'}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

CreatePatient.inStorybook = true;
