from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from reviewer import review_code

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/review")
async def review(
    code: Optional[str] = Form(None),
    file: Optional[UploadFile] = File(None)
):
    if file:
        contents = await file.read()
        code = contents.decode("utf-8")
    
    if not code:
        return {"error": "No code provided"}
    
    result = review_code(code)
    return result