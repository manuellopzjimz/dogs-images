import { getAvailableTheme } from '@Home/utils/get-available-theme';
import each from 'jest-each';

describe('get-available-theme', () => {
    each`
        currentTheme    | expected
        ${'light'}      | ${'dark'}
        ${'dark'}       | ${'light'}
        ${'other'}      | ${'light'}
    `.it('should return $expected when passing $a', ({currentTheme, expected}) => {
        expect(getAvailableTheme(currentTheme)).toEqual(expected);
    });
});