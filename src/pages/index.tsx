import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();


  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}>
      <main>
        <iframe className={styles.gameWindow} src='https://mylog.site/htmlGame/' />
      </main>
    </Layout>
  );
}
