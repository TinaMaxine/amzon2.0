import React from 'react';
import './Styles/SecondNavBar.css';

export default function SecondNavBar() {
  return (
    <nav className="second-nav">
        <div id="icon2">
          <i class="fa fa-bars" aria-hidden="true"> </i>
          &nbsp;
          <a href="">All</a>
        </div>
        <div><a href="">amazon miniTV</a></div>
        <div><a href="">best sellers</a></div>
        <div><a href="">Mobile</a></div>
        <div><a href="">customer service</a></div>
        <div><a href="">today's deal</a></div>
        <div><a href="">electronics</a></div>
        <div><a href="">Prime
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </a></div>
        <div><a href="">fashion</a></div>
        <div><a href="">Amazon Pay</a></div>
        <div><a href="">Home & Kitchen</a></div>
        <div><a href="">new release</a></div>
        <div><a href="">Beauty & Personal Care</a></div>
        <div><a href="">Computer</a></div>
        <div><a href="">books</a></div>
        <div><a href="">coupons</a></div>
  </nav>
  )
}
