# Real Estate Portfolio Admin

A production-ready full-stack web application for real estate professionals to showcase their projects, manage clients, and handle inquiries.

## Features

- **Modern Landing Page**: Fully responsive with Hero, Why Choose Us, Our Projects, Happy Clients, Contact Form, and Newsletter.
- **Admin Dashboard**: Protected by JWT authentication.
- **CRUD Operations**: Manage Projects and Clients with image upload and automatic cropping (450x350).
- **Lead Management**: View contact form submissions and newsletter subscribers.
- **Tech Stack**: Node.js, Express, PostgreSQL (Sequelize), React, Vite, Tailwind CSS.

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- PostgreSQL database (e.g., Neon.tech)

### Backend Setup
1. Navigate to `backend/`
2. Run `npm install`
3. Create a `.env` file based on `.env.example`:
   ```env
   PORT=5000
   DB_URI=your_postgresql_uri
   JWT_SECRET=your_secret
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=admin123
   CORS_ORIGIN=http://localhost:5173
   ```
4. Run `npm run dev` to start the server on port 5000.

### Frontend Setup
1. Navigate to `frontend/`
2. Run `npm install`
3. Run `npm run dev` to start the development server on port 5173.

## Deployment Steps

### Backend (Render)
1. Push the code to a GitHub repository.
2. Create a new **Web Service** on Render.
3. Select the repository and set the **Root Directory** to `backend`.
4. Build Command: `npm install`
5. Start Command: `node src/server.js`
6. Add all environment variables from `.env` to the Render dashboard.

### Frontend (Vercel)
1. Create a new project on Vercel.
2. Select the repository and set the **Root Directory** to `frontend`.
3. Framework Preset: **Vite**.
4. Set the `VITE_API_BASE_URL` environment variable to your Render backend URL (e.g., `https://your-app.onrender.com/api`).
5. Deploy.

## Notes
- Image uploads are stored locally in the `backend/uploads` directory. For production (Render), consider using a cloud storage provider like Cloudinary, as Render's file system is ephemeral unless you use a Disk.
