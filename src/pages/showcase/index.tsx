import React, {useEffect} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Layout from '@theme/Layout';
import {sortedProjects, Tags, TagList} from '@site/src/data/projects';
import ShowcaseTagSelect, {
  readSearchTags,
} from './_components/ShowcaseTagSelect';
import ShowcaseFilterToggle, {
  readOperator,
} from './_components/ShowcaseFilterToggle';
import ShowcaseCard from './_components/ShowcaseCard';
import styles from './styles.module.css';

type ProjectState = {scrollTopPosition: number; focusedElementId?: string};

export function prepareProjectState(): ProjectState {
  return {
    scrollTopPosition: window.scrollY,
    focusedElementId: document.activeElement?.id,
  };
}

export default function Showcase() {
  const history = useHistory();
  const location = useLocation<ProjectState>();
  const search = useIsBrowser() ? location.search : '';
  const name = new URLSearchParams(search).get('name') ?? '';
  const query = name.trim().toLowerCase();
  const tags = readSearchTags(search);
  const operator = readOperator(search);
  const filtered = sortedProjects.filter((project) => {
    const names = [project.title, project.englishName]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    const matchesTags =
      operator === 'AND'
        ? tags.every((tag) => project.tags.includes(tag))
        : tags.length === 0 || tags.some((tag) => project.tags.includes(tag));
    return names.includes(query) && matchesTags;
  });

  useEffect(() => {
    if (!location.state) return;
    const {focusedElementId, scrollTopPosition} = location.state;
    if (focusedElementId)
      document.getElementById(focusedElementId)?.focus({preventScroll: true});
    window.scrollTo({top: scrollTopPosition});
  }, [location]);

  function searchByName(value: string) {
    const params = new URLSearchParams(location.search);
    if (value) params.set('name', value);
    else params.delete('name');
    history.replace({
      ...location,
      search: params.toString(),
      state: prepareProjectState(),
    });
  }

  return (
    <Layout
      title="프로젝트"
      description="최근에 만든 도구와 앱, 캔버스와 키네틱 타이포그래피 실험을 모았습니다."
    >
      <main className={styles.gallery}>
        <header className={styles.intro}>
          <h1>프로젝트</h1>
          <p>
            직접 만든 도구와 앱, 캔버스와 키네틱 타이포그래피 실험을 모았습니다.
          </p>
        </header>
        <section className={styles.filters} aria-label="프로젝트 필터">
          <div className={styles.filterTop}>
            <label>
              이름으로 검색
              <input
                id="searchbar"
                type="search"
                placeholder="새김, Wootpun…"
                value={name}
                onChange={(e) => searchByName(e.target.value)}
              />
            </label>
            <ShowcaseFilterToggle />
          </div>
          <ul className={styles.tags}>
            {TagList.map((tag) => (
              <li key={tag}>
                <ShowcaseTagSelect
                  id={`showcase_checkbox_id_${tag}`}
                  tag={tag}
                  label={Tags[tag].label}
                  icon={
                    <span
                      className={styles.dot}
                      style={{backgroundColor: Tags[tag].image}}
                    />
                  }
                />
              </li>
            ))}
          </ul>
        </section>
        <p className={styles.count} role="status">
          {filtered.length
            ? `프로젝트 ${filtered.length}개`
            : '검색 결과가 없습니다.'}
        </p>
        <ul className={styles.grid}>
          {filtered.map((project) => (
            <ShowcaseCard
              key={project.source ?? project.website}
              project={project}
            />
          ))}
        </ul>
      </main>
    </Layout>
  );
}
