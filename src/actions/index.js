export const UPDATE = 'UPDATE';

export const update = fetchedData => {
  console.log('Update Data: ', fetchedData);
  return {
    type: UPDATE,
    payload: fetchedData
  }
};
