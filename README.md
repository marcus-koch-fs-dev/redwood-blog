# 🌲 Redwood Blog

This project is a test implementation using the [RedwoodJS](https://redwoodjs.com/) framework.

It demonstrates how to set up a simple blog with Redwood, exploring its features such as GraphQL API, React front end, Prisma ORM, and built-in developer tools.

---

## 📦 Installation and Execution

To install and run the project locally, follow these steps:

```bash
git clone https://github.com/marcus-koch-fs-dev/redwood-blog.git
cd redwood-blog
npm install
npm run dev
```

Then open [http://localhost:8910](http://localhost:8910) in your browser.

---

## ⚙️ Environment Variables

RedwoodJS uses `.env` files for configuration. Common examples:

```env
# Database connection (Prisma)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# API host/port
API_HOST=localhost
API_PORT=8911

# Web host/port
WEB_HOST=localhost
WEB_PORT=8910
```

> ℹ️ Adjust values according to your local setup. For production, set secure values.

---

## ▶️ Available Commands

| Command             | Description                                 |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Starts the Redwood development environment  |
| `npm run build`     | Builds the app for production               |
| `npm run lint`      | Runs ESLint for code checking               |
| `npm run test`      | Runs the Redwood test suite                 |
| `npm run storybook` | Runs Storybook for UI component development |
| `npm run console`   | Opens the Redwood interactive console       |

---

## 🧭 Project Structure (simplified)

```text
.
├── api/              # GraphQL API side (Prisma, SDLs, services)
├── web/              # Frontend side (React components, pages, routes)
├── scripts/          # Redwood CLI scripts
├── package.json      # Dependencies & scripts
├── redwood.toml      # Redwood config
└── README.md
```

---

## 🛠 Tech Stack

* RedwoodJS 🌲
* React ⚛️
* GraphQL 🔺
* Prisma ORM 🗄️
* Storybook 📖

---

## 📄 License

MIT – for learning and testing purposes.
