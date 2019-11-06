const configs = [
  {
    h1: 'Now Listen!',
    p: 'Where does the sound come from?',
    button: 'I dunno.',
    playSequence: [
      {
        number: 3,
        interval: 500,
      },
      {
        number: 4,
        interval: 500,
      },
      {
        number: 5,
        interval: 500,
      },
    ],
  },
  {
    h1: 'Your turn!',
    p: 'What did the sound sound like? <br><a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Skip',
  },
  {
    h1: 'Wanna skip?',
    p:
      'No way😑! I have O.C.D and that means you have to match the sound PERFECTLY!<br>Each time you think you have replayed the sound, click the button to see whether it is correct.<br>If you got the same text, you got the idea~<br><a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Fine. Check it.',
  },
  {
    h1: 'Perfect! I know you could make it.😉',
    p: 'Keep going to see if you could go through your gift!🎁',
    button: 'Okay~',
  },
  {
    h1: 'Now try this out.',
    p: '🎵🎶🎵🎶🎵🎶<br><a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Check it.',
    playSequence: [
      {
        number: 4,
        interval: 500,
      },
      {
        number: 4,
        interval: 500,
      },
      {
        number: 4,
        interval: 500,
      },
      {
        number: 4,
        interval: 500,
      },
      {
        number: 4,
        interval: 500,
      },
      {
        number: 4,
        interval: 500,
      },
    ],
  },
  {
    h1: "Quite easy, isn't it? 😎",
    p: 'Keep going ~',
    button: 'Next',
  },
  {
    h1: 'There are a few more levels to go ~',
    p: '',
    button: 'Next',
  },
  {
    h1: 'Now check this out.',
    p: '<a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Check ~',
    playSequence: [
      {
        number: 1,
        interval: 500,
      },
      {
        number: 1,
        interval: 500,
      },
      {
        number: 2,
        interval: 500,
      },
      {
        number: 3,
        interval: 500,
      },
      {
        number: 1,
        interval: 500,
      },
    ],
  },
  {
    h1: 'Great Job ~ ',
    p: 'Becoming harder now.',
    button: 'Next ✌️',
  },
  {
    h1: 'Here you are!',
    p: 'Jingle Bells 🔔, Jingle Bells 🎄, Jingle all the way ~<br><a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Check ~',
    playSequence: [
      {
        number: 4,
        interval: 500,
      },
      {
        number: 4,
        interval: 500,
      },
      {
        number: 3,
        interval: 1000,
      },
      {
        number: 4,
        interval: 500,
      },
      {
        number: 4,
        interval: 500,
      },
      {
        number: 3,
        interval: 1000,
      },
      {
        number: 4,
        interval: 500,
      },
      {
        number: 5,
        interval: 500,
      },
      {
        number: 0,
        interval: 500,
      },
      {
        number: 1,
        interval: 500,
      },
      {
        number: 4,
        interval: 500,
      },
    ],
  },
  {
    h1: 'Amazing ~',
    p: "Probably this is the only 'music' I could create by using these sound effects… 😓",
    button: 'Next',
  },
  {
    h1: 'Rate time! 🤩 Give me five stars ~ ⭐️',
    p: 'Maybe this is what all those developers will do?',
    button: 'Bullshit.',
  },
  {
    h1: '记得去年我说的啥吗',
    p: '最好别记得 <br><a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Next',
    playSequence: [
      {
        number: 4,
        interval: 600,
      },
      {
        number: 3,
        interval: 300,
      },
      {
        number: 4,
        interval: 300,
      },
      {
        number: 4,
        interval: 300,
      },
      {
        number: 3,
        interval: 600,
      },
      {
        number: 1,
        interval: 600,
      },
      {
        number: 3,
        interval: 300,
      },
      {
        number: 1,
        interval: 300,
      },
      {
        number: 1,
        interval: 300,
      },
      {
        number: 3,
        interval: 600,
      },
    ],
  },
  {
    h1: '今年肯定会比去年做的好啦!',
    p: '至少能点个两下',
    button: 'Next',
  },
  {
    h1: 'What do you think?',
    p: '这也不像是 生日礼物 啊是吧 😓',
    button: 'Next',
  },
  {
    h1: '就是个……小游戏？',
    p: '情商低啊情商低',
    button: 'Alright. Alright.',
  },
  {
    h1: 'Now try this ~',
    p: '<a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Check.',
    playSequence: [
      {
        number: 4,
        interval: 300,
      },
      {
        number: 4,
        interval: 300,
      },
      {
        number: 3,
        interval: 300,
      },
      {
        number: 4,
        interval: 300,
      },
      {
        number: 4,
        interval: 300,
      },
      {
        number: 3,
        interval: 600,
      },
      {
        number: 4,
        interval: 300,
      },
      {
        number: 4,
        interval: 300,
      },
      {
        number: 3,
        interval: 300,
      },
      {
        number: 4,
        interval: 300,
      },
      {
        number: 4,
        interval: 300,
      },
      {
        number: 3,
        interval: 600,
      },
    ],
  },
  {
    h1: '不仅是小游戏……',
    p: '怎么算结束啊？无限闯关咩？',
    button: 'Next',
  },
  {
    h1: '甚至不知道文字该放啥',
    p: 'Best Wishes?',
    button: 'Next',
  },
  {
    h1: '这太尴尬了',
    p: '要不我表演个节目？',
    button: 'Next',
  },
  {
    h1: '弹钢琴 🎹???',
    p: '谱呢谱呢……',
    button: 'Next',
  },
  {
    h1: '但是好忙啊……一直都没时间弹',
    p: 'Keyboard买来半年多了就只会弹一首',
    button: 'Next',
  },
  {
    h1: '实在是抱歉……',
    p: '抱歉抱歉抱歉 (._.) ',
    button: 'Next',
  },
  {
    h1: '然后大概……这玩意……烂尾了',
    p: '啊啊啊强迫症真的受不了啊……',
    button: 'Next',
  },
  {
    h1: '我真的还想做很多东西',
    p: '比如说用代码写一个动画之类的或者把这个按键换成琴键……',
    button: 'Next',
  },
  {
    h1: '如果可以的话你等我忙完',
    p: 'GRE考完？申请的事情弄完？大创水完？毕设做完？',
    button: 'What？',
  },
  {
    h1: '或许就……忙不完了呢',
    p: '😟',
    button: 'Next',
  },
  {
    h1: '你是不是也经常发现',
    p: '经常对自己说 “熬过这一阵就好了”',
    button: 'Well, who knows...',
  },
  {
    h1: '但事实上呢',
    p: '似乎永远都有事情等着去熬诶……',
    button: 'Next',
  },
  {
    h1: '所以……都要加油蛙 🐸',
    p: '这“礼物”到了后面好水啊',
    button: 'I think so',
  },
  {
    h1: '现在好像就变成了手动弹幕……',
    p: '去年还是自动的呢……',
    button: '……',
  },
  {
    h1: '啊怎么办怎么办后面啥都没了',
    p: '再让她闯一关吧？',
    button: 'Not again...',
  },
  {
    h1: '原谅我🙏时间只允许我做到这了',
    p: 'Please……',
    button: 'Next',
  },
  {
    h1: '不过有快600行代码了呢',
    p: 'Partly represents my sincerity...',
    button: 'Next',
  },
  {
    h1: '最后……来个结尾吧？',
    p: '之前就是防止做不完……结果现在只能充数了',
    button: 'Happy birthday to me',
  },
  {
    h1: '嗯……这个结尾不是乱码……',
    p: 'You have to wait until it stops...',
    button: '...',
  },
];

const clickedSequence = [];
let currentSequence = [];
let iter = 0;

function timeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

function changeText() {
  const header = document.querySelector('.header');
  const rightH1 = document.querySelector('.right-part h1');
  rightH1.innerHTML = configs[iter].h1;
  const rightP = document.querySelector('.right-part p');
  rightP.innerHTML = configs[iter].p;
  const button = document.querySelector('.button');
  button.innerHTML = configs[iter].button;

  header.style.animation = 'move-out .4s ease';
  header.addEventListener('animationend', () => {
    const leftH1 = header.querySelector('.left-part h1');
    leftH1.innerHTML = configs[iter].h1;
    const leftP = header.querySelector('.left-part p');
    leftP.innerHTML = configs[iter].p;
    header.style.left = 0;
    header.style.animation = '';
  });
}

async function playMusic(playSequence = currentSequence, index = 0) {
  const sounds = document.querySelectorAll('.sound');
  if (index >= playSequence.length) {
    return;
  }
  sounds[playSequence[index].number].currentTime = 0;
  sounds[playSequence[index].number].play();
  await timeout(playSequence[index].interval);
  playMusic(playSequence, index + 1);
}

window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pad');
  const visual = document.querySelector('.visual');
  const button = document.querySelector('button');
  const color = ['#55efc4', '#ff7675', '#c060d3', '#fdcb6e', '#6c5ce7', '#0984e3'];

  // Visual Effects
  const createBubbles = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.left = `${pads[index].offsetLeft + 0.5 * pads[index].offsetWidth - 25}px`;
    bubble.innerHTML = '<i class="fa fa-music"></i>';
    bubble.style.color = color[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', () => {
      visual.removeChild(bubble);
    });
  };

  // Sounds
  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      // This next line is to make it possible to tap before a track has finished playing. Otherwise you can only tap after each track has finished playing.
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
      clickedSequence.push(index);
      if (clickedSequence.length > currentSequence.length) {
        clickedSequence.splice(0, clickedSequence.length - currentSequence.length);
      }
    });
  });

  // When button is clicked, play a series of music.
  button.addEventListener('click', async () => {
    if (iter === configs.length) {
      const finalScene = document.querySelector('.final-scene');
      const finalSceneText = document.querySelector('.final-scene .text');
      const text = finalSceneText.textContent;
      finalSceneText.textContent = '';
      finalScene.style.visibility = 'visible';
      finalScene.style.animation = 'fade-in 2s forwards';
      await timeout(1000);
      for (let i = 0; i < text.length; i++) {
        finalSceneText.textContent += text[i];
        // eslint-disable-next-line no-await-in-loop
        await timeout(30);
      }
      alert('Thanks for watching ~ Forever 18 ～');
      return;
    }
    currentSequence = configs[iter].playSequence ? configs[iter].playSequence : currentSequence;
    if ([3, 5, 8, 10, 13, 17].indexOf(iter) !== -1) {
      const sequenceNumber = [];
      currentSequence.forEach((item) => {
        sequenceNumber.push(item.number);
      });
      if (sequenceNumber.toString() !== clickedSequence.toString()) {
        button.style.animation = 'shake 1s';
        button.addEventListener('animationend', () => {
          button.style.animation = '';
        });
        return;
      }
    }
    changeText();
    await timeout(500);
    if ([0, 4, 7, 9, 12, 16].indexOf(iter) !== -1) {
      playMusic(configs[iter].playSequence);
    }
    iter += 1;
  });
});

window.addEventListener('resize', () => {
  const infoBoard = document.querySelector('.info-board');
  if (Math.abs(window.innerHeight - 500) < 10 && Math.abs(window.innerWidth - 1000) < 20) {
    infoBoard.style.animation = 'fade-out 1s ease';
    infoBoard.addEventListener('animationend', () => {
      infoBoard.style.opacity = '0';
      infoBoard.style.zIndex = -1;
    });
  } else if (infoBoard.style.zIndex) {
    infoBoard.style.animation = 'fade-in 1s ease';
    infoBoard.addEventListener('animationend', () => {
      infoBoard.style.opacity = '1';
      infoBoard.style.zIndex = 10;
    });
  }
});

window.onload = async () => {};
