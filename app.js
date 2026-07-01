const copy = {
  titleEyebrow: "Aki ADV / 5 Minutes",
  titleHeading: "\u963f\u79cb\u6200\u611b\u5192\u96aa",
  titleSubtitle:
    "\u5728\u5074\u665a\u7684\u98a8\u88e1\uff0c\u963f\u79cb\u5f35\u958b\u8033\u6735\uff0c\u7b49\u4f60\u628a\u4eca\u5929\u5269\u4e0b\u7684\u6eab\u67d4\u90fd\u4ea4\u7d66\u5979\u3002",
  startButton: "\u958b\u59cb\u6563\u6b65",
  skipButton: "\u76f4\u63a5\u8aad\u7d50\u5c40",
  affectionLabel: "\u597d\u611f\u5ea6",
  backButton: "\u56de\u4e0a\u4e00\u53e5",
  nextButton: "\u4e0b\u4e00\u53e5",
  endingEyebrow: "Ending",
  restartButton: "\u518d\u966a\u963f\u79cb\u4e00\u6b21",
};

const scenes = {
  intro: {
    label: "\u5e8f\u7ae0",
    image: "./assets/generated/title.png",
    speaker: "\u65c1\u767d",
    subtitle: "\u4eca\u5929\u7684\u665a\u98a8\u6709\u4e00\u9ede\u751c",
    text:
      "\u4f60\u525b\u628a\u9580\u6253\u958b\uff0c\u963f\u79cb\u5c31\u63d0\u8d77\u8033\u6735\u3002\u5979\u6c92\u6709\u6025\u8457\u64f7\u4e0a\u4f86\uff0c\u53ea\u662f\u975c\u975c\u770b\u8457\u4f60\uff0c\u50cf\u662f\u5728\u554f\uff1a\u4eca\u5929\u6709\u6c92\u6709\u628a\u6211\u653e\u5728\u5fc3\u4e0a\uff1f",
    next: "walk",
  },
  walk: {
    label: "\u9ec3\u660f\u6563\u6b65",
    image: "./assets/generated/walk.png",
    speaker: "\u963f\u79cb",
    subtitle: "\u5c3e\u5df4\u5148\u8aaa\u8a71",
    text:
      "\u963f\u79cb\u7528\u9f3b\u5c16\u8f15\u8f15\u78b0\u4e86\u78b0\u4f60\u7684\u624b\u5fc3\uff0c\u7136\u5f8c\u628a\u982d\u5074\u904e\u4f86\uff0c\u610f\u601d\u5f88\u660e\u986f\uff1a\u5148\u6478\u6478\u6211\uff0c\u518d\u51fa\u767c\u3002",
    choices: [
      { text: "\u5148\u6478\u6478\u5979\uff0c\u518d\u6162\u6162\u51fa\u9580", affection: 0, next: "park" },
      { text: "\u5148\u63d0\u51fa\u96f6\u98df\uff0c\u518d\u6478\u6478\u5979", affection: 2, next: "park" },
    ],
  },
  park: {
    label: "\u516c\u5712\u7d04\u6703",
    image: "./assets/generated/park.png",
    speaker: "\u4f60",
    subtitle: "\u5fc3\u8df3\u6709\u9ede\u5feb",
    text:
      "\u5230\u4e86\u516c\u5712\uff0c\u963f\u79cb\u6cbf\u8457\u4f60\u8d70\u51fa\u7684\u534a\u5f91\u6253\u8f49\uff0c\u50cf\u4e00\u9846\u6696\u8272\u5c0f\u884c\u661f\u3002\u5979\u5076\u723e\u56de\u982d\uff0c\u78ba\u5b9a\u4f60\u9084\u5728\uff0c\u624d\u53c8\u653e\u5fc3\u5730\u5f80\u524d\u8dd1\u5169\u6b65\u3002",
    choices: [
      { text: "\u966a\u5979\u6162\u8d70\uff0c\u807d\u5979\u9f3b\u5b50\u88e1\u7684\u5c0f\u8072\u97ff", affection: 0, next: "play" },
      { text: "\u548c\u5979\u4e00\u8d77\u5c0f\u8dd1\uff0c\u8b93\u98a8\u4e5f\u52a0\u5165\u7d04\u6703", affection: 2, next: "play" },
    ],
  },
  play: {
    label: "\u73a9\u800d\u6642\u9593",
    image: "./assets/generated/play.png",
    speaker: "\u963f\u79cb",
    subtitle: "\u66f2\u7dda\u6b63\u5728\u5347\u6eab",
    text:
      "\u963f\u79cb\u5728\u4f60\u8173\u908a\u7e5e\u4e86\u534a\u5708\uff0c\u505c\u4e0b\u4f86\u7684\u77ac\u9593\uff0c\u773c\u775b\u4eae\u5f97\u50cf\u5728\u5077\u85cf\u661f\u661f\u3002\u9019\u6642\u5019\u5982\u679c\u4f60\u8aaa\u4e00\u53e5\u597d\u807d\u7684\u8a71\uff0c\u5979\u5927\u6982\u6703\u6574\u665a\u90fd\u8a18\u8457\u3002",
    choices: [
      { text: "\u597d\u4e56\uff0c\u4eca\u5929\u4e5f\u6700\u559c\u6b61\u4f60", affection: 3, next: "rest" },
      { text: "\u4f60\u662f\u6211\u4eca\u5929\u7684\u7b2c\u4e00\u540d", affection: 0, next: "rest" },
    ],
  },
  rest: {
    label: "\u975c\u4e0b\u4f86",
    image: "./assets/generated/rest.png",
    speaker: "\u65c1\u767d",
    subtitle: "\u628a\u547c\u5438\u653e\u6162",
    text:
      "\u8dd1\u7d2f\u4ee5\u5f8c\uff0c\u963f\u79cb\u628a\u8eab\u9ad4\u8cbc\u5230\u4f60\u5074\u908a\uff0c\u50cf\u662f\u5728\u628a\u665a\u5c0f\u7684\u9ad4\u6eab\u5206\u4f60\u4e00\u534a\u3002\u5979\u4ec0\u9ebc\u90fd\u6c92\u8aaa\uff0c\u4f46\u4f60\u77e5\u9053\u5979\u5f88\u5b89\u5fc3\u3002",
    choices: [
      { text: "\u8f15\u8072\u554f\u5979\u8981\u4e0d\u8981\u56de\u5bb6", affection: -1, next: "confess" },
      { text: "\u628a\u624b\u653e\u5728\u5979\u982d\u4e0a\uff0c\u966a\u5979\u518d\u5750\u4e00\u4e0b", affection: 2, next: "confess" },
    ],
  },
  confess: {
    label: "\u544a\u767d\u524d\u5915",
    image: "./assets/generated/confess.png",
    speaker: "\u4f60",
    subtitle: "\u6700\u91cd\u8981\u7684\u53e5\u5b50",
    text:
      "\u4f60\u770b\u8457\u963f\u79cb\uff0c\u5fd7\u5f97\u4eca\u5929\u7684\u6642\u9593\u5f88\u5b8c\u7f8e\u3002\u4e0d\u662f\u592a\u9577\uff0c\u4e5f\u4e0d\u662f\u592a\u77ed\uff0c\u5920\u4f60\u628a\u90a3\u53e5\u8d85\u904e\u6574\u5929\u7684\u8a71\uff0c\u6eab\u67d4\u5730\u8aaa\u51fa\u53e3\u3002",
    choices: [
      { text: "\u963f\u79cb\uff0c\u6211\u60f3\u6bcf\u5929\u90fd\u966a\u4f60\u6563\u6b65", affection: 3, next: "ending" },
      { text: "\u963f\u79cb\uff0c\u4f60\u9858\u610f\u628a\u4eca\u5929\u4e5f\u5206\u6211\u4e00\u534a\u55ce", affection: 0, next: "ending" },
    ],
  },
};

const endings = {
  best: {
    title: "\u963f\u79cb\u628a\u722a\u5b50\u653e\u9032\u4f60\u7684\u638c\u5fc3",
    text:
      "\u5979\u7528\u6700\u5b89\u975c\u7684\u65b9\u5f0f\u56de\u7b54\u4e86\u4f60\u3002\u5c3e\u5df4\u8f15\u8f15\u6383\u904e\u4f60\u7684\u624b\u80cc\uff0c\u50cf\u662f\u5728\u8aaa\uff1a\u4f60\u4e0d\u7528\u5f88\u6703\u8aaa\u8a71\uff0c\u53ea\u8981\u4e00\u76f4\u5728\uff0c\u6211\u5c31\u6703\u5f88\u958b\u5fc3\u3002\u4eca\u665a\u7684\u98a8\u5f88\u6f64\uff0c\u963f\u79cb\u4e5f\u5f88\u6f64\uff0c\u800c\u4f60\u5011\u628a\u5f7c\u6b64\u90fd\u7559\u5728\u4e86\u9019\u4e00\u9801\u3002",
    image: "./assets/generated/ending.png",
  },
  good: {
    title: "\u963f\u79cb\u9760\u904e\u4f86\uff0c\u9f3b\u5c16\u78b0\u4e86\u78b0\u4f60",
    text:
      "\u5979\u6c92\u6709\u628a\u7b54\u6848\u8aaa\u5f97\u5f88\u5927\u8072\uff0c\u4f46\u90a3\u4e00\u500b\u5c0f\u5c0f\u7684\u9760\u8fd1\u5df2\u7d93\u5920\u4e86\u3002\u4f60\u77e5\u9053\uff0c\u9019\u4e0d\u662f\u7d50\u675f\uff0c\u53ea\u662f\u4f60\u548c\u963f\u79cb\u628a\u4e0b\u4e00\u6b21\u6563\u6b65\u7d04\u597d\u4e86\u3002",
    image: "./assets/generated/ending.png",
  },
  soft: {
    title: "\u963f\u79cb\u5728\u4f60\u8eab\u908a\u5b89\u975c\u7761\u8457\u4e86",
    text:
      "\u5979\u628a\u4eca\u5929\u5269\u4e0b\u7684\u5fc3\u60c5\u4ea4\u7d66\u4f60\u4fdd\u7ba1\u3002\u96d6\u7136\u9019\u4e00\u5c40\u6c92\u6709\u6700\u4eae\u7684\u53e5\u5b50\uff0c\u4f46\u4f60\u5011\u4e00\u8d77\u628a\u9019\u500b\u665a\u9918\u904e\u5f97\u5f88\u8212\u670d\uff0c\u5f88\u50cf\u4e00\u6bb5\u6703\u88ab\u53cd\u8907\u60f3\u8d77\u7684\u6eab\u67d4\u56de\u61b6\u3002",
    image: "./assets/generated/ending.png",
  },
  dark: {
    title: "\u963f\u79cb\u6c92\u6709\u56de\u982d\u3002",
    text:
      "\u4f60\u8aaa\u4e86\u592a\u591a\u8f15\u6d6e\u7684\u8a71\uff0c\u4e5f\u628a\u5979\u7684\u5b89\u5168\u611f\u4e00\u9ede\u9ede\u62bd\u8d70\u3002\u963f\u79cb\u7ad9\u5728\u665a\u98a8\u88e1\u770b\u4e86\u4f60\u5f88\u4e45\uff0c\u7136\u5f8c\u5c31\u80cc\u904e\u8eab\u53bb\u3002\u9019\u4e00\u665a\uff0c\u6709\u4e9b\u88ab\u4f60\u4e09\u8a00\u5169\u8a9e\u79d8\u5bc6\u7d0d\u5165\u96e8\u88e1\u3002",
    image: "./assets/generated/dark-ending.svg",
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
