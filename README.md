# AI Code Review Assistant

An AI-powered code review tool that detects bugs, security vulnerabilities, suggests performance improvements, and returns refactored code — built with FastAPI + GPT-4o.

## Features
- Paste code or upload a file
- Detects bugs, security issues, and performance problems
- Returns a refactored version of your code
- Review history (in-session)

## Tech Stack
- Backend: Python, FastAPI, OpenAI GPT-4o
- Frontend: Next.js (TypeScript)

## Getting Started

### Backend
```
bash
cd backend

python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload --port 8001
```

Frontend
cd frontend
npm install
npm run dev

# Environment Variables
*Backend requires OPENAI_API_KEY set in your shell environment.*

# API Endpoints
POST /review — Submit code for review

GET /history — Retrieve past reviews

---

## Live Demo
- Frontend: https://code-review-ai-f1se.onrender.com
- Backend API: https://code-review-ai-b.onrender.com

## Deployment
- Backend hosted on Render (Python web service)
- Frontend hosted on Render (Node web service)
- Set OPENAI_API_KEY as an environment variable on Render

## Limitations
- Review history is session-based and resets on server restart
- Rate limited to 10 requests per minute per IP