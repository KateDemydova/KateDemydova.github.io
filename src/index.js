import '@css/style.css'
import $ from 'jquery';
import Post from './post'
import json from '@assets/data'
import xmlData from '@assets/data.xml'
import logo from '@assets/icon.png'
import csv from '@assets/data.csv'



const post = new Post('Webpack Post Title', logo)

$('pre').html(post.toString())

console.log('Post to string:' , post.toString())
console.log('xmlData', xmlData)
console.log('JSON:', json)
console.log('CSV:', csv)