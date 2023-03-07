const topics = [
  {
    name: 'Теорія  похибок',
    labs: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    name: 'Теорія сплайнів',
    labs: [10, 11, 12],
  },
  {
    name: 'Апроксимація функцій та метод найменших квадратів',
    labs: [13, 14, 15],
  },
]

const labs = [
  {
    number: 1,
    isDone: true,
    title:
      'Табулювання функції Erf(t) та використання для цього чисельного інтегрування',
  },
  {
    number: 2,
    isDone: false,
    title:
      'Знаходження критичних значень нормального розподілу',
  },
  {
    number: 3,
    isDone: true,
    title:
      'Табулювання розподілення Стьюдента  та використання для цього чисельного інтегрування',
  },
  {
    number: 4,
    isDone: true,
    title:
      'Знаходження критичних значень розподілення Стьюдента',
  },
  {
    number: 5,
    isDone: false,
    title:
      'Метод виключення одиничної грубої помилки при відомій середній квадратичній помилці',
  },
  {
    number: 6,
    isDone: false,
    title:
      'Метод виключення одиничної грубої помилки при невідомій середній квадратичній помилці',
  },
  {
    number: 7,
    isDone: false,
    title:
      'Обчислення чисельно значення  інтеграла імовірності',
  },
  {
    number: 8,
    isDone: false,
    title:
      'Знайти довірчій інтервал, при відомій  середній квадратичній помилці',
  },
  {
    number: 9,
    isDone: false,
    title:
      'Знайти довірчій інтервал, при невідомій  середній квадратичній помилці',
  },
  {
    number: 10,
    isDone: false,
    title:
      'Апроксимувати задану гладку функцію за допомогою ермітових сплайна з заданою похибкою',
  },
  {
    number: 11,
    isDone: true,
    title:
      'Апроксимувати задану гладку функцію f(x) на відрізку [a,b] за допомогою неперіодичного інтерполяційного кубічного сплайна',
  },
  {
    number: 12,
    isDone: false,
    title:
      'Апроксимувати задану гладку функцію f(x) на відрізку [a,b] за допомогою неперіодичного інтерполяційного кубічного сплайна',
  },
  {
    number: 13,
    isDone: false,
    title:
      'Побудувати  поліном Лагранжа(в першій формі), знайти його коефіцієнти і побудувати графік полінома',
  },
  {
    number: 14,
    isDone: false,
    title: 'Знайти коефіцієнти полінома, отриманого за МНК',
  },
  {
    number: 15,
    isDone: false,
    title:
      'Знайти коефіцієнти полінома степені 1(y=cx+d), отриманого за МНК',
  },
]

export const labsData = {
  topics: [
    {
      name: 'Теорія  похибок',
      labs: [
        {
          number: 1,
          isDone: true,
          title:
            'Табулювання функції Erf(t) та використання для цього чисельного інтегрування',
        },
        {
          number: 2,
          isDone: false,
          title:
            'Знаходження критичних значень нормального розподілу',
        },
        {
          number: 3,
          isDone: true,
          title:
            'Табулювання розподілення Стьюдента  та використання для цього чисельного інтегрування',
        },
        {
          number: 4,
          isDone: true,
          title:
            'Знаходження критичних значень розподілення Стьюдента',
        },
        {
          number: 5,
          isDone: false,
          title:
            'Метод виключення одиничної грубої помилки при відомій середній квадратичній помилці',
        },
        {
          number: 6,
          isDone: false,
          title:
            'Метод виключення одиничної грубої помилки при невідомій середній квадратичній помилці',
        },
        {
          number: 7,
          isDone: false,
          title:
            'Обчислення чисельно значення  інтеграла імовірності',
        },
        {
          number: 8,
          isDone: false,
          title:
            'Знайти довірчій інтервал, при відомій  середній квадратичній помилці',
        },
        {
          number: 9,
          isDone: false,
          title:
            'Знайти довірчій інтервал, при невідомій  середній квадратичній помилці',
        },
      ],
    },
    {
      name: 'Теорія сплайнів',
      labs: [
        {
          number: 10,
          isDone: false,
          title:
            'Апроксимувати задану гладку функцію за допомогою ермітових сплайна з заданою похибкою',
        },
        {
          number: 11,
          isDone: true,
          title:
            'Апроксимувати задану гладку функцію f(x) на відрізку [a,b] за допомогою неперіодичного інтерполяційного кубічного сплайна',
        },
        {
          number: 12,
          isDone: false,
          title:
            'Апроксимувати задану гладку функцію f(x) на відрізку [a,b] за допомогою неперіодичного інтерполяційного кубічного сплайна',
        },
      ],
    },
    {
      name: 'Апроксимація функцій та метод найменших квадратів',
      labs: [
        {
          number: 13,
          isDone: false,
          title:
            'Побудувати  поліном Лагранжа(в першій формі), знайти його коефіцієнти і побудувати графік полінома',
        },
        {
          number: 14,
          isDone: false,
          title:
            'Знайти коефіцієнти полінома, отриманого за МНК',
        },
        {
          number: 15,
          isDone: false,
          title:
            'Знайти коефіцієнти полінома степені 1(y=cx+d), отриманого за МНК',
        },
      ],
    },
  ],
}
