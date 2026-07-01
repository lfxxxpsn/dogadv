const copy = {
  titleEyebrow: "Aki ADV / 5 Minutes",
  titleHeading: "阿秋的戀愛選擇題",
  titleSubtitle:
    "在傍晚的風裡，阿秋張開耳朵，等你把今天剩下的溫柔都交給她。",
  startButton: "開始散步",
  skipButton: "跳到結局",
  affectionLabel: "好感度",
  backButton: "回上一句",
  nextButton: "下一句",
  endingEyebrow: "Ending",
  restartButton: "再陪阿秋一次",
};

const scenes = {
  intro: {
    label: "序章",
    image: "./assets/generated/title.png",
    speaker: "旁白",
    subtitle: "今天的晚風有一點甜",
    text:
      "你剛把門打開，阿秋就提起耳朵。她沒有急著撲上來，只是靜靜看著你，像是在問：今天有沒有把我放在心上？",
    next: "walk",
  },
  walk: {
    label: "黃昏散步",
    image: "./assets/generated/walk.png",
    speaker: "阿秋",
    subtitle: "尾巴先說話",
    text:
      "阿秋用鼻尖輕輕碰了碰你的手心，然後把頭側過來，意思很明顯：先摸摸我，再出發。",
    choices: [
      { text: "先摸摸她，再慢慢出門", affection: 0, next: "park" },
      { text: "先提出零食，再摸摸她", affection: 2, next: "park" },
    ],
  },
  park: {
    label: "公園約會",
    image: "./assets/generated/park.png",
    speaker: "你",
    subtitle: "心跳有點快",
    text:
      "到了公園，阿秋沿著你走出的半徑打轉，像一顆暖色小行星。她偶爾回頭，確定你還在，才又放心地往前跑兩步。",
    choices: [
      { text: "陪她慢走，聽她鼻子裡的小聲響", affection: 0, next: "play" },
      { text: "和她一起小跑，讓風也加入約會", affection: 2, next: "play" },
    ],
  },
  play: {
    label: "玩耍時間",
    image: "./assets/generated/play.png",
    speaker: "阿秋",
    subtitle: "曲線正在升溫",
    text:
      "阿秋在你腳邊繞了半圈，停下來的瞬間，眼睛亮得像在偷藏星星。這時候如果你說一句好聽的話，她大概會整晚都記著。",
    choices: [
      { text: "好乖，今天也最喜歡你", affection: 3, next: "rest" },
      { text: "你是我今天的第一名", affection: 0, next: "rest" },
    ],
  },
  rest: {
    label: "靜下來",
    image: "./assets/generated/rest.png",
    speaker: "旁白",
    subtitle: "把呼吸放慢",
    text:
      "跑累以後，阿秋把身體貼到你側邊，像是在把傍晚的體溫分你一半。她什麼都沒說，但你知道她很安心。",
    choices: [
      { text: "問她要不要回家", affection: -3, next: "confess" },
      { text: "把手放在她頭上，陪她再坐一下", affection: 2, next: "confess" },
    ],
  },
  confess: {
    label: "告白前夕",
    image: "./assets/generated/confess.png",
    speaker: "你",
    subtitle: "最重要的句子",
    text:
      "你看著阿秋，忽然覺得今天的時間剛剛好。不是太長，也不是太短，足夠讓你把那句藏了一整天的話，溫柔地說出口。",
    choices: [
      { text: "阿秋，我想每天都陪你散步", affection: 3, next: "ending" },
      { text: "阿秋，你願意把今天也分我一半嗎", affection: 0, next: "ending" },
    ],
  },
};

const endings = {
  best: {
    title: "阿秋把爪子放進你的掌心",
    text:
      "她用最安靜的方式回答了你。尾巴輕輕掃過你的手背，像是在說：你不用很會說話，只要一直在，我就會很開心。今晚的風很柔，阿秋也很柔，而你們把彼此都留在了這一頁。",
    image: "./assets/generated/ending.png",
  },
  good: {
    title: "阿秋靠過來，鼻尖碰了碰你",
    text:
      "她沒有把答案說得很大聲，但那一個小小的靠近已經足夠。你知道，這不是結束，只是你和阿秋把下一次散步約好了。",
    image: "./assets/generated/ending.png",
  },
  soft: {
    title: "阿秋在你身邊安靜睡著了",
    text:
      "她把今天剩下的心情交給你保管。雖然這一局沒有最亮的句子，但你們一起把這個傍晚過得很舒服，很像一段會被反覆想起的溫柔回憶。",
    image: "./assets/generated/ending.png",
  },
  dark: {
    title: "阿秋沒有回頭。",
    text:
      "你說了太多輕浮的話，也把她的安全感一點點抽走。阿秋站在晚風裡看了你很久，然後就背過身去。這一晚，有些話被你三言兩語秘密納入雨裡。",
    image: "./assets/generated/dark-ending.png",
  },
};

const ui = {
  screens: {
    title: document.querySelector('[data-screen="title"]'),
    game: document.querySelector('[data-screen="game"]'),
    ending: document.querySelector('[data-screen="ending"]'),
  },
  titleEyebrow: document.getElementById("title-eyebrow"),
  titleHeading: document.getElementById("title-heading"),
  titleSubtitle: document.getElementById("title-subtitle"),
  startButton: document.getElementById("start-button"),
  skipButton: document.getElementById("skip-button"),
  affectionLabel: document.getElementById("affection-label"),
  affectionFill: document.getElementById("affection-fill"),
  sceneLabel: document.getElementById("scene-label"),
  progressLabel: document.getElementById("progress-label"),
  sceneImage: document.getElementById("scene-image"),
  speakerName: document.getElementById("speaker-name"),
  speakerSubtitle: document.getElementById("speaker-subtitle"),
  dialogueText: document.getElementById("dialogue-text"),
  choiceList: document.getElementById("choice-list"),
  backButton: document.getElementById("back-button"),
  nextButton: document.getElementById("next-button"),
  endingEyebrow: document.getElementById("ending-eyebrow"),
  endingTitle: document.getElementById("ending-title"),
  endingText: document.getElementById("ending-text"),
  endingImage: document.getElementById("ending-image"),
  restartButton: document.getElementById("restart-button"),
};

const order = ["intro", "walk", "park", "play", "rest", "confess"];

const state = {
  screen: "title",
  scene: "intro",
  affection: 2,
  history: [],
};

function setScreen(name) {
  state.screen = name;
  Object.entries(ui.screens).forEach(([screenName, element]) => {
    element.classList.toggle("is-active", screenName === name);
  });
}

function updateStaticCopy() {
  document.title = copy.titleHeading;
  ui.titleEyebrow.textContent = copy.titleEyebrow;
  ui.titleHeading.textContent = copy.titleHeading;
  ui.titleSubtitle.textContent = copy.titleSubtitle;
  ui.startButton.textContent = copy.startButton;
  ui.skipButton.textContent = copy.skipButton;
  ui.affectionLabel.textContent = copy.affectionLabel;
  ui.backButton.textContent = copy.backButton;
  ui.nextButton.textContent = copy.nextButton;
  ui.endingEyebrow.textContent = copy.endingEyebrow;
  ui.restartButton.textContent = copy.restartButton;
}

function renderScene() {
  const scene = scenes[state.scene];
  if (!scene) {
    showEnding();
    return;
  }
  const index = order.indexOf(state.scene) + 1;
  ui.sceneLabel.textContent = scene.label;
  ui.progressLabel.textContent = `${index} / ${order.length}`;
  ui.sceneImage.src = scene.image;
  ui.speakerName.textContent = scene.speaker;
  ui.speakerSubtitle.textContent = scene.subtitle;
  ui.dialogueText.textContent = scene.text;
  ui.affectionFill.style.width = `${Math.max(0, Math.min(100, state.affection * 20))}%`;
  ui.choiceList.innerHTML = "";
  ui.nextButton.hidden = Boolean(scene.choices);
  ui.backButton.disabled = state.history.length === 0;

  if (!scene.choices) {
    return;
  }

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => choose(choice));
    ui.choiceList.appendChild(button);
  });
}

function choose(choice) {
  state.history.push({
    scene: state.scene,
    affection: state.affection,
  });
  state.affection += choice.affection;
  state.scene = choice.next;
  if (state.scene === "ending") {
    showEnding();
    return;
  }
  renderScene();
}

function advance() {
  const scene = scenes[state.scene];
  if (scene.choices) {
    return;
  }

  if (!scene.next) {
    showEnding();
    return;
  }

  state.history.push({
    scene: state.scene,
    affection: state.affection,
  });
  state.scene = scene.next;
  if (state.scene === "ending") {
    showEnding();
    return;
  }
  renderScene();
}

function showEnding() {
  const ending = state.affection >= 10 ? endings.best : state.affection >= 7 ? endings.good : state.affection <= 3 ? endings.dark : endings.soft;
  ui.endingTitle.textContent = ending.title;
  ui.endingText.textContent = ending.text;
  ui.endingImage.src = ending.image;
  setScreen("ending");
}

function startGame() {
  state.scene = "intro";
  state.affection = 2;
  state.history = [];
  setScreen("game");
  renderScene();
}

function restartGame() {
  startGame();
}

function goBack() {
  const previous = state.history.pop();
  if (!previous) {
    setScreen("title");
    return;
  }

  state.scene = previous.scene;
  state.affection = previous.affection;
  renderScene();
}

updateStaticCopy();
setScreen("title");

ui.startButton.addEventListener("click", startGame);
ui.skipButton.addEventListener("click", () => {
  state.affection = 1;
  showEnding();
});
ui.restartButton.addEventListener("click", restartGame);
ui.nextButton.addEventListener("click", advance);
ui.backButton.addEventListener("click", goBack);
