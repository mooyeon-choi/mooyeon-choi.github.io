import React, {useRef, useState, useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  const [count, setCount] = useState(1);
  const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const animate = time => {
    if (count === 0 || count > 1000) {
      setCount(0);
      requestRef.current = null;
    }

    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount(prevCount => (prevCount + deltaTime));
      console.log(count);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  const requestRef = useRef(requestAnimationFrame(animate));
  const previousTimeRef = useRef(0);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    const container = document.querySelector('#container');
  }, [])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}>
      <main>
        <div id='container'>
          <div  className='text'>{count && count < 322 ? alpha[Math.round(count % alpha.length)] : 'G'}</div>
          <div  className='text'>{count && count < 563 ? alpha[Math.round(count % alpha.length)] : 'O'}</div>
          <div  className='text'>{count && count < 150 ? alpha[Math.round(count % alpha.length)] : 'S'}</div>
          <div  className='text'>{count && count < 263 ? alpha[Math.round(count % alpha.length)] : 'W'}</div>
          <div  className='text'>{count && count < 352 ? alpha[Math.round(count % alpha.length)] : 'C'}</div>
          <div  className='text'>{count && count < 300 ? alpha[Math.round(count % alpha.length)] : 'V'}</div>
          <div  className='text'>{count && count < 356 ? alpha[Math.round(count % alpha.length)] : 'T'}</div>
          <div  className='text'>{count && count < 674 ? alpha[Math.round(count % alpha.length)] : 'G'}</div>
          <div  className='text'>{count && count < 546 ? alpha[Math.round(count % alpha.length)] : 'S'}</div>
          <div  className='text'>{count && count < 678 ? alpha[Math.round(count % alpha.length)] : 'M'}</div>
          <div  className='text'>{count && count < 987 ? alpha[Math.round(count % alpha.length)] : 'T'}</div>
          <div  className='text'>{count && count < 756 ? alpha[Math.round(count % alpha.length)] : 'Q'}</div>
          <div  className='text'>{count && count < 769 ? alpha[Math.round(count % alpha.length)] : 'A'}</div>
          <div  className='text'>{count && count < 700 ? alpha[Math.round(count % alpha.length)] : 'Z'}</div>
          <div  className='text'>{count && count < 234 ? alpha[Math.round(count % alpha.length)] : 'W'}</div>
          <div  className='text'>{count && count < 326 ? alpha[Math.round(count % alpha.length)] : 'S'}</div>
          <div  className='text'>{count && count < 876 ? alpha[Math.round(count % alpha.length)] : 'X'}</div>
          <div  className='text'>{count && count < 900 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='sayHi'>{count && count < 367 ? alpha[Math.round(count % alpha.length)] : 'H'}</div>
          <div  className='sayHi'>{count && count < 348 ? alpha[Math.round(count % alpha.length)] : 'I'}</div>
          <div  className='text'>{count && count < 346 ? alpha[Math.round(count % alpha.length)] : 'F'}</div>
          <div  className='sayHi'>{count && count < 265 ? alpha[Math.round(count % alpha.length)] : 'T'}</div>
          <div  className='sayHi'>{count && count < 546 ? alpha[Math.round(count % alpha.length)] : 'H'}</div>
          <div  className='sayHi'>{count && count < 345 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='sayHi'>{count && count < 234 ? alpha[Math.round(count % alpha.length)] : 'R'}</div>
          <div  className='sayHi'>{count && count < 867 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='text'>{count && count < 235 ? alpha[Math.round(count % alpha.length)] : 'W'}</div>
          <div  className='text'>{count && count < 678 ? alpha[Math.round(count % alpha.length)] : 'S'}</div>
          <div  className='text'>{count && count < 789 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='text'>{count && count < 845 ? alpha[Math.round(count % alpha.length)] : 'H'}</div>
          <div  className='text'>{count && count < 955 ? alpha[Math.round(count % alpha.length)] : 'N'}</div>
          <div  className='text'>{count && count < 695 ? alpha[Math.round(count % alpha.length)] : 'U'}</div>
          <div  className='text'>{count && count < 236 ? alpha[Math.round(count % alpha.length)] : 'J'}</div>
          <div  className='text'>{count && count < 123 ? alpha[Math.round(count % alpha.length)] : 'M'}</div>
          <div  className='text'>{count && count < 324 ? alpha[Math.round(count % alpha.length)] : 'I'}</div>
          <div  className='text'>{count && count < 765 ? alpha[Math.round(count % alpha.length)] : 'K'}</div>
          <div  className='text'>{count && count < 829 ? alpha[Math.round(count % alpha.length)] : 'L'}</div>
          <div  className='text'>{count && count < 289 ? alpha[Math.round(count % alpha.length)] : 'P'}</div>
          <div  className='sayHi'>{count && count < 327 ? alpha[Math.round(count % alpha.length)] : 'I'}</div>
          <div  className='sayHi'>{count && count < 234 ? alpha[Math.round(count % alpha.length)] : "'"}</div>
          <div  className='sayHi'>{count && count < 752 ? alpha[Math.round(count % alpha.length)] : 'M'}</div>
          <div  className='text'>{count && count < 124 ? alpha[Math.round(count % alpha.length)] : 'D'}</div>
          <div  className='text'>{count && count < 453 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='text'>{count && count < 753 ? alpha[Math.round(count % alpha.length)] : 'H'}</div>
          <div  className='text'>{count && count < 123 ? alpha[Math.round(count % alpha.length)] : 'N'}</div>
          <div  className='text'>{count && count < 532 ? alpha[Math.round(count % alpha.length)] : 'T'}</div>
          <div  className='text'>{count && count < 325 ? alpha[Math.round(count % alpha.length)] : 'Y'}</div>
          <div  className='text'>{count && count < 347 ? alpha[Math.round(count % alpha.length)] : 'H'}</div>
          <div  className='text'>{count && count < 578 ? alpha[Math.round(count % alpha.length)] : 'N'}</div>
          <div  className='text'>{count && count < 234 ? alpha[Math.round(count % alpha.length)] : 'J'}</div>
          <div  className='text'>{count && count < 125 ? alpha[Math.round(count % alpha.length)] : 'M'}</div>
          <div  className='text'>{count && count < 658 ? alpha[Math.round(count % alpha.length)] : 'I'}</div>
          <div  className='text'>{count && count < 23 ? alpha[Math.round(count % alpha.length)] : 'K'}</div>
          <div  className='text'>{count && count < 756 ? alpha[Math.round(count % alpha.length)] : 'G'}</div>
          <div  className='text'>{count && count < 132 ? alpha[Math.round(count % alpha.length)] : 'B'}</div>
          <div  className='text'>{count && count < 897 ? alpha[Math.round(count % alpha.length)] : 'U'}</div>
          <div  className='text'>{count && count < 324 ? alpha[Math.round(count % alpha.length)] : 'J'}</div>
          <div  className='sayHi'>{count && count < 123 ? alpha[Math.round(count % alpha.length)] : 'M'}</div>
          <div  className='sayHi'>{count && count < 54 ? alpha[Math.round(count % alpha.length)] : 'O'}</div>
          <div  className='sayHi'>{count && count < 568 ? alpha[Math.round(count % alpha.length)] : 'O'}</div>
          <div  className='sayHi'>{count && count < 894 ? alpha[Math.round(count % alpha.length)] : 'Y'}</div>
          <div  className='sayHi'>{count && count < 853 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='sayHi'>{count && count < 323 ? alpha[Math.round(count % alpha.length)] : 'O'}</div>
          <div  className='sayHi'>{count && count < 736 ? alpha[Math.round(count % alpha.length)] : 'N'}</div>
          <div  className='text'>{count && count < 375 ? alpha[Math.round(count % alpha.length)] : 'V'}</div>
          <div  className='text'>{count && count < 456 ? alpha[Math.round(count % alpha.length)] : 'Y'}</div>
          <div  className='text'>{count && count < 567 ? alpha[Math.round(count % alpha.length)] : 'W'}</div>
          <div  className='text'>{count && count < 332 ? alpha[Math.round(count % alpha.length)] : 'U'}</div>
          <div  className='text'>{count && count < 234 ? alpha[Math.round(count % alpha.length)] : 'P'}</div>
          <div  className='text'>{count && count < 537 ? alpha[Math.round(count % alpha.length)] : 'D'}</div>
          <div  className='text'>{count && count < 343 ? alpha[Math.round(count % alpha.length)] : 'C'}</div>
          <div  className='text'>{count && count < 321 ? alpha[Math.round(count % alpha.length)] : 'R'}</div>
          <div  className='text'>{count && count < 345 ? alpha[Math.round(count % alpha.length)] : 'M'}</div>
          <div  className='text'>{count && count < 675 ? alpha[Math.round(count % alpha.length)] : 'I'}</div>
          <div  className='sayHi'>{count && count < 675 ? alpha[Math.round(count % alpha.length)] : 'F'}</div>
          <div  className='sayHi'>{count && count < 269 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='text'>{count && count < 437 ? alpha[Math.round(count % alpha.length)] : 'P'}</div>
          <div  className='sayHi'>{count && count < 330 ? alpha[Math.round(count % alpha.length)] : 'D'}</div>
          <div  className='sayHi'>{count && count < 137 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='sayHi'>{count && count < 25 ? alpha[Math.round(count % alpha.length)] : 'V'}</div>
          <div  className='sayHi'>{count && count < 165 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='sayHi'>{count && count < 329 ? alpha[Math.round(count % alpha.length)] : 'L'}</div>
          <div  className='sayHi'>{count && count < 947 ? alpha[Math.round(count % alpha.length)] : 'O'}</div>
          <div  className='sayHi'>{count && count < 265 ? alpha[Math.round(count % alpha.length)] : 'P'}</div>
          <div  className='text'>{count && count < 832 ? alpha[Math.round(count % alpha.length)] : 'E'}</div>
          <div  className='text'>{count && count < 267 ? alpha[Math.round(count % alpha.length)] : 'R'}</div>
          <div  className='text'>{count && count < 438 ? alpha[Math.round(count % alpha.length)] : 'R'}</div>
          <div  className='text'>{count && count < 678 ? alpha[Math.round(count % alpha.length)] : 'F'}</div>
          <div  className='text'>{count && count < 325 ? alpha[Math.round(count % alpha.length)] : 'V'}</div>
          <div  className='text'>{count && count < 256 ? alpha[Math.round(count % alpha.length)] : 'T'}</div>
          <div  className='text'>{count && count < 56 ? alpha[Math.round(count % alpha.length)] : 'G'}</div>
          <div  className='text'>{count && count < 267 ? alpha[Math.round(count % alpha.length)] : 'B'}</div>
          <div  className='text'>{count && count < 234 ? alpha[Math.round(count % alpha.length)] : 'O'}</div>
          <div  className='text'>{count && count < 728 ? alpha[Math.round(count % alpha.length)] : 'L'}</div>
          <div  className='text'>{count && count < 345 ? alpha[Math.round(count % alpha.length)] : 'P'}</div>
          <div  className='text'>{count && count < 546 ? alpha[Math.round(count % alpha.length)] : 'Q'}</div>
          <div  className='text'>{count && count < 456 ? alpha[Math.round(count % alpha.length)] : 'A'}</div>
          <div  className='text'>{count && count < 123 ? alpha[Math.round(count % alpha.length)] : 'Z'}</div>
          <div  className='text'>{count && count < 768 ? alpha[Math.round(count % alpha.length)] : 'W'}</div>
          <div  className='text'>{count && count < 265 ? alpha[Math.round(count % alpha.length)] : 'N'}</div>
          <div  className='text'>{count && count < 254 ? alpha[Math.round(count % alpha.length)] : 'U'}</div>
          <div  className='text'>{count && count < 678 ? alpha[Math.round(count % alpha.length)] : 'J'}</div>
          <div  className='text'>{count && count < 234 ? alpha[Math.round(count % alpha.length)] : 'M'}</div>
          <div  className='text'>{count && count < 789 ? alpha[Math.round(count % alpha.length)] : 'I'}</div>
          <div  className='text'>{count && count < 368 ? alpha[Math.round(count % alpha.length)] : 'K'}</div>
          <div  className='text'>{count && count < 456 ? alpha[Math.round(count % alpha.length)] : 'O'}</div>
          <div  className='text'>{count && count < 656 ? alpha[Math.round(count % alpha.length)] : 'L'}</div>
          <div  className='text'>{count && count < 56 ? alpha[Math.round(count % alpha.length)] : 'F'}</div>
          <div  className='text'>{count && count < 254 ? alpha[Math.round(count % alpha.length)] : 'V'}</div>
        </div>
      </main>
    </Layout>
  );
}