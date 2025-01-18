# **FootFolio** - A Shoes E-Commerce Website using MERN 


### **Created by**  
**Shivam Darekar © 2025**  

---

### **Image Credits**  
Images sourced from **[Nike](https://nike.com)**  

---

### **Connect with Me**  
- **LinkedIn**: [shivamdarekar2206](https://www.linkedin.com/in/shivamdarekar2206/)  
- **GitHub**: [ShivamAtHub](https://github.com/ShivamAtHub)  



## INDEX
- [Description](#Description)
- [Technologies_Used](#Technolgies_Used)
- [Installation](#Installation)
- [How To Use](#How_To_Use)
- [Screenshots](#Screenshots)

## Description
FootFolio is a beginner-friendly e-commerce platform built using the MERN stack and styled with Tailwind CSS. It offers core functionalities such as user account management, adding/removing products to/from the cart, updating product quantities, and completing purchases with shipping details. The project also includes an About Us page and a Contact page for user feedback.

## Technologies_Used
FootFolio is built using the following technologies:

**Frontend**
- **React.js** – For building the user interface.
- **Tailwind CSS** – For responsive and modern styling.

**Backend**
- **Node.js** – For server-side logic and API handling.
- **Express.js** – For routing and middleware management.

**Database**
- **MongoDB** – For storing user, product, and order data.

**Others**
- **Git** – For version control.
- **npm** – For dependency management.

## Requirements
To run and set up FootFolio, ensure you have the following installed:
- **Node.js** (v14+ recommended) – For running the backend and frontend development server.
- **MongoDB** – As the database for storing user accounts, products, and order details. (MongoDB Compass was used to make this project)
- **Git** – For version control and managing the project repository.
- **npm or yarn** – To install dependencies and manage packages.(The project was made using npm)
- **A web browser** – To view and interact with the application locally.

## Installation
1. Clone the Repository (Replace `YourUsername` with your GitHub username)
``````````````
git clone https://github.com/YourUsername/FootFolio---A-Shoes-Ecommerce-Website.git  
cd FootFolio---A-Shoes-Ecommerce-Website  
``````````````
2. Set up the Backend
   - Navigate to the backend folder:
``````````````
cd backend  
``````````````
  - Install backend dependencies:
``````````````
npm install 
``````````````
  - Update the `.env` file in the `backend` directory and add your database connection & secret key(optional)
``````````````
MONGO_URI=<your_mongodb_connection_string>  
PORT=5000  
``````````````

3. Set up the Frontend
   - Navigate to the frontend folder:
``````````````
cd frontend 
``````````````
   - Install frontend dependencies
``````````````
npm install 
``````````````
  
4. Running and Accessing the Website
   - Navigate to `backend` directory and run the following command:
``````````````
node server.js 
``````````````
   - Open any web browser and visit(make sure it matches your MongoDB port, in my case it is `5000`):
``````````````
http://localhost:5000
``````````````

## How_To_Use
- At the top-right you can click on the `Create account` button, fill in your details and create an account sucessfully.
- After creating an account you can click on the `Login` button next to `Create account` and login with your credentials.
(**Note:** Sometimes it might not show the updated navbar so just press `f5` and reload the site)
- Now you can navigate to products, and add several products to your cart
- Once added you can navigate to `cart` on the top-right corner with a cart symbol next to `Logout` button and update the quantity or remove products.
- After making any changes you can proceed to `Checkout`, then enter your Checkout Details and click on `Complete Order`
- Finally you will see the `Order Confirmation` page with the entered details.

## Screenshots
- Home Page
![Home](https://github.com/user-attachments/assets/e043be4e-f282-46cb-bae0-52a1709ba068)
![Home2](https://github.com/user-attachments/assets/28834cbd-e946-4241-a252-e25be47eb270)

- Create Account Page
![Account_Creation](https://github.com/user-attachments/assets/7f628e83-61d2-40d6-91b7-2c265135389b)

- Login Page
![Login](https://github.com/user-attachments/assets/d79a9fe7-6f2f-4351-9aee-cd2e98999f5b)

- Products Page
![Products](https://github.com/user-attachments/assets/e2bc51c1-7763-4666-a071-c56331c8234d)

- Add to Cart Interface
![Add_To_Cart](https://github.com/user-attachments/assets/06a392be-fbb6-4ddf-92a3-6c82e257878a)

- Cart  
![Cart](https://github.com/user-attachments/assets/2329844e-14d7-4956-8977-eb88fb0fc5f8)

- Checkout Page
![Checkout](https://github.com/user-attachments/assets/8c991873-0ef7-4abf-9b3d-59156caa6040)

- Order Confirmation Page
![Order_Confirmation](https://github.com/user-attachments/assets/04d5a2a5-0b02-4637-94f9-a8f59a3c5090)


## **Feedback & Support**  

If you encounter any bugs or have suggestions for improvement, feel free to reach out!  

📧 **Email**: [shivamdarekar123@gmail.com](mailto:shivamdarekar123@gmail.com)  
🌐 **Connect with me**: [LinkedIn](https://www.linkedin.com/in/shivamdarekar2206/)  

Thank you for checking out **FootFolio**! Your feedback is highly appreciated. 😊 
