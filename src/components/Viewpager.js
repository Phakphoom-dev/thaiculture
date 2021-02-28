import React from "react";
import { useSpring, animated } from "react-spring";
import "../assets/css/styles.css";
import { Container } from "reactstrap";
import img1 from "../assets/img/dahyun.png";
import img2 from "../assets/img/ink1.jpg";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Viewpager(props) {
  const [sp, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <Container>
      <animated.div
        class="card mr-5 ml-5"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: sp.xys.interpolate(trans),
          backgroundImage: `url(${img1})`,
        }}
      />
      <animated.div
        class="card ml-5"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: sp.xys.interpolate(trans),
          backgroundImage: `url(${img2})`,
        }}
      />
    </Container>
  );
}

export default Viewpager;
