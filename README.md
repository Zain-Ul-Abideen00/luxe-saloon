# Luxe Salon - Premium Beauty & Wellness

A modern, elegant website for a premium beauty salon showcasing services, team, gallery, and contact information.

## About

Luxe Salon is a luxury beauty and wellness salon website built with modern web technologies. The site features a beautiful, responsive design that highlights the salon's premium services, expert team, and elegant atmosphere.

## Features

-   **Hero Section**: Eye-catching landing section with call-to-action buttons
-   **Services**: Showcase of beauty services including:
    -   Hair Styling
    -   Hair Coloring
    -   Spa Treatments
    -   Nail Services
-   **Gallery**: Visual showcase of salon work and atmosphere
-   **Team**: Introduction to expert stylists and staff
-   **Testimonials**: Client reviews and feedback
-   **Contact Form**: Easy appointment booking and inquiry system
-   **Responsive Design**: Fully responsive layout for all devices

## Technologies

This project is built with:

-   **Vite** - Fast build tool and development server
-   **TypeScript** - Type-safe JavaScript
-   **React** - Modern UI library
-   **shadcn-ui** - High-quality component library
-   **Tailwind CSS** - Utility-first CSS framework
-   **React Router** - Client-side routing
-   **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn package manager

### Installation

1. Clone the repository:

```sh
git clone <YOUR_REPOSITORY_URL>
cd luxe-saloon
```

2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

To create a production build:

```sh
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```sh
npm run preview
```

## Project Structure

```
luxe-saloon/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn-ui components
│   │   ├── Contact.tsx   # Contact section
│   │   ├── Footer.tsx    # Footer component
│   │   ├── Gallery.tsx   # Gallery section
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Navigation.tsx # Navigation bar
│   │   ├── Services.tsx  # Services section
│   │   ├── Team.tsx      # Team section
│   │   └── Testimonials.tsx # Testimonials section
│   ├── pages/            # Page components
│   ├── assets/           # Images and static assets
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Application entry point
├── public/               # Public assets
└── package.json          # Project dependencies
```

## Development

### Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run build:dev` - Build in development mode
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint

### Customization

The site can be easily customized by:

-   Updating service information in `src/components/Services.tsx`
-   Modifying team members in `src/components/Team.tsx`
-   Changing contact information in `src/components/Contact.tsx`
-   Updating colors and styling in `tailwind.config.ts`
-   Adding new sections in `src/pages/Index.tsx`

## Deployment

This project can be deployed to any static hosting service:

-   **Vercel**: Connect your GitHub repository and deploy automatically
-   **Netlify**: Drag and drop the `dist` folder or connect via Git
-   **GitHub Pages**: Use GitHub Actions to build and deploy
-   **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

### Environment Variables

No environment variables are required for basic functionality. If you need to add API endpoints or other configuration, create a `.env` file in the root directory.

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the development team.
