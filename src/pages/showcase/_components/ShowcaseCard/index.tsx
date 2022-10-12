/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import {
  Tags,
  TagList,
  type TagType,
  type Project,
  type Tag,
} from '@site/src/data/projects';
import {sortBy} from '@site/src/utils/jsUtils';
import Tooltip from '../ShowcaseTooltip';
import styles from './styles.module.css';

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({label, color}, ref) => (
    <li ref={ref} className={styles.tag}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  ),
);

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`;

        return (
          <TagComp key={index} {...tagObject} />
        );
      })}
    </>
  );
}

function getCardImage(project: Project): string {
  return (
    project.preview ??
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      project.website,
    )}/showcase`
  );
}

function ShowcaseCard({project}: {project: Project}) {
  const image = getCardImage(project);
  return (
    <li key={project.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <img src={image} alt={project.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <h4 className={styles.showcaseCardTitle}>
            <Link href={project.website} className={styles.showcaseCardLink}>
              {project.title}
            </Link>
          </h4>
          {project.source && (
            <Link
              href={project.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}>
              <Translate id="showcase.card.sourceLink">source</Translate>
            </Link>
          )}
        </div>
        <p className={styles.showcaseCardBody}>{project.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={project.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
