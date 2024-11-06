// ignore typescript error
// @ts-nocheck

import React, { useRef, useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "./index.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import particle from "./particle.png";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 5) + 1;

    const importModule = async () => {
      try {
        if (randomIndex === 1) {
          class App {
            constructor() {
              this.setWebgl();

              WebFont.load({
                google: {
                  families: ["Hind:700"],
                },
                fontactive: () => {
                  this.visual = new Visual();

                  window.addEventListener(
                    "resize",
                    this.resize.bind(this),
                    false
                  );
                  this.resize();

                  requestAnimationFrame(this.animate.bind(this));
                },
              });
            }

            setWebgl() {
              this.renderer = new PIXI.Renderer({
                width: document.getElementById("container").clientWidth,
                height: document.getElementById("container").clientHeight,
                antialias: true,
                transparent: false,
                resolution: window.devicePixelRatio > 1 ? 2 : 1,
                autoDensity: true,
                powerPreference: "high-performance",
                backgroundColor: 0x000000,
              });

              document
                .getElementById("container")
                .appendChild(this.renderer.view);

              this.stage = new PIXI.Container();

              const blurFilter = new PIXI.filters.BlurFilter();
              blurFilter.blur = 10;
              blurFilter.autoFit = true;

              const fragSource = `
                precision mediump float;
                varying vec2 vTextureCoord;
                uniform sampler2D uSampler;
                uniform float threshold;
                uniform float mr;
                uniform float mg;
                uniform float mb;
                void main(void) {
                  vec4 color = texture2D(uSampler, vTextureCoord);
                  vec3 mcolor = vec3(mr, mg, mb);
                  if (color.a > threshold) {
                    gl_FragColor = vec4(mcolor, 1.0);
                  } else {
                    gl_FragColor = vec4(vec3(0.0), 0.0);
                  }
                }
              `;

              const uniformsData = {
                threshold: 0.5,
                mr: 255.0 / 255.0,
                mg: 255.0 / 255.0,
                mb: 255.0 / 255.0,
              };

              const thresholdFilter = new PIXI.Filter(
                null,
                fragSource,
                uniformsData
              );
              this.stage.filters = [blurFilter, thresholdFilter];
              this.stage.filterArea = this.renderer.screen;
            }

            resize() {
              this.stageWidth =
                document.getElementById("container").clientWidth;
              this.stageHeight =
                document.getElementById("container").clientHeight;

              this.renderer.resize(this.stageWidth, this.stageHeight);

              this.visual.show(this.stageWidth, this.stageHeight, this.stage);
            }

            animate(t) {
              requestAnimationFrame(this.animate.bind(this));

              this.visual.animate();

              this.renderer.render(this.stage);
            }
          }

          const FRICTION = 0.98;
          const MOVE_SPEED = 0.2;

          class Particle {
            constructor(pos, texture) {
              this.sprite = new PIXI.Sprite(texture);
              this.sprite.scale.set(0.2);

              this.savedX = pos.x;
              this.savedY = pos.y;
              this.x = pos.x;
              this.y = pos.y;
              this.sprite.x = this.x;
              this.sprite.y = this.y;
              this.vx = 0;
              this.vy = 0;
              this.radius = 10;
            }

            draw() {
              this.x += (this.savedX - this.x) * MOVE_SPEED;
              this.y += (this.savedY - this.y) * MOVE_SPEED;

              this.vx *= FRICTION;
              this.vy *= FRICTION;

              this.x += this.vx;
              this.y += this.vy;

              this.sprite.x = this.x;
              this.sprite.y = this.y;
            }
          }

          class Text {
            constructor() {
              this.canvas = document.createElement("canvas");
              //this.canvas.style.position = "absolute";
              //this.canvas.style.left = "0";
              //this.canvas.style.top = "0";
              //document.body.appendChild(this.canvas);

              this.ctx = this.canvas.getContext("2d");
            }

            setText(str, density, stageWidth, stageHeight) {
              this.canvas.width = stageWidth;
              this.canvas.height = stageHeight;

              const myText = str;
              const fontWidth = 700;
              const fontSize =
                stageHeight / stageWidth < 1300 / 2100
                  ? stageHeight / 4
                  : stageHeight / 3;
              const fontName = "Hind";

              this.ctx.clearRect(0, 0, stageWidth, stageHeight);
              this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
              this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
              this.ctx.textBaseline = "middle";
              const fontPos = this.ctx.measureText(myText);
              this.ctx.fillText(
                myText,
                (stageWidth - fontPos.width) / 2,
                fontPos.actualBoundingBoxAscent +
                  fontPos.actualBoundingBoxDescent +
                  (stageHeight - fontSize) / 2
              );

              return this.dotPos(density, stageWidth, stageHeight);
            }

            dotPos(density, stageWidth, stageHeight) {
              const imageData = this.ctx.getImageData(
                0,
                0,
                stageWidth,
                stageHeight
              ).data;

              const particles = [];
              let i = 0;
              let width = 0;
              let pixel;

              for (let height = 0; height < stageHeight; height += density) {
                ++i;
                const slide = i % 2 === 0;
                width = 0;
                if (slide === 1) {
                  width += 6;
                }

                for (width; width < stageWidth; width += density) {
                  pixel = imageData[(width + height * stageWidth) * 4 - 1];
                  if (
                    pixel !== 0 &&
                    width > 0 &&
                    width < stageWidth &&
                    height > 0 &&
                    height < stageHeight
                  ) {
                    particles.push({
                      x: width,
                      y: height,
                    });
                  }
                }
              }
              return particles;
            }
          }

          class Visual {
            constructor() {
              this.text = new Text();

              this.texture = PIXI.Texture.from(particle);

              this.particles = [];

              this.mouse = {
                x: 0,
                y: 0,
                radius: 100,
              };

              document.addEventListener(
                "pointermove",
                this.onMove.bind(this),
                false
              );
              document.addEventListener(
                "touchend",
                this.onTouchEnd.bind(this),
                false
              );
            }

            show(stageWidth, stageHeight, stage) {
              if (this.container) {
                stage.removeChild(this.container);
              }

              this.pos = this.text.setText(
                stageHeight / stageWidth < 1300 / 2100
                  ? "Hi this is Mylog"
                  : "Hi",
                2,
                stageWidth,
                stageHeight
              );

              this.container = new PIXI.ParticleContainer(this.pos.length, {
                vertices: false,
                position: true,
                rotation: false,
                scale: false,
                uvs: false,
                tint: false,
              });
              stage.addChild(this.container);

              this.particles = [];
              for (let i = 0; i < this.pos.length; i++) {
                const item = new Particle(this.pos[i], this.texture);
                this.container.addChild(item.sprite);
                this.particles.push(item);
              }
            }

            animate() {
              for (let i = 0; i < this.particles.length; i++) {
                const item = this.particles[i];
                const dx = this.mouse.x - item.x;
                const dy = this.mouse.y - item.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = item.radius + this.mouse.radius;

                if (dist < minDist) {
                  const angle = Math.atan2(dy, dx);
                  const tx = item.x + Math.cos(angle) * minDist;
                  const ty = item.y + Math.sign(angle) * minDist;
                  const ax = tx - this.mouse.x;
                  const ay = ty - this.mouse.y;
                  item.vx -= ax;
                  item.vy -= ay;
                }

                item.draw();
              }
            }

            onMove(e) {
              this.mouse.x = e.clientX;
              this.mouse.y = e.clientY;
            }

            onTouchEnd() {
              this.mouse.x = 0;
              this.mouse.y = 0;
            }
          }
          new App();
        } else if (randomIndex === 2) {
          const FRICTION = 0.98;
          const COLOR_SPEED = 0.12;
          const MOVE_SPEED = 0.88;

          class App {
            constructor() {
              this.setWebgl();

              WebFont.load({
                google: {
                  families: ["Hind:700"],
                },
                fontactive: () => {
                  this.visual = new Visual();

                  window.addEventListener(
                    "resize",
                    this.resize.bind(this),
                    false
                  );
                  this.resize();

                  requestAnimationFrame(this.animate.bind(this));
                },
              });
            }

            setWebgl() {
              this.renderer = new PIXI.Renderer({
                width: document.getElementById("container").clientWidth,
                height: document.getElementById("container").clientHeight,
                antialias: true,
                transparent: false,
                resolution: window.devicePixelRatio > 1 ? 2 : 1,
                autoDensity: true,
                powerPreference: "high-performance",
                backgroundColor: 0xffffff,
              });
              document
                .getElementById("container")
                .appendChild(this.renderer.view);

              this.stage = new PIXI.Container();
            }

            resize() {
              this.stageWidth =
                document.getElementById("container").clientWidth;
              this.stageHeight =
                document.getElementById("container").clientHeight;

              this.renderer.resize(this.stageWidth, this.stageHeight);

              this.visual.show(this.stageWidth, this.stageHeight, this.stage);
            }

            animate(t) {
              requestAnimationFrame(this.animate.bind(this));

              this.visual.animate();

              this.renderer.render(this.stage);
            }
          }

          class Particle {
            constructor(pos, texture) {
              this.sprite = new PIXI.Sprite(texture);
              this.sprite.scale.set(0.06);

              this.savedX = pos.x;
              this.savedY = pos.y;
              this.x = pos.x;
              this.y = pos.y;
              this.sprite.x = this.x;
              this.sprite.y = this.y;
              this.vx = 0;
              this.vy = 0;
              this.radius = 10;

              this.savedRgb = 0xf3316e;
              this.rgb = 0xf3316e;
            }

            collide() {
              this.rgb = 0x451966;
            }

            draw() {
              this.rgb += (this.savedRgb - this.rgb) * COLOR_SPEED;

              this.x += (this.savedX - this.x) * MOVE_SPEED;
              this.y += (this.savedY - this.y) * MOVE_SPEED;

              this.vx *= FRICTION;
              this.vy *= FRICTION;

              this.x += this.vx;
              this.y += this.vy;

              this.sprite.x = this.x;
              this.sprite.y = this.y;
              this.sprite.tint = this.rgb;
            }
          }
          class Text {
            constructor() {
              this.canvas = document.createElement("canvas");
              //this.canvas.style.position = "absolute";
              //this.canvas.style.left = "0";
              //this.canvas.style.top = "0";
              //document.body.appendChild(this.canvas);

              this.ctx = this.canvas.getContext("2d");
            }

            setText(str, density, stageWidth, stageHeight) {
              this.canvas.width = stageWidth;
              this.canvas.height = stageHeight;

              const myText = str;
              const fontWidth = stageHeight / 1.4;
              const fontSize =
                stageHeight / stageWidth < 1300 / 2100
                  ? stageHeight / 4
                  : stageHeight / 3;
              const fontName = "Hind";

              this.ctx.clearRect(0, 0, stageWidth, stageHeight);
              this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
              this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
              this.ctx.textBaseline = "middle";
              const fontPos = this.ctx.measureText(myText);
              this.ctx.fillText(
                myText,
                (stageWidth - fontPos.width) / 2,
                fontPos.actualBoundingBoxAscent +
                  fontPos.actualBoundingBoxDescent +
                  (stageHeight - fontSize) / 2
              );

              return this.dotPos(density, stageWidth, stageHeight);
            }

            dotPos(density, stageWidth, stageHeight) {
              const imageData = this.ctx.getImageData(
                0,
                0,
                stageWidth,
                stageHeight
              ).data;

              const particles = [];
              let i = 0;
              let width = 0;
              let pixel;

              for (let height = 0; height < stageHeight; height += density) {
                ++i;
                const slide = i % 2 === 0;
                width = 0;
                if (slide === 1) {
                  width += 6;
                }

                for (width; width < stageWidth; width += density) {
                  pixel = imageData[(width + height * stageWidth) * 4 - 1];
                  if (
                    pixel !== 0 &&
                    width > 0 &&
                    width < stageWidth &&
                    height > 0 &&
                    height < stageHeight
                  ) {
                    particles.push({
                      x: width,
                      y: height,
                    });
                  }
                }
              }

              return particles;
            }
          }
          class Visual {
            constructor() {
              this.text = new Text();

              this.texture = PIXI.Texture.from(particle);

              this.particles = [];

              this.mouse = {
                x: 0,
                y: 0,
                radius: 100,
              };

              document.addEventListener(
                "pointermove",
                this.onMove.bind(this),
                false
              );
              document.addEventListener(
                "touchend",
                this.onTouchEnd.bind(this),
                false
              );
            }

            show(stageWidth, stageHeight, stage) {
              if (this.container) {
                stage.removeChild(this.container);
              }

              this.pos = this.text.setText(
                stageHeight / stageWidth < 1300 / 2100
                  ? "Hi this is Mylog"
                  : "Hi",
                2,
                stageWidth,
                stageHeight
              );

              this.container = new PIXI.ParticleContainer(this.pos.length, {
                vertices: false,
                position: true,
                rotation: false,
                scale: false,
                uvs: false,
                tint: true,
              });

              stage.addChild(this.container);

              this.particles = [];
              for (let i = 0; i < this.pos.length; i++) {
                const item = new Particle(this.pos[i], this.texture);
                this.container.addChild(item.sprite);
                this.particles.push(item);
              }
            }

            animate() {
              for (let i = 0; i < this.particles.length; i++) {
                const item = this.particles[i];
                const dx = this.mouse.x - item.x;
                const dy = this.mouse.y - item.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = item.radius + this.mouse.radius;

                if (dist < minDist) {
                  const angle = Math.atan2(dy, dx);
                  const tx = item.x + Math.cos(angle) * minDist;
                  const ty = item.y + Math.sin(angle) * minDist;
                  const ax = tx - this.mouse.x;
                  const ay = ty - this.mouse.y;
                  item.vx -= ax;
                  item.vy -= ay;
                  item.collide();
                }

                item.draw();
              }
            }

            onMove(e) {
              this.mouse.x = e.clientX;
              this.mouse.y = e.clientY;
            }

            onTouchEnd() {
              this.mouse.x = 0;
              this.mouse.y = 0;
            }
          }

          new App();
        } else if (randomIndex === 3) {
          const FRICTION = 0.86;
          const COLOR_SPEED = 0.12;
          const RANDOM_TEXT = "ABCMNRSTUXZ";

          class App {
            constructor() {
              this.canvas = document.createElement("canvas");
              document.getElementById("container").appendChild(this.canvas);

              this.ctx = this.canvas.getContext("2d");

              this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

              WebFont.load({
                google: {
                  families: ["Hind:700"],
                },
                fontactive: () => {
                  this.visual = new Visual();

                  window.addEventListener(
                    "resize",
                    this.resize.bind(this),
                    false
                  );
                  this.resize();

                  requestAnimationFrame(this.animate.bind(this));
                },
              });
            }

            resize() {
              this.stageWidth =
                document.getElementById("container").clientWidth;
              this.stageHeight =
                document.getElementById("container").clientHeight;

              this.canvas.width = this.stageWidth * this.pixelRatio;
              this.canvas.height = this.stageHeight * this.pixelRatio;
              this.ctx.scale(this.pixelRatio, this.pixelRatio);

              console.log(this.stageWidth, this.stageHeight);

              this.visual.show(this.stageWidth, this.stageHeight);
            }

            animate(t) {
              requestAnimationFrame(this.animate.bind(this));

              this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

              this.visual.animate(this.ctx, t);
            }
          }

          class Particle {
            constructor(pos, fontSize) {
              this.fontSize = fontSize;

              this.savedX = pos.x;
              this.savedY = pos.y;
              this.x = pos.x;
              this.y = pos.y;
              this.vx = 0;
              this.vy = 0;
              this.radius = 10;

              this.textArr = RANDOM_TEXT.split("");
              this.cur = 0;
              this.total = this.textArr.length;

              this.fps = 15;
              this.fpsTime = 1000 / this.fps;

              this.savedRgb = 0xffffff;
              this.rgb = 0xffffff;
            }

            collide() {
              this.rgb = 0xf3316e;
              this.textArr = this.shuffle(this.textArr);
            }

            draw(ctx, t) {
              this.rgb += (this.savedRgb - this.rgb) * COLOR_SPEED;

              if (!this.time) {
                this.time = t;
              }

              const now = t - this.time;
              if (now > this.fpsTime) {
                this.time = t;
                this.cur += 1;
                if (this.cur === this.total) {
                  this.cur = 0;
                }
              }

              this.vx *= FRICTION;
              this.vy *= FRICTION;

              this.x += this.vx;
              this.y += this.vy;

              const red = ((this.rgb >> 16) & 0xff) | 0;
              const green = ((this.rgb >> 8) & 0xff) | 0;
              const blue = (this.rgb & 0xff) | 0;
              const color = `rgb(${red}, ${green}, ${blue})`;

              const str = this.textArr[this.cur];

              ctx.beginPath();
              ctx.fillStyle = color;

              const fontWidth = this.fontSize === 14 ? 40 : 20;
              const fontSize = this.fontSize;
              const fontName = "Hind";
              ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
              ctx.textBaseline = "middle";
              const textPos = ctx.measureText(str);
              ctx.fillText(
                str,
                this.x - textPos.width / 2,
                this.y + (fontSize - textPos.actualBoundingBoxAscent) / 2
              );
            }

            shuffle(arr) {
              return arr.sort(() => Math.random() - 0.5);
            }
          }

          class Text {
            constructor() {
              this.canvas = document.createElement("canvas");
              // this.canvas.style.position = "absolute";
              // this.canvas.style.left = "0";
              // this.canvas.style.top = "0";
              // document.body.appendChild(this.canvas);

              this.ctx = this.canvas.getContext("2d");
            }

            setText(str, density, stageWidth, stageHeight) {
              this.canvas.width = stageWidth;
              this.canvas.height = stageHeight;

              const myText = str;
              const fontWidth = 700;
              const fontSize =
                stageHeight / stageWidth < 1300 / 2100
                  ? stageHeight / 4
                  : stageHeight / 3;
              const fontName = "Hind";

              this.ctx.clearRect(0, 0, stageWidth, stageHeight);
              this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
              this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
              this.ctx.textBaseline = "middle";
              const fontPos = this.ctx.measureText(myText);
              this.ctx.fillText(
                myText,
                (stageWidth - fontPos.width) / 2,
                fontPos.actualBoundingBoxAscent +
                  fontPos.actualBoundingBoxDescent +
                  (stageHeight - fontSize) / 2
              );

              return this.dotPos(density, stageWidth, stageHeight);
            }

            dotPos(density, stageWidth, stageHeight) {
              const imageData = this.ctx.getImageData(
                0,
                0,
                stageWidth,
                stageHeight
              ).data;

              const particles = [];
              let i = 0;
              let width = 0;
              let pixel;

              for (let height = 0; height < stageHeight; height += density) {
                ++i;
                const slide = i % 2 === 0;
                width = 0;
                if (slide === 1) {
                  width += 6;
                }

                for (width; width < stageWidth; width += density) {
                  pixel = imageData[(width + height * stageWidth) * 4 - 1];
                  if (
                    pixel !== 0 &&
                    width > 0 &&
                    width < stageWidth &&
                    height > 0 &&
                    height < stageHeight
                  ) {
                    particles.push({
                      x: width,
                      y: height,
                    });
                  }
                }
              }

              return particles;
            }
          }

          class Visual {
            constructor() {
              this.text = new Text();

              this.textArr = RANDOM_TEXT.split("");

              this.particles = [];

              this.mouse = {
                x: 0,
                y: 0,
                radius: 100,
              };

              document.addEventListener(
                "pointermove",
                this.onMove.bind(this),
                false
              );
              document.addEventListener(
                "touchmove",
                this.onTouchMove.bind(this),
                false
              );
            }

            show(stageWidth, stageHeight) {
              const fontSize = stageWidth > 700 ? 14 : 10;
              const fontWidth = stageWidth > 700 ? 26 : 19;

              this.pos = this.text.setText(
                stageHeight / stageWidth < 1300 / 2100
                  ? "Hi this is Mylog"
                  : "Hi",
                fontWidth,
                stageWidth,
                stageHeight
              );

              this.particles = [];
              for (let i = 0; i < this.pos.length; i++) {
                const item = new Particle(this.pos[i], fontSize);
                this.particles.push(item);
              }
            }

            animate(ctx, t) {
              for (let i = 0; i < this.particles.length; i++) {
                const item = this.particles[i];

                const dx = this.mouse.x - item.x;
                const dy = this.mouse.y - item.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = item.radius + this.mouse.radius;

                if (dist < minDist) {
                  const angle = Math.atan2(dy, dx);
                  const tx = item.x + Math.cos(angle) * minDist;
                  const ty = item.y + Math.sin(angle) * minDist;
                  const ax = tx - this.mouse.x;
                  const ay = ty - this.mouse.y;
                  item.vx -= ax;
                  item.vy -= ay;
                  item.collide();
                }

                item.draw(ctx, t);
              }
            }

            onMove(e) {
              this.mouse.x = e.clientX;
              this.mouse.y = e.clientY;
            }

            onTouchMove(e) {
              this.mouse.x = e.touches[0].clientX;
              this.mouse.y = e.touches[0].clientY;
            }
          }

          new App();
        } else if (randomIndex === 4) {
          const FRICTION = 0.98;
          const MOVE_SPEED = 0.88;

          class App {
            constructor() {
              this.canvas = document.createElement("canvas");
              document.getElementById("container").appendChild(this.canvas);
              this.ctx = this.canvas.getContext("2d");

              this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

              WebFont.load({
                google: {
                  families: ["Hind:700"],
                },
                fontactive: () => {
                  this.visual = new Visual(
                    document.getElementById("container").clientWidth
                  );

                  window.addEventListener(
                    "resize",
                    this.resize.bind(this),
                    false
                  );
                  this.resize();

                  requestAnimationFrame(this.animate.bind(this));
                },
              });
            }

            resize() {
              this.stageWidth =
                document.getElementById("container").clientWidth;
              this.stageHeight =
                document.getElementById("container").clientHeight;

              this.canvas.width = this.stageWidth * this.pixelRatio;
              this.canvas.height = this.stageHeight * this.pixelRatio;
              this.ctx.scale(this.pixelRatio, this.pixelRatio);

              this.ctx.globalCompositeOperation = "lighter";

              this.visual.show(this.stageWidth, this.stageHeight);
            }

            animate() {
              requestAnimationFrame(this.animate.bind(this));

              this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

              this.visual.animate(this.ctx);
            }
          }

          class Particle {
            constructor(pos, color, size) {
              this.color = color;
              this.maxRadius = Math.random() * 10 + size;

              this.savedX = pos.x;
              this.savedY = pos.y;
              this.x = pos.x;
              this.y = pos.y;

              this.progress = 0;
              this.radius = 2;
              this.vr = 0;
              this.vx = 0;
              this.vy = 0;

              this.fps = 30;
              this.fpsTime = 1000 / this.fps;
            }

            draw(ctx) {
              if (this.progress < 100) {
                this.vr += (this.maxRadius - this.radius) / this.fpsTime;
                this.vr *= MOVE_SPEED;
              } else {
                this.vr -= 2;
              }

              this.progress += 1;

              this.radius += this.vr;

              this.x += (this.savedX - this.x) * MOVE_SPEED;
              this.y += (this.savedY - this.y) * MOVE_SPEED;

              this.vx *= FRICTION;
              this.vy *= FRICTION;

              this.x += this.vx;
              this.y += this.vy;

              if (this.radius > 1) {
                const g = ctx.createRadialGradient(
                  this.x,
                  this.y,
                  this.radius / 2,
                  this.x,
                  this.y,
                  this.radius
                );
                g.addColorStop(0, this.color);
                g.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.beginPath();
                ctx.fillStyle = g;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }

          class Text {
            constructor() {
              this.canvas = document.createElement("canvas");
              //this.canvas.style.position = "absolute";
              //this.canvas.style.left = "0";
              //this.canvas.style.top = "0";
              //document.body.appendChild(this.canvas);

              this.ctx = this.canvas.getContext("2d");
            }

            setText(str, density, stageWidth, stageHeight) {
              this.canvas.width = stageWidth;
              this.canvas.height = stageHeight;

              const myText = str;
              const fontWidth =
                stageWidth > 400 ? stageHeight / 1.4 : stageWidth / 1.2;
              const fontSize =
                stageHeight / stageWidth < 1300 / 2100
                  ? stageHeight / 4
                  : stageWidth / 1.5;
              const fontName = "Hind";

              this.ctx.clearRect(0, 0, stageWidth, stageHeight);
              this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
              this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
              this.ctx.textBaseline = "middle";
              const fontPos = this.ctx.measureText(myText);
              this.ctx.fillText(
                myText,
                (stageWidth - fontPos.width) / 2,
                fontPos.actualBoundingBoxAscent +
                  fontPos.actualBoundingBoxDescent +
                  (stageHeight - fontSize) / 2
              );

              return this.dotPos(density, stageWidth, stageHeight);
            }

            dotPos(density, stageWidth, stageHeight) {
              const imageData = this.ctx.getImageData(
                0,
                0,
                stageWidth,
                stageHeight
              ).data;

              const particles = [];
              let i = 0;
              let width = 0;
              let pixel;

              for (let height = 0; height < stageHeight; height += density) {
                ++i;
                const slide = i % 2 === 0;
                width = 0;
                if (slide === 1) {
                  width += 6;
                }

                for (width; width < stageWidth; width += density) {
                  pixel = imageData[(width + height * stageWidth) * 4 - 1];
                  if (
                    pixel !== 0 &&
                    width > 0 &&
                    width < stageWidth &&
                    height > 0 &&
                    height < stageHeight
                  ) {
                    particles.push({
                      x: width,
                      y: height,
                    });
                  }
                }
              }

              return particles;
            }
          }

          function hslToHex(h, s, l) {
            const saturation = s / 100;
            const lightness = l / 100;

            const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
            const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
            const m = l - c / 2;
            let red = 0;
            let green = 0;
            let blue = 0;

            if (0 <= h && h < 60) {
              red = c;
              green = x;
              blue = 0;
            } else if (60 <= h && h < 120) {
              red = x;
              green = c;
              blue = 0;
            } else if (120 <= h && h < 180) {
              red = 0;
              green = c;
              blue = x;
            } else if (180 <= h && h < 240) {
              red = 0;
              green = x;
              blue = c;
            } else if (240 <= h && h < 300) {
              red = x;
              green = 0;
              blue = c;
            } else if (300 <= h && h < 360) {
              red = c;
              green = 0;
              blue = x;
            }

            red = red * m;
            green = green * m;
            blue = blue * m;

            return `rgb(${(red * 255) | 0}, ${(green * 255) | 0}, ${
              (blue * 255) | 0
            })`;
          }

          class Visual {
            constructor(stageWidth) {
              this.stageWidth = stageWidth;

              this.text = new Text();

              this.particles = [];

              this.mouse = {
                x: 0,
                y: 0,
                radius: 100,
              };

              document.addEventListener(
                "pointermove",
                this.onMove.bind(this),
                false
              );
              document.addEventListener(
                "touchmove",
                this.onTouchEnd.bind(this),
                false
              );
            }

            show(stageWidth, stageHeight) {
              this.stageWidth = stageWidth;
              this.pos = this.text.setText(
                stageHeight / stageWidth < 1300 / 2100
                  ? "Hi this is Mylog"
                  : "Hi",
                stageHeight / stageWidth < 1300 / 2100 ? 10 : 20,
                stageWidth,
                stageHeight
              );
              this.posTotal = this.pos.length - 1;
            }

            animate(ctx) {
              if (!this.pos) {
                return;
              }

              const maxCnt = this.stageWidth > 400 ? 10 : 2;

              for (let i = 0; i < maxCnt; i++) {
                const myPos = this.pos[(Math.random() * this.posTotal) | 0];
                if (this.stageWidth > 400) {
                  this.particles.push(new Particle(myPos, this.getColor(), 20));
                } else {
                  this.particles.push(new Particle(myPos, this.getColor(), 5));
                }
              }
              for (let i = 0; i < this.particles.length; i++) {
                const item = this.particles[i];
                if (item.radius <= 1) {
                  this.particles.splice(i, 1);
                }

                const dx = this.mouse.x - item.x;
                const dy = this.mouse.y - item.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = item.radius + this.mouse.radius;

                if (dist < minDist) {
                  item.progress += 100;
                }

                item.draw(ctx);
              }
            }

            getColor() {
              const minHue = 80;
              const maxHue = 340;
              const hue = (maxHue - minHue) * Math.random() + minHue;
              return hslToHex(hue, 84, 50);
            }

            onMove(e) {
              this.mouse.x = e.clientX;
              this.mouse.y = e.clientY;
            }

            onTouchEnd() {
              this.mouse.x = 0;
              this.mouse.y = 0;
            }
          }

          new App();
        } else if (randomIndex === 5) {
          const DEFAULT_ANGLE = (90 * Math.PI) / 180;
          const GRAVITY = 0.3;
          const VERTICAL_RATE = 0.3;
          const MOUSE_PULL_RATE = 0.1;
          const FRICTION = 0.97;
          const MOUSE_MOVE_FRICTION = 0.7;
          const LINE_TOTAL = 7;

          class App {
            constructor() {
              this.setWebgl();

              WebFont.load({
                google: {
                  families: ["Hind:700"],
                },
                fontactive: () => {
                  this.visual = new Visual();

                  window.addEventListener(
                    "resize",
                    this.resize.bind(this),
                    false
                  );
                  this.resize();

                  requestAnimationFrame(this.animate.bind(this));
                },
              });
            }

            setWebgl() {
              this.renderer = new PIXI.Renderer({
                width: document.getElementById("container").clientWidth,
                height: document.getElementById("container").clientHeight,
                antialias: true,
                transparent: false,
                resolution: window.devicePixelRatio > 1 ? 2 : 1,
                autoDensity: true,
                powerPreference: "high-performance",
                backgroundColor: 0xffffff,
              });
              document
                .getElementById("container")
                .appendChild(this.renderer.view);

              this.stage = new PIXI.Container();
            }

            resize() {
              this.stageWidth =
                document.getElementById("container").clientWidth;
              this.stageHeight =
                document.getElementById("container").clientHeight;

              this.renderer.resize(this.stageWidth, this.stageHeight);

              this.visual.show(this.stageWidth, this.stageHeight, this.stage);
            }

            animate(t) {
              requestAnimationFrame(this.animate.bind(this));

              this.visual.animate();

              this.renderer.render(this.stage);
            }
          }

          class ParticleGroup {
            constructor(pos, groupRatio, texture, lineTotal) {
              this.particles = [];

              for (let i = 0; i < lineTotal; i++) {
                const item = new Particle(
                  pos,
                  groupRatio,
                  i / lineTotal,
                  texture
                );
                this.particles.push(item);
              }
            }

            animate(mouse) {
              const total = this.particles.length;

              for (let i = 0; i < total; i++) {
                const item = this.particles[i];
                item.vy += GRAVITY;

                if (pointCircle(item.x, item.y, mouse.x, mouse.y, 40)) {
                  const pos = this.getPullPos(item.x, item.y, mouse.x, mouse.y);
                  item.vx += pos.x;
                  item.vy += pos.y;
                  item.vx *= MOUSE_MOVE_FRICTION;
                  item.vy *= MOUSE_MOVE_FRICTION;
                }

                if (i < total - 1) {
                  const next = this.particles[i + 1];
                  this.setAngle(item, next, 0);
                  this.setAngle(next, item, Math.PI);
                }

                item.vx *= FRICTION;
                item.vy *= FRICTION;

                item.animate(i, total - 1);
              }
            }

            getPullPos(x1, y1, x2, y2) {
              const dist = distance(x1, y1, x2, y2);
              const angle = Math.atan2(y2 - y1, x2 - x1);
              const x = Math.cos(angle) * dist * MOUSE_PULL_RATE;
              const y = Math.sin(angle) * dist * MOUSE_PULL_RATE;
              return {
                x,
                y,
              };
            }

            setAngle(item1, item2, connectAngle) {
              const angle = connectAngle - DEFAULT_ANGLE;
              const tx = item1.x + Math.cos(angle);
              const ty = item1.y + Math.sin(angle);
              const vx = (item2.x - tx) * VERTICAL_RATE;
              const vy = (item2.y - ty) * VERTICAL_RATE;
              item1.vx += vx;
              item1.vy += vy;
              item2.vx -= vx;
              item2.vy -= vy;
            }
          }

          class Particle {
            constructor(pos, groupRatio, indexRatio, texture) {
              this.sprite = new PIXI.Sprite(texture);
              const minScale = 0.3;
              const maxScale = 0.6;
              const scale = (maxScale - minScale) * indexRatio + minScale;
              this.sprite.scale.set(scale);

              const minLight = 60;
              const maxLight = 40;
              const light = (maxLight - minLight) * indexRatio + minLight;

              const minHue = 280;
              const maxHue = 330;
              const hue = (maxHue - minHue) * groupRatio + minHue;

              this.sprite.tint = hslToHex(hue, 84, light);

              this.x = pos.x;
              this.y = pos.y;
              this.sprite.x = this.x;
              this.sprite.y = this.y;

              this.vx = 0;
              this.vy = 0;
            }

            animate(index, total) {
              if (index < total) {
                this.x += this.vx;
                this.y += this.vy;
              }
              this.sprite.x = this.x;
              this.sprite.y = this.y;
            }
          }

          class Text {
            constructor() {
              this.canvas = document.createElement("canvas");
              //this.canvas.style.position = "absolute";
              //this.canvas.style.left = "0";
              //this.canvas.style.top = "0";
              //document.body.appendChild(this.canvas);

              this.ctx = this.canvas.getContext("2d");
            }

            setText(str, density, stageWidth, stageHeight) {
              this.canvas.width = stageWidth;
              this.canvas.height = stageHeight;

              const myText = str;
              const fontWidth = 700;
              const fontSize =
                stageHeight / stageWidth < 1300 / 2100
                  ? stageHeight / 4
                  : stageWidth / 2;
              const fontName = "Hind";

              this.ctx.clearRect(0, 0, stageWidth, stageHeight);
              this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
              this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
              this.ctx.textBaseline = "middle";
              const fontPos = this.ctx.measureText(myText);
              this.ctx.fillText(
                myText,
                (stageWidth - fontPos.width) / 2,
                fontPos.actualBoundingBoxAscent +
                  fontPos.actualBoundingBoxDescent +
                  (stageHeight - fontSize) / 2
              );

              return this.dotPos(density, stageWidth, stageHeight);
            }

            dotPos(density, stageWidth, stageHeight) {
              const imageData = this.ctx.getImageData(
                0,
                0,
                stageWidth,
                stageHeight
              ).data;

              const particles = [];
              let i = 0;
              let width = 0;
              let pixel;

              for (let height = 0; height < stageHeight; height += density) {
                ++i;
                const slide = i % 2 === 0;
                width = 0;
                if (slide === 1) {
                  width += 6;
                }

                for (width; width < stageWidth; width += density) {
                  pixel = imageData[(width + height * stageWidth) * 4 - 1];
                  if (
                    pixel !== 0 &&
                    width > 0 &&
                    width < stageWidth &&
                    height > 0 &&
                    height < stageHeight
                  ) {
                    particles.push({
                      x: width,
                      y: height,
                    });
                  }
                }
              }

              return particles;
            }
          }

          function distance(x1, y1, x2, y2) {
            const x = x2 - x1;
            const y = y2 - y1;
            return Math.sqrt(x * x + y * y);
          }

          function pointCircle(px, py, cx, cy, r) {
            if (distance(px, py, cx, cy) <= r) {
              return true;
            } else {
              return false;
            }
          }

          function hslToHex(h, s, l) {
            s /= 100;
            l /= 100;

            let c = (1 - Math.abs(2 * l - 1)) * s;
            let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
            let m = l - c / 2;
            let red = 0;
            let green = 0;
            let blue = 0;

            if (0 <= h && h < 60) {
              red = c;
              green = x;
              blue = 0;
            } else if (60 <= h && h < 120) {
              red = x;
              green = c;
              blue = 0;
            } else if (120 <= h && h < 180) {
              red = 0;
              green = c;
              blue = x;
            } else if (180 <= h && h < 240) {
              red = 0;
              green = x;
              blue = c;
            } else if (240 <= h && h < 300) {
              red = x;
              green = 0;
              blue = c;
            } else if (300 <= h && h < 360) {
              red = c;
              green = 0;
              blue = x;
            }

            red = red + m;
            green = green + m;
            blue = blue + m;

            return (
              ((red * 255) << 16) + ((green * 255) << 8) + ((blue * 255) | 0)
            );
          }

          class Visual {
            constructor() {
              this.text = new Text();

              this.texture = PIXI.Texture.from(particle);

              this.ParticleGroup = [];

              this.mouse = {
                x: 0,
                y: 0,
                radius: 10,
              };

              document.addEventListener(
                "pointermove",
                this.onMove.bind(this),
                false
              );
              document.addEventListener(
                "touchend",
                this.onEnd.bind(this),
                false
              );
            }

            show(stageWidth, stageHeight, stage) {
              if (this.container) {
                stage.removeChild(this.container);
              }

              this.pos = this.text.setText(
                stageHeight / stageWidth < 1300 / 2100
                  ? "Hi this is Mylog"
                  : "Hi",
                10,
                stageWidth,
                stageHeight
              );

              this.container = new PIXI.ParticleContainer(
                this.pos.length * LINE_TOTAL,
                {
                  vertices: false,
                  position: true,
                  rotation: false,
                  scale: false,
                  uvs: false,
                  tint: true,
                }
              );

              stage.addChild(this.container);

              this.particleGroups = [];
              const total = this.pos.length;
              for (let i = 0; i < total; i++) {
                const item = new ParticleGroup(
                  this.pos[i],
                  i / total,
                  this.texture,
                  LINE_TOTAL
                );
                this.particleGroups.push(item);
              }

              for (let i = LINE_TOTAL - 1; i >= 0; i--) {
                this.addChild(i);
              }
            }

            addChild(index) {
              for (let i = 0; i < this.particleGroups.length; i++) {
                this.container.addChild(
                  this.particleGroups[i].particles[index].sprite
                );
              }
            }

            animate() {
              for (let i = 0; i < this.particleGroups.length; i++) {
                const item = this.particleGroups[i];
                item.animate(this.mouse);
              }
            }

            onMove(e) {
              this.mouse.x = e.clientX;
              this.mouse.y = e.clientY;
            }

            onEnd() {
              this.mouse.x = 0;
              this.mouse.y = 0;
            }
          }
          new App();
        }
      } catch (error) {
        console.error("Error loading module:", error);
      }
    };

    setTimeout(importModule, 1000);
  }, []);

  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <main>
        <BrowserOnly>
          {() => {
            return <div id="container" />;
          }}
        </BrowserOnly>
      </main>
    </Layout>
  );
}
