import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



import "./style.css";



const HorizontalNav = () => {



  return (
    <div className='horizontal-nav'>

      <div className="logo-container">
        <div className="logo">

          <svg width="178" height="61" viewBox="0 0 178 61" fill="none" xmlns="http://www.w3.org/2000/svg">

            <path d="M40.5346 30.422C40.8489 30.9293 41.4146 31.2463 42.0431 31.2463C42.3574 31.2463 42.6716 31.1829 42.9859 30.9927L51.5968 25.7931C52.4767 25.2858 52.7281 24.1445 52.2253 23.3201C51.7225 22.4324 50.5911 22.1788 49.774 22.686L42.6088 26.9979L39.1519 20.2131C38.2091 19.2619 37.1406 18.3108 36.0721 17.4865L25.827 12.2869C25.1356 11.9698 24.3814 12.0332 23.8157 12.5405L15.2677 20.3399C14.5134 21.0374 14.4506 22.1788 15.142 22.8763C15.8334 23.6372 16.9647 23.7006 17.6561 23.0031L25.387 16.028L30.7295 18.7546L21.553 33.0852L0.622904 58.0686C-0.194187 59.0197 -0.131334 60.5415 0.874316 61.3659C1.81711 62.1902 3.32559 62.1268 4.14268 61.1122L24.4442 37.4605L33.1808 39.4896L27.2098 48.9376C26.5812 50.079 26.9584 51.474 28.0897 52.1081C29.0954 52.6788 30.4153 52.4251 31.1067 51.4106L38.7747 39.1725C39.2147 38.5384 39.2776 37.7141 39.0261 37.0166C38.7119 36.3191 38.1462 35.8118 37.392 35.685L30.6667 34.0998L36.7634 24.4615L40.5346 30.422Z" fill="#020203" />

          </svg>
        </div>
        <span>SportSee</span>
      </div>
      <Link to="/">

        <span className="links">Accueil</span>
      </Link>
      <span className="links">Profil</span>
      <span className="links">Réglages</span>
      <span className="links">Communauté</span>
    </div>
  );
};

export default HorizontalNav;