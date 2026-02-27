import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-help',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatCardModule],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class DashboardHelpComponent {
  sections = [
    {
      title: 'Dashboard Overview',
      icon: 'dashboard',
      content: `The Dashboard serves as the main hub of your Admin System. It provides a quick overview of key metrics and activities.
      
      Key Features:
      • View total users, sales, and new orders at a glance
      • Monitor sales trends with interactive charts
      • Check recent orders and sales performance
      • Access all admin features from the sidebar
      
      The dashboard updates in real-time, giving you the most current information about your system.`
    },
    {
      title: 'Users Management',
      icon: 'people',
      content: `Manage all system users from the Users section.
      
      What you can do:
      • View a complete list of all registered users
      • Search and filter users by various criteria
      • Add new users to the system
      • Edit user information and permissions
      • Delete users when necessary
      • Manage user roles and access levels
      
      Best Practices:
      • Regularly review user permissions
      • Remove inactive users to maintain security
      • Assign appropriate roles based on job responsibilities`
    },
    {
      title: 'Products Management',
      icon: 'store',
      content: `The Products section allows you to manage your product catalog.
      
      Capabilities:
      • View all products in your inventory
      • Add new products with details (name, price, description, stock)
      • Edit existing product information
      • Delete products no longer needed
      • Track product stock levels
      • Organize products by categories
      
      Tips:
      • Keep product information current and accurate
      • Regularly update stock levels
      • Use clear and descriptive product names
      • Include relevant product details for customer clarity`
    },
    {
      title: 'Orders Management',
      icon: 'shopping_cart',
      content: `Track and manage all customer orders in the Orders section.
      
      What you can do:
      • View order history and status
      • Track order details including items, quantities, and prices
      • Update order status (pending, shipped, delivered)
      • Search orders by date, customer, or order ID
      • Generate order-related reports
      • Monitor order fulfillment
      
      Important:
      • Update order status promptly for customer satisfaction
      • Keep detailed records of all transactions
      • Communicate with customers about order updates`
    },
    {
      title: 'Reports & Analytics',
      icon: 'assessment',
      content: `Generate insights and reports to track your business performance.
      
      Available Reports:
      • Sales reports by time period
      • Revenue analysis
      • Product performance metrics
      • User activity summaries
      • Order fulfillment statistics
      • Custom date range reports
      
      Usage:
      • Use reports to identify trends
      • Make data-driven business decisions
      • Monitor KPIs and business metrics
      • Export reports for external sharing
      • Schedule regular report reviews`
    },
    {
      title: 'Settings & Configuration',
      icon: 'settings',
      content: `Customize your system settings to match your business needs.
      
      Configuration Options:
      • System preferences and defaults
      • Notification settings
      • Currency and localization options
      • Integration settings
      • Security preferences
      • Theme and display options
      
      Admin Only:
      • These settings affect the entire system
      • Changes apply to all users
      • Backup before making major changes
      • Document any custom configurations`
    },
    {
      title: 'Account Management',
      icon: 'account_circle',
      content: `Manage your personal admin account and profile.
      
      What you can do:
      • Update your profile information
      • Change your password
      • Set your preferences
      • View your login history
      • Manage notification settings
      • Set your theme preference (light/dark mode)
      
      Security Tips:
      • Change your password regularly
      • Use a strong, unique password
      • Enable two-factor authentication if available
      • Monitor your login activity
      • Log out from all sessions when done`
    },
    {
      title: 'Getting Started Tips',
      icon: 'lightbulb',
      content: `Quick tips to get the most out of your Admin System:
      
      First Time Setup:
      1. Update your account information in Account Settings
      2. Familiarize yourself with the Dashboard
      3. Add initial users to the system
      4. Set up your product catalog
      5. Configure system settings for your business
      
      Daily Tasks:
      • Check the Dashboard for overview and alerts
      • Monitor new orders
      • Update order statuses
      • Review user activities
      
      Weekly Tasks:
      • Generate and review reports
      • Check inventory levels
      • Review system performance
      • Update products as needed
      
      Need Help?
      • Hover over icons for tooltips
      • Use the search functions for quick access
      • Check your browser console for error messages
      • Contact support if you encounter issues`
    }
  ];
}
