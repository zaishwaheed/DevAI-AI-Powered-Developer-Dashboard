# DevAI — AI-Powered Developer Dashboard
Understand any GitHub developer in seconds.

DevAI is a React-based web application that lets you search any GitHub username and instantly analyze their developer profile. Powered by the GitHub REST API and Groq AI, it gives you a full picture of a developer's activity, repositories, and focus areas — all in one clean dashboard.

# Features
1. **Developer Search** — Search any GitHub username and fetch their full profile instantly
2. **Profile Overview** — View name, avatar, bio, followers, following, and public gists
3. **Repository Grid** — Browse all public repositories with language, stars, forks, and description
4. **Repo Detail Modal** — Click any repo card for an expanded view with full details
5. **AI Summary** — Generate an AI-powered insight of the developer's activity, most used languages, and recent push events using Groq (LLaMA 3.1)
6. **Error Handling** — Graceful error and loading states throughout the app
7. **Responsive Design** — Works across desktop and mobile screens


# Tech Stack
1. **React 19** as a UI framework
2. **Vite** as a Build tool
3. **TanStack Query** for Data fetching & caching
4. **Tailwind CSS 4** for Styling
5. **Axios** for HTTP client
6. **GitHub REST API** for extracting Developer data
7. **Groq API (LLaMA 3.1)** for AI-generated summaries

# How It Works
1. User enters a GitHub username and clicks **Analyze**
2. **TanStack Query** fetches user profile, repositories, and events from the **GitHub API** simultaneously
3. Data is cached — searching the same user twice loads instantly
4. User clicks **Generate Summary** to send the data to Groq AI
5. The AI analyzes languages, recent activity, and repos to produce a professional developer summary

<img width="1919" height="878" alt="image" src="https://github.com/user-attachments/assets/019a4e11-d664-433b-9e72-13c183d36c7e" />
<img width="1469" height="858" alt="image" src="https://github.com/user-attachments/assets/40758493-abf7-4dec-a2a0-b126f83d4f72" />
<img width="1486" height="880" alt="image" src="https://github.com/user-attachments/assets/daa897bb-3dae-4ce3-8785-77e55cdc9077" />

