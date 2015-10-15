/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('airports', function () {
  var value;

  beforeEach(module('airport_dist'));

  beforeEach(inject(function (airports) {
    value = airports;
  }));

  it('should equal 0', function () {
    expect(value).toBe(0);
  });
});
