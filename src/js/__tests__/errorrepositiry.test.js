import ErrorRepository from '../errorrepository';

const testRepo = new ErrorRepository([[200, 'Игрок не найден'], [300, 'Сложная ошибка']]);

test('Сhecking the operation of the method translate in the presence of an error', () => {
  const received = testRepo.translate(200);
  const expected = 'Неизвестный игрок';
  expect(received).toBe(expected);
});

test('Сhecking the operation of the method translate in the absence of an error code in the repository', () => {
  const received = testRepo.translate(400);
  const expected = 'Unknown error';
  expect(received).toBe(expected);
});
