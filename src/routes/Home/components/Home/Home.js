import React from 'react';
import Theme from '../../../../theme';
<<<<<<< HEAD
import { Link } from 'react-router';
import { paths } from '../../../../constants';
import classes from './Home.scss';
const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper';
const reactRouterUrl = 'https://github.com/ReactTraining/react-router';
export const Home = () => (
    <div className={classes.container} style={{ color: Theme.palette.primary2Color }}>
        <div className='flex-row-center'>
            <h2>Home Route</h2>
        </div>
        <div className='flex-row-center'>
            <div className={classes.section}>
                <h3>
                    Routing
                </h3>
                <span>Redirecting and route protection done using:
          <div>
            <span>
              <a href={reactRouterUrl} target='_blank' rel="noopener noreferrer">
                react-router
              </a>
            </span>
            <span> and </span>
            <a href={authWrapperUrl} target='_blank' rel="noopener noreferrer">
              redux-auth-wrapper
            </a>
          </div>
        </span>
            </div>
            <div className={classes.section}>
                <h4>
                    Logged Out
                </h4>
                <span>User is redirected to <pre>/login</pre> if not authenticated and trying to vist:</span>
                <ul>
                    <li><Link to={paths.list}>Projects</Link></li>
                    <li><Link to={paths.account}>Account</Link></li>
                </ul>
            </div>
            <div className={classes.section}>
                <h4>
                    Logged In
                </h4>
                <span>
          User is redirected to <pre>/projects</pre> if authenticated and trying to vist:
        </span>
                <ul>
                    <li><Link to={paths.login}>Login</Link></li>
                    <li><Link to={paths.signup}>Signup</Link></li>
                </ul>
            </div>
            <div className={classes.section}>
                <div>
                    <h4>
                        Forms
                    </h4>
                    <span>Redirecting and route protection done using:</span>
                    <div>
            <span>
              <a href={reactRouterUrl} target='_blank' rel="noopener noreferrer">
                redux-form
              </a>
            </span>
                    </div>
                </div>
                <span>The following routes use redux-form:</span>
                <Link to={paths.account}><p>Account Page</p></Link>
            </div>
        </div>
    </div>
);
=======
import HomeMain from './Home-Main';
import HomeFooter from "./Home-Footer";
import HomePara from "./Home-Parallax"
import HomeDevs from "./Home-Devs";
import HomeBack from "./Home-Back";
// import { Link } from 'react-router';
// import { paths } from '../../../../constants';
// import classes from './Home.scss';
// const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper';
// const reactRouterUrl = 'https://github.com/ReactTraining/react-router';
export const Home = () => {
  return (
  <div>
  
    <HomeBack/>
  <HomeFooter />
  </div>
  

  )};
   
>>>>>>> 2b77e5c5e44070b1ebe43dd7a0146f3d1136fbb0
export default Home;