/**
 * 使用 msedge-tts 生成唐朝英雄配音
 * 声音：zh-CN-XiaoxiaoNeural（微软晓晓，自然女声）
 */
import { createRequire } from 'module';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');

// 输出目录
const OUTPUT_DIR = join(__dirname, 'public', 'audio');

// 10个人物的配音文本（名字 + 头衔 + 技能介绍）
const HEROES = [
  {
    id: '01-liyuan',
    text: `李渊，唐朝创始人。他的超级技能有四项：建立大唐帝国，起义推翻隋朝，笼络各方豪杰，还有培养牛娃李世民。从一个地方官，逆袭成为皇帝！`,
  },
  {
    id: '02-lishimin',
    text: `李世民，千古明君，天可汗。他的超级技能有四项：打仗超厉害，认真听大臣讲道理，带领百姓丰衣足食，还让外国人都服气。打仗第一，听劝第一，当皇帝也第一！`,
  },
  {
    id: '03-wuzetian',
    text: `武则天，中国唯一的女皇帝。她的超级技能有四项：当上唯一女皇帝，发明科举选人才，让老百姓日子变好，谁不服就搞定谁。在男人的世界里，她偏偏当了皇帝！`,
  },
  {
    id: '04-xuanzang',
    text: `玄奘，西天取经第一人。他的超级技能有四项：徒步走了五万里，带回六百五十七本经书，穿越沙漠戈壁，翻译佛经超认真。一个人，一匹马，走遍了半个世界！`,
  },
  {
    id: '05-libai',
    text: `李白，诗仙，酒鬼诗人。他的超级技能有四项：喝酒写诗两不误，一首诗就能出名，剑法也超厉害，月亮是他最好的朋友。喝酒、写诗、游天下，这就是李白的快乐！`,
  },
  {
    id: '06-dufu',
    text: `杜甫，诗圣，忧国忧民。他的超级技能有四项：用诗记录历史，心里装着天下百姓，自己穷还惦记别人，留下一千四百多首诗。自己穷得叮当响，心里还装着全天下！`,
  },
  {
    id: '07-weizheng',
    text: `魏征，史上最敢怼皇帝的人。他的超级技能有四项：敢当着皇帝面说不，进谏两百多次从不怕，超级聪明看问题准，是皇帝的良心镜子。别人怕皇帝，他专门怼皇帝！`,
  },
  {
    id: '08-wangwei',
    text: `王维，诗中有画，画中有诗。他的超级技能有四项：画画超级厉害，诗写得像画一样美，音乐也是一把好手，隐居山林悠哉悠哉。诗、书、画、音乐全部精通，唐朝第一全才！`,
  },
  {
    id: '09-jianzhen',
    text: `鉴真，六次东渡，越挫越勇。他的超级技能有四项：六次渡海终于成功，失明了也没有放弃，把佛教带到日本，在日本建了唐招提寺。失败五次，瞎了眼睛，第六次终于成功！`,
  },
  {
    id: '10-liguinian',
    text: `李龟年，盛唐第一音乐家。他的超级技能有四项：是唐玄宗最爱的歌手，精通多种乐器，声音动听人人迷，还见证了盛唐兴衰。唱过最繁华的盛世，也见过最落寞的流亡！`,
  },
];

async function generateTTS() {
  // 创建输出目录
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`✅ 创建目录: ${OUTPUT_DIR}`);
  }

  const tts = new MsEdgeTTS();

  // 设置中文女声：晓晓（自然、生动，适合内容创作）
  await tts.setMetadata(
    'zh-CN-XiaoxiaoNeural',
    OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
  );

  console.log('🎤 开始生成配音（zh-CN-XiaoxiaoNeural - 晓晓女声）\n');

  for (const hero of HEROES) {
    const outputPath = join(OUTPUT_DIR, `${hero.id}.mp3`);

    try {
      console.log(`⏳ 生成 ${hero.id} ...`);

      // toStream 返回 { audioStream, metadataStream }
      const { audioStream } = await tts.toStream(hero.text);

      const chunks = [];
      await new Promise((resolve, reject) => {
        audioStream.on('data', (chunk) => chunks.push(chunk));
        audioStream.on('end', resolve);
        audioStream.on('error', reject);
      });

      const buffer = Buffer.concat(chunks);
      await writeFile(outputPath, buffer);

      console.log(`✅ ${hero.id}.mp3 (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`❌ ${hero.id} 生成失败:`, err.message);
    }
  }

  console.log('\n🎉 全部配音生成完成！');
  console.log(`📁 文件位置: ${OUTPUT_DIR}`);
}

generateTTS().catch(console.error);
