# Finance Data Processing and Access Control Backend

## Project Overview

This project is a backend system for a finance dashboard that manages financial records with role-based access control.

The backend provides APIs for managing users, financial transactions, and dashboard analytics such as total income, expenses, and recent activity.

The goal of this project is to demonstrate backend architecture, API design, data modeling, access control, and data processing.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs

---

## Features

### 1. User Authentication

* User registration
* User login
* Password hashing
* JWT authentication

### 2. Role Based Access Control

Roles implemented:

* **Admin**

  * Create financial records
  * Update records
  * Delete records
  * View all data

* **Analyst**

  * View financial records
  * Access dashboard insights

* **Viewer**

  * View dashboard summary only

---

### 3. Financial Records Management

Fields in each record:

* Amount
* Type (income or expense)
* Category
* Date
* Notes

APIs implemented:

Create record
Update record
Delete record
View records
Filter records by category, type, or date

---

### 4. Dashboard Analytics APIs

The backend provides summary endpoints for dashboard visualization.

APIs:

* Total Income
* Total Expenses
* Net Balance
* Category-wise totals
* Recent transactions

---

## API Endpoints

### Authentication

POST `/api/auth/register`
Register new user

POST `/api/auth/login`
Login user and receive JWT token

---

### Financial Records

POST `/api/records/create`
Create financial record (Admin only)

GET `/api/records`
Get all records with filtering

PUT `/api/records/:id`
Update record (Admin only)

DELETE `/api/records/:id`
Delete record (Admin only)

---

### Dashboard

GET `/api/dashboard/summary`
Get total income, expenses, and net balance

GET `/api/dashboard/categories`
Get category-wise totals

GET `/api/dashboard/recent`
Get recent transactions

---

## Project Structure

```
config/
controllers/
middleware/
models/
routes/
server.js
```

---

## Setup Instructions

1. Clone repository

```
git clone https://github.com/YOUR_USERNAME/finance-dashboard-backend.git
```

2. Install dependencies

```
npm install
```

3. Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

4. Run server

```
node server.js
```

---

## Conclusion

This project demonstrates backend development skills including REST API design, role-based authorization, financial data management, and dashboard analytics.
