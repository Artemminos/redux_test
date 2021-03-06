export const addInputs = output => ({
  type: 'ADD_INPUTS',
  output: output
});

export const subtractInputs = output => ({
  type: 'SUBTRACT_INPUTS',
  output: output
});

export const addPost = post => ({
  type: 'ADD_POST',
  post: post
});
export const removePost = id => ({
  type: 'REMOVE_POST',
  id: id
});

export const async_addInputs = output => dispatch =>
  new Promise((res, rej) => {
    setTimeout(() => res(output), 3000);
  }).then(res => dispatch(addInputs(res)));
