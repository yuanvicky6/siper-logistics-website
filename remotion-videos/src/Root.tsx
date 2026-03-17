import React from "react";
import { Composition } from "remotion";
import { HeroVideoWithData } from "./compositions/tang-heroes/HeroVideo";
import { TANG_HEROES, VIDEO_CONFIG } from "./compositions/tang-heroes/data";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {TANG_HEROES.map((hero) => (
        <Composition
          key={hero.id}
          id={`tang-hero-${hero.id}`}
          component={HeroVideoWithData}
          durationInFrames={VIDEO_CONFIG.SCENE_DURATION_FRAMES}
          fps={VIDEO_CONFIG.FPS}
          width={VIDEO_CONFIG.WIDTH}
          height={VIDEO_CONFIG.HEIGHT}
          defaultProps={{ hero }}
        />
      ))}
    </>
  );
};
