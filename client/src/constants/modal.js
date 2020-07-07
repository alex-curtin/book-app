export default {
  deleteBook: {
    id: '1',
    message: 'Remove this book from your list?',
    buttons: [
      {
        text: 'delete',
        theme: 'danger',
        action: 'delete',
      },
      {
        text: 'cancel',
        theme: 'secondary',
        action: 'cancel',
      },
    ],
  },
};
