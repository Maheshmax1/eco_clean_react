# EcoClean Full-Stack Application

This is a full-stack application for EcoClean, an environmental event management platform. It consists of a FastAPI backend and a React frontend.

## Backend Overview

The backend is built with FastAPI and uses SQLAlchemy for database operations with SQLite. It provides RESTful APIs for user authentication, event management, registrations, and contact forms.

### Authentication

The application uses JWT (JSON Web Tokens) for authentication. Users can sign up and log in to receive a Bearer token, which must be included in the Authorization header for protected endpoints.

- **Roles**: `volunteer` (default), `admin`
- **Default Admin**: email: `admin@ecoclean.com`, password: `admin123`

### Endpoints

#### Authentication (`/auth`)

- `POST /auth/signup` - Create a new user account
  - Body: `UserCreate` schema
  - Response: `UserResponse`

- `POST /auth/login` - Log in and get access token
  - Body: `UserLogin` schema
  - Response: `Token`

#### Events (`/events`)

- `GET /events/` - Get list of events (public, optional auth for registration status)
  - Query params: `status` (optional), `skip`, `limit`
  - Response: List of `EventResponse`

- `GET /events/{event_id}` - Get event details
  - Response: `EventWithRegistrations`

- `POST /events/{event_id}/join` - Join an event (requires auth)
  - Response: `RegistrationResponse`

- `POST /events/{event_id}/leave` - Leave an event (requires auth)
  - Response: Success message

- `POST /events/` - Create a new event (admin only)
  - Body: `EventCreate`
  - Response: `EventResponse`

- `PUT /events/{event_id}` - Update an event (admin only)
  - Body: `EventUpdate`
  - Response: `EventResponse`

- `DELETE /events/{event_id}` - Delete an event (admin only)
  - Response: `EventResponse`

#### Users (`/users`)

- `GET /users/me` - Get current user profile (requires auth)
  - Response: `UserResponse`

- `GET /users/me/events` - Get user's registered events (requires auth)
  - Response: List of `RegistrationResponse`

#### Contact (`/contact`)

- `POST /contact/` - Submit a contact message
  - Body: `ContactMessageCreate`
  - Response: `ContactMessageResponse`

#### Admin (`/admin`)

- `GET /admin/stats` - Get dashboard statistics (admin only)
  - Response: Stats object

- `GET /admin/volunteers` - Get list of volunteers (admin only)
  - Response: List of `UserResponse`

- `GET /admin/messages` - Get contact messages (admin only)
  - Response: List of `ContactMessageResponse`

- `GET /admin/event-registrations` - Get events with registrations (admin only)
  - Response: List of `EventWithRegistrations`

- `DELETE /admin/messages/{message_id}` - Delete a contact message (admin only)
  - Response: Success message

## Schemas/Models

### User

**Model Fields:**
- `id`: Integer (primary key)
- `full_name`: String
- `email`: String (unique)
- `phone`: String
- `hashed_password`: String
- `role`: String ("volunteer" or "admin")
- `created_at`: DateTime
- `registrations`: Relationship to Registration

**Schemas:**
- `UserBase`: `email`
- `UserCreate`: `email`, `full_name`, `phone`, `password`
- `UserLogin`: `email`, `password`
- `UserResponse`: `id`, `email`, `full_name`, `phone`, `role`, `created_at`
- `UserWithEvents`: `UserResponse` + `registrations`

### Event

**Model Fields:**
- `id`: Integer (primary key)
- `title`: String
- `description`: Text
- `location`: String
- `event_date`: String
- `start_time`: String
- `end_time`: String
- `image_url`: String
- `status`: String ("upcoming", "completed")
- `created_at`: DateTime
- `registrations`: Relationship to Registration

**Schemas:**
- `EventBase`: `title`, `description`, `location`, `event_date`, `start_time`, `end_time`, `image_url`, `status`
- `EventCreate`: Inherits `EventBase`
- `EventUpdate`: All fields optional
- `EventStatusUpdate`: `status`
- `EventResponse`: `EventBase` + `id`, `created_at`, `is_registered`
- `EventWithRegistrations`: `EventResponse` + `registrations`

### Registration

**Model Fields:**
- `id`: Integer (primary key)
- `user_id`: Integer (foreign key to User)
- `event_id`: Integer (foreign key to Event)
- `registration_date`: DateTime
- `status`: String ("registered")
- `user`: Relationship to User
- `event`: Relationship to Event

**Schemas:**
- `RegistrationBase`: `event_id`
- `RegistrationCreate`: Inherits `RegistrationBase`
- `RegistrationResponse`: `id`, `event_id`, `user_id`, `status`, `registration_date`, `event`
- `RegistrationWithUser`: `RegistrationResponse` + `user`

### ContactMessage

**Model Fields:**
- `id`: Integer (primary key)
- `name`: String
- `email`: String
- `phone`: String
- `category`: String
- `subject`: String
- `message`: Text
- `priority`: String
- `created_at`: DateTime

**Schemas:**
- `ContactMessageCreate`: `name`, `email`, `phone`, `category`, `subject`, `message`, `priority`
- `ContactMessageResponse`: `ContactMessageCreate` + `id`, `created_at`

### Token

**Schemas:**
- `Token`: `access_token`, `token_type`, `role`
- `TokenData`: `email`, `role`

## How to Use in React App

The React app is located in the `full-stack-ecoclean-react/` directory. It uses Vite for development and communicates with the FastAPI backend via HTTP requests.

### Setup

1. Start the backend:
   ```bash
   cd backend
   python main.py
   ```
   The API will be available at `http://localhost:8000`.

2. Start the React app:
   ```bash
   cd full-stack-ecoclean-react
   npm install
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

### API Integration

The React app uses `fetch` for API calls. Authentication is handled by storing the JWT token in localStorage.

#### Example: Login

```javascript
const login = async (email, password) => {
  const response = await fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('role', data.role);
  }
  return data;
};
```

#### Example: Get Events

```javascript
const getEvents = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:8000/events/', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return await response.json();
};
```

#### Example: Join Event

```javascript
const joinEvent = async (eventId) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`http://localhost:8000/events/${eventId}/join`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return await response.json();
};
```

#### Example: Create Event (Admin)

```javascript
const createEvent = async (eventData) => {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:8000/events/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  });
  return await response.json();
};
```

### Authentication Flow

1. User logs in via `/auth/login` to get a JWT token.
2. Store the token and role in localStorage.
3. Include the token in the `Authorization: Bearer <token>` header for protected requests.
4. For admin-only endpoints, check the role before making requests.

### Error Handling

- Check `response.ok` for successful requests.
- Handle 401 errors by redirecting to login.
- Display error messages from `response.detail` or `data.detail`.

This documentation covers all endpoints, schemas, and models, along with examples of how to integrate the API in the React application.