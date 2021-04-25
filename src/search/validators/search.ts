import * as yup from 'yup';

export const SearchValidator = yup.object({
    breed: yup.string().required('breedMandatory'),
    subBreed: yup.string()
})