# M Shalom Trading — Company Website

A full-stack website developed for **M Shalom Trading**, a vehicle dealership based in South Africa.

This project originally began as a university web development project and has since evolved into a **personal software development project** focused on building, improving, and maintaining a functional website for the company.

The goal is to provide M Shalom Trading with a professional online presence where customers can browse available vehicles, learn about the company and its services, make enquiries, and access specialised services such as matric dance vehicle bookings.

---

## 🚗 Project Overview

The M Shalom Trading website is designed to provide customers with an easy way to:

* Browse the dealership's vehicle inventory
* View vehicle information and photographs
* Sort vehicles according to different criteria
* View multiple photographs of individual vehicles
* Submit enquiries about specific vehicles
* Learn more about M Shalom Trading
* Explore the company's available services
* Make enquiries regarding matric dance vehicles
* Switch between light and dark themes
* Access the website from different screen sizes

The project is being developed continuously, with additional functionality planned as development progresses.

---

## 🎯 Project Goals

The main goals of this project are to:

1. Create a professional website for M Shalom Trading.
2. Provide customers with an accessible online vehicle inventory.
3. Make it easier for customers to enquire about vehicles.
4. Create a central platform for displaying company services.
5. Develop a maintainable website that can be expanded over time.
6. Gain practical experience in full-stack web development.
7. Eventually connect the website to a persistent database and backend services.
8. Build features that can be useful to the company in its day-to-day operations.

---

## ✨ Current Features

### 🏠 Home Page

The home page provides an introduction to M Shalom Trading and acts as the main entry point to the website.

It includes:

* Company introduction
* Vehicle highlights
* Inventory links
* Navigation to other sections
* Responsive layout
* Website theme support

---

### 🚘 Vehicle Inventory

The inventory is one of the main components of the website.

Current functionality includes:

* Vehicle cards
* Vehicle photographs
* Vehicle specifications
* Pricing in South African Rand (R)
* Mileage
* Transmission
* Fuel type
* Seating information
* Drivetrain information
* Vehicle colour
* Multiple images per vehicle
* Individual vehicle image galleries
* Previous/next image navigation
* Image indicators
* Vehicle sorting

### Inventory Sorting

Vehicles can currently be sorted by:

* Default order
* Vehicle name A–Z
* Vehicle name Z–A
* Price: Low → High
* Price: High → Low
* Year: Newest → Oldest
* Year: Oldest → Newest
* Mileage: Low → High
* Mileage: High → Low

---

## 📷 Vehicle Image Management

Vehicle images are organised into individual folders under:

```text
wwwroot/Img/Cars/
```

The folders use the vehicle's:

```text
Year + Model/Module + Vehicle Name + Brand
```

as the primary matching information.

This allows vehicle photographs to be associated with the appropriate inventory vehicles even when the exact wording used in the inventory differs from the folder name.

The website also supports multiple photographs for a single vehicle.

---

## 📩 Vehicle Enquiries

Customers can select:

**Enquire About This Vehicle**

from an inventory vehicle.

The website then opens the Contact Us page with information about the selected vehicle automatically supplied to the enquiry form.

The intended flow is:

```text
Inventory
    ↓
Select Vehicle
    ↓
Enquire About This Vehicle
    ↓
Contact Us
    ↓
Vehicle Information Automatically Filled
    ↓
Customer Submits Enquiry
```

---

## 📞 Contact System

The Contact Us section is designed to allow customers to submit enquiries directly through the website.

The planned backend architecture is:

```text
Customer
   ↓
Contact Form
   ↓
JavaScript
   ↓
ASP.NET Core Backend
   ↓
Microsoft Access Database
   ↓
Enquiry Stored
   ↓
Dealership Notification
```

The database includes an `Enquiries` table intended to store submitted customer enquiries.

---

## 💃 Matric Dance Services

The website includes a dedicated Matric Dance section.

This is intended to allow M Shalom Trading to advertise and provide information about vehicles available for matric dance events.

---

## 🔧 Services

A dedicated Services page provides information about services offered by the company.

The service cards use a consistent design with the rest of the website.

---

## 🌙 Light / Dark Mode

The website includes a theme toggle allowing visitors to switch between light and dark modes.

The selected theme is stored locally so that the user's preference can be retained when navigating between pages.

---

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* C#
* ASP.NET Core
* ASP.NET Core Web API

## Database

* Microsoft Access
* `.accdb` database

## Development Tools

* Microsoft Visual Studio
* Visual Studio Code
* Git
* GitHub

---

# 📁 Project Structure

A simplified version of the project structure is:

```text
MShalomWebsite/
│
├── wwwroot/
│   │
│   ├── Home.html
│   ├── Inventory.html
│   ├── Services.html
│   ├── AboutUs.html
│   ├── ContactUs.html
│   ├── MatricDance.html
│   │
│   ├── CssPage.css
│   ├── theme.js
│   ├── inventory.js
│   │
│   └── Img/
│       │
│       └── Cars/
│           ├── Audi-A4-2006/
│           ├── Audi-A4-2018/
│           ├── Audi-A5-2015/
│           ├── Ford-Fiesta-2016/
│           ├── Mercedes-Benz-Vito-2022/
│           └── ...
│
├── Controllers/
│
├── Models/
│   └── Enquiry.cs
│
├── Data/
│   └── Database.cs
│
├── Database/
│   └── MShalomDatabase.accdb
│
├── Program.cs
│
└── README.md
```

The exact structure may change as the project continues to develop.

---

# 🗄️ Database

The project currently uses a Microsoft Access database:

```text
Database/MShalomDatabase.accdb
```

One of the main tables is:

```text
Enquiries
```

The intended enquiry information includes:

* Enquiry ID
* Full Name
* Email
* Phone
* Subject
* Message
* Date Submitted
* Status
* Vehicle of Interest

The database and backend are being developed alongside the website.

---

# 🔌 Backend Architecture

The website is being developed using ASP.NET Core Web API.

The backend is responsible for providing server-side functionality that cannot be handled safely or reliably by frontend JavaScript alone.

The planned architecture is:

```text
                 ┌──────────────────┐
                 │      Customer    │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   HTML / CSS /   │
                 │   JavaScript     │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ ASP.NET Core API │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Microsoft Access │
                 │    Database      │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   Dealership     │
                 │   Notifications  │
                 └──────────────────┘
```

---

# 📱 Responsive Design

The website is being developed to work across different screen sizes, including:

* Desktop computers
* Laptops
* Tablets
* Mobile phones

Responsive styling is handled primarily through CSS.

---

# 🔄 Development Status

This project is **actively under development**.

### Currently implemented

* [x] Multi-page website
* [x] Homepage
* [x] About Us page
* [x] Services page
* [x] Contact Us page
* [x] Matric Dance page
* [x] Vehicle inventory
* [x] Vehicle cards
* [x] Vehicle sorting
* [x] Vehicle image galleries
* [x] Multiple images per vehicle
* [x] Vehicle enquiry links
* [x] Automatic vehicle information on enquiry page
* [x] Light/dark mode
* [x] ASP.NET Core project structure
* [x] Microsoft Access database
* [x] Enquiry model
* [x] Initial backend/database integration

### Planned / Future Development

* [ ] Complete enquiry API integration
* [ ] Store customer enquiries automatically
* [ ] Dealership email notifications
* [ ] Inventory management system
* [ ] Administrative dashboard
* [ ] Add/edit/remove vehicles through an admin interface
* [ ] Database-driven inventory
* [ ] User authentication
* [ ] Staff accounts and permissions
* [ ] Improved image management
* [ ] Deployment to a production web server
* [ ] Domain and hosting configuration
* [ ] SEO improvements
* [ ] Performance optimisation
* [ ] Security improvements
* [ ] Further mobile optimisation

The project will continue to evolve as requirements are identified and new features are developed.

---

# 🎓 Project Background

The website was initially created as part of a university web development project.

During development, the project grew beyond the original academic requirements and became an opportunity to develop a **real-world website for M Shalom Trading**.

The project is therefore being used for two purposes:

* Academic learning and practical application of programming concepts
* Ongoing personal development of a functional company website

This allows technologies learned through university to be applied to a real-world environment.

---

# 👨‍💻 Developer

Developed and maintained as a personal software development project.

The project provides practical experience in:

* Web development
* Frontend development
* Backend development
* C#
* ASP.NET Core
* JavaScript
* Database integration
* Microsoft Access
* Git and GitHub
* UI/UX design
* Responsive web design
* Software project organisation
* Real-world business requirements

---

# 📌 Project Philosophy

The aim of this project is not simply to create a static website.

The long-term goal is to develop the website into a **functional digital platform for M Shalom Trading**.

As development continues, the project may expand from a customer-facing website into a system capable of assisting with areas such as:

* Vehicle inventory management
* Customer enquiries
* Staff management
* Business administration
* Service management
* Internal dealership workflows

Features will be introduced gradually as requirements are established.

---

# ⚠️ Development Notes

This project is currently under active development.

Some functionality may still be incomplete, experimental, or subject to change.

The inventory information and vehicle availability displayed by the website should be verified against the company's current records before being treated as definitive.

---

# 📄 License

This project is developed specifically for M Shalom Trading and is not intended to be redistributed, resold, or reused commercially without permission.

The source code is primarily maintained for development, educational, and company-related purposes.
