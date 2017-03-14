const demoTest = () => {
  return true;
}

describe('demoTest function', () => {
  it('should return true when called', () => {
    expect(demoTest()).toBe(true);
  });
});
