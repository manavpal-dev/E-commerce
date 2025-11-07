# Mock E-Commerce Cart App

A full-stack mini e-commerce cart application built using **React**, **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates real-world e-commerce flow including product listing, cart management, quantity update, checkout, and receipt confirmation.

## 🚀 Features

- Fetch products from external API (FakeStore API)
- Add products to cart
- Increase / Decrease product quantity
- Remove items from cart
- Calculate total price dynamically
- Basic checkout modal (Name & Email input)
- Order receipt confirmation popup
- Clean and responsive UI using Tailwind CSS

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

## 📁 Folder Structure

```
Mock-ECom-Cart/
 ├── server/
 │   ├── controllers/
 │   ├── routes/
 │   ├── models/
 │   ├── config/
 │   └── server.js
 └── client/
     └── src/
         ├── components/
         ├── pages/
         └── App.jsx
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone <your-repo-link>
cd Mock-ECom-Cart
```

### 2️⃣ Setup Backend (Server)

```
cd server
npm install
nodemon server.js
```

Create a `.env` file inside the **server** directory:

```
MONGO_URI=<your_mongodb_connection_string>
```

Start backend:
```
node server.js
```

Backend runs on:
```
http://localhost:3000
```

### 3️⃣ Setup Frontend (Client)

```
cd client
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Fetch all products |
| POST | `/api/cart` | Add product to cart |
| GET | `/api/cart` | Get all cart items |
| PATCH | `/api/cart/increase/:id` | Increase quantity |
| PATCH | `/api/cart/decrease/:id` | Decrease quantity |
| DELETE | `/api/cart/:id` | Remove cart item |

## 🎥 Demo Video (Required)

Record **1–2 minute** walkthrough:
- Browse products
- Add to cart
- Modify quantity
- Checkout and receive confirmation

Upload as **Unlisted YouTube** and paste link here.

## 👨‍💻 Author

Manav Pal
GitHub: https://github.com/manavpal-dev
LinkedIn: https://linkedin.com/in/manavpal

---

Thanks for reviewing 😊