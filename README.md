
# 🧠 Sales-Admin Panel (Node.js + TypeScript)

A production-ready backend for managing wholesalers, retailers, and monthly stock turnover using Node.js, Express, TypeScript, Sequelize, and PostgreSQL.

---

## 🚀 Features

- JWT-ready architecture (currently open access)
- Sequelize ORM with PostgreSQL
- Well-structured MVC + Service layer
- Clean Zod validation support (optional)
- Seed script with deterministic test data
- API coverage:
  - Get retailers by wholesaler
  - Get retailers with single wholesaler
  - Monthly turnover per wholesaler
  - Max turnover from a single retailer

---

## ⚙️ Tech Stack

- Node.js + Express
- TypeScript
- Sequelize ORM
- PostgreSQL
- Zod (optional, for validation)
- ts-node-dev for hot reload in development

---

## 📁 Project Structure

```
src/
    ├── config/ # DB & env setup 
    ├── controllers/ # Request handlers
    ├── services/ # Business logic
    ├── models/ # Sequelize models
    ├── routes/ # Express route definitions
    ├── seed/ # Seed script for DB
    ├── index.ts # App entrypoint
```

---

## 🛠 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/okflea/sales-admin-node.git
cd sales-admin-node
npm install
```

### 2. Configure Environment

  Create a .env file in the root:

```

PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_pg_user
DB_PASSWORD=your_pg_password
DB_NAME=wholesaler

```

### 3. Initialize PostgreSQL (if not already created)

```
createdb wholesaler
```

### 4. Seed DB

```
npm run seed
```

### 5. Start Server

```
npm run start
```

## 📌 API Endpoints

- GET /wholesalers/:id/retailers

>Get a wholesaler and their associated retailers

- GET /retailers/single-wholesaler

>Returns retailers linked to only one wholesaler

- GET /wholesalers/monthly-turnover

>Returns monthly stock turnover (Jan–Dec 2021) for each wholesaler

- GET /wholesalers/max-retailer-turnover

>Returns, for each wholesaler, the retailer with highest total turnover

## ✅ To Do / Improvements

 [] Add JWT authentication and role-based access

 [] Add Swagger/OpenAPI documentation

 [] Add filtering/pagination

 [] Add unit and integration tests
