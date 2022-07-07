import React, {useState} from 'react';
import cn from 'classnames';

import styles from './CreateSample.module.scss';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateSample(props) {

  const [sampleId,setSampleId] = useState("");
  const [patientId,setPatientId] = useState("");
  const [collectorId,setCollectorId] = useState("");
  const [collectorName,setCollectorName] = useState("");
  const [collectionDate,SetCollectionDate] = useState("");
  const [collectionTime,setCollectionTime] = useState("");
  const [centreCode,setCentreCode] = useState("");

  const notify = (msg) => toast(msg);

  const cancel = function(){
    clearInput();
  }

  const submit = async function(){

    const token = localStorage.getItem('token');
    let payload = {
      "sampleId":sampleId,
      "number":patientId,
      "phone":patientId
    }

    clearInput();
    notify("Sample added successfully");
    
    await fetch("https://patient-sample-tracker-backend-urtjok3rza-wl.a.run.app/sampleadd/", {
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
    setSampleId('');
    setPatientId('');
    setCollectorId('');
    setCollectorName('');
    SetCollectionDate('');
    setCollectionTime('');
    setCentreCode('');
  }

  const logout = function(){
    localStorage.removeItem('token');
    props.history.push("/");
  }
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className={`create-sample ${cn(styles.block, styles.block_layout)}`}>
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

                  <div className={cn(styles.group3, styles.group3_layout)}>
                    <Link to='/patient' style={{ textDecoration: 'none' }} className={cn(styles.subtitle3, styles.subtitle3_layout2)}>{'Register Patient'}</Link>
                  </div>

                  <div className={cn(styles.flex4, styles.flex4_layout)}>
                    <div className={cn(styles.flex4_item)}>
                      <div className={cn(styles.box6, styles.box6_layout)} />
                    </div>
                    <div className={cn(styles.flex4_spacer)} />
                    <div className={cn(styles.flex4_item1)}>
                      <div
                        style={{ '--src': `url(${require('assets/660ce545f998ea6ce67ca4bade8be2f7.png').default})` }}
                        className={cn(styles.icon3, styles.icon3_layout1)}
                      />
                    </div>
                    <div className={cn(styles.flex4_spacer1)} />
                    <h3 className={cn(styles.subtitle4, styles.subtitle4_layout)}>{'Create Sample'}</h3>
                  </div>

                  <div className={cn(styles.flex5, styles.flex5_layout)}>
                    <div className={cn(styles.flex5_item)}>
                      <div
                        style={{ '--src': `url(${require('assets/0b2ead06631e2085e80fd3e23c98993d.png').default})` }}
                        className={cn(styles.icon4, styles.icon4_layout)}
                      />
                    </div>
                    <div className={cn(styles.flex5_spacer)} />
                    <h3 onClick={logout} style={{cursor:"pointer"}} className={cn(styles.subtitle3, styles.subtitle3_layout3)}>{'Logout'}</h3>
                  </div>
                </div>
              </div>

              <px-posize x="61fr 24px 237fr" y="199px 24px 751px" absolute>
                <div
                  className={cn(styles.icon31)}
                  style={{ '--src': `url(${require('assets/6fa55c4a4fcb4af5a8a1acbbe2b78f1b.png').default})` }}
                />
              </px-posize>
            </div>
          </div>
          <div className={cn(styles.flex1_spacer)} />
          <div className={cn(styles.flex1_item1)}>
            <div className={cn(styles.flex6, styles.flex6_layout)}>
              <h1 className={cn(styles.big_title, styles.big_title_layout)}>{'Create a new sample'}</h1>

              <div className={cn(styles.cover_block4, styles.cover_block4_layout)}>
                <div className={cn(styles.flex7, styles.flex7_layout)}>
                  <div className={cn(styles.flex7_item)}>
                    <div className={cn(styles.flex8, styles.flex8_layout)}>
                      <h3 className={cn(styles.subtitle_box, styles.subtitle_box_layout)}>
                        <div className={cn(styles.subtitle)}>
                          <span className={cn(styles.subtitle_span0)}>{'Sample ID '}</span>
                          <span className={cn(styles.subtitle_span1)}>{'*'}</span>
                        </div>
                      </h3>

                      <input type="text" value={sampleId} onChange={(e)=>setSampleId(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>

                      <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout)}>
                        <div className={cn(styles.subtitle)}>
                          <span className={cn(styles.subtitle5_span0)}>{'Collector ID '}</span>
                          <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                        </div>
                      </h3>

                      <input type="text" value={collectorId} onChange={(e)=>setCollectorId(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>

                      <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout1)}>
                        <div className={cn(styles.subtitle)}>
                          <span className={cn(styles.subtitle5_span0)}>{'Collection Date '}</span>
                          <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                        </div>
                      </h3>

                      <input type="text" value={collectionDate} onChange={(e)=>SetCollectionDate(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>

                      <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout)}>
                        <div className={cn(styles.subtitle)}>
                          <span className={cn(styles.subtitle5_span0)}>{'Centre Code '}</span>
                          <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                        </div>
                      </h3>

                      <input type="text" value={centreCode} onChange={(e)=>setCentreCode(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                  </div>
                  <div className={cn(styles.flex7_spacer)} />
                  <div className={cn(styles.flex7_item)}>
                    <div className={cn(styles.flex9, styles.flex9_layout)}>
                      <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout2)}>
                        <div className={cn(styles.subtitle)}>
                          <span className={cn(styles.subtitle5_span0)}>{'Patient ID '}</span>
                          <span className={cn(styles.subtitle5_span1)}>{'*'}</span>
                        </div>
                      </h3>

                      <input type="text" value={patientId} onChange={(e)=>setPatientId(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>

                      <h3 className={cn(styles.subtitle5_box, styles.subtitle5_box_layout)}>
                        <pre className={cn(styles.subtitle5)}>{'Collector’s Name '}</pre>
                      </h3>

                      <input type="text" value={collectorName} onChange={(e)=>setCollectorName(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>

                      <h3 className={cn(styles.subtitle6_box, styles.subtitle6_box_layout)}>
                        <div className={cn(styles.subtitle)}>
                          <span className={cn(styles.subtitle6_span0)}>{'Collection Time'}</span>
                          <span className={cn(styles.subtitle6_span1)}>{' *'}</span>
                        </div>
                      </h3>

                      <input type="text" value={collectionTime} onChange={(e)=>setCollectionTime(e.target.value)} className={cn(styles.box2, styles.box2_layout)}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(styles.flex10, styles.flex10_layout)}>
                <div className={cn(styles.flex10_item)}>
                  <div className={cn(styles.block2, styles.block2_layout)}>
                    <h2 onClick={cancel} style={{cursor:"pointer"}} className={cn(styles.medium_title1, styles.medium_title1_layout)}>{'Cancel'}</h2>
                  </div>
                </div>
                <div className={cn(styles.flex10_spacer)} />
                <div className={cn(styles.flex10_item1)}>
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

CreateSample.inStorybook = true;
