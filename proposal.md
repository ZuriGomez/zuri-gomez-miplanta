# Project Title - miPlanta

## Overview

miPlanta is a mobile-first marketplace designed to connect plant enthusiasts and sellers. Users can browse and post listings for plants, view detailed information about plants for sale, and manage their profiles, including their own listings.


### Problem Space

Finding and purchasing the right plants can be challenging. Buyers need specific information like maintenance requirements, height, and ideal environmental conditions, which are often unavailable on traditional marketplaces. Sellers, on the other hand, need a streamlined way to showcase their offerings while connecting with local buyers.

### User Profile

- Target Audience: Plant enthusiasts, gardeners, and hobbyists.

How will they use it?

- Create an account to list plants for sale or browse available plants.
- Use the dashboard to track purchases, sales, and interests.
- Find specific plants through search and filters.

Special Considerations:

- Listings and suggestions should be tailored to user interests.
    
### Features

1. For Buyers:
    - View all available listings, including photos, titles, and prices.
    -Filter listings by maintenance level, pot inclusion, watering needs, and more.
    - Search for specific plants or browse by categories.
    -View detailed plant descriptions, including environmental needs and care instructions.
    - Choose delivery or pickup options for purchases.
2. For Sellers:
    - Create an account to post listings.
    - Add new listings with photos, descriptions, and key plant attributes.
    - Manage and edit existing listings.
    - Mark listings as sold or delete them.

## Implementation

### Tech Stack

- Frontend: JavaScript for interactivity and responsiveness.
- Backend: Node.js and Express for server-side logic.
- Database: MySQL for structured data storage.
- Design: Canva for mockups
- Libraries:
    Client-side: react, react-router, axios
    Server-side: express, knex

### APIs

No external APIs are being used. All data will be managed through a custom-built backend using MySQL.

### Sitemap

1. Landing page: User interface to access the platform.
2. Sign up page: New user account creation
3. Log in page: User interface to enter credentials.
4. Home Page: Browse all listings available on the platform 
5. Listing Page: Page to view specificly selected listing.
6. Add Listing Page: Add a new plant listing
7. User Profile: Dashboard to showcase activity on the platform and their listings.
8. Seller Profile: User can view seller's review and connect with seller.
9. User's listing page: Page to view user's listings only.

### Mockups

Please refer to visual mock-ups (/miplanta_design) for the below:

- Login/Signup: User-friendly forms with validation
- Home Page: Grid or list layout showing plant listings with filters.
- Dashboard: Graphical summaries of user activities.
- Listing Management: Simple form for adding/editing listings.


### Data

Database Schema
Users Table:

id: Primary key
email: Unique user email (string)
password: Hashed password (string)
created_at: Timestamp of account creation
Listings Table:

id: Primary key
user_id: Foreign key linking to users.id
photo: Path to the plant image (string)
title: Plant name or brief description (string)
description: Detailed plant description (text)
maintenance: ENUM('low', 'medium', 'high')
pot_included: ENUM('yes', 'no')
pot_description: Description of the pot (string, optional)
height: Plant height in cm (decimal)
sunlight: Sunlight requirements (string)
temperature: Ideal temperature range (string)
watering: ENUM('once per week', 'every two weeks', 'every month')
price: Price in CAD (decimal)
delivery: ENUM('pickup', 'delivery')
created_at: Timestamp of listing creation

### Endpoints

POST /users/register: Register a new user

Response:

[
    {
        "id": 1,
        "username": "alida",
        "email": "alida@doe.com",
        "password": "12345abc",
        "created_at": "2024-11-19T15:45:00Z",
    }
]
POST /users/login: Log in and receive a JWT token
GET /listings: Fetch all plant listings with optional filters

Response:
[  
  {  
    "id": 101,  
    "image_url": "/images/monstera.jpg",  
    "title": "Monstera Deliciosa",  
    "description": "Easy to care for and air purifying.",  
    "maintenance": "Low",    
    "pot_included": "Yes",
    "pot_description": "Ceramic White Pot",
    "height": "180cm",
    "sunlight": "Indirect",
    "temperature":"25C",
    "watering": "low",
    "price": 25.0,  
    "delivery": "Pickup"
  }  
]  


POST /listings: Add a new plant listing (authenticated)

Request Body:

{  
    "id": 101,  
    "image_url": "/images/monstera.jpg",  
    "title": "Monstera Deliciosa",  
    "description": "Easy to care for and air purifying.",  
    "maintenance": "Low",    
    "pot_included": "Yes",
    "pot_description": "Ceramic White Pot",
    "height": "180cm",
    "sunlight": "Indirect",
    "temperature":"25C",
    "watering": "low",
    "price": 25.0,  
    "delivery": "Pickup",  
    "user_id": 1,
    "created_at": "2024-11-19T15:45:00Z"
}  

Response:

{ "success": true, "id": 101 }  


For future implementations:
PUT /listings/:id: Update an existing listing (authenticated)
DELETE /listings/:id: Delete a listing (authenticated)

## Roadmap

1. Week 1 (Nov 18-24):
    - Design in Canva.
    - Set up backend (Node.js, Express, MySQL).
    - Implement basic CRUD endpoints for listings and user's sign up/log in.
2. Week 2 (Nov 25-Dec 1):
    - Develop frontend with basic styling and functionality.
    - Test the application and fix bugs.

---

## Future Implementations

- Chat between seller and buyer.
- Edit listing page.
- Login/Signup: User authentication pages.
- Geolocation-based suggestions for nearby listings.
- Advanced filters for listings (e.g., price range, type of plant).
- Social media login options.
- User reviews and ratings.
- Push notifications for new messages or updates.

