import { add, sub, mul, div } from '../../index.js';
import { expect, assert } from 'chai';

describe('加法函数的测试', function() {
  it('0.1 加 0.2 应该等于 0.3', function() {
    expect(add(0.1, 0.2)).to.be.equal(0.3);
  });
});

describe('减法函数的测试', function() {
  it('0.3 减 0.1 应该等于 0.2', function() {
    expect(sub(0.3, 0.1)).to.be.equal(0.2);
  });
});

describe('乘法法函数的测试', function() {
  it('0.1 乘 0.2 应该等于 0.02', function() {
    expect(mul(0.1, 0.2)).to.be.equal(0.02);
  });
});

describe('除法函数的测试', function() {
  it('0.02 加 0.1 应该等于 0.2', function() {
    expect(div(0.02, 0.1)).to.be.equal(0.2);
  });
});
