import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function AboutMe() {
  return (
    <Layout
      title="소개"
      description="프론트엔드 개발자 Mooyeon Choi와 블로그 소개"
    >
      <main className={styles.about}>
        <h1>
          Mooyeon <em>Choi.</em>
        </h1>
        <p className={styles.role}>Frontend Developer</p>
        <p>
          웹과 앱을 만드는 프론트엔드 개발자입니다. React와 Flutter로 화면을
          만들고, 기기 안에서 AI 모델을 실행하는 방법을 실험합니다.
        </p>
        <p>
          이 블로그에는 만들어 보면서 답을 찾은 질문들을 모았습니다. 영상에서
          글자를 꺼내 다시 쓸 수 있을지, 같은 게시물도 앱과 웹에서 다르게 읽어야
          할지 같은 질문입니다.
        </p>
        <div className={styles.links}>
          <Link to="/showcase">만든 프로젝트 ↗</Link>
          <Link to="/blog">블로그 글 ↗</Link>
          <Link href="https://github.com/mooyeon-choi">GitHub ↗</Link>
        </div>
      </main>
    </Layout>
  );
}
