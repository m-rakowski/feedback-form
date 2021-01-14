import {CustomValidators} from './custom-validators';
import {FormControl} from '@angular/forms';

describe('CustomValidators', () => {
  describe('shouldNotContainNumbers', () => {
    it('should be valid when empty', () => {
      expect(CustomValidators.shouldNotContainNumbers()(new FormControl(''))).toBeNull();
    });
    it('should be valid when abc', () => {
      expect(CustomValidators.shouldNotContainNumbers()(new FormControl('abc'))).toBeNull();
    });
    it('should be valid when asdasdASDASDAS!@#@#', () => {
      expect(CustomValidators.shouldNotContainNumbers()(new FormControl('asdasdASDASDAS!@#@#'))).toBeNull();
    });
    it('should not be valid when 1a123adsad', () => {
      expect(CustomValidators.shouldNotContainNumbers()(new FormControl('1a123adsad'))).toEqual(
        {shouldNotContainNumbers: true}
      );
    });
    it('should not be valid when ajlkasjdlksjlajklsj a9s0d', () => {
      expect(CustomValidators.shouldNotContainNumbers()(new FormControl('ajlkasjdlksjlajklsj a9s0d'))).toEqual(
        {shouldNotContainNumbers: true}
      );
    });
    it('should not be valid when 123', () => {
      expect(CustomValidators.shouldNotContainNumbers()(new FormControl('123'))).toEqual(
        {shouldNotContainNumbers: true}
      );
    });
  });

  describe('shouldBeInteger', () => {
    it('should be valid when empty', () => {
      expect(CustomValidators.shouldBeInteger()(new FormControl(''))).toBeNull();
    });
    it('should be valid when 1', () => {
      expect(CustomValidators.shouldBeInteger()(new FormControl('1'))).toBeNull();
    });
    it('should be valid when -1', () => {
      expect(CustomValidators.shouldBeInteger()(new FormControl('-1'))).toBeNull();
    });
    it('should not be valid when a1', () => {
      expect(CustomValidators.shouldBeInteger()(new FormControl('a1'))).toEqual(
        {shouldBeInteger: true}
      );
    });
    it('should not be valid when 1.123123', () => {
      expect(CustomValidators.shouldBeInteger()(new FormControl('1.123123'))).toEqual(
        {shouldBeInteger: true}
      );
    });
    it('should not be valid when 1a', () => {
      expect(CustomValidators.shouldBeInteger()(new FormControl('1a'))).toEqual(
        {shouldBeInteger: true}
      );
    });
    it('should not be valid when asdasdsadasd', () => {
      expect(CustomValidators.shouldBeInteger()(new FormControl('asdasdsadasd'))).toEqual(
        {shouldBeInteger: true}
      );
    });
  });
});
