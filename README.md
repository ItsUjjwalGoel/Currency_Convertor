# Currency Converter Application 🌍💱

A **Currency Converter** application built using **React.js** and **Axios**, which leverages the Fixer.io API to fetch live exchange rates. The app allows users to convert an amount between selected currencies, swap currencies, and reset the input seamlessly.

## Features ✨
- **Live Exchange Rates:** Fetch real-time currency exchange rates from the Fixer.io API.
- **Amount Conversion:** Enter an amount in one currency and get the converted value in another.
- **Swap Currencies:** Easily swap the base and target currencies with a single button.
- **Keyboard Shortcuts:**
  - `Ctrl + S`: Swap currencies.
  - `Ctrl + R`: Reset the values.
- **Responsive Design:** User-friendly and accessible interface with a clean, responsive layout.
- **External Links:** Direct links to GitHub and LinkedIn profiles for further exploration.

## Demo 📸
- Video showcasing full Project


https://github.com/user-attachments/assets/61c1fb36-fa92-4a29-bb91-e0717e953d51



## Setup Instructions ⚙️

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>
   ```

2. **Install Dependencies**  
   Make sure you have **Node.js** installed, then run:  
   ```bash
   npm install
   ```

3. **Environment Variables**  
   Create a `.env` file in the root directory and add your Fixer.io API key:
   ```env
   REACT_APP_API_KEY=your_fixer_api_key
   ```

4. **Run the Application**  
   Start the development server:  
   ```bash
   npm start
   ```

5. **Build for Production**  
   To create a production build, run:  
   ```bash
   npm run build
   ```

## How It Works 🔧

- **Fetching Exchange Rates:**  
  The app uses Axios to fetch exchange rates from the Fixer.io API. The rates are stored in the state using React hooks.

- **Conversion Logic:**  
  The app calculates the converted amount using the formula:  
  ```
  convertedAmount = amount * (1 / rate[baseCurrency]) * rate[targetCurrency]
  ```

- **Keyboard Events:**  
  Global keydown events are added to support swapping (`Ctrl + S`) and resetting (`Ctrl + R`) without interacting with buttons.

## Folder Structure 📁
```
src/
│
├── components/
│   ├── Input.js          // Main component for the currency converter
│
├── assets/
│   ├── Githublogo.png    // GitHub logo for linking
│   ├── Linkedin.png      // LinkedIn logo for linking
│
├── App.js                // Main App component
├── index.js              // Entry point of the application
└── .env                  // Environment variables
```

## Dependencies 📦
- **React.js:** Frontend framework.
- **Axios:** For API requests.
- **Fixer.io API:** Fetch live exchange rates.

## How to Use 💛
1. Enter the amount you want to convert in the **Amount** input field.
2. Select the base and target currencies from the dropdowns.
3. The converted amount will be displayed in the **Converted Amount** field.
4. Use the **Swap** button or `Ctrl + S` to swap the currencies.
5. Use the **Home** button or `Ctrl + R` to reset the input fields.

## Keyboard Shortcuts ⌨️
- **Ctrl + S:** Swap currencies.
- **Ctrl + R:** Reset all inputs.

## External Links 🌐
- [GitHub Profile](https://github.com/ItsUjjwalGoel)
- [LinkedIn Profile](https://linkedin.com/in/its-ujjwal)

## Acknowledgments 🎉
- [Fixer.io](https://fixer.io) for providing exchange rate data.
- [React.js](https://reactjs.org/) for making development seamless.
- [Tailwind CSS](https://tailwindcss.com/) for styling.

## License 🖍️
This project is licensed under the MIT License. Feel free to use it for personal and commercial purposes.

---
##Open for Suggestions 💬
-If you have any ideas to improve this project or want to report issues, feel free to open an issue or submit a pull request. Contributions are welcome!

