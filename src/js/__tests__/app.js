import Team from '../app';

const chr1 = { name: 'di', helth: 100 };
const chr2 = { name: 'mi', helth: 50 };
const chr3 = { name: 'vi', helth: 25 };

test('Добавление персонажа в команду', () => {
  const team = new Team();
  team.add(chr1);

  expect(team.members.has(chr1)).toBe(true);
});

test('Добавление 2x одинаковых персонажей в команду ==> Ошибка', () => {
  const team = new Team();

  expect(() => {
    team.add(chr1);
    team.add(chr1);
  }).toThrowError(new Error('Такой персонаж уже выбран'));
});

test('Добавление произвольного кол-ва персонажей', () => {
  const team = new Team();
  team.addAll(chr1, chr2, chr3);
  expect(team.members.size).toBe(3);
});

test('Добавление произвольного кол-ва персонажей', () => {
  const team = new Team();
  team.addAll(chr1, chr2, chr2, chr3);
  expect(team.members.size).toBe(3);
});

test('Преобразование в массив коллекции Set', () => {
  const team = new Team();
  team.addAll(chr1, chr1, chr3);
  team.toArray();
  expect(Array.isArray(team.members)).toBe(true);
});
