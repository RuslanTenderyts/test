Food Ordering System
The Food Ordering System is a web application that allows users to browse and order food from different restaurants. It provides a convenient way for users to explore menus, add items to their cart, and place orders for delivery.

Features
Browse for restaurants offering various food options.
View detailed information about each food item, including descriptions, prices, and images.
Add items to the cart and adjust quantities as needed.
Proceed to checkout and provide delivery or pickup details.
View order summary and confirm the order.
Receive order confirmation.

Technologies Used
Front-end: HTML, CSS, JavaScript, React
Database: mockapi.io 
Additional Libraries/Frameworks: React Router, Axios

This project was created using Create React App. To get familiar with it and configure additional features, refer to the documentation.


Installation
Make sure that the LTS version of Node.js is installed on your computer. Download and install it if necessary.

1. Clone the repository:
    https://github.com/RuslanTenderyts/deliveryApp.git

2. Install dependencies:
    cd food-ordering-system ;
    npm install
3. Routing
    If the application uses the react-router-dom library for routing, you need to configure the <BrowserRouter> component additionally. Pass the exact repository name as the basename prop, and make sure to include a leading slash in the string.
        <BrowserRouter basename="/your_repo_name">
            <App />
        </BrowserRouter>
4. Start the development server:
    npm start

The application will be available at http://localhost:3000.
