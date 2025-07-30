import React, {useState, useMemo, useEffect} from 'react';
import clsx from 'clsx';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {useHistory, useLocation} from '@docusaurus/router';

import Layout from '@theme/Layout';

const TITLE = "About Me";

export default function AboutMe(): JSX.Element {
  const [stars, setStars] = useState([
    {
      x: 100,
      y: 100,
      size: 10,
      brightness: 1,
    },
    {
      x: 200,
      y: 200,
      size: 20,
      brightness: 2,
    },
    {
      x: 300,
      y: 300,
      size: 30,
      brightness: 3,
    },
  ]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { x, y } = event.target;
      for (const star of stars) {
        const distance = Math.sqrt(Math.pow(star.x - x, 2) + Math.pow(star.y - y, 2));
        star.brightness = 1 - distance / 100;
      }
      setStars(stars);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Layout title={TITLE}>
      <main className="margin-vert--lg">
        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              width: star.size,
              height: star.size,
              borderRadius: star.size / 2,
              backgroundColor: "black",
              opacity: star.brightness,
            }}
          />
        ))}
      </main>
    </Layout>
    
  );
};