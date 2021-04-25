import { SearchValidator } from '@Search/validators/search';
import each from 'jest-each';

describe('SearchValidator', () => {
    each`
        breed                   | subBreed      | expected
        ${'affenpinscher'}      | ${''}         | ${true}
        ${'bulldog'}            | ${'boston'}   | ${true}
    `.it('should return true with breed: $breed, subBreed: $subBreed', async ({breed, subBreed, expected}) => {
        const isValid =  await SearchValidator.isValid({
            breed,
            subBreed
        });

        expect(isValid).toBeTruthy();
    });

    each`
        breed                   | subBreed      | expected
        ${''}                   | ${''}         | ${false}
    `.it('should return false with breed: $breed, subBreed: $subBreed', async ({breed, subBreed, expected}) => {
        const isValid =  await SearchValidator.isValid({
            breed,
            subBreed
        });

        expect(isValid).toBeFalsy();
    });
});