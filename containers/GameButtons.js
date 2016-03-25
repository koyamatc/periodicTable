import React from 'react'
import { connect } from 'react-redux'
import { startGame } from '../actions'
import { resetGame } from '../actions'
import { showGameRule } from '../actions'
import { closeGameRule } from '../actions'
import { closeGameOver } from '../actions'
import { closeGameComplete } from '../actions'
var Button = require('react-bootstrap').Button;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Modal = require('react-bootstrap').Modal;

const mapStateToProps = (state) => {
  return state
}

let GameButtons = ({ dispatch, elements, gameButtons }) => {
  let showRuleFlag = gameButtons.showRuleFlag;
  let showOverFlag = gameButtons.showOverFlag;
  let showCompleteFlag = gameButtons.showCompleteFlag;

  return (
    <div>
     <Row>
      <Col xsOffset={7}>
        <Button
          bsStyle="primary"
          onClick={e => {
            e.preventDefault()
            dispatch(startGame(elements))
          }}
        >
          ゲーム 開始 
        </Button>

        <Button
        　　bsStyle="danger"
          onClick={e => {
            e.preventDefault()
            dispatch(resetGame(elements))
          }}
        >
          ゲーム リセット 
        </Button>

        <Button
          bsStyle="info"
          onClick={e => {
            e.preventDefault()
            dispatch(showGameRule())
          }}
        >
          ゲーム・ルール
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Modal 
          id="gameRule"
          bsSize="small" 
          show={showRuleFlag} 
          onHide={e => {
            e.preventDefault()
            dispatch(closeGameRule())
          }}>
          <Modal.Header closeButton>
            <Modal.Title>ゲームのやりかた</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>ゲームの内容</h4>
            <p>
              ゲーム開始後、積みあがった元素カードを周期表の正しい位置へ置いていくゲームです。
            </p>

            <hr />

            <h4>ゲームの始め方</h4>
            <p>
            <button className="btn btn-primary">ゲーム開始</button>ボタンをクリックします
            </p>
            <h4>ゲームの進め方</h4>
            <p>表示されている元素カードの周期表上での正しい位置をクリックします</p>
            <p>正解ならば、カードが移動します</p>
            <p>カードがなくなるまで繰り返します</p>
            <h4>ゲーム終了</h4>
            <p>５回間違えるとゲーム終了となります</p>
            <p><button className="btn btn-danger">ゲーム　リセット</button>
            をクリックすると終了します</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={e => {
            e.preventDefault()
            dispatch(closeGameRule())
            dispatch(resetGame(elements))
          }}
          >Close</Button>
          </Modal.Footer>
        </Modal>
        <Modal 
          id="gameOver"
          bsSize="small" 
          show={showOverFlag} 
          onHide={e => {
            e.preventDefault()
            dispatch(closeGameOver())
            dispatch(resetGame(elements))
          }}>
          <Modal.Header closeButton>
            <Modal.Title>ゲーム　オーバー</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Game Over</h1>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={e => {
            e.preventDefault()
            dispatch(closeGameOver())
            dispatch(resetGame(elements))
          }}
          >Close</Button>
          </Modal.Footer>
        </Modal>
        <Modal 
          id="gameComplete"
          bsSize="small" 
          show={showCompleteFlag}
          onHide={e => {
            e.preventDefault()
            dispatch(closeGameComplete())
            dispatch(resetGame(elements))
          }}>
          <Modal.Header closeButton>
            <Modal.Title>ゲーム制覇</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Congratulations!!</h1>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={e => {
            e.preventDefault()
            dispatch(closeGameComplete())
            dispatch(resetGame(elements))
          }}
          >Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
     </Row>
   </div> 
  )
}
GameButtons = connect(mapStateToProps)(GameButtons)

export default GameButtons