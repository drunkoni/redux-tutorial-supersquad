export const ADD_CHARACTER = "ADD_CHARACTER";

export function addCharcterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id: id,
  };
  return action;
}
