import icon1 from './logo-news-1.png';
import icon2 from './logo-news-2.png';
import icon3 from './logo-news-3.png';
import cloud from './cloud.png';
import logo from './logo.png';

export const search = {
  logo,
  menu: [
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Эфир',
    'еще',
  ],
  searchIdea: 'фаза луны сегодня',
};

export const weather = {
  icon: cloud,
  temp: '+17',
  morning: '+17',
  day: '+20',
};

export const newsMenu = [
  'в Германии',
  'Рекомендуем',
];

export const news = [
  {
    id: 0,
    icon: icon1,
    text: 'Ужастный ужас ужасов на первой полосе',
  },
  {
    id: 1,
    icon: icon2,
    text: 'Коллапс всего везде. Никто ничего не понимает',
  },
  {
    id: 2,
    icon: icon3,
    text: 'Не читайте утром за завтраком советских газет',
  },
  {
    id: 3,
    icon: icon3,
    text: 'Мир скукожился в полную каральку.',
  },
  {
    id: 4,
    icon: icon1,
    text: 'Ученые назвали способ все успевать. Нужно только...',
  },
];

export const exchange = [
  {
    id: 1,
    ticker: 'USD MOEX',
    value: '74,52',
    difference: '+0,09',
  },
  {
    id: 2,
    ticker: 'EUR MOEX',
    value: '82,52',
    difference: '+0,14',
  },
  {
    id: 3,
    ticker: 'НЕФТЬ',
    value: '40,02',
    difference: '+1,63%',
  },
];

export const broadcast = [
  {
    id: 1,
    text: 'Хрень по ящику',
    channel: 'ХрТв',
  },
  {
    id: 2,
    text: "Ешь мед как Винни О'Пух",
    channel: 'Зомби-ТВ',
  },
  {
    id: 3,
    text: 'Топ Гиря. Ускорение',
    channel: 'Бритиш-Онлайн',
  },
];

export const tvProgramm = [
  {
    id: 1,
    time: '12:55',
    text: 'Передача',
    channel: 'На первом',
  },
  {
    id: 2,
    time: '13:00',
    text: 'Новости',
    channel: 'По втрому',
  },
  {
    id: 3,
    time: '13:15',
    text: 'Мультики',
    channel: 'ТВ6',
  },
];

export const mostVisited = [
  {
    id: 1,
    category: 'Недвижимость',
    description: 'Хруща или замкад?',
  },
  {
    id: 2,
    category: 'Маркет',
    description: 'Телеки размером с окно',
  },
  {
    id: 3,
    category: 'Авто',
    description: 'Ищу за 150, шлеп!',
  },
];
