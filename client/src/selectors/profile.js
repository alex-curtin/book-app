export const selectList = (state) => {
  return state.profile.profile.books;
};

export const selectBookIds = (state) => {
  return state.profile.profile
    ? state.profile.profile.books.map((book) => book.book.googleId)
    : [];
};
