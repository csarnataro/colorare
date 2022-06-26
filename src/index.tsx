/* @refresh reload */
import 'windi.css';
import 'virtual:windi-devtools'
import { render } from 'solid-js/web';

import App from './App';
import { Route, Router, Routes } from 'solid-app-router';
import SingleResult from './SingleResult';

//Data function
function ImageData({params, location, navigate, data}) {
  return {
    title:	"Frozen 2 Coloring Pages - Coloring Home",
    media:	"https://coloringhome.com/coloring/yck/4aB/yck4aB9oi.jpg",
    thumbnail:	"https://s2.qwant.com/thumbr/474x615/7/f/aab119a3c18ffa7de99e8aeff6529325d8c9f13b354f3df81b84017d5131b1/th.jpg?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XHpPrWdSMGIejQzohY_BVgHaJn%26pid%3DApi&q=0&b=1&p=0&a=0",
    thumb_width:	474,
    thumb_height:	615,
    width:	2000,
    height:	2595,
    url:	"https://coloringhome.com/frozen-2-coloring-pages",
    _id:	"28A89DB79A70085B70E2AD38C04A9501E6A3E768",
    media_fullsize:	"https://s2.qwant.com/thumbr/0x0/d/e/035a3d35985c0f8fa7bc6e0e3b5a59d450f24e887cc7e7f984b253d8808aff/yck4aB9oi.jpg?u=https%3A%2F%2Fcoloringhome.com%2Fcoloring%2Fyck%2F4aB%2Fyck4aB9oi.jpg&q=0&b=1&p=0&a=0",
    media_preview:	"https://s2.qwant.com/thumbr/0x380/6/3/72d6887a7db2e22cc64d337a42a1b82d77011d2242dd6f31c6b2cc30a09107/yck4aB9oi.jpg?u=https%3A%2F%2Fcoloringhome.com%2Fcoloring%2Fyck%2F4aB%2Fyck4aB9oi.jpg&q=0&b=1&p=0&a=0",
    size:	"271075 B",
    thumb_type:	"jpeg"    ,
  };
}

render(() => 
  <Router>
    <App />
    <Routes>
      <Route path="/image/:id" element={<SingleResult />} data={ImageData} />;
    </Routes>
  </Router>
  , document.getElementById('root') as HTMLElement);
