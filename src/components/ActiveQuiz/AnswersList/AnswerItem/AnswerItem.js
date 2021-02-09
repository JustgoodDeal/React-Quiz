import React from 'react'
import './AnswerItem.css'

const AnswerItem = props => {
  let cls = "AnswerItem";

  if (props.answerState) {
    cls += ` ${props.answerState}`
  }

  return (
    <li
        className={cls}
        onClick={() => props.onAnswerClick(props.answer.id)}
    >
      { props.answer.text }
    </li>
  )
};

export default AnswerItem
