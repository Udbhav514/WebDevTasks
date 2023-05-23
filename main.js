const myReq = new Request(
  "https://www.coursehubiitg.in/api/codingweek/contributions"
);
let globallyusable;
fetch("https://www.coursehubiitg.in/api/codingweek/contributions")
  .then((response) => response.json())
  .then((Jsonform) => {
    globallyusable = Jsonform;
    globallyusable = globallyusable.sort((a, b) => a.points - b.points);
    globallyusable = globallyusable.reverse();
  })
  .then(() => {
    leaderboard(globallyusable);
  });

function leaderboard(globallyusable) {
  for (let i = 4; i < globallyusable.length + 1; i++) {
    var divi = document.createElement("div");
    divi.innerHTML =
      '<div class="box">' +
      "<p>" +
      i +
      "</p>" +
      '<div class="circle">' +
      "<img src=" +
      globallyusable[i - 1].avatar +
      "/>" +
      "</div>" +
      '<div class="names">' +
      globallyusable[i - 1].name +
      "</div>" +
      '<div class="points">' +
      +globallyusable[i - 1].points +
      "</div>" +
      "</div>";
    var boxe = document.getElementsByClassName("boxes")[0];
    boxe.appendChild(divi);
  }

  var tops3 = document.getElementsByClassName("top3")[0];
  var seconds = document.createElement("div");
  seconds.className = "second";
  seconds.innerHTML =
    '<div class="secondtxt"><p>' +
    2 +
    "</p></div>" +
    '<div class="secondc">' +
    "<img src=" +
    globallyusable[1].avatar +
    "/>" +
    "</div>" +
    '<div class="secondtxtname"><p>' +
    globallyusable[1].name +
    " " +
    globallyusable[1].points +
    "</p></div>";
  tops3.appendChild(seconds);

  var firsts = document.createElement("div");
  firsts.className = "first";
  firsts.innerHTML =
    '<div class="firsttxt"><p>' +
    1 +
    "</p></div>" +
    '<div class="firstc">' +
    "<img src=" +
    globallyusable[0].avatar +
    "/>" +
    "</div>" +
    '<div class="firsttxtname"><p>' +
    globallyusable[0].name +
    " " +
    globallyusable[0].points +
    "</p></div>";
  tops3.appendChild(firsts);

  var thirds = document.createElement("div");
  thirds.className = "third";
  thirds.innerHTML =
    '<div class="thirdtxt"><p>' +
    3 +
    "</p></div>" +
    '<div class="thirdc">' +
    "<img src=" +
    globallyusable[2].avatar +
    "/>" +
    "</div>" +
    '<div class="thirdtxtname"><p>' +
    globallyusable[2].name +
    " " +
    globallyusable[2].points +
    "</p></div>";
  tops3.appendChild(thirds);
}
