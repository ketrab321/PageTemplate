import codecs

from fastapi import APIRouter, WebSocket
from fastapi.responses import HTMLResponse
from fastapi.logger import logger

router = APIRouter()


@router.get("/", response_class=HTMLResponse)
async def root():
    return codecs.open("resources/index.html", "r", "utf-8").read()
