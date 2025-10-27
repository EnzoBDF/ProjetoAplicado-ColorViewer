from fastapi import APIRouter, File, UploadFile
import shutil
import os

router = APIRouter()

@router.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    path = f"uploads/{file.filename}"
    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"filename": file.filename}
