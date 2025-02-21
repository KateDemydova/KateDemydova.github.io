import '@css/style.css'
import $ from 'jquery';
import Post from './post'
import json from '@assets/data'
import xmlData from '@assets/data.xml'
import logo from '@assets/icon.png'
import csv from '@assets/data.csv'
import '@less/style.less'
import './sass/style.scss'
import './sass/style.sass'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './lodash.js'



const post = new Post('Webpack Post Title', logo)

$('pre').html(post.toString())
$('pre').addClass('code').html(post.toString())

console.log('Post to string:' , post.toString())
console.log('xmlData', xmlData)
console.log('JSON:', json)
console.log('CSV:', csv)

async function start() {
  return await new Promise((r) => setTimeout(() => r('Async done.'), 2000))
}
start().then((res) => console.log(res))

const App = () => (
  <div className="container">
    <h1>Webpack training</h1>
    <div className="logo" style={{backgroundImage: `url(${logo})`}}/>
    <div className="webpack-logo"/>
    <pre/>
    <div className="less-demo">
      <h2>Less</h2>
    </div>
    <div className="scss-demo">
      <h2>Scss</h2>
    </div>
    <div className="sass-demo">
      <h2>Sass</h2>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
