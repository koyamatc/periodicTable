import React, { PropTypes } from 'react'

const LargeElement = ({ largeElement }) => (

        <div
          id={"largeElement"}
          key={largeElement.lgNo}
          className={"largeElement " + largeElement.lgGroup}
          
        >
          <span className="aNo"
                style={{opacity:largeElement.lgNoOpacity}}
          >
            {largeElement.lgNo}</span>
          <div className="name">{largeElement.lgName}</div>
          <div className="jName">{largeElement.lgJName}</div>
          <div className="symbol" 
               style={{left: symbolPos(largeElement.lgSymbol)}} 　
          >
            {largeElement.lgSymbol}
          </div>
        </div>

)

LargeElement.propTypes = {
  largeElement: PropTypes.shape({
    lgNo: PropTypes.string.isRequired,
    lgName: PropTypes.string.isRequired,
    lgSymbol: PropTypes.string.isRequired,
  }).isRequired


}

/*------------*/
/* functions  */
/*------------*/

//<-- 元素記号の文字数で表示位置を設定する　
let symbolPos  = (symbolText) =>{

   if (typeof symbolText =='undefined') {
     return
   }

   let len = symbolText.length;

   switch (len) {

      case  1: return "40%";
               break;
      case  2: return "35%";
               break;
      case  3: return "25%";
               break;
   };
};

 
export default LargeElement