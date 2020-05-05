export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";

export function addCharcterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id: id,
  };
  return action;
}

export function removeCharacterById(id) {
  const action = {
    type: REMOVE_CHARACTER,
    id: id,
  };
  return action;
}
