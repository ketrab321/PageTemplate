import argparse
import os
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from PageTemplate.routers import router

os.chdir(os.path.dirname(__file__))

# Creating FastApi instance and mounting static files
app = FastAPI()
app.mount("/css", StaticFiles(directory="resources/css"), name="css")
app.mount("/js", StaticFiles(directory="resources/js"), name="js")
app.mount("/images", StaticFiles(directory="resources//images"), name="images")

app.mount("/shared", StaticFiles(directory="shared"), name="/shared")

# Attaching router to app
app.include_router(router)


# Starting server using uvicorn
def run():
    parser = argparse.ArgumentParser(prog="legis", description="Run the app")
    parser.add_argument("--port", default=80, type=int, help="Set port (default: 80)")
    parser.add_argument("--host", default="localhost", help="Set host (default: localhost)")
    parser.add_argument("--reload", default=False, type=bool, help="Enable auto reload (default: False)")
    parser.add_argument("--log-level", default="info", help="Set log level: [info|debug|...] (default: info)")

    args = vars(parser.parse_args())
    uvicorn.run("PageTemplate.app:app", **args)

