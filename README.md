
# SMI Dashboard

SMI Dashboard is a responsive product catalog web application built with React.js. The application provides a simple login interface, displays product data from an external API, and allows users to search and view product details.

## Features

- **Login and Logout** — Simple demo authentication with input validation.
- **Product Catalog** — Fetches and displays product data from DummyJSON API.
- **Loading State** — Displays a loading message while product data is being fetched.
- **Error Handling** — Handles API request failures and invalid product data.
- **Product Search** — Filters products by title in real time.
- **Search Empty State** — Displays a message when no products match the search query, with a button to return to the full catalog.
- **Product Details Modal** — Displays the selected product's image, title, description, and price.
- **Responsive Layout** — Uses a responsive product grid for desktop, tablet, and mobile screens.
- **Sticky Navigation Bar** — Keeps the navigation bar visible while scrolling.
- **Back-to-Top Button** — Allows users to smoothly return to the top of the page.
- **Custom UI Theme** — Uses a maroon color palette, custom logo, and browser favicon.

## Technologies

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- Lucide React
- Fetch API
- DummyJSON API
- HTML5 and CSS3
- Git and GitHub

## API

Product data is retrieved from:

https://dummyjson.com/products

The application uses the product data returned by the API to display the catalog and product details.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

1. Clone this repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd YOUR_PROJECT_FOLDER
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually:

   ```text
   http://localhost:5173
   ```

## Demo Login

Use the following credentials to access the dashboard:

| Field | Value |
|---|---|
| Username | `admin` |
| Password | `smi123` |

**Note:** These credentials are intended for demonstration purposes only. This application uses simple client-side credential validation and does not implement production authentication.

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── NavBar.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── DashboardPage.jsx
│   └── LoginPage.jsx
├── services/
│   └── ProductService.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
└── img/
    └── logo.png

index.html
package.json
```

## Implementation Notes

- React hooks such as `useState` and `useEffect` manage application state and API requests.
- Props are used to pass product data and event handlers between components.
- Asynchronous API requests use `async/await` and the Fetch API.
- Conditional rendering handles login state, loading state, API errors, empty search results, and product details.
- Tailwind CSS is used to style the interface and implement responsive layouts.

## Testing Checklist

- [ ] Login with valid demo credentials.
- [ ] Verify that invalid or empty credentials are handled.
- [ ] Verify that products load from the API.
- [ ] Search for an existing product.
- [ ] Search for a product that does not exist and return to the full catalog.
- [ ] Open and close the product details modal.
- [ ] Verify the layout on desktop, tablet, and mobile screens.
- [ ] Test logout and confirm that the dashboard is no longer displayed.
- [ ] Verify the loading and API error states.

## Author

Developed as a Front-End Engineer coding test project.
