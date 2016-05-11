import React from 'react'
import './CategoryList.scss'
import Category from '../Category'
import iconFont from 'icons-loader'


const categories = [
  { name: 'icon-shelter', 'icon': 'Shelter'},
  { name: 'icon-food', 'icon': 'Food'},
  { name: 'icon-plus', 'icon': 'Medical'},
  { name: 'icon-droplet', 'icon': 'Hygiene'},
  { name: 'icon-desktop', 'icon': 'Technology'},
]

export default () => (
  <ul title="Services" className="categories btn-group">
    {categories.map(category => (
      <li className="unselectable">
        <Category iconClass={category.icon} name={category.name} />
      </li>
    ))}
  </ul>
)
