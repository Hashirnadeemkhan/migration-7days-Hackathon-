# Rent a Car - Hackathon Day 2: Planning the Technical Foundation

## 1. Technical Requirements

### Frontend Requirements
- **User-friendly interface** for browsing and booking cars.
- **Responsive design** for both mobile and desktop platforms.
- Essential pages:
  - Home
  - Car Listing
  - Car Details
  - Booking
  - Checkout
  - Confirmation

### Backend Requirements
- **Sanity CMS** to manage data for cars, users, bookings, and providers.
- Integration of APIs for:
  - Payment processing
  - Booking management
  - Car availability

### APIs
- **Third-party APIs** will handle:
  - Payment gateway
  - Real-time tracking (if needed)
  - User authentication

---

## 2. System Architecture

### High-Level Overview
- **Frontend (Next.js):** Handles user interaction for browsing cars and managing bookings.
- **Sanity CMS:** Acts as the backend for managing:
  - Car data
  - User information
  - Bookings
- **Third-Party APIs:**
  - Payment Gateway for secure transactions
  - Optional tracking services for car availability or delivery logistics

---

## 3. Workflows and Flowcharts

### Workflows

#### 2. Car Browsing
- **Flow:**
  1. User views car categories.
  2. CMS API fetches car data.
  3. Car details are displayed dynamically on the frontend.

#### 3. Booking Process
- **Flow:**
  1. User selects a car.
  2. Proceeds to checkout.
  3. Booking details are saved in the CMS.

#### 4. Payment and Confirmation
- **Flow:**
  1. Payment is processed via the Payment Gateway.
  2. Confirmation email is sent to the user.
  3. Booking status is updated in the CMS.

---

## 4. API Design

### 1. Fetch Cars
- **Endpoint:** `/cars`
- **Method:** GET
- **Response:**
  ```json
  {
    "CarID": 1,
    "Model": "Toyota Prius",
    "PricePerDay": 50
  }
  ```

### 2. Create Booking
- **Endpoint:** `/bookings`
- **Method:** POST
- **Payload:**
  ```json
  {
    "UserID": 1,
    "CarID": 2,
    "StartDate": "2025-01-20",
    "EndDate": "2025-01-25"
  }
  ```

### 3. Process Payment
- **Endpoint:** `/payment`
- **Method:** POST
- **Payload:**
  ```json
  {
    "BookingID": 101,
    "Amount": 250
  }
  ```

---

## 5. Flowcharts

### System Architecture Flowchart
This flowchart represents the workflow for the overall system architecture, highlighting interactions between:
- Frontend (Next.js)
- Sanity CMS
- Third-party APIs


### Product Browsing Workflow
This flowchart represents the workflow for product browsing:
- Fetching car data from the CMS API
- Displaying dynamic car listings on the frontend

### Order Placement Workflow
This flowchart represents the workflow for placing an order:
- Selecting a car
- Proceeding to checkout
- Saving booking details in the CMS

### Shipment Tracking Workflow
This flowchart represents the workflow for shipment tracking (if applicable):
- Real-time tracking via third-party APIs
- Displaying tracking information to the user

---

## Summary

Day 2 focuses on converting business goals into technical foundations. By defining frontend and backend requirements, creating detailed workflows, and designing APIs, the "Rent a Car" platform lays the groundwork for a user-friendly and efficient car rental experience.



# Day 3 - Car Data Import and Sanity Integration

This project demonstrates how to import external API data into Sanity CMS, create a schema for the imported data, and display it in a React-based frontend. The project was implemented as part of a provided hackathon template.

---

## Features
- Import data from an external API.
- Define and use a `cars` schema in Sanity CMS.
- Upload images to Sanity CMS and link them with the imported data.
- Display data dynamically on a frontend using React and Next.js.
- Provide a clean UI for displaying cars with details like name, brand, price, and type.

---

## Project Structure
### Backend
1. **Sanity Schema (`car.ts`)**
   - The schema defines the structure for the `cars` document in Sanity.
   - Fields include car name, brand, type, fuel capacity, transmission, seating capacity, pricing, tags, and image.

2. **Data Import Script**
   - Fetches car data from an external API.
   - Uploads car images to Sanity CMS using the `uploadImageToSanity` function.
   - Creates car documents in Sanity using the fetched data and links uploaded images.

### Frontend
1. **CarGrid Component**
   - Dynamically fetches all car data from Sanity CMS using GROQ queries.
   - Displays car details in a grid format.
   - Includes a "View All" link and a "Show more cars" button.

2. **ProductCard Component**
   - A reusable component that displays details of each car in a card layout.
   - Shows car name, image, price, and other details.

---

## Code Breakdown

### Backend Code
1. **Sanity Schema**
   ```typescript
   export const cars = {
     name: 'cars',
     type: 'document',
     title: 'Cars',
     fields: [
       { name: 'name', type: 'string', title: 'Car Name' },
       { name: 'brand', type: 'string', title: 'Brand', description: 'Brand of the car (e.g., Nissan, Tesla, etc.)' },
       { name: 'type', type: 'string', title: 'Car Type', description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)' },
       { name: 'fuelCapacity', type: 'string', title: 'Fuel Capacity', description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)' },
       { name: 'transmission', type: 'string', title: 'Transmission', description: 'Type of transmission (e.g., Manual, Automatic)' },
       { name: 'seatingCapacity', type: 'string', title: 'Seating Capacity', description: 'Number of seats (e.g., 2 People, 4 seats)' },
       { name: 'pricePerDay', type: 'string', title: 'Price Per Day', description: 'Rental price per day' },
       { name: 'originalPrice', type: 'string', title: 'Original Price', description: 'Original price before discount (if applicable)' },
       { name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }], options: { layout: 'tags' } },
       { name: 'image', type: 'image', title: 'Car Image', options: { hotspot: true } }
     ]
   };

   export default cars;


# Day 6 - Deployment Preparation and Staging Environment Setup

**Prepared by:** Ameen Alam  
**First Published:** January 21, 2025  
**Version:** 6.0  

---

## **Objective**
The goal of Day 6 is to prepare the marketplace application for deployment by:
- Setting up a staging environment.
- Configuring hosting platforms and environment variables securely.
- Testing functionality, performance, and security in a production-like environment.

---

## **Key Deliverables**
1. Fully deployed staging environment for the marketplace.
2. Secure configuration of environment variables.
3. Documentation of testing results and performance reports.
4. Organized project repository with structured files and a README file.

---

## **Steps for Implementation**

### 1. **Hosting Platform Setup**
- **Choose a Platform**: Selected [Vercel](https://vercel.com) for its ease of use and seamless integration with GitHub.
- **Connect Repository**: 
 [ - Linked the GitHub repository to Vercel.](https://github.com/Hashirnadeemkhan/hackathon-ecommerce)
  - Configured build and deployment settings.

### 2. **Environment Variable Configuration**
- Created a `.env` file containing sensitive variables:
![image](https://github.com/user-attachments/assets/a892e055-1efc-4b71-a902-695dfc79fd45)

### 3. **Deployment to Staging**
https://hackathon-ecommerce-n63n.vercel.app/

### 4. **Staging Environment Testing**
Performance Testing: Used GTmetrix to analyze load times, speed, and responsiveness.
Performance Metrics Achieved:
Page Speed Score: 92%
Fully Loaded Time: 2.1 seconds.
Security Testing: Validated input fields, ensured HTTPS, and tested API key protection.

**link** :https://gtmetrix.com/reports/hackathon-ecommerce-n63n.vercel.app/X6QUu3V8/

![image](https://github.com/user-attachments/assets/7c635c5c-5a75-4612-aa32-9516788c6c88)






