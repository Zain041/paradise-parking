import React, { useEffect , Suspense } from 'react';
import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

const Header = () => {

  // const [state , setState] = useState({
  //   english : 'en' ,
  //   distch : 'de'

  // })
  const [languages , setlanguages] = useState(null)
  
  
  const selectLang = (e) => {
    console.log(e.target.value)

    setlanguages(e.target.value)

    localStorage.setItem('lang', languages)
    window.location.reload()
  }


  useEffect(() => {


    const lang = localStorage.getItem('lang')


  }, [])

  // const [t, i18n] = useTranslation();
  let i18n = {
    changeLanguage:()=>{}
  }
  return (
    <>
      <div className='navbar-custom topnav-navbar topnav-navbar-dark'>
        <div className='container-fluid'>
          {/* LOGO */}
          <a href='index.html' className='topnav-logo'>
            <span className='topnav-logo-lg'>
              <img
                src='admin/assets/images/logo-light.png'
                alt='logo'
                height={16}
              />
            </span>
            <span className='topnav-logo-sm'>
              <img
                src='admin/assets/images/logo_sm.png'
                alt='pic'
                height={16}
              />
            </span>
          </a>
          <ul className='list-unstyled topbar-menu float-end mb-0'>
            <li className='dropdown notification-list d-xl-none'>
              <a
                className='nav-link dropdown-toggle arrow-none'
                data-bs-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='false'
                aria-expanded='false'>
                <i className='dripicons-search noti-icon' />
              </a>
              <div className='dropdown-menu dropdown-menu-animated dropdown-lg p-0'>
                <form className='p-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search ...'
                    aria-label="Recipient's username"
                  />
                </form>
              </div>
            </li>
            <li className='dropdown notification-list topbar-dropdown d-none d-lg-block'>
              <a
                className='nav-link dropdown-toggle arrow-none'
                data-bs-toggle='dropdown'
                id='topbar-languagedrop'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'>
                <img
                  src='admin/assets/images/flags/us.jpg'
                  alt='userImage'
                  className='me-1'
                  height={12}
                />
                <span className='align-middle' value="en" onClick={() => i18n.changeLanguage('en')}>English</span>{' '}
                <i className='mdi mdi-chevron-down' />
              </a>
              <div
                className='dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu'
                aria-labelledby='topbar-languagedrop'>
                {/* item*/}
                <a
                  href='javascript:void(0);'
                  className='dropdown-item notify-item'>
                  <img
                    src='admin/assets/images/flags/germany.jpg'
                    alt='userImage'
                    className='me-1'
                    height={12}
                  />{' '}
                  <span className='align-middle' value="de"  onClick={() => i18n.changeLanguage('de')}>German</span>
                </a>
                {/* item*/}
                <a
                  href='javascript:void(0);'
                  className='dropdown-item notify-item'>
                  <img
                    src='admin/assets/images/flags/italy.jpg'
                    alt='userImage'
                    className='me-1'
                    height={12}
                  />{' '}
                  <span className='align-middle' value="it"  onClick={() => i18n.changeLanguage('it')}>Italian</span>
                </a>
                {/* item*/}
                <a
                  href='javascript:void(0);'
                  className='dropdown-item notify-item'>
                  <img
                    src='admin/assets/images/flags/spain.jpg'
                    alt='userImage'
                    className='me-1'
                    height={12}
                  />{' '}
                  <span className='align-middle' value="es" onClick={() => i18n.changeLanguage('es')}>Spanish</span>
                </a>
                {/* item*/}
                <a
                  href='javascript:void(0);'
                  className='dropdown-item notify-item'>
                  <img
                    src='admin/assets/images/flags/russia.jpg'
                    alt='userImage'
                    className='me-1'
                    height={12}
                  />{' '}
                  <span className='align-middle' value="ru" onClick={() => i18n.changeLanguage('ru')}>Russian</span>
                </a>
              </div>
            </li>
            <li className='dropdown notification-list'>
              <a
                className='nav-link dropdown-toggle arrow-none'
                data-bs-toggle='dropdown'
                href='#'
                id='topbar-notifydrop'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'>
                <i className='dripicons-bell noti-icon' />
                <span className='noti-icon-badge' />
              </a>
              <div
                className='dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg'
                aria-labelledby='topbar-notifydrop'>
                {/* item*/}
                <div className='dropdown-item noti-title'>
                  <h5 className='m-0'>
                    <span className='float-end'>
                      <a href='javascript: void(0);' className='text-dark'>
                        <small>Clear All</small>
                      </a>
                    </span>
                    Notification
                  </h5>
                </div>
                <div style={{ maxHeight: 230 }} data-simplebar>
                  {/* item*/}
                  <a
                    href='javascript:void(0);'
                    className='dropdown-item notify-item'>
                    <div className='notify-icon bg-primary'>
                      <i className='mdi mdi-comment-account-outline' />
                    </div>
                    <p className='notify-details'>
                      Caleb Flakelar commented on Admin
                      <small className='text-muted'>1 min ago</small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href='javascript:void(0);'
                    className='dropdown-item notify-item'>
                    <div className='notify-icon bg-info'>
                      <i className='mdi mdi-account-plus' />
                    </div>
                    <p className='notify-details'>
                      New user registered.
                      <small className='text-muted'>5 hours ago</small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href='javascript:void(0);'
                    className='dropdown-item notify-item'>
                    <div className='notify-icon'>
                      <img
                        src='admin/assets/images/users/avatar-2.jpg'
                        className='img-fluid rounded-circle'
                        alt='pic'
                      />{' '}
                    </div>
                    <p className='notify-details'>Cristina Pride</p>
                    <p className='text-muted mb-0 user-msg'>
                      <small>
                        Hi, How are you? What about our next meeting
                      </small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href='javascript:void(0);'
                    className='dropdown-item notify-item'>
                    <div className='notify-icon bg-primary'>
                      <i className='mdi mdi-comment-account-outline' />
                    </div>
                    <p className='notify-details'>
                      Caleb Flakelar commented on Admin
                      <small className='text-muted'>4 days ago</small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href='javascript:void(0);'
                    className='dropdown-item notify-item'>
                    <div className='notify-icon'>
                      <img
                        src='admin/assets/images/users/avatar-4.jpg'
                        className='img-fluid rounded-circle'
                        alt='pic'
                      />{' '}
                    </div>
                    <p className='notify-details'>Karen Robinson</p>
                    <p className='text-muted mb-0 user-msg'>
                      <small>
                        Wow ! this admin looks good and awesome design
                      </small>
                    </p>
                  </a>
                  {/* item*/}
                  <a
                    href='javascript:void(0);'
                    className='dropdown-item notify-item'>
                    <div className='notify-icon bg-info'>
                      <i className='mdi mdi-heart' />
                    </div>
                    <p className='notify-details'>
                      Carlos Crouch liked
                      <b>Admin</b>
                      <small className='text-muted'>13 days ago</small>
                    </p>
                  </a>
                </div>
                {/* All*/}
                <a
                  href='javascript:void(0);'
                  className='dropdown-item text-center text-primary notify-item notify-all'>
                  View All
                </a>
              </div>
            </li>
            <li className='dropdown notification-list d-none d-sm-inline-block'>
              <a
                className='nav-link dropdown-toggle arrow-none'
                data-bs-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='false'
                aria-expanded='false'>
                <i className='dripicons-view-apps noti-icon' />
              </a>
              <div className='dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0'>
                <div className='p-2'>
                  <div className='row g-0'>
                    <div className='col'>
                      <a className='dropdown-icon-item' href='#'>
                        <img
                          src='admin/assets/images/brands/slack.png'
                          alt='slack'
                        />
                        <span>Slack</span>
                      </a>
                    </div>
                    <div className='col'>
                      <a className='dropdown-icon-item' href='#'>
                        <img
                          src='admin/assets/images/brands/github.png'
                          alt='Github'
                        />
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className='col'>
                      <a className='dropdown-icon-item' href='#'>
                        <img
                          src='admin/assets/images/brands/dribbble.png'
                          alt='dribbble'
                        />
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>
                  <div className='row g-0'>
                    <div className='col'>
                      <a className='dropdown-icon-item' href='#'>
                        <img
                          src='admin/assets/images/brands/bitbucket.png'
                          alt='bitbucket'
                        />
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div className='col'>
                      <a className='dropdown-icon-item' href='#'>
                        <img
                          src='admin/assets/images/brands/dropbox.png'
                          alt='dropbox'
                        />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div className='col'>
                      <a className='dropdown-icon-item' href='#'>
                        <img
                          src='admin/assets/images/brands/g-suite.png'
                          alt='G Suite'
                        />
                        <span>G Suite</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='notification-list'>
              <a
                className='nav-link end-bar-toggle'
                href='javascript: void(0);'>
                <i className='dripicons-gear noti-icon' />
              </a>
            </li>
            <li>
              <div id="google_translate_element"></div>

            </li>
          </ul>
          <a className='button-menu-mobile disable-btn'>
            <div className='lines'>
              <span />
              <span />
              <span />
            </div>
          </a>
          <div className='app-search dropdown'>
            <form>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search...'
                  id='top-search'
                />
                <span className='mdi mdi-magnify search-icon' />
                <button className='input-group-text btn-primary' type='submit'>
                  Search
                </button>
              </div>
            </form>
            <div
              className='dropdown-menu dropdown-menu-animated dropdown-lg'
              id='search-dropdown'>
              {/* item*/}
              <div className='dropdown-header noti-title'>
                <h5 className='text-overflow mb-2'>
                  Found <span className='text-danger'>17</span> results
                </h5>
              </div>
              {/* item*/}
              <a
                href='javascript:void(0);'
                className='dropdown-item notify-item'>
                <i className='uil-notes font-16 me-1' />
                <span>Analytics Report</span>
              </a>
              {/* item*/}
              <a
                href='javascript:void(0);'
                className='dropdown-item notify-item'>
                <i className='uil-life-ring font-16 me-1' />
                <span>How can I help you?</span>
              </a>
              {/* item*/}
              <a
                href='javascript:void(0);'
                className='dropdown-item notify-item'>
                <i className='uil-cog font-16 me-1' />
                <span>User profile settings</span>
              </a>
              {/* item*/}
              <div className='dropdown-header noti-title'>
                <h6 className='text-overflow mb-2 text-uppercase'>Users</h6>
              </div>
              <div className='notification-list'>
                {/* item*/}
                <a
                  href='javascript:void(0);'
                  className='dropdown-item notify-item'>
                  <div className='d-flex'>
                    <img
                      className='d-flex me-2 rounded-circle'
                      src='admin/assets/images/users/avatar-2.jpg'
                      alt='Generic placeholder image'
                      height={32}
                    />
                    <div className='w-100'>
                      <h5 className='m-0 font-14'>Erwin Brown</h5>
                      <span className='font-12 mb-0'>UI Designer</span>
                    </div>
                  </div>
                </a>
                {/* item*/}
                <a
                  href='javascript:void(0);'
                  className='dropdown-item notify-item'>
                  <div className='d-flex'>
                    <img
                      className='d-flex me-2 rounded-circle'
                      src='admin/assets/images/users/avatar-5.jpg'
                      alt='Generic placeholder image'
                      height={32}
                    />
                    <div className='w-100'>
                      <h5 className='m-0 font-14'>Jacob Deo</h5>
                      <span className='font-12 mb-0'>Developer</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
