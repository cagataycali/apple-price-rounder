jest.unmock('../index'); // unmock to use the actual implementation of sum

describe('index', () => {
  it('Strict value test', () => {
    var test = require('../index');
    return test(3.99)
      .then(value => expect(value).toEqual(3.99));
  });
  it('Nearly value test', () => {
    var test = require('../index');
    return test(3.98999999)
      .then(value => expect(value).toEqual(3.99));
  });
  it('Bigger value test', () => {
    var test = require('../index');
    return test(1000)
      .catch((err) => expect(err).toEqual('Apple pricing rules is strict, you have to decide your pricing between 0.99 - 999.99'))
  });
  it('Bigger value test', () => {
    var test = require('../index');
    return test(18650)
      .catch((err) => expect(err).toEqual('Apple pricing rules is strict, you have to decide your pricing between 0.99 - 999.99'))
  });
});
