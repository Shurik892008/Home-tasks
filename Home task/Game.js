// Створення Ігрового об'єкту (самої гри) і встановлення стандартних розмірів вікна
const game = new Phaser.Game(1060, 706, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update,
});
// Створення змінних для глобального використання

let score = 0;
let scoreText;
let platforms;
let diamants;
let cursor;
let player;
let countDiamont;

// загружать гру і грові текстури

function preload() {
  game.load.image("sky", "../Home task/assets/3d-rendering.png");
  game.load.image("ground", "../Home task/assets/platform.png");
  game.load.image("diamond", "../Home task/assets/diamond.png");
  game.load.spritesheet("woof", "../Home task/assets/spritestrip.png", 39, 32);
}

function create() {
  //створюєм фізичний простір, щоб ми могли запустити ситему платформеру
  game.physics.startSystem(Phaser.Physics.ARCADE);
  //розмішуєм текстурку неба
  game.add.sprite(0, 0, "sky");
  //створення групи для розміщення землі
  platforms = game.add.group();
  //включення фізики для групи платформи
  platforms.enableBody = true;
  //створення підгрупи для землі
  const ground = platforms.create(0, game.world.height - 64, "ground");
  // зміна розміру довжини спрайту в середні гри
  ground.scale.setTo(3, 2);
  //відключаєм можливість приземлюватись на блоки
  ground.body.immovable = true;
  //створення виступів
  let ledge = platforms.create(450, 500, "ground");
  ledge.body.immovable = true;
  ledge = platforms.create(-75, 360, "ground");
  ledge.body.immovable = true;
  ledge = platforms.create(400, 210, "ground");
  ledge.body.immovable = true;
  ledge = platforms.create(-170, 110, "ground");
  ledge.body.immovable = true;
  //cтворення гравця і його налаштування
  player = game.add.sprite(32, game.world.height - 150, "woof");
  // включаємо фізику для гравця
  game.physics.arcade.enable(player);
  //налаштовуємо фізику
  player.body.bounce.y = 0.2; //y рівень прижку
  player.body.gravity.y = 1060;
  player.body.collideWorldBounds = true; //не дасть випасти за кордони ігрового екрану
  //анімації повороту вліво вправо
  player.animations.add("left", [0, 1], 10, true);
  player.animations.add("right", [2, 3], 10, true);
  //створюємо групу для кристаликів
  diamants = game.add.group();
  diamants.enableBody = true;
  countDiamont = Math.ceil(Math.random() * (40 - 3) + 3);
  //створюємо діаманти
  for (let i = 0; i < countDiamont; i++) {
    const diamond = diamants.create(
      i * Math.random() * (120 - 40) + 120,
      0,
      "diamond"
    );
    //впасти з неба
    diamond.body.gravity.y = 1000;
    diamond.body.bounce.y = 0.3 + Math.random() * 0.2;
  }
  //Рахунок напис
  scoreText = game.add.text(16, 16, "", { fontSize: "32px", fill: "#000000" });
  //завантаження елементів керування
  cursor = game.input.keyboard.createCursorKeys();
}

function update() {
  //зупинити гравця коли ні одна стрілочка на клавіатурі не нежата, зупиняємо собачку
  player.body.velocity.x = 0;
  //налаштовуємо колізії між плеер і діамантами і платформами
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(diamants, platforms);
  //виклик функції при зіткненні з алмазами
  game.physics.arcade.overlap(player, diamants, collectDiamond, null, this);
  //налаштовуємо керування
  if (cursor.left.isDown) {
    player.body.velocity.x = -150;
    player.animations.play("left");
  } else if (cursor.right.isDown) {
    player.body.velocity.x = 150;
    player.animations.play("right");
  } else {
    /* player.animations.stop(); */
  }

  //цей кусок коду дозволить собачці пригати
  if (cursor.up.isDown && player.body.touching.down) {
    player.body.velocity.y = -600;
  }
  if (score === countDiamont * 10) {
    alert("you win");
    score = 0;
  }
}

function collectDiamond(player, diamond) {
  // прибрати кристалик з екрану
  diamond.kill();
  //обнови рахунок
  score += 10;
  scoreText.text = `Score: ${score}`;
}
