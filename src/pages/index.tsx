import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    const container = document.querySelector('#container');
  }, [])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}>
      <main>
        <div id='container'>
          <div className='text'>G</div>
          <div className='text'>O</div>
          <div className='text'>S</div>
          <div className='text'>W</div>
          <div className='text'>C</div>
          <div className='text'>V</div>
          <div className='text'>T</div>
          <div className='text'>G</div>
          <div className='text'>S</div>
          <div className='text'>M</div>
          <div className='text'>T</div>
          <div className='text'>Q</div>
          <div className='text'>A</div>
          <div className='text'>Z</div>
          <div className='text'>W</div>
          <div className='text'>S</div>
          <div className='text'>X</div>
          <div className='text'>E</div>
          <div className='sayHi'>H</div>
          <div className='sayHi'>I</div>
          <div className='text'>F</div>
          <div className='sayHi'>T</div>
          <div className='sayHi'>H</div>
          <div className='sayHi'>E</div>
          <div className='sayHi'>R</div>
          <div className='sayHi'>E</div>
          <div className='text'>W</div>
          <div className='text'>S</div>
          <div className='text'>E</div>
          <div className='text'>H</div>
          <div className='text'>N</div>
          <div className='text'>U</div>
          <div className='text'>J</div>
          <div className='text'>M</div>
          <div className='text'>I</div>
          <div className='text'>K</div>
          <div className='text'>L</div>
          <div className='text'>P</div>
          <div className='sayHi'>I</div>
          <div className='sayHi'>'</div>
          <div className='sayHi'>M</div>
          <div className='text'>W</div>
          <div className='link'>PORTFOLIO</div>
          <div className='text'>D</div>
          <div className='text'>C</div>
          <div className='text'>R</div>
          <div className='text'>E</div>
          <div className='text'>D</div>
          <div className='sayHi'>M</div>
          <div className='sayHi'>O</div>
          <div className='sayHi'>O</div>
          <div className='sayHi'>Y</div>
          <div className='sayHi'>E</div>
          <div className='sayHi'>O</div>
          <div className='sayHi'>N</div>
          <div className='text'>V</div>
          <div className='text'>Y</div>
          <div className='text'>H</div>
          <div className='text'>N</div>
          <div className='text'>T</div>
          <div className='text'>G</div>
          <div className='text'>B</div>
          <div className='text'>U</div>
          <div className='text'>J</div>
          <div className='text'>M</div>
          <div className='text'>I</div>
          <div className='sayHi'>F</div>
          <div className='sayHi'>E</div>
          <div className='text'>P</div>
          <div className='sayHi'>D</div>
          <div className='sayHi'>E</div>
          <div className='sayHi'>V</div>
          <div className='sayHi'>E</div>
          <div className='sayHi'>L</div>
          <div className='sayHi'>O</div>
          <div className='sayHi'>P</div>
          <div className='text'>E</div>
          <div className='text'>R</div>
          <div className='text'>R</div>
          <div className='text'>F</div>
          <div className='text'>V</div>
          <div className='text'>T</div>
          <div className='text'>G</div>
          <div className='text'>B</div>
          <div className='text'>Y</div>
          <div className='text'>H</div>
          <div className='text'>N</div>
          <div className='text'>U</div>
          <div className='text'>J</div>
          <div className='text'>M</div>
          <div className='text'>I</div>
          <div className='text'>K</div>
          <div className='text'>O</div>
          <div className='text'>L</div>
          <div className='text'>P</div>
          <div className='text'>Q</div>
          <div className='text'>A</div>
          <div className='text'>Z</div>
          <div className='text'>W</div>
          <div className='text'>S</div>
          <div className='text'>X</div>
          <div className='text'>M</div>
          <div className='text'>T</div>
          <div className='text'>Q</div>
        </div>
      </main>
    </Layout>
  );
}