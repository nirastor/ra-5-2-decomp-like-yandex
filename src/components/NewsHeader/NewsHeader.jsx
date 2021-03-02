import React from 'react';
import { nanoid } from 'nanoid';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import { newsMenu } from '../../AppData/AppData';
import './NewsHeader.css';

export default function NewsHeaders() {
  return (
    <div className="news-headers row">
      <h2 className="nh-main-title">Сегодня в СМИ</h2>
      <List items={newsMenu} className="nh-list row">
        {(items) => items.map((item) => (
          <ListItem key={nanoid()} className="nh-list-item">
            <h3 className="">{item}</h3>
          </ListItem>
        ))}
      </List>
      <div className="secondary-text">31 июля, четверг 02:32</div>
    </div>
  );
}
