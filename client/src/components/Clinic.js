import React, {useState} from 'react';
import cn from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Clinic.module.scss';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Clinic(props) {

  const [changedSampleId,setChangedSampleId] = useState("");
  const [changedSampleStatus,setChangedSampleStatus] = useState("");

  const notify = (msg) => toast(msg);

  const cancelStatus = function(){
    setChangedSampleId('');
    setChangedSampleStatus('');
  }

  const submitStatus = async function(){
    const token = localStorage.getItem('token');
    let payload = {
      "sampleId":changedSampleId,
      "status": changedSampleStatus,
    }
    setChangedSampleId('');
    setChangedSampleStatus(null);
    notify("Sample successfully updated!");

    await fetch("https://patient-sample-tracker-backend-urtjok3rza-wl.a.run.app/sampleadd/", {
      method:"PATCH",
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

  const logout = function(){
    localStorage.removeItem('token');
    props.history.push("/");
  }

  const user = JSON.parse(localStorage.getItem('user'));

  const options = [
    'pending', 'shipped'
  ];

  let _onSelect = function (option) {
    console.log('You selected ', option.label)
    setChangedSampleStatus(option.label)
  }
  return (
    <div className={cn('clinic', styles.group, styles.group_layout6)}>
      <div
        style={{ '--src': `url(${require('assets/1fb8c09e381154962cb60a5cfad160d4.png').default})` }}
        className={cn(styles.group1, styles.group1_layout)}>
        <div
          style={{ '--src': `url(${require('assets/8e0acc6a3e8eeda710b6032b2d8978f4.png').default})` }}
          className={cn(styles.icon2, styles.icon2_layout)}
        />
      </div>

      <div className={cn(styles.block, styles.block_layout)}>
        <div className={cn(styles.content_box, styles.content_box_layout)}>
          <div className={cn(styles.content_box_item)}>
            <div
              style={{ '--src': `url(${require('assets/85c92818c315d0fdd655b5c916ca65e0.png').default})` }}
              className={cn(styles.image7, styles.image7_layout)}
            />
          </div>
          <div className={cn(styles.content_box_spacer)} />
          <h2 className={cn(styles.medium_title3_box, styles.medium_title3_box_layout)}>
            <pre className={cn(styles.medium_title3)}>{'Find My Sample '}</pre>
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
          <h3 className={cn(styles.subtitle, styles.subtitle_layout)}>{user.username}</h3>
        </div>

        <div className={cn(styles.flex1, styles.flex1_layout)}>
          <div className={cn(styles.flex1_item)}>
            <div className={cn(styles.group, styles.group_layout1)}>
              <div className={cn(styles.block2, styles.block2_layout)}>
                {/* <div
                  style={{ '--src': `url(${require('assets/9dd383d4ae67e30c7412deecfc92a964.png').default})` }}
                  className={cn(styles.decorator, styles.decorator_layout)}
                /> */}

                <div className={cn(styles.flex2, styles.flex2_layout)}>
                  <div className={cn(styles.flex3, styles.flex3_layout)}>
                    <div className={cn(styles.flex3_item)}>
                      <div className={cn(styles.box2, styles.box2_layout)} />
                    </div>
                    <div className={cn(styles.flex3_spacer)} />
                    <h3 className={cn(styles.subtitle1, styles.subtitle1_layout)}>{'Dashboard'}</h3>
                  </div>

                  <div className={cn(styles.group, styles.group_layout)}>
                  <Link to='/patient' style={{ textDecoration: 'none' }} className={cn(styles.subtitle2, styles.subtitle2_layout1)}>{'Register Patient'}</Link>
                  </div>

                  <div className={cn(styles.flex4, styles.flex4_layout)}>
                    <div className={cn(styles.flex4_item)}>
                      <div
                        style={{ '--src': `url(${require('assets/ad05bf1076d56927db97ee74541dd626.png').default})` }}
                        className={cn(styles.icon3, styles.icon3_layout)}
                      />
                    </div>
                    <div className={cn(styles.flex4_spacer)} />
                    <Link to='/sample' style={{ textDecoration: 'none' }} className={cn(styles.subtitle2, styles.subtitle2_layout2)}>{'Create Sample'}</Link>
                  </div>

                  <h3 onClick={logout} style={{cursor:"pointer"}} className={cn(styles.subtitle2, styles.subtitle2_layout3)}>{'Logout'}</h3>
                </div>
              </div>

              <px-posize x="59fr 30px 233fr" y="798px 30px 146px" absolute>
                <div
                  className={cn(styles.icon4)}
                  style={{ '--src': `url(${require('assets/32982d1c5c89acbf375adf2b18d71536.png').default})` }}
                />
              </px-posize>
              <px-posize x="61fr 24px 237fr" y="103px 24px 847px" absolute>
                <div
                  className={cn(styles.icon31)}
                  style={{ '--src': `url(${require('assets/3c410c0eb140eda24fda5d35ba623c4c.png').default})` }}
                />
              </px-posize>
              <px-posize x="61fr 24px 237fr" y="199px 24px 751px" absolute>
                <div
                  className={cn(styles.icon32)}
                  style={{ '--src': `url(${require('assets/6fa55c4a4fcb4af5a8a1acbbe2b78f1b.png').default})` }}
                />
              </px-posize>
            </div>
          </div>
          <div className={cn(styles.flex1_spacer)} />
          <div className={cn(styles.flex1_item1)}>
            <div className={cn(styles.flex5, styles.flex5_layout)}>
              <div className={cn(styles.flex6, styles.flex6_layout)}>
                <div className={cn(styles.flex6_item)}>
                  <div className={cn(styles.block5, styles.block5_layout)}>
                    <div className={cn(styles.flex7, styles.flex7_layout)}>
                      <div className={cn(styles.flex7_item)}>
                        <div
                          style={{ '--src': `url(${require('assets/83d6deefdfae7155e6d21da0977cc7e8.png').default})` }}
                          className={cn(styles.icon6, styles.icon6_layout)}
                        />
                      </div>
                      <div className={cn(styles.flex7_spacer)} />
                      <div className={cn(styles.flex7_item1)}>
                        <div className={cn(styles.flex8, styles.flex8_layout)}>
                          <h3 className={cn(styles.subtitle2, styles.subtitle2_layout4)}>{'Total Patients'}</h3>
                          <h2 className={cn(styles.medium_title31, styles.medium_title31_layout)}>{'90'}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cn(styles.flex6_spacer)} />
                <div className={cn(styles.flex6_item)}>
                  <div className={cn(styles.block7, styles.block7_layout)}>
                    <div className={cn(styles.flex9, styles.flex9_layout)}>
                      <div className={cn(styles.flex9_item)}>
                        <div
                          style={{ '--src': `url(${require('assets/fcab9692a4f16fa136c4e8b2ea712f8a.png').default})` }}
                          className={cn(styles.icon10, styles.icon10_layout)}
                        />
                      </div>
                      <div className={cn(styles.flex9_spacer)} />
                      <div className={cn(styles.flex9_item1)}>
                        <div className={cn(styles.flex10, styles.flex10_layout)}>
                          <h3 className={cn(styles.subtitle2, styles.subtitle2_layout5)}>{'Total Samples'}</h3>
                          <h2 className={cn(styles.medium_title32, styles.medium_title32_layout)}>{'100'}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cn(styles.flex6_spacer)} />
                <div className={cn(styles.flex6_item)}>
                  <div className={cn(styles.block6, styles.block6_layout)}>
                    <div className={cn(styles.flex11, styles.flex11_layout)}>
                      <div className={cn(styles.flex11_item)}>
                        <div
                          style={{ '--src': `url(${require('assets/97f2fe8fea21056fb477299f3900bada.png').default})` }}
                          className={cn(styles.icon7, styles.icon7_layout)}
                        />
                      </div>
                      <div className={cn(styles.flex11_spacer)} />
                      <div className={cn(styles.flex11_item1)}>
                        <div className={cn(styles.flex12, styles.flex12_layout)}>
                          <h3 className={cn(styles.subtitle2, styles.subtitle2_layout6)}>{'Total Technicians'}</h3>
                          <h2 className={cn(styles.medium_title33, styles.medium_title33_layout)}>{'10'}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(styles.flex13, styles.flex13_layout)}>
                <div className={cn(styles.flex13_item)}>
                  <div className={cn(styles.group, styles.group_layout2)}>
                    <div className={cn(styles.block8, styles.block8_layout)}>
                      <div className={cn(styles.flex14, styles.flex14_layout)}>
                        <h2 className={cn(styles.medium_title, styles.medium_title_layout)}>
                          {'Update Sample Status'}
                        </h2>
                        <h2 className={cn(styles.medium_title5, styles.medium_title5_layout)}>{'Sample ID'}</h2>
                        <input type="text" value={changedSampleId} onChange={(e)=>setChangedSampleId(e.target.value)} className={cn(styles.box14, styles.box14_layout)} />
                        <h2 className={cn(styles.medium_title5, styles.medium_title5_layout1)}>{'Update Status'}</h2>
                        <div className={cn(styles.box14, styles.box14_layout)}>
                          <Dropdown options={options} onChange={_onSelect} value={changedSampleStatus} placeholder="Select a status" />
                        </div>
                        
                      </div>
                    </div>

                    <div className={cn(styles.block9, styles.block9_layout)}>
                      <px-posize track-style='{"flexGrow":1}' x="13px 83fr 8fr" y="4px minmax(0px, 27fr) 7fr">
                        <h3 onClick={submitStatus} style={{cursor:"pointer"}} className={cn(styles.subtitle6)}>{'Submit'}</h3>
                      </px-posize>
                    </div>

                    <div className={cn(styles.block10, styles.block10_layout)}>
                      <px-posize track-style='{"flexGrow":1}' x="17px 75fr 12fr" y="4px minmax(0px, 27fr) 7fr">
                        <h3 onClick={cancelStatus} style={{cursor:"pointer"}} className={cn(styles.subtitle7)}>{'Cancel'}</h3>
                      </px-posize>
                    </div>
                  </div>
                </div>
                <div className={cn(styles.flex13_spacer)} />
                <div className={cn(styles.flex13_item1)}>
                  <div className={cn(styles.cover_block3, styles.cover_block3_layout)}>
                    <div className={cn(styles.flex15, styles.flex15_layout)}>
                      <h2 className={cn(styles.medium_title, styles.medium_title_layout1)}>
                        {'Lab Availability Status'}
                      </h2>

                      <div className={cn(styles.flex16, styles.flex16_layout)}>
                        <div className={cn(styles.flex16_item)}>
                          <div className={cn(styles.cover_block1, styles.cover_block1_layout)}>
                            <h3 className={cn(styles.subtitle9, styles.subtitle9_layout)}>{'Toll Road'}</h3>
                          </div>
                        </div>
                        <div className={cn(styles.flex16_spacer)} />
                        <h3 className={cn(styles.subtitle5, styles.subtitle5_layout)}>{'90'}</h3>
                      </div>

                      <div className={cn(styles.flex17, styles.flex17_layout)}>
                        <div className={cn(styles.flex17_item)}>
                          <div className={cn(styles.cover_block2, styles.cover_block2_layout)}>
                            <h3 className={cn(styles.subtitle9, styles.subtitle9_layout)}>{'Park Road'}</h3>
                          </div>
                        </div>
                        <div className={cn(styles.flex17_spacer)} />
                        <h3 className={cn(styles.subtitle5, styles.subtitle5_layout)}>{'30'}</h3>
                      </div>

                      <div className={cn(styles.flex18, styles.flex18_layout)}>
                        <div className={cn(styles.flex18_item)}>
                          <div className={cn(styles.cover_block, styles.cover_block_layout)}>
                            <h3 className={cn(styles.subtitle9, styles.subtitle9_layout1)}>{'Hill Road'}</h3>
                          </div>
                        </div>
                        <div className={cn(styles.flex18_spacer)} />
                        <h3 className={cn(styles.subtitle5, styles.subtitle5_layout1)}>{'15'}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(styles.flex19, styles.flex19_layout)}>
                <div className={cn(styles.flex19_item)}>
                  <div className={cn(styles.cover_block4, styles.cover_block4_layout)}>
                    <div className={cn(styles.flex20, styles.flex20_layout)}>
                      <h2 className={cn(styles.medium_title, styles.medium_title_layout2)}>{'Patient By Gender'}</h2>

                      <div className={cn(styles.flex21, styles.flex21_layout)}>
                        <div className={cn(styles.flex21_item)}>
                          <div className={cn(styles.group, styles.group_layout3)}>
                            <div
                              style={{
                                '--src': `url(${require('assets/670898b684e6433ed4d294689fe6f1cc.png').default})`
                              }}
                              className={cn(styles.image2, styles.image2_layout)}
                            />
                            <px-posize x="1fr 76px 43fr" y="60px 60px 0px" absolute>
                              <div
                                className={cn(styles.image3)}
                                style={{
                                  '--src': `url(${require('assets/975117283277aac18024dbfdf1fb43d5.png').default})`
                                }}
                              />
                            </px-posize>
                            <div
                              style={{
                                '--src': `url(${require('assets/ea24b8f8773e3754f5b9757f5efc5767.png').default})`
                              }}
                              className={cn(styles.icon8, styles.icon8_layout)}
                            />
                            <px-posize x="28fr 32px 60fr" y="0px 60px 60px" absolute>
                              <div
                                className={cn(styles.image4)}
                                style={{
                                  '--src': `url(${require('assets/8f4df6e547f5aa32988df135759d819a.png').default})`
                                }}
                              />
                            </px-posize>
                            <div
                              style={{
                                '--src': `url(${require('assets/625a2350c9d6f67ad3509e199e6456e3.png').default})`
                              }}
                              className={cn(styles.icon9, styles.icon9_layout)}
                            />
                          </div>
                        </div>
                        <div className={cn(styles.flex21_spacer)} />
                        <div className={cn(styles.flex21_item1)}>
                          <div className={cn(styles.flex22, styles.flex22_layout)}>
                            <div
                              style={{
                                '--src': `url(${require('assets/be0dbfb07fa4f648e185f58d0c59f778.png').default})`
                              }}
                              className={cn(styles.icon11, styles.icon11_layout)}
                            />
                            <div
                              style={{
                                '--src': `url(${require('assets/89b9188e261c2b168e6c14545c24bd1a.png').default})`
                              }}
                              className={cn(styles.icon11, styles.icon11_layout1)}
                            />
                            <div
                              style={{
                                '--src': `url(${require('assets/cbe0f8c33272b2d4bbfdea75d2648eb2.png').default})`
                              }}
                              className={cn(styles.icon11, styles.icon11_layout2)}
                            />
                            <div
                              style={{
                                '--src': `url(${require('assets/57e7c4e83ada754d1a5f78d3e0e7c22b.png').default})`
                              }}
                              className={cn(styles.icon11, styles.icon11_layout3)}
                            />
                          </div>
                        </div>
                        <div className={cn(styles.flex21_spacer1)} />
                        <div className={cn(styles.flex21_item2)}>
                          <div className={cn(styles.flex23, styles.flex23_layout)}>
                            <h4 className={cn(styles.highlights1_box, styles.highlights1_box_layout)}>
                              <pre className={cn(styles.highlights1)}>{'Female\n'}</pre>
                            </h4>
                            <h4 className={cn(styles.highlights11_box, styles.highlights11_box_layout)}>
                              <pre className={cn(styles.highlights1)}>{'Male\n'}</pre>
                            </h4>
                            <h4 className={cn(styles.highlights11_box, styles.highlights11_box_layout)}>
                              <pre className={cn(styles.highlights1)}>{'Transgender\n'}</pre>
                            </h4>
                            <h4 className={cn(styles.highlights11_box, styles.highlights11_box_layout)}>
                              <pre className={cn(styles.highlights1)}>{'Other\n'}</pre>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cn(styles.flex19_spacer)} />
                <div className={cn(styles.flex19_item1)}>
                  <div className={cn(styles.cover_block7, styles.cover_block7_layout)}>
                    <div className={cn(styles.flex24, styles.flex24_layout)}>
                      <h2 className={cn(styles.medium_title, styles.medium_title_layout3)}>{'Sample By Types'}</h2>

                      <div className={cn(styles.flex25, styles.flex25_layout)}>
                        <div className={cn(styles.flex25_item)}>
                          <div className={cn(styles.cover_block6, styles.cover_block6_layout)}>
                            <h2 className={cn(styles.medium_title4, styles.medium_title4_layout)}>{'Blood Sample'}</h2>
                          </div>
                        </div>
                        <div className={cn(styles.flex25_spacer)} />
                        <h3 className={cn(styles.subtitle5, styles.subtitle5_layout2)}>{'65'}</h3>
                      </div>

                      <div className={cn(styles.flex26, styles.flex26_layout)}>
                        <div className={cn(styles.flex26_item)}>
                          <div className={cn(styles.cover_block5, styles.cover_block5_layout)}>
                            <h2 className={cn(styles.medium_title4, styles.medium_title4_layout)}>{'Tissue Sample'}</h2>
                          </div>
                        </div>
                        <div className={cn(styles.flex26_spacer)} />
                        <h3 className={cn(styles.subtitle5, styles.subtitle5_layout3)}>{'35'}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn(styles.flex1_spacer1)} />
          <div className={cn(styles.flex1_item2)}>
            <div className={cn(styles.group, styles.group_layout5)}>
              <div className={cn(styles.block3, styles.block3_layout)}>
                <div className={cn(styles.flex27, styles.flex27_layout)}>
                  <div className={cn(styles.block4, styles.block4_layout)}>
                    <h2 className={cn(styles.medium_title, styles.medium_title_layout4)}>{'Report Status'}</h2>
                  </div>

                  <div className={cn(styles.flex28, styles.flex28_layout)}>
                    <div className={cn(styles.flex28_item)}>
                      <div className={cn(styles.group, styles.group_layout4)}>
                        <div
                          style={{ '--src': `url(${require('assets/44f8a9e81d812809df67d39e78be76ca.png').default})` }}
                          className={cn(styles.cover_block11, styles.cover_block11_layout)}>
                          <h3 className={cn(styles.subtitle3, styles.subtitle3_layout)}>{'800'}</h3>
                        </div>

                        <div
                          style={{ '--src': `url(${require('assets/40935e6f242e9a52340b3e4349eff026.png').default})` }}
                          className={cn(styles.cover_block10, styles.cover_block10_layout)}>
                          <h3 className={cn(styles.subtitle3, styles.subtitle3_layout1)}>{'534'}</h3>
                        </div>
                      </div>
                    </div>
                    <div className={cn(styles.flex28_spacer)} />
                    <div className={cn(styles.flex28_item1)}>
                      <div className={cn(styles.flex29, styles.flex29_layout)}>
                        <div
                          style={{ '--src': `url(${require('assets/2778afd1fae267916eb8c9b23eae3fea.png').default})` }}
                          className={cn(styles.icon5, styles.icon5_layout)}
                        />
                        <div
                          style={{ '--src': `url(${require('assets/f13432e1f7041ff81b5df3d35f895961.png').default})` }}
                          className={cn(styles.icon5, styles.icon5_layout1)}
                        />
                      </div>
                    </div>
                    <div className={cn(styles.flex28_spacer1)} />
                    <div className={cn(styles.flex28_item2)}>
                      <div className={cn(styles.flex30, styles.flex30_layout)}>
                        <h3 className={cn(styles.subtitle4, styles.subtitle4_layout)}>{'Report Sent'}</h3>
                        <h3 className={cn(styles.subtitle4, styles.subtitle4_layout1)}>{'Report Pending'}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className={cn(styles.medium_title1, styles.medium_title1_layout)}>
                {'Total Samples Collected: 1334'}
              </h2>

              <div
                style={{ '--src': `url(${require('assets/866b169923b49ef56b3945fc7e8fc284.png').default})` }}
                className={cn(styles.cover_block8, styles.cover_block8_layout)}>
                <h2 className={cn(styles.medium_title2, styles.medium_title2_layout)}>{'934'}</h2>
              </div>

              <px-posize x="35fr 70px 392fr" y="523px 92px 236px" absolute>
                <div
                  className={cn(styles.image1)}
                  style={{ '--src': `url(${require('assets/b41a59c40ce983852dcff2f7cb99bb1c.png').default})` }}
                />
              </px-posize>
              <h2 className={cn(styles.medium_title21, styles.medium_title21_layout)}>{'400'}</h2>
              <h2 className={cn(styles.medium_title, styles.medium_title_layout5)}>{'Sample Status'}</h2>
              <px-posize x="221fr 30px 246fr" y="549px 30px 272px" absolute>
                <div
                  className={cn(styles.icon4)}
                  style={{ '--src': `url(${require('assets/285a960de8a7002b58b5a64e0fb693fb.png').default})` }}
                />
              </px-posize>
              <h3 className={cn(styles.subtitle41, styles.subtitle41_layout)}>{'Shipping Pending'}</h3>
              <px-posize x="221fr 30px 246fr" y="618px 30px 203px" absolute>
                <div
                  className={cn(styles.icon4)}
                  style={{ '--src': `url(${require('assets/01429dc7c87e3ea4ed44e7ba65006b9f.png').default})` }}
                />
              </px-posize>
              <h3 className={cn(styles.subtitle42, styles.subtitle42_layout)}>{'Shipped'}</h3>

              {/* <div className={cn(styles.block11, styles.block11_layout)}>
                <div className={cn(styles.flex31, styles.flex31_layout)}> */}

                  {/* <h3 className={cn(styles.subtitle8, styles.subtitle8_layout)}>{'December'}</h3> */}
                  <div className={cn(styles.flex31_spacer)} />
                  <div className={cn(styles.flex31_item)}>
                    <div
                      
                      className={cn(styles.image6, styles.image6_layout)}
                    />
                  </div>
                {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

Clinic.inStorybook = true;