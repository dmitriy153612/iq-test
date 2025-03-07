import delay from '@/utils/delay'

const PAGE0 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'rectangle',
    underlined: false,
  },
  picture: null,
  page: 0,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'ваш пол:',
  answers: [
    {
      id: '1',
      name: 'мужчина',
    },
    {
      id: '2',
      name: 'женщинна',
    },
  ],
}

const PAGE1 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'rectangle',
    underlined: false,
  },
  picture: null,
  page: 1,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'укажите ваш возраст:',
  answers: [
    {
      id: '1',
      name: 'до 18',
    },
    {
      id: '2',
      name: 'От 18 до 28',
    },
    {
      id: '3',
      name: 'от 29 до 35',
    },
    {
      id: '4',
      name: 'От 36',
    },
  ],
}

const PAGE2 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'rectangle',
    underlined: false,
  },
  picture: null,
  page: 2,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Выберите лишнее:',
  answers: [
    {
      id: '1',
      name: 'Дом',
    },
    {
      id: '2',
      name: 'Шалаш',
    },
    {
      id: '3',
      name: 'Бунгало',
    },
    {
      id: '4',
      name: 'Скамейка',
    },
    {
      id: '5',
      name: 'Хижина',
    },
  ],
}

const PAGE3 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'rectangle',
  },
  picture: null,
  page: 3,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Выберите лишнее:',
  answers: [
    {
      id: '1',
      name: 'Дом',
    },
    {
      id: '2',
      name: 'Шалаш',
    },
    {
      id: '3',
      name: 'Бунгало',
    },
    {
      id: '4',
      name: 'Скамейка',
    },
    {
      id: '5',
      name: 'Хижина',
    },
  ],
}

const PAGE4 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'rectangle',
  },
  picture: null,
  page: 4,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Продолжите числовой ряд: 18  20  24  32',
  answers: [
    {
      id: '1',
      name: '62',
    },
    {
      id: '2',
      name: '48',
    },
    {
      id: '3',
      name: '74',
    },
    {
      id: '4',
      name: '57',
    },
    {
      id: '5',
      name: '60',
    },
    {
      id: '6',
      name: '77',
    },
  ],
}

const PAGE5 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'color',
  },
  picture: null,
  page: 5,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
  answers: [
    {
      id: '1',
      name: 'серый',
      code: '#a8a8a8',
    },
    {
      id: '2',
      name: 'синий',
      code: '#0000a9',
    },
    {
      id: '3',
      name: 'зелёный',
      code: '#00a701',
    },
    {
      id: '4',
      name: 'красный',
      code: '#f60100',
    },
    {
      id: '5',
      name: 'жёлтый',
      code: '#fdff19',
    },
    {
      id: '6',
      name: 'коричневый',
      code: '#a95403',
    },
    {
      id: '7',
      name: 'чёрный',
      code: '#000000',
    },
    {
      id: '8',
      name: 'сиреневый',
      code: '#850068',
    },
    {
      id: '9',
      name: 'бирюзовый',
      code: '#46b2ac',
    },
  ],
}

const PAGE6 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'color',
  },
  picture: null,
  page: 6,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
  answers: [
    {
      id: '1',
      name: 'серый',
      code: '#a8a8a8',
    },
    {
      id: '9',
      name: 'бирюзовый',
      code: '#46b2ac',
    },
    {
      id: '6',
      name: 'коричневый',
      code: '#a95403',
    },
    {
      id: '3',
      name: 'зелёный',
      code: '#00a701',
    },
    {
      id: '7',
      name: 'чёрный',
      code: '#000000',
    },
    {
      id: '4',
      name: 'красный',
      code: '#f60100',
    },
    {
      id: '8',
      name: 'сиреневый',
      code: '#850068',
    },
    {
      id: '5',
      name: 'жёлтый',
      code: '#fdff19',
    },
    {
      id: '2',
      name: 'синий',
      code: '#0000a9',
    },
  ],
}

const PAGE7 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'rectangle',
  },
  picture: null,
  page: 7,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Какой из городов лишний?',
  answers: [
    {
      id: '1',
      name: 'Вашингтон',
    },
    {
      id: '2',
      name: 'Лондон',
    },
    {
      id: '3',
      name: 'Париж',
    },
    {
      id: '4',
      name: 'Нью-Йорк',
    },
    {
      id: '5',
      name: 'Москва',
    },
    {
      id: '6',
      name: 'Оттава',
    },
  ],
}

const PAGE8 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'square',
    underlined: false,
  },
  picture: {
    url: '/pictures/test-8.jpg',
  },
  page: 8,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Выберите правильную фигуру из четырёх пронумерованных.',
  answers: [
    {
      id: '1',
      name: '1',
    },
    {
      id: '2',
      name: '2',
    },
    {
      id: '3',
      name: '3',
    },
    {
      id: '4',
      name: '4',
    },
  ],
}

const PAGE9 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'rectangle',
  },
  picture: null,
  page: 9,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Вам привычнее и важнее:',
  answers: [
    {
      id: '1',
      name: 'Наслаждаться каждой минутой проведенного времени',
    },
    {
      id: '2',
      name: 'Быть устремленными мыслями в будущее',
    },
    {
      id: '3',
      name: 'Учитывать в ежедневной практике прошлый опыт',
    },
  ],
}

const PAGE10 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'rectangle',
    underlined: false,
  },
  picture: {
    url: '/pictures/test-10.jpg',
  },
  page: 10,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
  answers: [
    {
      id: '1',
      name: 'оно остроконечное',
    },
    {
      id: '2',
      name: 'оно устойчиво',
    },
    {
      id: '3',
      name: 'оно-находится в состоянии равновесия',
    },
  ],
}

const PAGE11 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'square',
    underlined: true,
  },
  picture: {
    url: '/pictures/test-11.jpg',
  },
  page: 11,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Вставьте подходящее число',
  answers: [
    {
      id: '1',
      name: '34',
    },
    {
      id: '2',
      name: '36',
    },
    {
      id: '3',
      name: '53',
    },
    {
      id: '4',
      name: '44',
    },
    {
      id: '5',
      name: '66',
    },
    {
      id: '6',
      name: '42',
    },
  ],
}

const PAGE12 = {
  testId: 'brain',
  logoUrl: '/pictures/brain-small.png',
  appearance: {
    button: 'square',
    underlined: true,
  },
  picture: {
    url: '/pictures/test-12.jpg',
  },
  page: 12,
  totalPages: 13,
  title: 'тест на определение IQ',
  question: 'Вставьте подходящее число',
  answers: [
    {
      id: '1',
      name: '34',
    },
    {
      id: '2',
      name: '36',
    },
    {
      id: '3',
      name: '53',
    },
    {
      id: '4',
      name: '44',
    },
    {
      id: '5',
      name: '66',
    },
    {
      id: '6',
      name: '42',
    },
  ],
}

const BRAIN_TEST = [
  PAGE0,
  PAGE1,
  PAGE2,
  PAGE3,
  PAGE4,
  PAGE5,
  PAGE6,
  PAGE7,
  PAGE8,
  PAGE9,
  PAGE10,
  PAGE11,
  PAGE12,
]

const result = {
  resultId: 'id',
  logoUrl: '/pictures/brain-small.png',
  mainTitle: 'Готово!',
  title: 'Ваш результат рассчитан:',
  text: '<span>вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!',
  subtitle: 'Скорее получите свой результат!',
  subtext:
    'В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона',
  timer: {
    text: 'Звоните скорее, запись доступна всего',
    time: 600,
  },
  link: {
    url: 'https://swapi.dev/api/people/1/',
    name: 'позвонить и прослушать результат',
  },
}

async function getTest(data = null, resDelay = 50) {
  await delay(resDelay)
  if (!data) {
    return BRAIN_TEST[0]
  } else if (data.page < BRAIN_TEST.length - 1) {
    return BRAIN_TEST[data.page + 1]
  }
}

async function getResult(data, resDelay = 2500) {
  await delay(resDelay)
  return result
}

export { getTest, getResult }
