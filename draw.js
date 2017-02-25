(function (window) {
  'use strict';
  var startCode = 7000000;
  var endCode = 7000999;
  var length = endCode - startCode + 1;
  var time = 4000;

  var random_under = function (upbound) {
    return Math.floor(Math.random() * upbound); 
  };

  var random = function () {
  	return Math.floor(Math.random() * length) + startCode;  
  }

  var roll = function () {
    document.getElementById('year-disp').classList.remove('highlight-text');
    var roll_progress = 0;
    var sel_year = -1, last_idx = 0;
    var timer_id;
    timer_id = setInterval(function () {
      var len = length, idx = random();
      if (roll_progress === 0) {
      	// keep rolling
        while (idx === last_idx) idx = random();
      } else return; 
      last_idx = idx;
      document.getElementById('year-disp').innerText = idx;
    }, 40);

    setTimeout(function () { roll_progress = 1; sel_year = last_idx; document.getElementById('year-disp').classList.add('highlight-text'); }, time);
    
    setTimeout(function () {
      document.getElementById('btn-more').classList.remove('collapse');
      document.getElementById('btn-okay').classList.remove('collapse');
      var disp_card = document.getElementById('main-card');
      disp_card.classList.remove('expand');
      disp_card.classList.add('expand-more');
      document.getElementById('list-card').classList.add('expand');
      setTimeout(function () {
        document.getElementById('list-card').classList.remove('expand');
        document.getElementById('list-card').classList.add('expand-more');
      }, 700);  // > 600ms
      var winner_list = document.getElementById('winner-list');
      var item = document.createElement('div');
      item.classList.add('transitive');
      item.classList.add('winner-list-item');
      if (winner_list.children.length % 2 === 0) item.classList.add('odd');
      item.innerHTML = last_idx.toString();
      if (winner_list.children.length === 0) winner_list.appendChild(item);
      else winner_list.insertBefore(item, winner_list.firstElementChild);
      setTimeout(function () { item.classList.add('expand'); }, 200);
    }, time + 1000);
  };

  document.getElementById('btn-go').onclick = function () {
    document.getElementById('btn-go').classList.add('collapse');
    document.getElementById('main-card').classList.add('expand');
    roll();
  };
  document.getElementById('btn-more').onclick = function () {
    document.getElementById('btn-more').classList.add('collapse');
    document.getElementById('btn-okay').classList.add('collapse');
    document.getElementById('main-card').classList.remove('expand-more');
    document.getElementById('main-card').classList.add('expand');
    roll();
  };
  document.getElementById('btn-okay').onclick = function () {
    document.getElementById('main-card').classList.remove('expand-more');
    document.getElementById('winner-list').classList.add('largetext');
    //document.getElementById('winners-caption').classList.add('largetext');
    document.getElementById('congrats').classList.add('expand');
    document.getElementById('btn-prize').classList.remove('collapse');
  };
  document.getElementById('btn-prize').onclick = function () {
    document.getElementById('list-card').classList.remove('expand-more');
    document.getElementById('btn-prize').classList.add('collapse');
    document.getElementById('prize-card').classList.add('expand');
  };
}(window));