import React, {Component} from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from "react-router-dom";

import './Drawer.css'


const links = [
  {to: '/', label: 'Список', exact: true},
  {to: '/auth', label: 'Авторизация', exact: false},
  {to: '/quiz-creator', label: 'Создать тест', exact: false}
];

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose()
  };

  renderLinks() {
    return links.map((link, index) => {
      return (
          <li key={index}>
            <NavLink
                to={link.to}
                exact={link.exact}
                onClick={this.clickHandler}
            >
              {link.label}
            </NavLink>
          </li>
      )
    })
  }

  render() {
    let cls = `Drawer`;
    if (!this.props.isOpen) {
      cls += ' close'
    }

    return (
        <React.Fragment>
          <nav className={cls}>
            <ul>
              { this.renderLinks() }
            </ul>
          </nav>
          { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
        </React.Fragment>
    )
  }
}

export default Drawer
