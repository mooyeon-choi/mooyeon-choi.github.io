import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Room from '../utils/introRoom/room';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    Room();
  }, [])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}>
      <main>
        <canvas id='introCanvas' width={2000} height={1000}></canvas>
      </main>
    </Layout>
  );
}
