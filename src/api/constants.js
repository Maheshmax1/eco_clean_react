export const API_BASE_URL = "https://full-stack-eco-clean.vercel.app/api";

export const ENDPOINTS = {
  AUTH: {
    SIGNUP: `${API_BASE_URL}/auth/signup`,
    LOGIN: `${API_BASE_URL}/auth/login`,
  },
  EVENTS: {
    LIST: `${API_BASE_URL}/events/`,
    DETAIL: (id) => `${API_BASE_URL}/events/${id}`,
    JOIN: (id) => `${API_BASE_URL}/events/${id}/join`,
    LEAVE: (id) => `${API_BASE_URL}/events/${id}/leave`,
    CREATE: `${API_BASE_URL}/events/`,
    UPDATE: (id) => `${API_BASE_URL}/events/${id}`,
    DELETE: (id) => `${API_BASE_URL}/events/${id}`,
  },
  USERS: {
    ME: `${API_BASE_URL}/users/me`,
    MY_EVENTS: `${API_BASE_URL}/users/me/events`,
  },
  CONTACT: {
    SUBMIT: `${API_BASE_URL}/contact/`,
  },
  ADMIN: {
    STATS: `${API_BASE_URL}/admin/stats`,
    VOLUNTEERS: `${API_BASE_URL}/admin/volunteers`,
    MESSAGES: `${API_BASE_URL}/admin/messages`,
    EVENT_REGISTRATIONS: `${API_BASE_URL}/admin/event-registrations`,
    DELETE_MESSAGE: (id) => `${API_BASE_URL}/admin/messages/${id}`,
  },
};

