# System Admin Dashboard

A comprehensive Angular-based Admin System for managing users, products, orders, and business analytics. This modern, responsive dashboard provides complete control over your business operations with a professional interface and powerful features.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Quick Start](#quick-start)
- [Login Credentials](#login-credentials)
- [Dashboard Features](#dashboard-features)
- [How to Use](#how-to-use)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

---

## 🎯 Project Overview

**System Admin** is a full-featured administrative dashboard application built with Angular 21, designed to streamline business operations. It provides intuitive tools for managing users, inventory, orders, and generating detailed business reports.

### Key Capabilities:
- **User Management**: Add, edit, delete, and manage system users with role-based access control
- **Product Catalog**: Maintain your product inventory with pricing, descriptions, and stock tracking
- **Order Management**: Track customer orders from placement to delivery
- **Business Analytics**: Generate reports and track key performance indicators (KPIs)
- **Real-time Dashboard**: Monitor key metrics including sales, users, and order statistics
- **Account Management**: Manage your admin profile and system preferences
- **Responsive Design**: Optimized for desktop and mobile devices

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 10+
- Angular CLI 21+

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HaykTunyan/System-Admin.git
   cd System-Admin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200/`

4. **Access the application:**
   - Open your browser and navigate to `http://localhost:4200/`
   - You will be redirected to the login page

---

## 🔐 Login Credentials

### Default Admin Account:

| Field | Value |
|-------|-------|
| **Email** | `admin@example.com` |
| **Password** | `password` |

### Security Best Practices:
⚠️ **Important**: After first login, immediately change your password from the Account Settings page.

### For Additional Users:
- Navigate to Users Management → Add New User
- Assign appropriate roles and permissions
- New users will receive login credentials via email

---

## 📊 Dashboard Features

### 1. **Home/Overview**
   - **Real-time Metrics**: View total users, total sales, and new orders at a glance
   - **Sales Chart**: Interactive bar chart showing monthly sales trends
   - **Order Analytics**: Visual representation of order fulfillment metrics
   - **Quick Stats Cards**: Colorful cards displaying key performance indicators

### 2. **Users Management**
   - **User List**: View all registered users in a data table
   - **Search & Filter**: Find users by name, email, status, or role
   - **Add User**: Create new user accounts with email, role assignment
   - **Edit User**: Modify user information and permissions
   - **Delete User**: Remove users from the system (with confirmation)
   - **User Roles**: Assign Admin, Manager, or User roles

### 3. **Products Management**
   - **Product Catalog**: Browse all products in inventory
   - **Add Products**: Create new products with:
     - Product name and description
     - Price and cost information
     - Stock quantity tracking
     - Product category assignment
   - **Edit Products**: Update product details and stock levels
   - **Delete Products**: Remove discontinued products
   - **Stock Tracking**: Monitor inventory levels in real-time

### 4. **Orders Management**
   - **Order History**: View all customer orders with timestamps
   - **Order Details**: See complete order information including:
     - Customer details
     - Product items and quantities
     - Order total and payment status
     - Shipping information
   - **Order Status**: Update order status (Pending → Shipped → Delivered)
   - **Search Orders**: Find orders by date range, customer, or order ID
   - **Order Reports**: Generate order fulfillment reports

### 5. **Reports & Analytics**
   - **Sales Reports**: Revenue analysis by time period
   - **Product Performance**: Top-selling products and inventory analysis
   - **User Activity**: Track user engagement and activity levels
   - **Custom Reports**: Generate reports for specific date ranges
   - **Export Data**: Download reports as files for external analysis

### 6. **Settings & Configuration**
   - **System Preferences**: Configure system-wide settings
   - **Notification Settings**: Manage email and alert preferences
   - **Localization**: Set currency, timezone, and language options
   - **Theme Settings**: Choose between light and dark mode
   - **Security Settings**: Configure security policies and session timeouts

### 7. **Account Management**
   - **Profile Update**: Edit your name, email, and contact information
   - **Password Change**: Securely update your account password
   - **Login History**: View your recent login activities
   - **Preferences**: Set your personal dashboard preferences
   - **Two-Factor Authentication**: Optional enhanced security

### 8. **Help & Documentation**
   - **Getting Started Guide**: Learn how to use each feature
   - **Feature Documentation**: Detailed guides for each admin section
   - **Best Practices**: Tips and tricks for efficient system usage
   - **Quick Links**: Fast navigation to all dashboard sections

---

## 📖 How to Use

### Logging In
1. Open the application in your web browser
2. Enter your email: `admin@example.com`
3. Enter your password: `password`
4. Click "Login"
5. You will be redirected to the Dashboard

### Navigating the Dashboard
The main navigation is located in the **left sidebar**:
- **Dashboard**: Home overview with key metrics
- **Users**: Manage system users
- **Products**: Manage product inventory
- **Orders**: Track customer orders
- **Reports**: View business analytics
- **Settings**: Configure system preferences
- **Account**: Manage your profile and preferences
- **Help**: Access documentation and guides

### Common Tasks

#### Adding a New User:
1. Click **Users** in the sidebar
2. Click **Add New User** button
3. Fill in user details (name, email, role)
4. Click **Save**

#### Creating a New Product:
1. Click **Products** in the sidebar
2. Click **Add New Product** button
3. Enter product details (name, price, description, stock)
4. Click **Save**

#### Viewing Orders:
1. Click **Orders** in the sidebar
2. View all orders in the table
3. Click on an order to see full details
4. Update order status as needed

#### Generating a Report:
1. Click **Reports** in the sidebar
2. Select the report type (Sales, Products, Users, Orders)
3. Choose your date range
4. Click **Generate Report**
5. Optionally export as PDF or Excel

#### Updating Your Profile:
1. Click **Account** in the sidebar
2. Click **Edit Profile**
3. Update your information
4. Click **Save Changes**

#### Creating Backups:
1. Go to **Settings**
2. Navigate to **Data Management**
3. Click **Export Data** to download a backup
4. Keep your backups in a secure location

---

## 🛠️ Installation & Setup

### Full Installation Steps:

```bash
# 1. Clone the repository
git clone https://github.com/HaykTunyan/System-Admin.git
cd System-Admin

# 2. Install Node.js dependencies
npm install

# 3. Install optional Highcharts for enhanced Charts (recommended)
npm install highcharts highcharts-angular

# 4. Start development server
npm start

# 5. Open in browser
# Navigate to http://localhost:4200/
```

### Build for Production:

```bash
# Build the project
npm run build

# Output will be in the dist/ directory
# Deploy to your hosting platform
```

### Serve Production Build:

```bash
ng serve --configuration production
```

---

## 💻 Development

### Available Scripts:

```bash
# Start development server (with hot reload)
npm start

# Build for production
npm run build

# Build in watch mode (for development)
npm run watch

# Run unit tests
npm test

# Run end-to-end tests
npm run e2e

# Lint and format code
npm run lint
```

### Code Scaffolding:

```bash
# Generate a new component
ng generate component component-name

# Generate a service
ng generate service service-name

# Generate a directive
ng generate directive directive-name

# View all available schematics
ng generate --help
```

### Charts Configuration:

The application supports two charting libraries:

**Chart.js** (Default - Lightweight):
```typescript
import { CardsComponent } from '$/app/layout/components/cards/cards.component';
import { GraphicsComponent } from '$/app/layout/components/graphics/graphics.component';
```

**Highcharts** (Optional - Feature-rich):
```bash
npm install highcharts highcharts-angular
```

Pass data to components via inputs. Default values are provided if no data is passed.

---

## 📁 Project Structure

```
System-Admin/
├── src/
│   ├── app/
│   │   ├── core/                    # Core services and guards
│   │   │   ├── guards/              # Auth and navigation guards
│   │   │   ├── interceptors/        # HTTP interceptors
│   │   │   ├── models/              # TypeScript interfaces and models
│   │   │   └── services/            # Core business services
│   │   ├── features/                # Feature modules
│   │   │   ├── dashboard/           # Dashboard feature
│   │   │   │   ├── home/            # Dashboard home page
│   │   │   │   ├── users-list/      # Users management
│   │   │   │   ├── products/        # Products management
│   │   │   │   ├── reports/         # Reports and analytics
│   │   │   │   ├── settings/        # System settings
│   │   │   │   ├── account/         # Account settings
│   │   │   │   ├── help/            # Help and documentation
│   │   │   │   └── order-history/   # Order history view
│   │   │   └── login/               # Login feature
│   │   ├── layout/                  # Layout components
│   │   │   ├── components/          # Reusable layout components
│   │   │   │   ├── header/          # Top navigation header
│   │   │   │   ├── sidebar/         # Side navigation menu
│   │   │   │   ├── cards/           # Stat cards
│   │   │   │   ├── charts/          # Chart components
│   │   │   │   └── ...
│   │   │   └── services/            # Layout-specific services
│   │   ├── shared/                  # Shared components and utilities
│   │   │   ├── button/              # Reusable button component
│   │   │   ├── modal/               # Modal dialogs
│   │   │   ├── user-filter/         # Reusable filter component
│   │   │   └── ...
│   │   ├── app.routes.ts            # Application routing configuration
│   │   ├── app.ts                   # Root component
│   │   └── app.config.ts            # App configuration
│   ├── environments/                # Environment configurations
│   ├── styles/                      # Global styles
│   │   ├── styles.scss              # Main stylesheet
│   │   ├── variables.scss           # SCSS variables
│   │   ├── mixins.scss              # SCSS mixins
│   │   └── themes.scss              # Theme definitions
│   ├── index.html                   # HTML entry point
│   ├── main.ts                      # Application bootstrap
│   └── server.ts                    # Server-side rendering setup
├── angular.json                     # Angular CLI configuration
├── package.json                     # npm dependencies
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
```

---

## 🛠️ Technologies Used

### Frontend Framework:
- **Angular 21.1.5**: Modern, component-based framework
- **TypeScript**: Type-safe JavaScript
- **RxJS 7.8**: Reactive programming library

### UI Components & Styling:
- **Angular Material 21.1.5**: Material Design components
- **SCSS**: Advanced CSS preprocessing
- **CSS Grid & Flexbox**: Responsive layouts

### Data Visualization:
- **Chart.js 4.5.1**: Lightweight charting library
- **ng2-charts 8.0.0**: Angular wrapper for Chart.js
- **Highcharts 11.4.8**: Advanced charting (optional)
- **Highcharts Angular 2.10.0**: Highcharts Angular integration

### HTTP & State Management:
- **Angular HTTP Client**: API communication
- **RxJS Observables**: Reactive state management
- **Interceptors**: Request/response handling

### Additional Libraries:
- **Angular CDK 21.1.5**: Component Development Kit
- **ngx-cookie-service 21.1.0**: Cookie management
- **Express 5.1.0**: Server-side rendering support
- **Angular SSR 21.1.4**: Server-side rendering

### Build & Development:
- **Angular CLI 21.1.4**: Command-line interface
- **Vitest**: Unit testing framework
- **Node.js 18+**: Runtime environment

---

## 🔒 Security Features

- ✅ **Authentication Guard**: Protected routes require login
- ✅ **Authorization**: Role-based access control
- ✅ **Token Interceptor**: Automatic token injection in requests
- ✅ **Password Security**: Encrypted password storage
- ✅ **Session Management**: Automatic session timeout
- ✅ **CSRF Protection**: Cross-site request forgery protection

---

## 📞 Support & Help

### In-Application Help:
- Click the **Help** menu item in the sidebar for comprehensive guidance
- Expandable sections explain each feature in detail
- Quick access links to all dashboard sections

### Troubleshooting:

**Can't log in?**
- Ensure you're using the correct credentials: `admin@example.com` / `password`
- Clear your browser cache and cookies
- Try a different browser

**Dashboard not loading?**
- Ensure the development server is running (`npm start`)
- Check that you're accessing `http://localhost:4200/`
- Open browser console (F12) for error messages

**Changes not appearing?**
- The app has hot reload enabled - wait a moment for auto-refresh
- Manually refresh the page (Ctrl+R or Cmd+R)

---

## 📝 License

This project is provided as-is for development and learning purposes.

---

## ✨ Features Roadmap

- [ ] Enhanced user roles and permissions system
- [ ] Mobile app version
- [ ] Advanced data export options (Excel, PDF, CSV)
- [ ] Email notifications for order updates
- [ ] Inventory forecasting
- [ ] Advanced analytics with predictive insights
- [ ] Multi-language support
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Automated backups
- [ ] Role-based custom dashboards

---

## 📧 Contact & Feedback

For issues, feature requests, or feedback, please open an issue on GitHub.

**Repository**: [HaykTunyan/System-Admin](https://github.com/HaykTunyan/System-Admin)

---

**Version**: 1.0.0  
**Angular Version**: 21.1.5
