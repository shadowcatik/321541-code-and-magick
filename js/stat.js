'use strict';

function cloud(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = '#ffffff';
  ctx.moveTo(100, 30);
  ctx.bezierCurveTo(50, 10, 50, 100, 100, 100);
  ctx.bezierCurveTo(50, 100, 50, 200, 90, 180);
  ctx.bezierCurveTo(10, 340, 220, 300, 200, 270);
  ctx.bezierCurveTo(200, 280, 300, 250, 250, 250);
  ctx.bezierCurveTo(275, 250, 300, 300, 350, 270);
  ctx.bezierCurveTo(350, 260, 400, 250, 450, 160);
  ctx.bezierCurveTo(450, 100, 470, 80, 400, 40);
  ctx.bezierCurveTo(370, 10, 310, 10, 310, 40);
  ctx.bezierCurveTo(310, 10, 270, 20, 270, 50);
  ctx.bezierCurveTo(260, 10, 200, 10, 200, 50);
  ctx.bezierCurveTo(200, 10, 150, 10, 150, 10);
  ctx.stroke();
  ctx.closePath();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fill();
  ctx.restore();
}

window.renderStatistics = function (ctx, names, times) {
  cloud(ctx);
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 70, 50);
  ctx.fillText('Список результатов:', 70, 65);

  var histoHeight = 150;
  var histoWidth = 0;
  var colWidth = 40;
  var colMargin = 50;
  var max = 1;

  for (var a = 0; a < times.length; a++) {
    var maxTime = times[a];

    if (maxTime > max) {
      max = maxTime;
    }
  }

  for (var j = 0; j < times.length; j++) {
    var name = names[j];
    var time = times[j];
    var hight = times[j] / max * histoHeight;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + Math.floor((Math.random() * 255) + 5) + ', ' + Math.floor((Math.random() * 2) + 1) + ')';
    }

    histoWidth += colMargin + colWidth;
    ctx.fillRect(histoWidth, histoHeight + 80, colWidth, -hight);
    ctx.fillText(name, histoWidth, histoHeight + 90);
    ctx.fillText(Math.floor(time), histoWidth, histoHeight - hight + 77);
  }
};
