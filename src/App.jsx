/*
  Вопросы
    Как быть с общим layout. Сейчас отдельные комопнеты перемешаны с разметокой для сетки.
    Это очень некрасиво выглядит

    Не замусоривает ли функция как дочерний компонет область главной страницы?
    Не раздувает ли использование перериспользуемых блоков главную страницу
      Хотя наверное нет:
      После того как по образцу делаешь пятый подряд блок со списком,
      начинаешь понимать, чем они круты! -)
*/

import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Block from './components/Block/Block';
import SearchWidget from './components/Search/Search';
import List from './components/List/List';
import {
  news, exchange, broadcast, tvProgramm, mostVisited, weather,
} from './AppData/AppData';
import ListItem from './components/ListItem/ListItem';
import bannerPicture from './AppData/banner.png';
import Weather from './components/Weather/Weather';
import NewsHeaders from './components/NewsHeader/NewsHeader';
import picpic from './AppData/picpic.png';

function App() {
  return (
    <div className="app">
      <div className="row row-block top-row">
        <div className="news-col">
          {/* Сейчас в СМИ */}
          <Block>
            <NewsHeaders />
            <List items={news} className="news-list">
              {(items) => items.map((item) => (
                <ListItem key={item.id} className="news-item">
                  <img className="news-icon list-icon" src={item.icon} alt="pic" />
                  <span className="news-text">{item.text}</span>
                </ListItem>
              ))}
            </List>
          </Block>

          {/* Горизонтальный список валют */}
          <Block>
            <List items={exchange} className="exch-list row">
              {(items) => items.map((item) => (
                <ListItem key={item.id} className="exch-item">
                  <span className="exch-ticker">{item.ticker}</span>
                  <span className="exch-value">{item.value}</span>
                  <span className="exch-differ secondary-text">{item.difference}</span>
                </ListItem>
              ))}
            </List>
          </Block>
        </div>
        <div>
          <Block title="Работа на React" image={picpic}>Смотри и запоминай</Block>
        </div>
      </div>
      <SearchWidget />
      <Banner alt="Баннер" src={bannerPicture} />
      <div className="row row-block bottom-row">
        <div>
          <Block title="Погода" className="mb">
            <Weather weather={weather} />
          </Block>
          <Block title="Посещаемое">
            <List items={mostVisited} className="most-visited-list">
              {(items) => items.map((item) => (
                <ListItem className="most-visited-item" key={item.id}>
                  <span className="most-visited-category">{item.category}</span>
                  <span className="most-visited-divider">&nbsp;&mdash;&nbsp;</span>
                  <span className="most-visited-description">{item.description}</span>
                </ListItem>
              ))}
            </List>
          </Block>
        </div>
        <div>
          <Block title="Карта Германии" className="mb">Почему тут написанно расписание?</Block>
          <Block title="Телепрограмма">
            <List items={tvProgramm} className="tv-list">
              {(items) => items.map((item) => (
                <ListItem className="tv-item" key={item.id}>
                  <span className="tv-time">{item.time}</span>
                  <span className="tv-text">{item.text}</span>
                  <span className="tv-channel secondary-text">{item.channel}</span>
                </ListItem>
              ))}
            </List>
          </Block>
        </div>
        <div>
          <Block title="Эфир">
            <List items={broadcast} className="broadcast-list">
              {(items) => items.map((item) => (
                <ListItem className="broadcast-item" key={item.id}>
                  <span className="list-icon broadcast-icon material-icons">play_circle_outline</span>
                  <span className="broadcast-text">{item.text}</span>
                  <span className="broadcast-channel secondary-text">{item.channel}</span>
                </ListItem>
              ))}
            </List>
          </Block>
        </div>
      </div>
    </div>
  );
}

export default App;
