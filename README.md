


# 🌍 Country Search React Application

This project was developed as part of an assignment for **OneOak Media**. The goal was to create a React application that demonstrates key frontend development skills, including:

- **Debouncing** for optimized input handling.
- **API Integration** for fetching country data dynamically.
- **Shimmering Effects** to improve the loading experience.
- **Navigation and State Management** for displaying detailed country information on a new page.

---

## 🚀 Features

### 1. **Search for Countries**  
   - Enter a country name in the input box.  
   - **Debouncing** is implemented to delay API calls until the user stops typing, optimizing performance and reducing unnecessary requests.  

### 2. **Shimmering Effect**  
   - While fetching results, a visually appealing **loading skeleton** effect is displayed to enhance the user experience.

### 3. **Country Suggestions**  
   - After fetching, a **list of countries** matching the search query is displayed.  
   - Users can either select a country from the list or click the **Submit** button to search directly.

### 4. **Detailed Country Information**  
   - On selecting a country or submitting the query, the app navigates to a new page.  
   - The details page displays:  
     - The country's **flag**.  
     - **Official Name**.  
     - **Capital**.  
     - **Currency** information.

---

## 🛠️ Tech Stack

- **React**: Frontend framework.
- **React Router**: For seamless navigation between pages.
- **CSS/Tailwind CSS**: For responsive and modern UI styling.
- **REST API**: Fetching country data dynamically.
- **Debouncing**: To optimize input handling and API requests.

---


### 1. **Home Page**  
   - Input box for searching countries.  
   - Shimmering effect during loading.  
   - Country suggestions based on the query.  

### 2. **Details Page**  
   - Displays country details, including flag, name, capital, and currency.

---

## 🚀 Getting Started

### 1. **Clone the Repository**  
```bash
git clone https://github.com/your-username/oneoakflow_search_app.git
cd oneoakflow_search_app
```

### 2. **Install Dependencies**  
```bash
npm install
```

### 3. **Start the Development Server**  
```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📂 File Structure

```
.
├── src
│   ├── components
│   │   ├── CountryCard.jsx        # Component for rendering country details
│   │   ├── Skeleton.jsx           # Shimmering effect for loading state
│   │   └── Toast.jsx              # Toast notifications for API responses
│   ├── helper
│   │   └── api_endpoint.js        # All api endpoints at one place
│   │   └── util.js                # common helper functions
│   ├── routes
│   │   └── indexRoute.jsx         # All routes of application
│   ├── hooks
│   │   └── index.js               # Custom hook for debounced API calls
│   ├── screens
│   │   ├── HomePage.jsx           # Main search page
│   │   └── ResultsPage.jsx        # Country details page
│   ├── App.jsx                    # Main app component
│   └── index.js                   # Entry point
└── README.md                      # Documentation
```

---

## 🧩 Key Concepts Demonstrated

- **Debouncing**: Implemented in the `useCountrySuggestions` hook to delay API calls.  
- **API Integration**: Utilized REST API for dynamic country search and detailed data fetching.  
- **State Management**: Managed application state using React hooks (`useState`, `useEffect`, `useCallback`).  
- **Loading States**: Added shimmering effects using a reusable `SkeletonCard` component.  
- **Routing**: Managed page transitions with `React Router`.  

---

## ✨ Assignment Objectives Fulfilled

1. **Input Field with Debouncing**:  
   Users can type a country name, and the app efficiently fetches suggestions after a delay.

2. **API Call and Display**:  
   Fetched country data is displayed with a list of matching results.

3. **Shimmering Effect**:  
   Ensures a smooth loading experience for users.

4. **Detailed Information Page**:  
   Navigates to a new page to display selected country details.

---

## 🌟 How It Works

### 1. **Home Page**  
   - Start typing a country name in the input box.  
   - A debounced API call fetches country suggestions.  
   - While the results load, a **shimmering effect** is displayed.  
   - Click on a suggestion or submit the query to see detailed information.

### 2. **Details Page**  
   - Displays additional information, such as the **flag**, **official name**, **capital**, and **currency**.

---

## 📈 Future Improvements

- Add **autocomplete** functionality for quicker selection.
- Implement **pagination** for large lists of suggestions.
- Add **dark mode** for better user experience.
- Integrate **unit tests** to ensure application reliability.

---

## 💼 About the Assignment

This application was created as part of an assignment for **OneOak Media**. The objective was to demonstrate my React skills, including optimized input handling, API integration, and modern UI/UX practices.  

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).
