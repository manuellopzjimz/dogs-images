import axios from 'axios';

export const getBreeds = () => axios.get<{message: string[]}>(`${process.env.REACT_APP_API_BASE_URL}/breeds/list`)
.then(response => response.data).then((response: {message: string[]}) => response.message);

export const getSubBreeds = (breed: string) => axios.get<{message: string[]}>(`${process.env.REACT_APP_API_BASE_URL}/breed/${breed}/list`)
.then(response => response.data).then((response: {message: string[]}) => response.message);