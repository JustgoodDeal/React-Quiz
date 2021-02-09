import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../UI/Button/Button'

import './FinishedQuiz.css'


const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total
    }, 0);

    return (
        <div className="FinishedQuiz">
            <ul>
                { props.quiz.map((quizItem, index) => {
                    let midclass = props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check';
                    let cls = `fa ${midclass} ${props.results[quizItem.id]}`;

                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls} />
                        </li>
                    )

                }) }
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to="/">
                    <Button type="success">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
};

export default FinishedQuiz
