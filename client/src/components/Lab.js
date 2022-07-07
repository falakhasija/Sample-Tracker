import React, {useState, useRef }from 'react';
import cn from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Lab.module.scss';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Lab(props) {
  const [changedSampleId,setChangedSampleId] = useState("");
  const [changedSampleStatus,setChangedSampleStatus] = useState("");
  const [reportSampleId,setReportSampleId] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const ref = useRef();

  const notify = (msg) => toast(msg);

  const cancelStatus = function(){
    setChangedSampleId('');
    setChangedSampleStatus(null);
  }

  const submitStatus = async function(){
    const token = localStorage.getItem('token');
    let payload = {
      "sampleId":changedSampleId,
      "status": changedSampleStatus,
    }
    setChangedSampleId('');
    setChangedSampleStatus('');
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

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

  const cancelReport = function(){
    setReportSampleId('');
  }

  const submitReport = async function(){
    const token = localStorage.getItem('token');

    const formData = new FormData();
		formData.append('file', selectedFile);
    formData.append('sampleId',reportSampleId);

    setReportSampleId('');
    ref.current.value = "";
    notify("Report successfully uploaded!");

    await fetch("https://patient-sample-tracker-backend-urtjok3rza-wl.a.run.app/upload/", {
      method:"POST",
      mode: 'cors',
      credentials: 'include',
      headers:{
        'Authorization': 'Bearer '+ token
      },
      body: formData
    });
  }

  const logout = function(){
    localStorage.removeItem('token');
    props.history.push("/");
  }

  const user = JSON.parse(localStorage.getItem('user'));
  const options = [
    'Collected', 'In Freezer', 'In Transit', 'In Diagnosis'
  ];

  let _onSelect = function (option) {
    console.log('You selected ', option.label)
    setChangedSampleStatus(option.label)
  }
  return (
    <div className={cn('lab', styles.block, styles.block_layout)}>
      <div className={cn(styles.content_box, styles.content_box_layout)}>
        <div className={cn(styles.content_box_item)}>
          <div
            style={{ '--src': `url(${require('assets/85c92818c315d0fdd655b5c916ca65e0.png').default})` }}
            className={cn(styles.image4, styles.image4_layout)}
          />
        </div>
        <div className={cn(styles.content_box_spacer)} />
        <h2 className={cn(styles.medium_title5_box, styles.medium_title5_box_layout)}>
          <pre className={cn(styles.medium_title5)}>{'Find My Sample '}</pre>
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
          <div className={cn(styles.group1, styles.group1_layout)}>
            <div className={cn(styles.block2, styles.block2_layout)}>
              <div
                style={{ '--src': `url(${require('assets/9dd383d4ae67e30c7412deecfc92a964.png').default})` }}
                className={cn(styles.decorator, styles.decorator_layout)}
              />

              <div className={cn(styles.flex2, styles.flex2_layout)}>
                <div className={cn(styles.flex3, styles.flex3_layout)}>
                  <div className={cn(styles.flex3_item)}>
                    <div className={cn(styles.box2, styles.box2_layout)} />
                  </div>
                  <div className={cn(styles.flex3_spacer)} />
                  <h3 className={cn(styles.subtitle1, styles.subtitle1_layout)}>{'Dashboard'}</h3>
                </div>

                <h3 onClick={logout} style={{cursor:"pointer"}} className={cn(styles.subtitle2, styles.subtitle2_layout)}>{'Logout'}</h3>
              </div>
            </div>

            <px-posize x="59fr 30px 233fr" y="798px 30px 146px" absolute>
              <div
                className={cn(styles.icon3)}
                style={{ '--src': `url(${require('assets/32982d1c5c89acbf375adf2b18d71536.png').default})` }}
              />
            </px-posize>
            <px-posize x="61fr 24px 237fr" y="103px 24px 847px" absolute>
              <div
                className={cn(styles.icon5)}
                style={{ '--src': `url(${require('assets/3c410c0eb140eda24fda5d35ba623c4c.png').default})` }}
              />
            </px-posize>
          </div>
        </div>
        <div className={cn(styles.flex1_spacer)} />
        <div className={cn(styles.flex1_item1)}>
          <div className={cn(styles.flex4, styles.flex4_layout)}>
            <div className={cn(styles.group2, styles.group2_layout)}>
              <div className={cn(styles.block6, styles.block6_layout)}>
                <div className={cn(styles.flex5, styles.flex5_layout)}>
                  <h2 className={cn(styles.medium_title, styles.medium_title_layout)}>{'Update Sample Status'}</h2>
                  <h2 className={cn(styles.medium_title4, styles.medium_title4_layout)}>{'Sample ID'}</h2>
                  <input type="text" value={changedSampleId} onChange={(e)=>setChangedSampleId(e.target.value)} className={cn(styles.box8, styles.box8_layout)} />
                  <h2 className={cn(styles.medium_title4, styles.medium_title4_layout1)}>{'Update Status'}</h2>
                  <div className={cn(styles.box8, styles.box8_layout, styles.cover_block2_layout)}>
                    <Dropdown options={options} onChange={_onSelect} value={changedSampleStatus} placeholder="Select a status" />
                  </div>
                </div>
              </div>

              <div className={cn(styles.block9, styles.block9_layout)}>
                <px-posize track-style='{"flexGrow":1}' x="13px 83fr 8fr" y="4px minmax(0px, 27fr) 0fr">
                  <h3 onClick={submitStatus} style={{cursor:"pointer"}} className={cn(styles.subtitle7)}>{'Submit'}</h3>
                </px-posize>
              </div>

              <div className={cn(styles.block8, styles.block8_layout)}>
                <px-posize track-style='{"flexGrow":1}' x="17px 75fr 12fr" y="4px minmax(0px, 27fr) 0fr">
                  <h3 onClick={cancelStatus} style={{cursor:"pointer"}} className={cn(styles.subtitle6)}>{'Cancel'}</h3>
                </px-posize>
              </div>
            </div>

            <div className={cn(styles.block7, styles.block7_layout)}>
              <div className={cn(styles.flex6, styles.flex6_layout)}>
                <h2 className={cn(styles.medium_title, styles.medium_title_layout1)}>{'Upload Report'}</h2>
                <h2 className={cn(styles.medium_title4, styles.medium_title4_layout)}>{'Sample ID'}</h2>
                <input type="text" value={reportSampleId} onChange={(e)=>setReportSampleId(e.target.value)} className={cn(styles.box8, styles.box8_layout1)} />
                <h2 className={cn(styles.medium_title4, styles.medium_title4_layout2)}>{'Upload Report'}</h2>
                <input type="file" name="file" ref={ref} onChange={changeHandler} className={cn(styles.box8, styles.box8_layout1)} />

                <div className={cn(styles.flex7, styles.flex7_layout)}>
                  <div className={cn(styles.flex7_item)}>
                    <div className={cn(styles.block8, styles.block8_layout1)}>
                      <h3 onClick={cancelReport} style={{cursor:"pointer"}} className={cn(styles.subtitle61, styles.subtitle61_layout)}>{'Cancel'}</h3>
                    </div>
                  </div>
                  <div className={cn(styles.flex7_spacer)} />
                  <div className={cn(styles.flex7_item)}>
                    <div className={cn(styles.block9, styles.block9_layout1)}>
                      <h3 onClick={submitReport} style={{cursor:"pointer"}} className={cn(styles.subtitle71, styles.subtitle71_layout)}>{'Submit'}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn(styles.flex1_spacer1)} />
        <div className={cn(styles.flex1_item2)}>
          <div className={cn(styles.flex8, styles.flex8_layout)}>
            <div className={cn(styles.flex9, styles.flex9_layout)}>
              <div className={cn(styles.flex9_item)}>
                <div className={cn(styles.cover_block, styles.cover_block_layout)}>
                  <div className={cn(styles.flex10, styles.flex10_layout)}>
                    <div className={cn(styles.flex10_item)}>
                      <div
                        style={{ '--src': `url(${require('assets/fcab9692a4f16fa136c4e8b2ea712f8a.png').default})` }}
                        className={cn(styles.icon9, styles.icon9_layout)}
                      />
                    </div>
                    <div className={cn(styles.flex10_spacer)} />
                    <div className={cn(styles.flex10_item1)}>
                      <div className={cn(styles.flex11, styles.flex11_layout)}>
                        <h3 className={cn(styles.subtitle2, styles.subtitle2_layout1)}>{'Total Samples'}</h3>
                        <h2 className={cn(styles.medium_title51, styles.medium_title51_layout)}>{'100'}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cn(styles.flex9_spacer)} />
              <div className={cn(styles.flex9_item1)}>
                <div className={cn(styles.group3, styles.group3_layout)}>
                  <div className={cn(styles.block12, styles.block12_layout)}>
                    <div className={cn(styles.flex12, styles.flex12_layout)}>
                      <h3 className={cn(styles.subtitle21, styles.subtitle21_layout)}>{'Total Technicians'}</h3>
                      <h2 className={cn(styles.medium_title52, styles.medium_title52_layout)}>{'30'}</h2>
                    </div>
                  </div>

                  <px-posize x="21fr 50px 196fr" y="51px 50px 51px" absolute>
                    <div
                      className={cn(styles.icon91)}
                      style={{ '--src': `url(${require('assets/1e7489f982a7e54779e1c1271d8dcefb.png').default})` }}
                    />
                  </px-posize>
                </div>
              </div>
            </div>

            <div className={cn(styles.block11, styles.block11_layout)}>
              <div className={cn(styles.flex13, styles.flex13_layout)}>
                <div className={cn(styles.flex13_item)}>
                  <div className={cn(styles.flex14, styles.flex14_layout)}>
                    <h2 className={cn(styles.medium_title, styles.medium_title_layout2)}>{'Sample By Status'}</h2>

                    <div className={cn(styles.flex15, styles.flex15_layout)}>
                      <div className={cn(styles.flex15_item)}>
                        <div className={cn(styles.group4, styles.group4_layout)}>
                          <div
                            style={{
                              '--src': `url(${require('assets/ce8a73aea148628d8417983afdaa54a8.png').default})`
                            }}
                            className={cn(styles.image5, styles.image5_layout)}
                          />
                          <px-posize x="100fr 98px 2fr" y="100px 98px 2px" absolute>
                            <div
                              className={cn(styles.icon7)}
                              style={{
                                '--src': `url(${require('assets/ce52b2ca02364f99ba55ecba85ccf141.png').default})`
                              }}
                            />
                          </px-posize>
                          <px-posize x="36fr 81px 83fr" y="100px 100px 0px" absolute>
                            <div
                              className={cn(styles.image6)}
                              style={{
                                '--src': `url(${require('assets/85cd6df01ac4836285013647444feeef.png').default})`
                              }}
                            />
                          </px-posize>
                          <px-posize x="2fr 98px 100fr" y="100px 77px 23px" absolute>
                            <div
                              className={cn(styles.image7)}
                              style={{
                                '--src': `url(${require('assets/f171a420fef53db442bafe4a1772ad39.png').default})`
                              }}
                            />
                          </px-posize>
                          <div
                            style={{
                              '--src': `url(${require('assets/fc2e9bdbc96476087c627c67e79d0b15.png').default})`
                            }}
                            className={cn(styles.image8, styles.image8_layout)}
                          />
                          <px-posize x="13fr 87px 100fr" y="0px 100px 100px" absolute>
                            <div
                              className={cn(styles.image9)}
                              style={{
                                '--src': `url(${require('assets/848e0602b15b3c3b7961b2b9b551560c.png').default})`
                              }}
                            />
                          </px-posize>
                          <div
                            style={{
                              '--src': `url(${require('assets/4e81ddbeca9165fb23359e58993cae18.png').default})`
                            }}
                            className={cn(styles.icon8, styles.icon8_layout)}
                          />
                        </div>
                      </div>
                      <div className={cn(styles.flex15_spacer)} />
                      <div className={cn(styles.flex15_item1)}>
                        <div className={cn(styles.flex16, styles.flex16_layout)}>
                          <div
                            style={{
                              '--src': `url(${require('assets/b2e5aa213274816ff3ebee66676d4903.png').default})`
                            }}
                            className={cn(styles.icon6, styles.icon6_layout)}
                          />
                          <div
                            style={{
                              '--src': `url(${require('assets/cc26e746c782f860647ff4978e422f4d.png').default})`
                            }}
                            className={cn(styles.icon6, styles.icon6_layout1)}
                          />
                          <div
                            style={{
                              '--src': `url(${require('assets/1fb623f63fa67ec0206e74a673b240dc.png').default})`
                            }}
                            className={cn(styles.icon6, styles.icon6_layout2)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cn(styles.flex13_spacer)} />
                <div className={cn(styles.flex13_item1)}>
                  <div className={cn(styles.flex17, styles.flex17_layout)}>
                    <h3 className={cn(styles.subtitle9_box, styles.subtitle9_box_layout)}>
                      <pre className={cn(styles.subtitle9)}>{'Collected\n'}</pre>
                    </h3>
                    <h3 className={cn(styles.subtitle91_box, styles.subtitle91_box_layout)}>
                      <pre className={cn(styles.subtitle9)}>{'In Transit\n'}</pre>
                    </h3>
                    <h3 className={cn(styles.subtitle91_box, styles.subtitle91_box_layout1)}>
                      <pre className={cn(styles.subtitle9)}>{'Shipped\n'}</pre>
                    </h3>
                  </div>
                </div>
                <div className={cn(styles.flex13_spacer1)} />
                <div className={cn(styles.flex13_item2)}>
                  <div className={cn(styles.flex16, styles.flex16_layout1)}>
                    <div
                      style={{ '--src': `url(${require('assets/9cb0bebf333398259e44ad179e1266b8.png').default})` }}
                      className={cn(styles.icon6, styles.icon6_layout)}
                    />
                    <div
                      style={{ '--src': `url(${require('assets/74aed9b262b32df2c82ad0f2e4d67b40.png').default})` }}
                      className={cn(styles.icon6, styles.icon6_layout3)}
                    />
                    <div
                      style={{ '--src': `url(${require('assets/2e9645cf0d05bcf9193f38ca02709936.png').default})` }}
                      className={cn(styles.icon6, styles.icon6_layout4)}
                    />
                  </div>
                </div>
                <div className={cn(styles.flex13_spacer)} />
                <div className={cn(styles.flex13_item3)}>
                  <div className={cn(styles.flex19, styles.flex19_layout)}>
                    <h3 className={cn(styles.subtitle91_box, styles.subtitle91_box_layout2)}>
                      <pre className={cn(styles.subtitle9)}>{'In Freezer\n'}</pre>
                    </h3>
                    <h3 className={cn(styles.subtitle91_box, styles.subtitle91_box_layout)}>
                      <pre className={cn(styles.subtitle9)}>{'Diagnosis\n'}</pre>
                    </h3>
                    <h3 className={cn(styles.subtitle91_box, styles.subtitle91_box_layout3)}>
                      <pre className={cn(styles.subtitle9)}>{'Report\n'}</pre>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(styles.block5, styles.block5_layout)}>
              <div className={cn(styles.flex20, styles.flex20_layout)}>
                <div className={cn(styles.flex20_item)}>
                  <div className={cn(styles.flex21, styles.flex21_layout)}>
                    <h2 className={cn(styles.medium_title, styles.medium_title_layout3)}>{'Sample By Types'}</h2>

                    <div className={cn(styles.cover_block4, styles.cover_block4_layout)}>
                      <h2 className={cn(styles.medium_title3, styles.medium_title3_layout)}>{'Blood Sample'}</h2>
                    </div>

                    <div className={cn(styles.cover_block3, styles.cover_block3_layout)}>
                      <h2 className={cn(styles.medium_title3, styles.medium_title3_layout)}>{'Tissue Sample'}</h2>
                    </div>
                  </div>
                </div>
                <div className={cn(styles.flex20_spacer)} />
                <div className={cn(styles.flex20_item1)}>
                  <div className={cn(styles.flex22, styles.flex22_layout)}>
                    <h3 className={cn(styles.subtitle5, styles.subtitle5_layout)}>{'65'}</h3>
                    <h3 className={cn(styles.subtitle5, styles.subtitle5_layout1)}>{'35'}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn(styles.flex1_spacer2)} />
        <div className={cn(styles.flex1_item3)}>
          <div className={cn(styles.group5, styles.group5_layout)}>
            <div className={cn(styles.block3, styles.block3_layout)}>
              <div className={cn(styles.flex23, styles.flex23_layout)}>
                <div className={cn(styles.block4, styles.block4_layout)}>
                  <h2 className={cn(styles.medium_title, styles.medium_title_layout4)}>{'Report Status'}</h2>
                </div>

                <div className={cn(styles.flex24, styles.flex24_layout)}>
                  <div className={cn(styles.flex24_item)}>
                    <div className={cn(styles.group6, styles.group6_layout)}>
                      <div
                        style={{ '--src': `url(${require('assets/44f8a9e81d812809df67d39e78be76ca.png').default})` }}
                        className={cn(styles.cover_block6, styles.cover_block6_layout)}>
                        <h3 className={cn(styles.subtitle3, styles.subtitle3_layout)}>{'800'}</h3>
                      </div>

                      <div
                        style={{ '--src': `url(${require('assets/40935e6f242e9a52340b3e4349eff026.png').default})` }}
                        className={cn(styles.cover_block5, styles.cover_block5_layout)}>
                        <h3 className={cn(styles.subtitle3, styles.subtitle3_layout1)}>{'534'}</h3>
                      </div>
                    </div>
                  </div>
                  <div className={cn(styles.flex24_spacer)} />
                  <div className={cn(styles.flex24_item1)}>
                    <div className={cn(styles.flex25, styles.flex25_layout)}>
                      <div
                        style={{ '--src': `url(${require('assets/2778afd1fae267916eb8c9b23eae3fea.png').default})` }}
                        className={cn(styles.icon4, styles.icon4_layout)}
                      />
                      <div
                        style={{ '--src': `url(${require('assets/f13432e1f7041ff81b5df3d35f895961.png').default})` }}
                        className={cn(styles.icon4, styles.icon4_layout1)}
                      />
                    </div>
                  </div>
                  <div className={cn(styles.flex24_spacer1)} />
                  <div className={cn(styles.flex24_item2)}>
                    <div className={cn(styles.flex26, styles.flex26_layout)}>
                      <h3 className={cn(styles.subtitle4, styles.subtitle4_layout)}>{'Report Sent'}</h3>
                      <h3 className={cn(styles.subtitle4, styles.subtitle4_layout1)}>{'Report Pending'}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className={cn(styles.medium_title1, styles.medium_title1_layout)}>{'Total Samples Collected: 1334'}</h2>

            <div
              style={{ '--src': `url(${require('assets/866b169923b49ef56b3945fc7e8fc284.png').default})` }}
              className={cn(styles.cover_block1, styles.cover_block1_layout)}>
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
                className={cn(styles.icon3)}
                style={{ '--src': `url(${require('assets/285a960de8a7002b58b5a64e0fb693fb.png').default})` }}
              />
            </px-posize>
            <h3 className={cn(styles.subtitle41, styles.subtitle41_layout)}>{'Shipping Pending'}</h3>
            <px-posize x="221fr 30px 246fr" y="618px 30px 203px" absolute>
              <div
                className={cn(styles.icon3)}
                style={{ '--src': `url(${require('assets/01429dc7c87e3ea4ed44e7ba65006b9f.png').default})` }}
              />
            </px-posize>
            <h3 className={cn(styles.subtitle42, styles.subtitle42_layout)}>{'Shipped'}</h3>

          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

Lab.inStorybook = true;
