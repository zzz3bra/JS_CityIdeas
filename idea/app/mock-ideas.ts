import { Idea } from './idea';
import { CATEGORIES } from './mock-categories';
export var IDEAS: Idea[] = [
    { id: 11, header: 'Идея №1 про животных', content: 'Обязать владельцев собак выгуливать своих питомцев с пакетиком', date: '01.01.2016', user: 'testUser1', category: CATEGORIES[4], pictureUrl: 'img/proposition.png' },
    { id: 12, header: 'Идея №2 про спорт', content: 'В городе не хватает малых стадионов, негде пить пиво короткими летними  вечерами', date: '02.02.2016', user: 'testUser2', category: CATEGORIES[1], pictureUrl: 'img/proposition.png' },
    { id: 13, header: 'Идея №3 про транспорт', content: 'Дима хочет продлить какой-то автобус с вокзала до переезда или даже дальше', date: '03.03.2016', user: 'testUser3', category: CATEGORIES[2], pictureUrl: 'img/proposition.png' },
    { id: 14, header: 'Идея №4 про культуру, ёпта', content: 'Почему не дали провести ДнепроРок, власти, что за беспредел, ау, я буду жаловаться в спортлото!', date: '04.04.2016', user: 'testUser4', category: CATEGORIES[3], pictureUrl: 'img/proposition.png' }
];