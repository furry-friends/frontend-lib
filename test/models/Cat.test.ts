import Cat from '../../src/models/Cat';

test('constructor', () => {
  const cat = new Cat({
    id: 1,
    name: 'cat',
    gender: 'boy',
    birthday: '2020-01-01',
    bio: 'bio',
    picture: '',
  });

  expect(cat.id).toBe(1);
  expect(cat.name).toBe('cat');
  expect(cat.gender).toBe('boy');
  expect(cat.bio).toBe('bio');
  expect(cat.birthday).toBe('2020-01-01');
});

test('copyWith', () => {
  let cat = new Cat({
    id: 1,
    name: 'cat',
    gender: 'boy',
    birthday: '',
    bio: 'bio',
    picture: '',
  });

  cat = cat.copyWith({ id: 2, name: 'cat2' });
  expect(cat.id).toBe(2);
  expect(cat.name).toBe('cat2');
});

test('isNew', () => {
  const cat = new Cat({
    id: -1,
    name: '',
    gender: 'boy',
    birthday: '',
    bio: '',
    picture: '',
  });

  expect(cat.isNew).toBe(true);
});

test('empty static method', () => {
  const cat = Cat.empty();

  expect(cat.id).toBe(-1);
});

test('age getter', () => {
  jest.useFakeTimers({});
  jest.setSystemTime(new Date(2023, 9, 10));

  const cat = new Cat({
    id: 1,
    name: 'cat',
    gender: '',
    birthday: '2023-10-01',
    bio: 'bio',
    picture: '',
  });

  expect(cat.age).toBe(9);

  jest.useRealTimers();
});

test('toString', () => {
  const cat = new Cat({
    id: 1,
    name: 'cat',
    gender: '',
    birthday: '2023-10-01',
    bio: 'bio',
    picture: '',
  });
  expect(cat.toString()).toBe(
    '{"id":1,"name":"cat","gender":"","birthday":"2023-10-01","bio":"bio","picture":""}'
  );
});

describe('fromJson', () => {
  test('valid json', () => {
    const cat = Cat.fromJson({
      id: 1,
      name: 'cat',
      gender: 'boy',
      birthday: '2023-10-11',
      bio: 'bio',
    });

    expect(cat instanceof Cat).toBe(true);
  });

  test('throw an error when birthday is invalid', () => {
    expect(() =>
      Cat.fromJson({
        id: 1,
        name: 'cat',
        gender: 'boy',
        birthday: '1234',
        bio: 'bio',
      })
    ).toThrowError();
  });

  test('throw an error when gender is invalid', () => {
    expect(() =>
      Cat.fromJson({
        id: 1,
        name: 'cat',
        gender: '',
        birthday: '2023-10-11',
        bio: 'bio',
      })
    ).toThrowError();
  });
});
