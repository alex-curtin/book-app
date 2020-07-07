export const getBookListNames = (state) => {
  return state.bookList.currentUserLists.map((list) => list.name);
};
