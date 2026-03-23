# 🔍 Code Review AI

An AI-powered code review tool — paste your code or upload a file and get instant, intelligent feedback powered by GPT-4o.

🌐 **Live Demo**: [https://code-review-ai-frontend-tcy4.onrender.com](https://code-review-ai-frontend-tcy4.onrender.com)

---

## ✨ Features

- 📋 **Paste code** directly into the editor for instant review
- 📁 **Upload code files** for automated analysis
- 🤖 **AI-powered feedback** using OpenAI GPT-4o
- 🕐 **Review history** — track past submissions in session
- 🛡️ **Rate limiting** — 10 requests/minute to prevent abuse
- 🌍 **CORS-enabled** for seamless frontend-backend communication

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, TypeScript, Tailwind CSS |
| Backend | Python, FastAPI, Uvicorn |
| AI | OpenAI GPT-4o |
| Rate Limiting | SlowAPI |
| Deployment | Render (Web Services) |

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js 18+
- Python 3.10+
- OpenAI API key

### 1. Clone the repo
```bash
git clone https://github.com/PerceptronCipher/code-review-ai.git
cd code-review-ai
```

### 2. Backend
```bash
cd backend
pip3 install -r requirements.txt
```

Create a `.env` file in `backend/`:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

Start the server:
```bash
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

App runs at `http://localhost:3000`

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please follow conventional commits and keep PRs focused.

---

## 📄 License

MIT © [PerceptronCipher](https://github.com/PerceptronCipher) and [Hilosthone](https://github.com/Hilosthone)