const configs = [
  {
    h1: 'Now Listen!',
    p: 'Where does the sound come from?',
    button: 'Next',
    playSequence: [
      {
        number: 3,
        interval: 500,
      }, {
        number: 4,
        interval: 500,
      }, {
        number: 5,
        interval: 500,
      },
    ],
  }, {
    h1: 'Your turn!',
    p: 'What did the sound sound like? <br><a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Skip',
  }, {
    h1: 'Wanna skip?',
    p: 'No way😑! I have O.C.D and that means you have to match the sound PERFECTLY!<br>Each time you think you have replayed the sound, click the button to see whether it is correct.<br>If you got the same text, you got the idea~<br><a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Fine. Check it.',
  }, {
    h1: 'Perfect! I know you could make it.😉',
    p: 'Keep going to see if you could go through your gift!🎁',
    button: 'Okay~',
  }, {
    h1: 'Now try this out.',
    p: '🎵🎶🎵🎶🎵🎶<br><a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Check it.',
    playSequence: [
      {
        number: 4,
        interval: 500,
      }, {
        number: 4,
        interval: 500,
      }, {
        number: 4,
        interval: 500,
      }, {
        number: 4,
        interval: 500,
      }, {
        number: 4,
        interval: 500,
      }, {
        number: 4,
        interval: 500,
      },
    ],
  }, {
    h1: 'Quite easy, isn\'t it? 😎',
    p: 'Keep going ~ I\'ve still got something to say ~',
    button: 'Next',
  }, {
    h1: 'There are a few more levels to go ~',
    p: '',
    button: 'Next',
  }, {
    h1: 'Now check this out.',
    p: '<a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Check ~',
    playSequence: [
      {
        number: 1,
        interval: 500,
      }, {
        number: 1,
        interval: 500,
      }, {
        number: 2,
        interval: 500,
      }, {
        number: 3,
        interval: 500,
      }, {
        number: 1,
        interval: 500,
      },
    ],
  }, {
    h1: 'Great Job ~ ',
    p: 'Becoming harder now.',
    button: 'Next ✌️',
  }, {
    h1: 'Here you are!',
    p: 'Jingle Bells 🔔, Jingle Bells 🎄, Jingle all the way ~<br><a href="#" onclick="playMusic()"><i class="fa fa-bullhorn"></i></a>',
    button: 'Check ~',
    playSequence: [
      {
        number: 4,
        interval: 500,
      }, {
        number: 4,
        interval: 500,
      }, {
        number: 3,
        interval: 1000,
      }, {
        number: 4,
        interval: 500,
      }, {
        number: 4,
        interval: 500,
      }, {
        number: 3,
        interval: 1000,
      }, {
        number: 4,
        interval: 500,
      }, {
        number: 5,
        interval: 500,
      }, {
        number: 0,
        interval: 500,
      }, {
        number: 1,
        interval: 500,
      }, {
        number: 4,
        interval: 500,
      },
    ],
  }, {
    h1: 'Amazing ~',
    p: 'Probably this is the only \'music\' I could create by using these sound effects… 😓',
    button: '👌',
  }, {
    h1: 'Rate time! 🤩',
    p: 'If you enjoy this <span style="text-decoration: line-through;">app</span> page, please give me five stars ~ ⭐️',
    button: 'Bullshit.',
  }, {
    h1: 'Oh...alright, next one.',
    p: 'Remember what I said last year, in that web page I sent you?',
    button: 'Nope. Just check.',
    playSequence: [
      {
        number: 4,
        interval: 600,
      }, {
        number: 3,
        interval: 300,
      }, {
        number: 4,
        interval: 300,
      }, {
        number: 4,
        interval: 300,
      }, {
        number: 3,
        interval: 600,
      }, {
        number: 1,
        interval: 600,
      }, {
        number: 3,
        interval: 300,
      }, {
        number: 1,
        interval: 300,
      }, {
        number: 1,
        interval: 300,
      }, {
        number: 3,
        interval: 600,
      },
    ],
  }, {
    h1: 'Euphonious!',
    p: 'I said I will definitely give you a better gift next time.',
    button: 'Next',
  }, {
    h1: 'What do you think?',
    p: 'That\'s this time ~ What do you think? 😊',
    button: 'Still shit. 😑',
  }, {
    h1: 'Right...I think so too...',
    p: 'I\'m still far behind "skillful"...😔<br>Sorry for making you disappointed.',
    button: 'Alright. Alright.',
  }, {
    h1: 'Now try this ~',
    p: 'But I\'m still trying...I will try...as long as I think I can.💪',
    button: 'Check.',
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
  const color = [
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#6860d3',
    '#60b2d3',
  ];

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
      console.log(clickedSequence);
    });
  });

  // When button is clicked, play a series of music.
  button.addEventListener('click', async () => {
    if (iter >= configs.length) {
      return;
    }
    currentSequence = configs[iter].playSequence ? configs[iter].playSequence : currentSequence;
    if ([3, 5, 8, 10, 13].indexOf(iter) !== -1) {
      const sequenceNumber = [];
      currentSequence.forEach((item) => {
        sequenceNumber.push(item.number);
      });
      if (sequenceNumber.toString() !== clickedSequence.toString()) {
        return;
      }
    }
    changeText();
    await timeout(500);
    if ([0, 4, 7, 9, 12].indexOf(iter) !== -1) {
      playMusic(configs[iter].playSequence);
    }
    iter += 1;
  });
});

window.addEventListener('resize', () => {
  const infoBoard = document.querySelector('.info-board');
  if (Math.abs(window.innerHeight - 500) < 30 && Math.abs(window.innerWidth - 1000) < 50) {
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
