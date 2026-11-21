import React from 'react';
import Link from '@docusaurus/Link';
import {Tags, type Project} from '@site/src/data/projects';
import styles from './styles.module.css';

export default function ShowcaseCard({project}: {project: Project}) {
  return (
    <li className={styles.card}>
      <Link to={project.website} className={styles.cover}>
        <img
          loading="lazy"
          src={project.preview}
          alt=""
          width="480"
          height="270"
        />
        <h2>
          {project.title} <span aria-hidden="true">↗</span>
        </h2>
      </Link>
      {project.description && <p>{project.description}</p>}
      <div className={styles.links}>
        <span>{project.tags.map((tag) => Tags[tag].label).join(' · ')}</span>
        {project.liveUrl && (
          <Link href={project.liveUrl} aria-label={project.title + ' 사이트 열기'}>
            사이트 열기 ↗
          </Link>
        )}
        {project.source && (
          <Link href={project.source} aria-label={project.title + ' 소스 코드'}>
            소스 코드 ↗
          </Link>
        )}
      </div>
    </li>
  );
}
