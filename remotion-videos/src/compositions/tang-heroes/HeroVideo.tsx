import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";
import { HeroData } from "./data";

// ============ 动画工具函数 ============
const fadeSlideUp = (frame: number, start: number, duration = 20) => ({
  opacity: interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  transform: `translateY(${interpolate(
    frame,
    [start, start + duration + 5],
    [40, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  )}px)`,
});

const staggerItem = (frame: number, index: number, gap = 18) => ({
  opacity: interpolate(frame, [index * gap, index * gap + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  transform: `translateX(${interpolate(
    frame,
    [index * gap, index * gap + 25],
    [-60, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  )}px)`,
});

const typewriter = (frame: number, text: string, speed = 3) =>
  text.slice(0, Math.min(Math.floor(frame / speed), text.length));

// ============ 场景1：片头介绍 (0-3s = 0-180帧) ============
const IntroScene: React.FC<{ hero: HeroData }> = ({ hero }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const emojiScale = spring({ frame, fps, config: { damping: 8, stiffness: 100 } });
  const titleAnim = fadeSlideUp(frame, 20, 25);
  const subtitleAnim = fadeSlideUp(frame, 40, 20);
  const bookTagAnim = fadeSlideUp(frame, 55, 20);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${hero.bgGradient[0]} 0%, ${hero.bgGradient[1]} 100%)`,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* 背景装饰圆 */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${hero.color}22 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 书名标签 */}
      <div
        style={{
          ...bookTagAnim,
          position: "absolute",
          top: 120,
          background: "rgba(255,255,255,0.12)",
          border: `2px solid ${hero.color}66`,
          borderRadius: 40,
          padding: "14px 36px",
        }}
      >
        <span
          style={{
            color: hero.color,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          捂着门牙说历史·唐朝
        </span>
      </div>

      {/* 大Emoji */}
      <div
        style={{
          fontSize: 200,
          transform: `scale(${emojiScale})`,
          marginBottom: 30,
          lineHeight: 1,
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
        }}
      >
        {hero.emoji}
      </div>

      {/* 人物名字 */}
      <div
        style={{
          ...titleAnim,
          color: "#FFFFFF",
          fontSize: 110,
          fontWeight: 900,
          letterSpacing: 8,
          textShadow: `0 4px 30px ${hero.color}88`,
        }}
      >
        {hero.name}
      </div>

      {/* 人物头衔 */}
      <div
        style={{
          ...subtitleAnim,
          background: `linear-gradient(90deg, ${hero.color}, #ffffff)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: 44,
          fontWeight: 700,
          marginTop: 16,
          letterSpacing: 3,
        }}
      >
        {hero.title}
      </div>

      {/* 底部装饰线 */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          width: "60%",
          height: 3,
          background: `linear-gradient(90deg, transparent, ${hero.color}, transparent)`,
          opacity: interpolate(frame, [60, 80], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};

// ============ 场景2：超级技能 (3s-8s = 180-480帧) ============
const SkillsScene: React.FC<{ hero: HeroData }> = ({ hero }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 10, stiffness: 80 } });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${hero.bgGradient[0]} 0%, #0a0a1a 100%)`,
        padding: "80px 60px",
        flexDirection: "column",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          color: hero.color,
          fontSize: 52,
          fontWeight: 900,
          textAlign: "center",
          marginBottom: 60,
          transform: `scale(${titleSpring})`,
          letterSpacing: 4,
        }}
      >
        🏆 超级技能解锁！
      </div>

      {/* 技能列表 */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 36, justifyContent: "center" }}>
        {hero.skills.map((skill, index) => {
          const anim = staggerItem(frame, index, 22);
          return (
            <div
              key={index}
              style={{
                ...anim,
                background: `linear-gradient(135deg, ${hero.color}22, ${hero.color}08)`,
                border: `2px solid ${hero.color}55`,
                borderRadius: 24,
                padding: "32px 44px",
                display: "flex",
                alignItems: "center",
                gap: 24,
              }}
            >
              <div style={{ fontSize: 52 }}>{skill.split(" ")[0]}</div>
              <div
                style={{
                  color: "#FFFFFF",
                  fontSize: 44,
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {skill.split(" ").slice(1).join(" ")}
              </div>
            </div>
          );
        })}
      </div>

      {/* 人物名字小标 */}
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 60,
          color: `${hero.color}99`,
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        {hero.emoji} {hero.name}
      </div>
    </AbsoluteFill>
  );
};

// ============ 场景3：趣味故事 (8s-13s = 480-780帧) ============
const StoryScene: React.FC<{ hero: HeroData }> = ({ hero }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgScale = interpolate(frame, [0, 60], [1.05, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const storyText = typewriter(frame, hero.story, 2.5);
  const quoteAnim = fadeSlideUp(frame, 160, 30);
  const funFactAnim = fadeSlideUp(frame, 200, 25);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, #0a0a1a 0%, ${hero.bgGradient[1]}cc 100%)`,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "80px 60px",
        transform: `scale(${bgScale})`,
      }}
    >
      {/* 装饰圆圈背景 */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: `2px solid ${hero.color}22`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: `2px solid ${hero.color}33`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 大Emoji */}
      <div style={{ fontSize: 120, marginBottom: 40, lineHeight: 1 }}>
        {hero.emoji}
      </div>

      {/* 打字机效果故事文字 */}
      <div
        style={{
          color: "#FFFFFF",
          fontSize: 68,
          fontWeight: 900,
          textAlign: "center",
          lineHeight: 1.4,
          minHeight: 200,
          textShadow: `0 4px 20px ${hero.color}66`,
          letterSpacing: 2,
        }}
      >
        {storyText}
        <span
          style={{
            opacity: interpolate(frame % 60, [0, 30, 60], [1, 0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            color: hero.color,
          }}
        >
          |
        </span>
      </div>

      {/* 名言气泡 */}
      <div
        style={{
          ...quoteAnim,
          background: `${hero.color}22`,
          border: `2px solid ${hero.color}77`,
          borderRadius: 30,
          padding: "30px 44px",
          marginTop: 60,
          maxWidth: "90%",
        }}
      >
        <div
          style={{
            color: hero.color,
            fontSize: 38,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.5,
            letterSpacing: 1,
          }}
        >
          {hero.quote}
        </div>
      </div>

      {/* 趣味知识 */}
      <div
        style={{
          ...funFactAnim,
          position: "absolute",
          bottom: 80,
          left: 60,
          right: 60,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 20,
          padding: "24px 36px",
          borderLeft: `4px solid ${hero.color}`,
        }}
      >
        <div style={{ color: "#FFD700", fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          💡 冷知识
        </div>
        <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 30, lineHeight: 1.5 }}>
          {hero.funFact}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ 场景4：片尾 (13s-18s = 780-1080帧) ============
const OutroScene: React.FC<{ hero: HeroData }> = ({ hero }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const allEmojis = ["👑", "⚔️", "👸", "🧘", "🌙", "📜", "🗡️", "🎨", "⛵", "🎵"];

  const centerScale = spring({ frame, fps, config: { damping: 12, stiffness: 90 } });
  const fadeOut = interpolate(frame, [240, 300], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${hero.bgGradient[0]} 0%, ${hero.bgGradient[1]} 100%)`,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        opacity: fadeOut,
      }}
    >
      {/* 旋转的Emoji圆环 */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          transform: `rotate(${interpolate(frame, [0, 300], [0, 30], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}deg)`,
        }}
      >
        {allEmojis.map((emoji, i) => {
          const angle = (i / allEmojis.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 400 + 450;
          const y = Math.sin(rad) * 400 + 450;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x - 30,
                top: y - 30,
                fontSize: hero.emoji === emoji ? 80 : 50,
                opacity: hero.emoji === emoji ? 1 : 0.4,
              }}
            >
              {emoji}
            </div>
          );
        })}
      </div>

      {/* 中心内容 */}
      <div
        style={{
          transform: `scale(${centerScale})`,
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: 100, marginBottom: 20 }}>{hero.emoji}</div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: 6,
          }}
        >
          {hero.name}
        </div>
        <div
          style={{
            color: hero.color,
            fontSize: 36,
            fontWeight: 600,
            marginTop: 12,
            letterSpacing: 2,
          }}
        >
          {hero.title}
        </div>
      </div>

      {/* 关注提示 */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          textAlign: "center",
          opacity: interpolate(frame, [60, 100], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 34,
            fontWeight: 600,
          }}
        >
          📚 《捂着门牙说历史·唐朝》
        </div>
        <div
          style={{
            color: hero.color,
            fontSize: 30,
            marginTop: 12,
          }}
        >
          还有9位英雄等你发现！→
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ 主组件：单个英雄完整视频 ============
interface HeroVideoProps {
  heroId: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ heroId }) => {
  // 这里使用defaultProps传入，在Root.tsx里定义
  return <div>placeholder</div>;
};

// ============ 人物ID到音频文件名的映射 ============
const HERO_AUDIO_MAP: Record<string, string> = {
  liyuan: "01-liyuan",
  lishimin: "02-lishimin",
  wuzetian: "03-wuzetian",
  xuanzang: "04-xuanzang",
  libai: "05-libai",
  dufu: "06-dufu",
  weizheng: "07-weizheng",
  wangwei: "08-wangwei",
  jianzhen: "09-jianzhen",
  liguinian: "10-liguinian",
};

// 使用数据直接渲染的版本
export const HeroVideoWithData: React.FC<{ hero: HeroData }> = ({ hero }) => {
  const { fps } = useVideoConfig();
  const audioFile = HERO_AUDIO_MAP[hero.id];

  return (
    <AbsoluteFill>
      {/* 🎤 女声配音（从第0帧开始，贯穿整个视频） */}
      {audioFile && (
        <Audio
          src={staticFile(`audio/${audioFile}.mp3`)}
          volume={1}
          startFrom={0}
        />
      )}

      {/* 场景1：片头 0-3s */}
      <Sequence from={0} durationInFrames={180}>
        <IntroScene hero={hero} />
      </Sequence>

      {/* 场景2：技能 3s-8s */}
      <Sequence from={180} durationInFrames={300}>
        <SkillsScene hero={hero} />
      </Sequence>

      {/* 场景3：故事 8s-14s */}
      <Sequence from={480} durationInFrames={360}>
        <StoryScene hero={hero} />
      </Sequence>

      {/* 场景4：片尾 14s-18s */}
      <Sequence from={840} durationInFrames={240}>
        <OutroScene hero={hero} />
      </Sequence>
    </AbsoluteFill>
  );
};
