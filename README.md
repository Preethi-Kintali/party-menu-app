# 🍽️ Party Menu Application

A responsive React-based Party Menu application that allows users to browse dishes, view detailed information, and save their favorite recipes.

## 🚀 Features

### 🔐 Authentication
- Secure Sign In
- Protected Routes
- Persistent Login using Local Storage
- Logout functionality

### 🍴 Menu
- Browse all dishes
- Filter by Category
- Filter by Diet (Veg / Non-Veg)
- Search dishes by name
- Responsive card layout

### 📖 Food Details
- View complete recipe information
- Category and Diet badges
- Ingredients list
- Save / Remove favorite recipes

### ❤️ Saved Recipes
- Save favorite dishes
- Remove saved recipes
- Empty state when no recipes are saved

### 🛣️ Routing
- React Router DOM
- Protected Routes
- Dynamic Food Detail Page
- Custom 404 Page

---

## 🛠️ Tech Stack

- React.js
- Vite
- React Router DOM
- Context API
- CSS3
- Local Storage

---

## 📂 Project Structure

```
src
│
├── components
│   ├── FoodCard.jsx
│   ├── FilterBar.jsx
│   ├── Header.jsx
│   └── ProtectedRoute.jsx
│
├── context
│   ├── AuthContext.jsx
│   └── SavedRecipesContext.jsx
│
├── data
│   └── menuData.js
│
├── pages
│   ├── SignIn.jsx
│   ├── Menu.jsx
│   ├── FoodDetail.jsx
│   ├── SavedRecipes.jsx
│   └── NotFound.jsx
│
├── styles
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project folder

```bash
cd party-menu-app
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

The application will be available at

```
http://localhost:5173
```

---

## 🔑 Test Credentials

Email

```
admin@example.com
```

Password

```
admin123
```

---

## 📸 Screens

- Sign In
- Menu
- Food Details
- Saved Recipes
- 404 Page

---

## 💾 Local Storage

The application stores the following data in Local Storage:

- `party_menu_token`
- `party_menu_user`
- `party_menu_saved_recipes`

---

