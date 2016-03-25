import React, { PropTypes } from 'react'

const Element = ({ onMouseEnter, no, x, y, name, jName, symbol, group }) => (

        <div
          id={"element-" + no}
          key={no}
          style={{left: getX(x), top: getY(y)}}
          className={"element " + group}
          onMouseEnter={onMouseEnter}
          onClick={onMouseEnter}
        >
          <span className="aNo">{no}</span>
          <div className="name">{name}</div>
          <div className="symbol" 
              　style={{left: symbolPos(symbol)}}
          >
            {symbol}
          </div>
        </div>

)

Element.propTypes = {
  no: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
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

//<-- 元素記号の文字数で表示位置を設定する　
let symbolPos  = (symbolText) =>{

   let len = symbolText.length;

   switch (len) {

      case  1: return "35%";
               break;
      case  2: return "30%";
               break;
      case  3: return "25%";
               break;
   };
};

 
export default Element