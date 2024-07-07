import React, {useRef, useState, useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import './index.module.css';

import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  const [animate, setAnimate] = useState(false);
  const [textPopUp, setTextPopUp] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 4000);

    
    setTimeout(() => {
      setTextPopUp(true);
    }, 5500);

    
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 150) {
          clearInterval(interval);
          return 0;
        }
        return prevCount + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}>
      <main>
        <BrowserOnly>
        {() => {
          return (
            <div id='container'>
              <div id='text-object' className={count > 83 ? 'wipe-out' : 'initial'}>
                MOOYEON
              </div>
              <div id='dot-object' className={ count > 115 ? 'invisible animate' : animate ? 'animate' : ''}></div>
              <div id='text-swing-first' className={count > 117 ? 'invisible text-swing' : 'text-swing'}>C</div>
              <div id='text-swing-second' className={count > 119 ? 'invisible text-swing' : 'text-swing'}>O</div>
              <div id='text-swing-third' className={count > 121 ? 'invisible text-swing' : 'text-swing'}>M</div>
              <div id='pacman'>
                <div id="mouth"></div>
              </div>
            </div>)}
        }
        </BrowserOnly>
      </main>
    </Layout>
  );
}