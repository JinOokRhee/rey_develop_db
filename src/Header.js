import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';

const MenuItem = ({active, children, to}) => (<Link to={to} className={`menu-item ${active
    ? 'active'
    : ''}`}>
  {children}
</Link>);

class Header extends Component {
  render() {
    //const {router} = context;
    return (<div>
      <div className="logo">
        DATA의 가능성을 BO:M
      </div>
      <div className="menu">
        <MenuItem to={'/'}>홈</MenuItem>
        <MenuItem to={'/first'} >감성시계열 그래프</MenuItem>
        <MenuItem to={'/second'}>워드클라우드</MenuItem>
        <MenuItem to={'/third'}>연령별 선호도</MenuItem>
        <MenuItem to={'/forth'}>피부별 선호도</MenuItem>
        <MenuItem to={'/fifth'}>제품 속성</MenuItem>
      </div>
    </div>);
  };
};
Header.contextTypes = {
  router: PropTypes.object
}

export default Header;
