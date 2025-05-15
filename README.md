# MovieHub - Next.js Movie Discovery Platform

A modern, server-side rendered movie discovery platform built with Next.js 15, TypeScript, and Tailwind CSS. This application provides a seamless experience for browsing, searching, and exploring movie details using the TMDB API.

## 🌟 Features

- **Server-Side Rendering (SSR)**
  - Optimized performance with Next.js 15
  - SEO-friendly pages with dynamic metadata
  - Fast initial page loads

- **Movie Discovery**
  - Browse popular movies
  - Responsive grid layout
  - Movie cards with essential information
  - Smooth loading states with skeleton UI

- **Advanced Search**
  - Real-time search suggestions
  - Debounced API calls
  - URL-based state management
  - Autocomplete with movie posters

- **Movie Details**
  - Comprehensive movie information
  - High-quality backdrop and poster images
  - Production company details
  - Similar movies recommendations
  - Responsive hero section

- **Modern UI/UX**
  - Clean and intuitive design
  - Responsive layout for all devices
  - Loading states and animations
  - Error handling and fallbacks
  - Smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: TMDB (The Movie Database)
- **Image Optimization**: Next.js Image Component
- **State Management**: URL-based with Next.js Router
- **HTTP Client**: Axios

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/rabieeali/moviehub.git
   cd moviehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_TMDB_ACCESS_TOKEN=your_tmdb_access_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
moviehub/
├── app/
│   ├── actions.ts           # Server actions
│   ├── movie/
│   │   └── [id]/           # Movie details page
│   ├── page.tsx            # Homepage
│   └── layout.tsx          # Root layout
├── components/
│   ├── features/
│   │   ├── SearchBar.tsx   # Search component
│   │   └── Pagination.tsx  # Pagination component
│   └── ui/                 # Reusable UI components
├── services/
│   ├── httpService.ts      # HTTP client setup
│   └── movieService.ts     # Movie API integration
└── lib/
    └── utils.ts            # Utility functions
```

## 🔑 Key Features Implementation

### Server-Side Rendering
- Utilizes Next.js 15's App Router
- Implements server components for optimal performance
- Dynamic metadata generation for SEO

### Search Implementation
- Real-time search suggestions with debouncing
- Server-side search action for security
- URL-based state management for shareable searches

### Movie Details
- Comprehensive movie information display
- Similar movies recommendations
- Production company details
- Responsive image handling

### Error Handling
- Custom error boundaries
- Not found pages
- Loading states with skeleton UI
- Graceful fallbacks

## 🎨 UI/UX Features

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts
  - Optimized images

- **Loading States**
  - Skeleton loading UI
  - Smooth transitions
  - Loading spinners

- **Interactive Elements**
  - Hover effects
  - Smooth animations
  - Intuitive navigation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie data API
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
