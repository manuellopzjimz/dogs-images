import axios from 'axios';

export const getBreedPhotos = (breed: string) => axios.get<{message: string[]}>(`${process.env.REACT_APP_API_BASE_URL}/breed/${breed}/images`)
.then(response => response.data).then((response: {message: string[]}) => response.message);

export const getSubBreedPhotos = (breed: string, subBreed: string) => axios.get<{message: string[]}>(`${process.env.REACT_APP_API_BASE_URL}/breed/${breed}/${subBreed}/images`)
.then(response => response.data).then((response: {message: string[]}) => response.message); 