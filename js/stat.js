'use strict';

var canvas = document.querySelector('canvas');

function cloud(ctx) {
  ctx.beginPath();
  ctx.fillStyle='#ffffff';
  ctx.moveTo(100, 10);
  ctx.bezierCurveTo(50, 10, 50, 100, 100, 100);
  ctx.bezierCurveTo(50, 100, 50, 180, 100, 180);
  ctx.bezierCurveTo(100, 200, 160, 230, 160, 180);
  ctx.bezierCurveTo(200, 250, 250, 180, 250, 170);
  ctx.bezierCurveTo(275, 150, 300, 270, 380, 160);
  ctx.bezierCurveTo(420, 70, 370, 50, 370, 40);
  ctx.bezierCurveTo(370, 10, 310, 10, 310, 40);
  ctx.bezierCurveTo(310, 10, 270, 20, 270, 50);
  ctx.bezierCurveTo(260, 10, 200, 10, 200, 50);
  ctx.bezierCurveTo(200, 10, 150, 10, 150, 10);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
}

window.renderStatistics = function(ctx, names, times) {
  ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  cloud(ctx);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 60, 30);
  ctx.fillText('Список результатов:', 60, 50);

  var histoHeight = 150,
      histoWidth = 0,
      colWidth =  40,
      colMargin = 50,
      max = 1,
      min = Infinity;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    var name = names[i];

    if(time > max) {
      max = time;
    }
    else if (time < min) {
      min = time;
    }

    var newArray = [];
    var prop = time / max * histoHeight;
    newArray.push(prop);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, Math.floor((Math.random() * 50) + 5)';
    }

    histoWidth += colMargin + colWidth;
    ctx.fillRect(histoWidth, histoHeight, colWidth, newArray[i]);
    ctx.fillText(name, histoWidth, histoHeight);
  }
}

renderStatistics(
  canvas.getContext('2d'),
  ['Вы', 'Кекс', 'Катя', 'Игорь'],
  [2000, 5000, 2555, 2111]
);
