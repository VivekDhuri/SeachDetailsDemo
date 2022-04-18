export const REQUEST_USER_API = 'REQUEST_USER_API';

export const apiAction = apiName => {
  return {
    Api_In_Progress: `${apiName}-${apiCallStatus.API_IN_PROGRESS}`,
    Api_In_SUCCESS: `${apiName}-${apiCallStatus.API_SUCCESS}`,
    Api_In_FAILURE: `${apiName}-${apiCallStatus.API_FAILURE}`,
  };
};

const apiCallStatus = {
  API_IN_PROGRESS: 'API_IN_PROGRESS',
  API_SUCCESS: 'API_SUCCESS',
  API_FAILURE: 'API_FAILURE',
};

export const sagaHandlerAction = {
  user: {type: REQUEST_USER_API},
};

export const apiEndPoints = {
  users: 'https://jsonplaceholder.typicode.com/users',
  posts: 'https://jsonplaceholder.typicode.com/posts',
  albums: 'https://jsonplaceholder.typicode.com/albums',
  comments: 'https://jsonplaceholder.typicode.com/comments',
  photos: 'https://jsonplaceholder.typicode.com/photos',
};
