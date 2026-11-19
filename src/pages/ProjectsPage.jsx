import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import PageMain from "../components/layout/PageMain";
import ProjectsPaginationButton from "../components/projects/ProjectsPaginationButton";
import ProjectsTemplate from "../components/projects/ProjectsTemplate";
import ProjectsPagination from "../components/projects/ProjectsPagination";
import { useRenderProjects } from "../hooks/useRenderProjects";

const ProjectsPage = () => {
  const [animation, setAnimation] = useState({ initial: "", exit: "" });

  const featuredProjects = [
    {
      id: 0,
      project_image: "/assets/projects/calor-stiches.png",
      project_topic: "calor stitches (volunteer)",
      project_github: "Calor-Stitches.git",
      project_link: "calorstitches.vercel.app",
      project_text: "Calor Stitches is an e-commerce clothing website where users can browse a range of stitched clothing items and add products to their cart through a seamless checkout flow.",
      project_description: "Calor Stitches is a volunteer project I've been building for a client since 2024. It began as a frontend-only app in React, CSS, and localStorage, then moved to Next.js and TypeScript as its complexity grew: routing, modal flows, and shared state were getting hard to manage without a framework. The storefront is largely finished and fully responsive, with browsing, filtering, search, wishlist, cart, and checkout screens. I'm now building a Java backend to replace the static data and add real accounts and orders.",
      project_status: "In development: storefront UI largely complete, backend in progress and not yet integrated.",
      project_architecture: [
        "Current: Next.js (TypeScript) storefront deployed on Vercel, with statically generated product pages",
        "Current: Intercepting and parallel routes power the authentication, user, and product-preview modals",
        "Planned: Dexie.js (IndexedDB) stores the cart and wishlist locally for offline use",
        "Planned: Spring Boot REST API with Spring Security (JWT) for authentication",
        "Planned: Spring Data JPA with PostgreSQL for products, users, orders, and posts",
        "Planned: Offline cart and wishlist sync to the user's account on sign-in or sign-up",
        "Planned: Separate admin app for managing products and blog posts"
      ],
      project_features: [
        { id: 0, topic: "Collection pages", description: "Browse clothing by category with sorting such as latest and oldest." },
        { id: 1, topic: "Product display and filters", description: "Filter products by price, color, size, category, and more." },
        { id: 2, topic: "Search", description: "Find products quickly from anywhere in the store." },
        { id: 3, topic: "Wishlist and cart", description: "Save items for later or add them to the cart, kept locally so they persist offline." },
        { id: 4, topic: "Checkout flow", description: "Checkout screens with multiple payment options shown. Payment gateway integration is not yet done." },
        { id: 5, topic: "Authentication screens", description: "Sign-in and sign-up flows presented in modals. Real account handling arrives with the backend." },
        { id: 6, topic: "Naira and dollar pricing", description: "Switch product prices between naira and dollars using a fixed exchange rate for now." },
        { id: 7, topic: "Fashion blog", description: "Read fashion articles, filter posts by tag, and see author details on each post. Content is static for now." },
        { id: 8, topic: "Responsive and animated UI", description: "Fully responsive layouts with Motion-powered animations." }
      ],
      project_stack: [
        { id: 0, stack_name: "nextjs", stack_use: "Moved here from plain React once the app outgrew it: file-based routing, static generation for fast product pages, and intercepting routes for modal flows that keep working on refresh." },
        { id: 1, stack_name: "css", stack_use: "Hand-written styling for the storefront's custom look and responsive layouts." },
        { id: 2, stack_name: "typescript", stack_use: "Typed product, cart, and user models catch data-shape mistakes at build time, which matters in a codebase this large." },
        { id: 3, stack_name: "dexiejs", stack_use: "A friendly layer over IndexedDB that stores cart and wishlist offline and will sync them to the user's account on sign-in. IndexedDB suits this better than localStorage because it handles structured data and larger volumes." },
        { id: 4, stack_name: "motion", stack_use: "Page transitions, modals, and interactive details that make browsing and cart actions feel responsive." },
        { id: 5, stack_name: "java", stack_use: "Planned: backend language, chosen for strong typing and a mature ecosystem for building secure APIs." },
        { id: 6, stack_name: "spring boot", stack_use: "Planned: gives me a production-ready REST API with sensible defaults, so I spend time on shop logic instead of configuration." },
        { id: 7, stack_name: "spring data jpa", stack_use: "Planned: maps products, users, and orders to database tables so data access stays consistent and type-safe." },
        { id: 8, stack_name: "spring security", stack_use: "Planned: stateless token-based authentication so the Next.js app and the API can stay independent." },
        { id: 9, stack_name: "postgresql", stack_use: "Planned: relational database for orders, users, and products, whose relationships (an order has many items) fit SQL naturally." },
        { id: 10, stack_name: "maven", stack_use: "Planned: builds the Java backend and manages its dependencies." }
      ],
      project_upcoming: "Building and integrating the Spring Boot backend, connecting a payment gateway, syncing offline cart and wishlist to user accounts, adding an order-tracking page, and a separate admin app for managing products and blog posts. Live currency rates and a real article feed are also on the list."
    },
    {
      id: 1,
      project_image: "/assets/projects/soars.png",
      project_topic: "SOARS",
      project_github: "SOARS.git",
      project_link: "soars-app.vercel.app",
      project_text: "SOARS is a personal library for saving, organizing, archiving, and sharing links, files, and notes, all in one clean, searchable workspace.",
      project_description: "SOARS brings everything people usually scatter across bookmarks, chat messages, and download folders into one place. Users can save a link, upload a file, or write a note, then group items into collections, tag them, favorite them, archive them, or share them through a public link. I designed the full system first (mobile, tablet, and desktop frames with a defined palette, type scale, and component style) and am building it in stages: the interface for the sub-routes is largely built, and I'm connecting it to the authentication, API, and storage layers.",
      project_status: "In development: Core resource management and AI-powered features implemented; transitioning from a mock API and local storage to production-ready infrastructure.",
      // TODO(you): adjust the status line to what is actually connected right now
      // (for example "Supabase auth working" if it is).
      project_architecture: [
        "Frontend: Next.js App Router with TypeScript, deployed on Vercel",
        "Backend: Next.js Route Handlers handle authentication checks, resource operations, validation, and AI-related requests",
        "Development database: JSON Server with db.json for mock API data",
        "File storage: Local filesystem storage for uploaded PDFs during development",
        "AI development: Gemma 4 (E2B) running locally through Ollama",
        "AI production: Gemini API as the managed AI provider",
        "Planned: Supabase Authentication for user registration, login, and session management",
        "Planned: PostgreSQL for persistent storage of users' resources and their relationships",
        "Planned: AWS S3 for scalable file and document storage"
      ],
      project_features: [
        { id: 0, topic: "Unified resource management", description: "Save links, upload PDF files, and create notes in one workspace."},
        { id: 1, topic: "AI-powered resource analysis", description: "Uses Gemma 4 to generate resource summaries, extract relevant tags, and recommend suitable collections when saving links, files, and notes."},
        { id: 2, topic: "AI resource assistant", description: "Ask questions in natural language and retrieve relevant resources from your personal library, with contextual answers and links to the original resources."},
        { id: 3, topic: "Collections", description: "Organize related links, files, and notes into named collections."},
        { id: 4, topic: "Tags", description: "Categorize resources with tags and filter your library by specific topics."},
        { id: 5, topic: "Global search", description: "Search across saved links, files, and notes using resource titles, summaries, URLs, and tags."},
        { id: 6, topic: "Favorites and bookmarks", description: "Mark important resources for quick access."},
        { id: 7, topic: "Archive and trash", description: "Clear clutter without losing anything permanently; trashed items can be restored." },
        { id: 8, topic: "Sharing", description: "Copy a link, share externally, or generate a public link to a collection anyone can view without an account." },
        { id: 9, topic: "Bulk actions", description: "Multi-select to move, tag, archive, or delete several items at once." },
        { id: 10, topic: "Resource management", description: "View saved resources, inspect their details, and open or download uploaded PDF documents."},
      ],
      project_stack: [
        { id: 0, stack_name: "nextjs", stack_use: "Next.js App Router powers the frontend and server-side Route Handlers, providing the foundation for resource management, authentication checks, and AI integrations." },
        { id: 1, stack_name: "typescript", stack_use: "Provides type safety across resource models, API responses, application logic, and shared components." },
        { id: 2, stack_name: "tailwind", stack_use: "Utility-first styling makes it easier to maintain a consistent design system and build responsive layouts." },
        { id: 3, stack_name: "motion", stack_use: "Powers interface animations, transitions, and interactive experiences." },
        { id: 4, stack_name: "redux", stack_use: "Redux Toolkit manages shared application state, particularly resources that are accessed and updated across different screens." },
        { id: 5, stack_name: "gemini", stack_use: "Managed AI provider for production, allowing SOARS to access hosted models through an API without requiring users to run AI models locally." },
        { id: 6, stack_name: "supabase", stack_use: "Planned authentication provider for user registration, login, and session management." },
        { id: 7, stack_name: "postgresql", stack_use: "Planned relational database for persistent storage of users, resources, collections, tags, and their relationships." },
        { id: 8, stack_name: "aws3", stack_use: "Planned object storage for uploaded documents, separating file storage from application data." }
      ],
      project_upcoming: "Replace the development mock API with persistent production infrastructure, integrate Supabase authentication and PostgreSQL, migrate PDF uploads to AWS S3, and implement public collection sharing, archive and trash management, and storage quotas."
      // TODO(you): replace with your real next steps in your order of priority.
    },
    {
      id: 2,
      project_image: "/assets/projects/free-chat.png",
      project_topic: "free chat",
      project_github: "Free-Chat.git",
      project_link: "free-chat-app.vercel.app",
      project_text: "FreeChat is a real-time messaging app where users can chat with friends and groups, share status updates, and make voice and video calls.",
      project_description: "FreeChat is a full-stack chat application with a messaging experience built around friends, groups, and statuses. I designed the full interface first (auth, messaging, calls, status, group creation, settings, and more across mobile, tablet, and desktop), then built most of the frontend in React with Redux for state and Tailwind CSS for styling, with Jest and React Testing Library tests covering core interactions. The backend is built separately in Python with FastAPI and SQLAlchemy and tested locally against SQLite. The frontend is structured so the API can be plugged in, and connecting the two is the next phase.",
      project_status: "In development: frontend largely built, backend built and tested locally, integration in progress.",
      project_architecture: [
        "Current: React (JavaScript) frontend deployed on Vercel, with Redux managing shared app state",
        "Current: Tailwind CSS design system shared across mobile, tablet, and desktop layouts",
        "Current: Python backend with FastAPI routes and SQLAlchemy models, tested locally on SQLite",
        "Current: Live demo runs against a mock API",
        "Planned: Frontend connects to the FastAPI backend through an API layer",
        "Planned: JWT authentication protecting API routes",
        "Planned: WebSockets for real-time message delivery",
        "Planned: PostgreSQL replacing SQLite for deployment"
      ],
      project_features: [
        { id: 0, topic: "Authentication", description: "Sign-up and sign-in flows with a clean, consistent form style." },
        { id: 1, topic: "Messaging", description: "One-to-one and group chat screens with a conversation list and message view." },
        { id: 2, topic: "Friends and groups", description: "Add friends, create groups, and organize contacts into custom lists such as Best Friends." },
        { id: 3, topic: "Status updates", description: "A feed of friends' statuses with a full-screen viewer." },
        { id: 4, topic: "Calls", description: "Call history that separates missed, received, and video calls, plus an in-call video screen." },
        { id: 5, topic: "Voice notes and attachments", description: "Record voice notes and attach files, images, and other media from the chat input." },
        { id: 6, topic: "Notifications", description: "A dedicated page for activity alerts." },
        { id: 7, topic: "Profile and settings", description: "Edit profile, privacy settings, language selection, help, and a logout confirmation step." },
        { id: 8, topic: "Responsive design", description: "Built for mobile, tablet, and desktop with a shared design system." },
        { id: 9, topic: "Tested interactions", description: "Jest and React Testing Library tests cover core user interactions." }
      ],
      project_stack: [
        { id: 0, stack_name: "react", stack_use: "A chat UI is full of components that update independently (message lists, typing states, status viewers), and React's component model keeps each one isolated and reusable." },
        { id: 1, stack_name: "redux", stack_use: "Messages, the active conversation, friends, and notifications are needed on many screens at once, so Redux keeps them in one predictable store instead of passing props through layers." },
        { id: 2, stack_name: "tailwind", stack_use: "Utility classes with a shared theme keep colors, spacing, and inputs consistent across all pages and three breakpoints." },
        { id: 3, stack_name: "javascript", stack_use: "The frontend language, used for all component and state logic." },
        { id: 4, stack_name: "jest", stack_use: "Test runner for checking that core interactions keep working as the app grows." },
        { id: 5, stack_name: "rtl", stack_use: "Tests the app the way a user uses it (clicking, typing, reading the screen) rather than checking implementation details, so tests survive refactors." },
        { id: 6, stack_name: "python", stack_use: "Backend language, used to build the data models and request logic as classes." },
        { id: 7, stack_name: "fastapi", stack_use: "Builds the REST API with automatic request validation and generated docs, which makes it quick to test endpoints while building." },
        { id: 8, stack_name: "sqlalchemy", stack_use: "Maps users, messages, and groups to database tables, so queries are written in Python and the database can be swapped later." },
        { id: 9, stack_name: "sqlite", stack_use: "Zero-setup local database used to test the backend during development." },
        { id: 10, stack_name: "motion", stack_use: "Planned: transitions for chat navigation, modals, and status viewing." },
        { id: 11, stack_name: "jwt", stack_use: "Planned: token-based authentication so each API request proves who the user is." },
        { id: 12, stack_name: "websockets", stack_use: "Planned: keeps a live connection open so new messages and statuses arrive instantly without refreshing." },
        { id: 13, stack_name: "postgresql", stack_use: "Planned: production database, better suited than SQLite to many users writing at once." }
      ],
      project_upcoming: "Connecting the React frontend to the FastAPI backend, adding JWT authentication and WebSocket-based real-time messaging, moving to PostgreSQL, integrating Framer Motion, and building out voice notes and calling."
    },
    {
      id: 3,
      project_image: "/assets/projects/akin-link.png",
      project_topic: "link app (hackathon)",
      project_github: "Link-App.git",
      project_link: "akinlink.vercel.app",
      project_text: "Link App lets users add links, visit them, and copy them for sharing, making it simple to manage and share their online information.",
      project_description: "Link App is a platform for organizing social and personal links in one place, simplifying how people share their online identity. I built it for a hackathon using React and Tailwind CSS on the frontend, with Supabase handling both authentication and the database. Users can sign up, log in, and log out securely, add links with dynamic previews, customize their profile, and copy links to share. It's complete and deployed.",
      project_status: "Completed: built for a hackathon and deployed.",
      project_architecture: [
        "React (JavaScript) frontend deployed on Vercel",
        "Supabase Auth handles sign-up, login, logout, and sessions",
        "Supabase's PostgreSQL database stores each user's links and profile data",
        "Supabase's real-time capabilities keep link and profile data up to date in the interface"
      ],
      project_features: [
        { id: 0, topic: "Add and organize links", description: "Collect social and personal links in one place." },
        { id: 1, topic: "Visit and copy", description: "Open any saved link or copy it to share." },
        { id: 2, topic: "Dynamic link previews", description: "Links display a preview so they're easy to recognize at a glance." },
        { id: 3, topic: "Profile customization", description: "Personalize your profile to represent your online identity." },
        { id: 4, topic: "Secure authentication", description: "Sign-up, login, and logout that work consistently across browsers." }
      ],
      project_stack: [
        { id: 0, stack_name: "react", stack_use: "Components for the link list, previews, and profile editor keep each part of the interface reusable and independent." },
        { id: 1, stack_name: "tailwind", stack_use: "Utility classes made it fast to build a clean, responsive interface within hackathon time limits." },
        { id: 2, stack_name: "supabase", stack_use: "One service covering authentication and a PostgreSQL database, so I could ship a complete, secure backend in a hackathon without building and hosting my own API." },
        { id: 3, stack_name: "javascript", stack_use: "Language for all frontend logic, including talking to Supabase and managing UI state." }
      ],
    },
    {
      id: 4,
      project_image: "/assets/projects/trade-all.png",
      project_topic: "trade all",
      project_github: "Trade-All.git",
      project_link: "tradeall-app.vercel.app",
      project_text: "Trade All is an animated trading and investing interface covering stocks, live charts, ETFs, and mutual funds, built to explore motion design with GSAP.",
      project_description: "Trade All is a frontend-focused project where I'm practicing GSAP by building the kind of interface a trading platform needs: dense data, charts, and tables that still feel polished and interactive. It has no real accounts or database. All data is mock, which lets me spend the effort on layout, interaction, and animation. The planned pages cover stocks, live charts, ETFs, and mutual funds, so the project touches every part of a typical trading and investing app. I've just started, so this entry will grow as pages are built.",
      project_status: "Early stage: just started, UI under construction.",
      project_architecture: [
        "Planned: React single-page frontend deployed on Vercel",
        "Planned: Mock data files stand in for a backend, with a simple timer to simulate live price updates",
        "Planned: GSAP drives page transitions, chart reveals, and interactive effects",
        "Planned: Tailwind CSS handles layout and a shared design system across pages"
      ],
      project_features: [
        { id: 0, topic: "Stocks", description: "Planned: browse mock stocks with price tables and individual stock views." },
        { id: 1, topic: "Live charts", description: "Planned: animated charts that update with simulated live prices." },
        { id: 2, topic: "ETFs", description: "Planned: explore mock ETFs with comparison views." },
        { id: 3, topic: "Mutual funds", description: "Planned: browse mock mutual funds and their performance." },
        { id: 4, topic: "Interactive tables", description: "Planned: sortable and filterable data tables." },
        { id: 5, topic: "Animated interface", description: "Planned: GSAP transitions and micro-interactions across the app." }
      ],
      project_stack: [
        { id: 0, stack_name: "react", stack_use: "Trading screens are built from many small, reusable pieces (tickers, tables, chart cards), and React keeps each piece independent so simulated live updates only re-render what changes." },
        { id: 1, stack_name: "tailwind", stack_use: "Fast, consistent styling for data-dense layouts, with responsive breakpoints so tables and charts adapt to smaller screens." },
        { id: 2, stack_name: "gsap", stack_use: "The main learning goal: precise, timeline-based animation for page transitions, chart reveals, and interactions that CSS transitions can't easily coordinate." },
        { id: 3, stack_name: "javascript", stack_use: "Language for the UI logic and for generating the mock data that drives the interface." }
        // { id: 4, stack_name: "lightweight charts", stack_use: "TradingView's open-source chart library for candlestick and live-style charts." },
        // { id: 5, stack_name: "recharts", stack_use: "Simpler declarative charts (lines, bars, areas) for dashboards and fund comparisons." },
      ],
      project_upcoming: "Building out the stocks, live charts, ETFs, and mutual funds pages with mock data, then layering in GSAP animations and polishing the responsive layouts."
    },
    {
      id: 5,
      project_image: "/assets/projects/liveseg-ball.png",
      project_topic: "livesegball",
      project_github: "Liveseg.git",
      project_link: "livesegball.vercel.app",
      project_text: "LivesegBall is a mobile-first football platform for live scores, match and club insights, and AI-powered match predictions.",
      project_description: "LivesegBall is a football platform designed mobile-first, with live matches, fixtures, league tables, club and player profiles, and a prediction section powered by a machine learning model I plan to build and train myself. I started with a full design system covering onboarding, match tracking, lineups, standings, and a simulated betting flow (bet slip, odds, wallet, and bet history), so the product is planned end to end before the build. The project is at the planning stage and this entry will grow as it's built.",
      project_status: "Planning stage: design in progress, development not started.",
      project_architecture: [
        "Planned: Next.js (TypeScript) mobile-first frontend deployed on Vercel",
        "Planned: Node.js and Express API serving matches, leagues, clubs, players, and user data",
        "Planned: MongoDB storing users, bets, wallet transactions, and cached match data",
        "Planned: Real-time channel pushing live scores and odds changes to the app",
        "Planned: Football data provider API supplying fixtures, results, lineups, and standings",
        "Planned: Separate Python service hosting the prediction model, called by the Express API"
      ],
      project_features: [
        { id: 0, topic: "Live matches", description: "Planned: live scores and minute-by-minute match state." },
        { id: 1, topic: "Match center", description: "Planned: match details with lineups, standings, and statistics tabs." },
        { id: 2, topic: "Leagues, clubs, and players", description: "Planned: league tables, club squads, and player profiles with stats." },
        { id: 3, topic: "Lineups on pitch", description: "Planned: formation view showing players in position." },
        { id: 4, topic: "AI match predictions", description: "Planned: outcome predictions from a model trained on historical match data." },
        { id: 5, topic: "Simulated betting flow", description: "Planned: odds, bet slip, confirmation, wallet, and bet history using play money." },
        { id: 6, topic: "Mobile-first design", description: "Planned: designed for phones first, with tablet and desktop layouts." }
      ],
      project_stack: [
        { id: 0, stack_name: "nextjs", stack_use: "Planned: App Router for the many routes (matches, leagues, clubs, players), with server rendering so pages load fast on mobile connections." },
        { id: 1, stack_name: "tailwind", stack_use: "Planned: utility classes enforcing one consistent spacing, color, and component system across every page." },
        { id: 2, stack_name: "typescript", stack_use: "Planned: typed models for matches, odds, and bets, so a mismatched stake or market is caught at build time. Money-related data benefits most from strict types." },
        { id: 3, stack_name: "motion", stack_use: "Planned: transitions for tabs, live score changes, and bet slip interactions." },
        { id: 4, stack_name: "nodejs", stack_use: "Planned: runtime for the backend API, keeping the whole app in JavaScript and TypeScript apart from the model." },
        { id: 5, stack_name: "expressjs", stack_use: "Planned: lightweight REST API layer handling matches, bets, wallet actions, and auth." },
        { id: 6, stack_name: "mongodb", stack_use: "Planned: flexible documents suit varied match, stats, and event data that change shape between leagues and providers." },
        { id: 7, stack_name: "ai/ml", stack_use: "Planned: a prediction model I train myself on historical match data to estimate outcomes." }
        // { id: 8, stack_name: "python", stack_use: "Planned: model training and serving (scikit-learn, pandas, XGBoost)." },
        // { id: 9, stack_name: "fastapi", stack_use: "Planned: serves the trained model as an API Express can call." },
        // { id: 10, stack_name: "socket.io", stack_use: "Planned: pushes live score and odds updates to the app." },
        // { id: 11, stack_name: "redis", stack_use: "Planned: caches provider data so you stay inside API rate limits." },
        // { id: 12, stack_name: "jwt", stack_use: "Planned: token-based authentication for accounts and wallet actions." }
      ],
      project_upcoming: "Finishing the design system, building the mobile screens first, connecting a football data API, then training the prediction model."
    }
  ];
  const { changeProjectsShownPrev, currentIndex, newPaginationIndex, changeProjectsShownNext, paginationLength } = useRenderProjects(featuredProjects, setAnimation);

  return (
    <PageMain className={"main-center relative"}>
      <div className="w-11/12 lg:w-[92.5%]">
        <section className="flex justify-between items-center">
          <ProjectsPaginationButton Icon={FaAngleLeft} buttonFunction={changeProjectsShownNext} />
          <div className="overflow-hidden w-[77.5%] md:w-4/5 lg:w-10/12">{currentIndex && <ProjectsTemplate keyId={newPaginationIndex} animation={animation} projectsArray={featuredProjects.slice(newPaginationIndex * currentIndex, newPaginationIndex * currentIndex + currentIndex)} />}</div>
          <ProjectsPaginationButton Icon={FaAngleRight} buttonFunction={changeProjectsShownPrev} />
        </section>
      </div>
      {paginationLength && <ProjectsPagination paginationArray={paginationLength} presentPagination={newPaginationIndex} />}
    </PageMain>
  );
};

export default ProjectsPage;
