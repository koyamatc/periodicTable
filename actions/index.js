var $ = require('jquery');
var _ = require('lodash');
var
    numberOfElements = 120, // 元素数
    qIndex, //question index
    randomisedList=[],
    hitPoint=0,
    missedPoint=0;


export const mouseEnter = (no,name,jName,symbol,group) => {
  return {
    type: 'MOUSE_ENTER',
    no,
    name,
    jName,
    symbol,
    group
  }
}

export const startGame = (elements) => {

    // 元素番号を非表示にする
    $('.aNo').css({"opacity":0});
    // 得点ボード表示
    $('#pointBoard').css({"opacity":1});
    // 得点の初期化
    hitPoint = 0;
    missedPoint = 0;

    //　カードをランダムに並べる
    randomisedList = _.shuffle(elements);
    // カードを積上げる
    for (var i=0; i<numberOfElements; i++) {

      var
       　xPos = 450,
      　 yPos = 100;

      $("#element-" + (randomisedList[i].no))
        .delay(10*i)
        .animate({top:yPos + "px",
                 left:xPos + "px"})
        .css({'z-index':i});
    }; // end of for

    qIndex = numberOfElements - 1;

	return {
		type: 'START_GAME',
    randomisedList,
    qIndex
	}
}

export const resetGame = (elements) => {
    // 元素番号を表示にする
    $('.aNo').css({"opacity":1});
    // 得点ボード非表示
    $('#pointBoard').css({"opacity":0});
    for (var i=0; i<numberOfElements; i++) {

      $("#element-" + (elements[i].no))
        .delay(10*i)
        .animate({top:getY(elements[i].y) + "px",
                 left:getX(elements[i].x) + "px"})
        .css({'z-index':0});
    }; // end of for

	return {
		type: 'RESET_GAME'
	}
}

export const showGameRule = () => {
	return {
		type: 'SHOW_GAME_RULE'
	}
}

export const closeGameRule = () => {
  return {
    type: 'CLOSE_GAME_RULE',
  }
}

export const showGameOver = () => {
  return {
    type: 'SHOW_GAME_OVER'
  }
}

export const closeGameOver = () => {
  return {
    type: 'CLOSE_GAME_OVER',
  }
}

export const showGameComplete = () => {
  return {
    type: 'SHOW_GAME_COMPLETE'
  }
}

export const closeGameComplete = () => {
  return {
    type: 'CLOSE_GAME_COMPLETE',
  }
}

export const getQCell = () => {
  return {
    type: 'GET_QCELL',
    randomisedList,
    qIndex,
    hitPoint,
    missedPoint
  }
}

export const getPoints = () => {
  return {
    type: 'GET_POINTS',
    hitPoint,
    missedPoint
  }
}

export const checkHit = (no,qCell) => {
 
   if (no == qCell.no) {

      $("#element-" + (qCell.no))
        .animate({top:getY(qCell.y) + "px",
                 left:getX(qCell.x) + "px"})
        .css({'z-index':0});

      hitPoint++;
      qIndex--;

      if ( qIndex < 0 ) {
        return {
          type: 'SHOW_GAME_COMPLETE'
        }
      }

      return {
        type: 'HIT',
        hitPoint,
        qIndex
      }
  }

  missedPoint++;

  if ( missedPoint >= 5) {
    return {
      type: 'SHOW_GAME_OVER'
    } 
  }

  return {

    type: 'MISSED',
    missedPoint
  }

}

/*------------*/
/* functions  */
/*------------*/
let cardWidth = 62;
let cardHeight = 70;

// get left position 
let getX = (x) => {return x * (cardWidth + 2);};
// get top position
let getY = (y) => {return y * (cardHeight + 3) + 50;};