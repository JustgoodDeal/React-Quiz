import React from 'react'
import './MenuToggle.css'

const MenuToggle = props => {
  const endcls = props.isOpen ? 'fa-times open' : 'fa-bars';
  const cls = `MenuToggle fa ${endcls}`;

  return (
    <i
      className={cls}
      onClick={props.onToggle}
    />
  )
};

export default MenuToggle
