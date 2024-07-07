import React, {useRef, useState, useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import './index.module.css';

import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  const [animate, setAnimate] = useState(false);
  const [textPopUp, setTextPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 4000);

    
    setTimeout(() => {
      setTextPopUp(true);
    }, 5500);
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}>
      <main>
        <BrowserOnly>
        {() => {
          return (
            <div id='container'>
              <div id='text-object'>
                MOOYEON
              </div>
              <div id='dot-object' className={animate ? 'animate' : ''}></div>
              <div id='text-swing-first' className='text-swing'>C</div>
              <div id='text-swing-second' className='text-swing'>O</div>
              <div id='text-swing-third' className='text-swing'>M</div>
            </div>)}
        }
        </BrowserOnly>
      </main>
    </Layout>
  );
}