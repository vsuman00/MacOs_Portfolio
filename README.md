# 🖥️ macOS Portfolio

A stunning, interactive portfolio website that replicates the macOS desktop experience. Built with React, Vite, and modern web technologies, this portfolio showcases projects, skills, and contact information through an intuitive macOS-inspired interface.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?logo=greensock&logoColor=white)

## ✨ Features

- **Authentic macOS Experience** – Navbar, dock with animated icons, draggable windows, and desktop folders
- **Interactive Dock** – Animated dock icons with proximity-based scaling effects (just like the real macOS dock!)
- **Draggable Windows** – Open, close, focus, and drag application windows freely across the desktop
- **Multiple Applications:**
  - 📁 **Finder** – Browse projects organized in folders with files (text, images, URLs)
  - 🌐 **Safari** – View blog posts and articles
  - 🖼️ **Photos** – Gallery showcase
  - 💬 **Contact** – Social links and contact information
  - 💻 **Terminal** – Skills and tech stack display
  - 📄 **Resume** – PDF resume viewer
- **Smooth Animations** – GSAP-powered transitions and micro-interactions
- **Fully Responsive** – Works beautifully on all screen sizes

## 🛠️ Tech Stack

| Category             | Technologies                |
| -------------------- | --------------------------- |
| **Framework**        | React 19, Vite 7            |
| **Styling**          | Tailwind CSS 4              |
| **Animations**       | GSAP 3, @gsap/react         |
| **State Management** | Zustand with Immer          |
| **UI Components**    | Lucide React, React Tooltip |
| **PDF Viewer**       | React PDF                   |
| **Utilities**        | clsx, Day.js                |

## 📁 Project Structure

```
mac-portfolio/
├── public/
│   ├── files/          # PDF and document files
│   ├── icons/          # SVG icons for UI elements
│   └── images/         # Project screenshots, photos, dock icons
├── src/
│   ├── components/     # Core UI components
│   │   ├── Dock.jsx        # Animated macOS dock
│   │   ├── Home.jsx        # Desktop with draggable folders
│   │   ├── Navbar.jsx      # Top navigation bar
│   │   ├── Welcome.jsx     # Welcome screen animation
│   │   └── WindowControls.jsx
│   ├── windows/        # Application window components
│   │   ├── Finder.jsx      # File browser
│   │   ├── Safari.jsx      # Blog/Articles viewer
│   │   ├── Photos.jsx      # Gallery
│   │   ├── Contact.jsx     # Contact information
│   │   ├── Terminal.jsx    # Skills display
│   │   ├── Resume.jsx      # PDF resume viewer
│   │   ├── Text.jsx        # Text file viewer
│   │   └── Image.jsx       # Image viewer
│   ├── store/          # Zustand state management
│   │   ├── window.js       # Window open/close/focus state
│   │   └── location.js     # Finder navigation state
│   ├── constants/      # App configuration and data
│   ├── hoc/            # Higher-order components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vsuman00/mac-portfolio.git
   cd mac-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build
```

## 🎨 Customization

### Adding New Projects

Edit `src/constants/index.js` and add entries to `WORK_LOCATION.children`:

```javascript
{
  id: 8,
  name: "Your Project Name",
  icon: "/images/folder.png",
  kind: "folder",
  windowPosition: "top-[10vh] left-5",
  children: [
    {
      id: 1,
      name: "Project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      description: ["Project description..."],
    },
    // Add more files (images, URLs, etc.)
  ],
}
```

### Adding Dock Apps

Modify the `dockApps` array in `src/constants/index.js` and create a corresponding window component.

### Updating Personal Information

- **Socials** – Update the `socials` array in constants
- **Tech Stack** – Modify the `techStack` array
- **About Me** – Edit `ABOUT_LOCATION` in constants
- **Resume** – Replace the PDF in `public/files/`

## 📜 Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint for code quality       |

## 🙏 Acknowledgments

- Inspired by Apple's macOS design language
- GSAP for powerful animation capabilities
- The React community for excellent tools and libraries

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Vaibhav Suman](https://github.com/vsuman00)**

[GitHub](https://github.com/vsuman00) • [LinkedIn](https://www.linkedin.com/in/vaibhav-suman/) • [Twitter](https://x.com/VaibhavSuman00)

</div>
