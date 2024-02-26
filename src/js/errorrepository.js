export default class ErrorRepository {
  constructor() {
    this.errorRepo = new Map([[200, 'Неизвестный игрок'], [300, 'Невозможное действие']]);
  }

  translate(code) {
    if (!this.errorRepo.has(code)) {
      return 'Unknown error';
    }
    return this.errorRepo.get(code);
  }
}
