export const BACKEND_URL = 'http://localhost:8000';
export const GET_EVENTS = {
  url: `${BACKEND_URL}/API/EVENTS`,
  method: 'GET',
};
export const PATCH_EVENTS_LIKE = (id) => ({
  url: `${BACKEND_URL}/api/events/${id}`,
  method: 'PATCH',
});
export const GET_EVENTS_ID = (id) => ({
  url: `${BACKEND_URL}/api/events/${id}`,
  method: 'GET',
});
export const GET_THEME = {
  url: `${BACKEND_URL}/api/themes`,
  method: 'GET',
};
export const PUT_THEME = {
  url: `${BACKEND_URL}/api/themes`,
  method: 'GET',
};

// export const GET_LIKE_BY_ID = (id) => ({
//   url: `${BACKEND_URL}/api/records/${id}/likes`,
//   method: "GET",
// });

// export const PUT_LIKE_BY_ID = (id) => ({
//   url: `${BACKEND_URL}/api/records/${id}/likes`,
//   method: "PATCH",
// });
