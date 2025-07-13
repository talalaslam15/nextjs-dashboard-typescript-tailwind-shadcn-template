# Next.js Dashboard Template

A modern, feature-rich Next.js dashboard template built with TypeScript, Tailwind CSS v4, and shadcn/ui components. This template provides a solid foundation for building beautiful, accessible, and responsive dashboard applications.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack for fast development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS v4** for utility-first styling
- **shadcn/ui** - Beautiful, accessible, and customizable UI components
- **Dark/Light Mode** support with next-themes
- **Form Handling** with React Hook Form and Zod validation
- **Charts & Visualizations** with Recharts
- **Icons** from Lucide React
- **Responsive Design** with mobile-first approach
- **ESLint** configuration for code quality

## 📦 Included Components

This template comes with a comprehensive set of pre-built components from shadcn/ui:

- **Layout**: Sidebar, Navigation Menu, Breadcrumb
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch
- **Data Display**: Table, Card, Badge, Avatar, Separator
- **Feedback**: Alert, Toast (Sonner), Progress, Skeleton
- **Overlays**: Dialog, Sheet, Popover, Hover Card, Tooltip
- **Navigation**: Tabs, Accordion, Command, Pagination
- **Interactive**: Button, Dropdown Menu, Context Menu, Carousel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs-dashboard-typescript-tailwind-shadcn-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── DarkModeToggle.tsx # Dark mode toggle component
│   └── theme-provider.tsx # Theme provider wrapper
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
│   └── utils.ts          # Utility functions (cn, etc.)
├── public/               # Static assets
└── components.json       # shadcn/ui configuration
```

## 🎨 Customization

### Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

### Styling

- Modify `app/globals.css` for global styles
- Use Tailwind CSS classes for component styling
- Customize the theme in `tailwind.config.js`

### Dark Mode

The template includes a dark mode toggle. The theme is managed by `next-themes` and can be customized in the `theme-provider.tsx` component.

## 📚 Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation
- [Lucide React](https://lucide.dev/) - Icon library
- [Recharts](https://recharts.org/) - Chart library

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Platforms

This template can be deployed to any platform that supports Node.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)

## 📖 Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [shadcn/ui Documentation](https://ui.shadcn.com/docs) - learn about shadcn/ui components

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
