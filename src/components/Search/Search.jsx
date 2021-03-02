import React from 'react';
import './Search.css';
import { nanoid } from 'nanoid';
import { search } from '../../AppData/AppData';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';

export default function SearchWidget() {
  return (
    <div className="search-widget">
      <img className="search-logo" src={search.logo} alt="лого" />
      <List items={search.menu} className="search-menu row">
        {(items) => items.map((item) => (
          <ListItem key={nanoid()} className="search-item">
            <h3>{item}</h3>
          </ListItem>
        ))}
      </List>
      <div className="search-row">
        <input className="search-input" type="text" />
        <button className="search-button" type="submit">Найти!</button>
      </div>
      <div>
        <span>Найдется все. Напрмиер, </span>
        <span className="secondary-text">{search.searchIdea}</span>
      </div>
    </div>
  );
}
