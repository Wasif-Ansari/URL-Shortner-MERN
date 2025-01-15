# URL Shortener - MERN Stack

Welcome to the **URL Shortener** project repository! This project demonstrates the core principles of the MERN stack (MongoDB, Express.js, React.js, Node.js) while implementing a fully functional URL shortener application.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

The **URL Shortener** project is designed to shorten long URLs into compact, shareable links. This application also tracks usage statistics such as the number of clicks on each shortened link. It serves as a demonstration of MERN stack concepts, project structure, and API integration.

---

## Features

- **Shorten Long URLs:** Quickly generate short links for lengthy URLs.
- **Custom Alias (Optional):** Allow users to create custom short link aliases.
- **Click Tracking:** Maintain a count of how many times a short URL has been accessed.
- **Scalable Backend:** Efficient backend using Node.js and Express.js.
- **Interactive Frontend:** User-friendly React.js interface for creating and managing short links.
- **Persistent Data Storage:** Store links and statistics in a MongoDB database.

---

## Tech Stack

- **Frontend:** React.js (JavaScript, HTML, CSS)
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Environment:** Node.js and npm (or Yarn)
- **Additional Tools:**
  - Axios for API requests
  - Mongoose for MongoDB object modeling
  - dotenv for environment variable management

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Wasif-Ansari/URL-Shortner-MERN.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd URL-Shortner-MERN
   ```

3. **Install Dependencies:**
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the `backend` directory and configure the following:
     ```env
     PORT=5000
     MONGO_URI=<Your MongoDB Connection String>
     BASE_URL=http://localhost:5000
     ```

5. **Run the Application:**
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

6. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. Enter a long URL into the input field.
2. (Optional) Specify a custom alias for the short URL.
3. Click "Shorten URL" to generate a shortened link.
4. Use the shortened link and monitor its usage statistics from the dashboard.

---

## Folder Structure

The project is organized as follows:

```
URL-Shortner-MERN/
├── backend/            # Backend server code
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API route definitions
│   ├── controllers/    # Request handlers
│   ├── utils/          # Utility functions
│   └── server.js       # Entry point for the backend
│
├── frontend/           # Frontend application code
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # Application pages
│   │   ├── services/   # API integration
│   │   └── App.js      # Main application component
│   └── public/         # Static assets
│
└── README.md           # Project documentation
```

---

## API Endpoints

### Base URL: `/api`

| Method | Endpoint            | Description                           |
|--------|---------------------|---------------------------------------|
| POST   | `/shorten`          | Create a new short URL                |
| GET    | `/:alias`           | Redirect to the original long URL     |
| GET    | `/stats/:alias`     | Retrieve statistics for a short URL   |

### Example Request: Create a Short URL

```json
POST /api/shorten
{
  "originalUrl": "https://example.com",
  "customAlias": "example"
}
```

### Example Response:

```json
{
  "shortUrl": "http://localhost:5000/example",
  "originalUrl": "https://example.com",
  "clicks": 0
}
```

---

## Future Improvements

- User authentication for managing personal URLs.
- Analytics dashboard with detailed insights.
- Integration with cloud storage for better scalability.
- Enhanced UI/UX with modern design patterns.
- Error handling and validations for better reliability.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software in compliance with the license.

---

Thank you for exploring the URL Shortener project! For questions or feedback, feel free to reach out via the repository's [Issues](https://github.com/Wasif-Ansari/URL-Shortner-MERN/issues) section.

