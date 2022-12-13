//////////////////////////////////////////////////////////////////////
//         Skills                                                   //
//////////////////////////////////////////////////////////////////////

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
chart.fontFamily = "Courier New";
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
series.randomness = 0.1;
series.rotationThreshold = 0.5;

series.data = [
  {
    tag: "javascript",
    count: "1765836",
  },
  {
    tag: "java",
    count: "1517355",
  },
  {
    tag: "c#",
    count: "1287629",
  },
  {
    tag: "php",
    count: "1263946",
  },
  {
    tag: "android",
    count: "1174721",
  },
  {
    tag: "python",
    count: "1116769",
  },
  {
    tag: "jquery",
    count: "944983",
  },
  {
    tag: "html",
    count: "805679",
  },
  {
    tag: "c++",
    count: "606051",
  },
  {
    tag: "ios",
    count: "591410",
  },
  {
    tag: "css",
    count: "574684",
  },
  {
    tag: "mysql",
    count: "550916",
  },
  {
    tag: "sql",
    count: "479892",
  },
  {
    tag: "asp.net",
    count: "343092",
  },
  {
    tag: "ruby-on-rails",
    count: "303311",
  },
  {
    tag: "c",
    count: "296963",
  },
  {
    tag: "arrays",
    count: "288445",
  },
  {
    tag: "objective-c",
    count: "286823",
  },
  {
    tag: ".net",
    count: "280079",
  },
  {
    tag: "r",
    count: "277144",
  },
  {
    tag: "node.js",
    count: "263451",
  },
  {
    tag: "angularjs",
    count: "257159",
  },
  {
    tag: "json",
    count: "255661",
  },
  {
    tag: "sql-server",
    count: "253824",
  },
  {
    tag: "swift",
    count: "222387",
  },
  {
    tag: "iphone",
    count: "219827",
  },
  {
    tag: "regex",
    count: "203121",
  },
  {
    tag: "ruby",
    count: "202547",
  },
  {
    tag: "ajax",
    count: "196727",
  },
  {
    tag: "django",
    count: "191174",
  },
  {
    tag: "excel",
    count: "188787",
  },
  {
    tag: "xml",
    count: "180742",
  },
  {
    tag: "asp.net-mvc",
    count: "178291",
  },
  {
    tag: "linux",
    count: "173278",
  },
  {
    tag: "angular",
    count: "154447",
  },
  {
    tag: "database",
    count: "153581",
  },
  {
    tag: "wpf",
    count: "147538",
  },
  {
    tag: "spring",
    count: "147456",
  },
  {
    tag: "wordpress",
    count: "145801",
  },
  {
    tag: "python-3.x",
    count: "145685",
  },
  {
    tag: "vba",
    count: "139940",
  },
  {
    tag: "string",
    count: "136649",
  },
  {
    tag: "xcode",
    count: "130591",
  },
  {
    tag: "windows",
    count: "127680",
  },
  {
    tag: "reactjs",
    count: "125021",
  },
  {
    tag: "vb.net",
    count: "122559",
  },
  {
    tag: "html5",
    count: "118810",
  },
  {
    tag: "eclipse",
    count: "115802",
  },
  {
    tag: "multithreading",
    count: "113719",
  },
  {
    tag: "mongodb",
    count: "110348",
  },
  {
    tag: "laravel",
    count: "109340",
  },
  {
    tag: "bash",
    count: "108797",
  },
  {
    tag: "git",
    count: "108075",
  },
  {
    tag: "oracle",
    count: "106936",
  },
  {
    tag: "pandas",
    count: "96225",
  },
  {
    tag: "postgresql",
    count: "96027",
  },
  {
    tag: "twitter-bootstrap",
    count: "94348",
  },
  {
    tag: "forms",
    count: "92995",
  },
  {
    tag: "image",
    count: "92131",
  },
  {
    tag: "macos",
    count: "90327",
  },
  {
    tag: "algorithm",
    count: "89670",
  },
  {
    tag: "python-2.7",
    count: "88762",
  },
  {
    tag: "scala",
    count: "86971",
  },
  {
    tag: "visual-studio",
    count: "85825",
  },
  {
    tag: "list",
    count: "84392",
  },
  {
    tag: "excel-vba",
    count: "83948",
  },
  {
    tag: "winforms",
    count: "83600",
  },
  {
    tag: "apache",
    count: "83367",
  },
  {
    tag: "facebook",
    count: "83212",
  },
  {
    tag: "matlab",
    count: "82452",
  },
  {
    tag: "performance",
    count: "81443",
  },
  {
    tag: "css3",
    count: "78250",
  },
  {
    tag: "entity-framework",
    count: "78243",
  },
  {
    tag: "hibernate",
    count: "76123",
  },
  {
    tag: "typescript",
    count: "74867",
  },
  {
    tag: "linq",
    count: "73128",
  },
  {
    tag: "swing",
    count: "72333",
  },
  {
    tag: "function",
    count: "72043",
  },
  {
    tag: "amazon-web-services",
    count: "71155",
  },
  {
    tag: "qt",
    count: "69552",
  },
  {
    tag: "rest",
    count: "69138",
  },
  {
    tag: "shell",
    count: "68854",
  },
  {
    tag: "azure",
    count: "67431",
  },
  {
    tag: "firebase",
    count: "66411",
  },
  {
    tag: "api",
    count: "66158",
  },
  {
    tag: "maven",
    count: "66113",
  },
  {
    tag: "powershell",
    count: "65467",
  },
  {
    tag: ".htaccess",
    count: "65014",
  },
  {
    tag: "sqlite",
    count: "64888",
  },
  {
    tag: "file",
    count: "62783",
  },
  {
    tag: "codeigniter",
    count: "62393",
  },
  {
    tag: "perl",
    count: "61752",
  },
  {
    tag: "loops",
    count: "61015",
  },
  {
    tag: "symfony",
    count: "60820",
  },
  {
    tag: "selenium",
    count: "59855",
  },
  {
    tag: "google-maps",
    count: "59616",
  },
  {
    tag: "csv",
    count: "59600",
  },
  {
    tag: "uitableview",
    count: "59011",
  },
  {
    tag: "web-services",
    count: "58916",
  },
  {
    tag: "cordova",
    count: "58195",
  },
  {
    tag: "class",
    count: "58055",
  },
  {
    tag: "numpy",
    count: "57132",
  },
  {
    tag: "google-chrome",
    count: "56836",
  },
  {
    tag: "ruby-on-rails-3",
    count: "55962",
  },
  {
    tag: "android-studio",
    count: "55801",
  },
  {
    tag: "tsql",
    count: "55736",
  },
  {
    tag: "validation",
    count: "55531",
  },
];

series.dataFields.word = "tag";
series.dataFields.value = "count";

series.heatRules.push({
  target: series.labels.template,
  property: "fill",
  min: am4core.color("#0000CC"),
  max: am4core.color("#CC00CC"),
  dataField: "value",
});

var hoverState = series.labels.template.states.create("hover");
hoverState.properties.fill = am4core.color("#FF0000");

function typeWriter(element, txt, speed = 50, j = 0) {
  var i = j;
  if (i < txt.length) {
    document.getElementById(element).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, element, txt, speed, i);
  }
}

//////////////////////////////////////////////////////////////////////
//         Aare API                                                 //
//////////////////////////////////////////////////////////////////////

// { aare: 7.1, aare_prec: 7.05, text: "Iglu boue bringts meh", text_short: "Iglu boue", time: 1670934000,…}
$.get(
  "https://aareguru.existenz.ch/v2018/today?city=bern&app=my.app.ch&version=1.0.42",
  function (data) {
    var result = "D'Aare isch " + data.aare_prec + " Grad. " + data.text + ".";

    typeWriter("aare", result, 100);
  }
);

//////////////////////////////////////////////////////////////////////
//         WebGL Hintergrund                                        //
//////////////////////////////////////////////////////////////////////

if (!THREE.Supports.webgl) THREE.Supports.addGetWebGLMessage();

var container, stats;
var camera,
  scene,
  renderer,
  particles,
  geometry,
  materials = [],
  parameters,
  i,
  h,
  color,
  sprite,
  size;
var mouseX = 0,
  mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
setInterval(loop, 1000 / 60);

function init() {
  container = document.getElementById("snowflakes");

  camera = new THREE.Camera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    3000
  );
  camera.position.z = 1000;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.0008);

  geometry = new THREE.Geometry();

  sprite1 = ImageUtils.loadTexture("res/snowflake1.png");
  sprite2 = ImageUtils.loadTexture("res/snowflake2.png");
  sprite3 = ImageUtils.loadTexture("res/snowflake3.png");
  sprite4 = ImageUtils.loadTexture("res/snowflake4.png");
  sprite5 = ImageUtils.loadTexture("res/snowflake5.png");

  for (i = 0; i < 2000; i++) {
    vector = new THREE.Vector3(
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000
    );
    geometry.vertices.push(new THREE.Vertex(vector));
  }

  parameters = [
    [[1.0, 0.2, 1.0], sprite2, 20],
    [[0.95, 0.1, 1], sprite3, 15],
    [[0.9, 0.05, 1], sprite1, 10],
    [[0.85, 0, 0.8], sprite5, 8],
    [[0.8, 0, 0.7], sprite4, 5],
  ];

  for (i = 0; i < parameters.length; i++) {
    color = parameters[i][0];
    sprite = parameters[i][1];
    size = parameters[i][2];

    materials[i] = new THREE.ParticleBasicMaterial({
      size: size,
      map: sprite,
      blending: THREE.AdditiveBlending,
      depth_test: false,
    });
    materials[i].color.setHSV(color[0], color[1], color[2]);

    particles = new THREE.ParticleSystem(geometry, materials[i]);
    particles.rotation.x = Math.random() * 6;
    particles.rotation.y = Math.random() * 6;
    particles.rotation.z = Math.random() * 6;
    scene.addObject(particles);
  }

  renderer = new THREE.WebGLRenderer({ clearAlpha: 1 });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  document.addEventListener("mousemove", onDocumentMouseMove, false);
  document.addEventListener("touchstart", onDocumentTouchStart, false);
  document.addEventListener("touchmove", onDocumentTouchMove, false);
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart(event) {
  if (event.touches.length == 1) {
    event.preventDefault();

    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length == 1) {
    event.preventDefault();

    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

function loop() {
  var time = new Date().getTime() * 0.00005;

  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;

  for (i = 0; i < scene.objects.length; i++) {
    scene.objects[i].rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
  }

  for (i = 0; i < materials.length; i++) {
    color = parameters[i][0];

    h = ((360 * (color[0] + time)) % 360) / 360;
    materials[i].color.setHSV(h, color[1], color[2]);
  }

  renderer.render(scene, camera);

  stats.update();
}

//////////////////////////////////////////////////////////////////////
//         Scroll                                                   //
//////////////////////////////////////////////////////////////////////
function scroll_here_to() {
  $("html,body").animate(
    {
      scrollTop: $("#scroll_here").offset().top,
    },
    800,
    function () {}
  );
}
