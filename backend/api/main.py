from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Response
from pydantic import BaseModel
import numpy as np
from scipy import optimize

app = FastAPI()


def get_linear_params(x, y):
    x = np.array(x)
    y = np.array(y)
    def line_func(X, a, b):
        y = a * X + b
        return y
    popt, _ = optimize.curve_fit(line_func, x, y)
    a, b = popt

    return {"a": a, "b": b}


def get_exponencial_params(x, y):
    x = np.array(x)
    y = np.array(y)
    log_y = np.log(y)
    popt = np.polyfit(x, log_y, 1)
    a, b = popt
    b = np.exp(b)
    return {"a": a, "b": b}

def get_normal_params(x, y):
    x = np.array(x)
    y = np.array(y)
    def normal_func(X, a, b, c):
        y = a * np.exp(-((X - b) ** 2) / (2 * c**2))
        return y
    popt, _ = optimize.curve_fit(normal_func, x, y)
    a, b, c = popt
    return {"a": a, "b": b, "c": c}

def get_polinomial2_params(x, y):
    x = np.array(x)
    y = np.array(y)
    popt = np.polyfit(x, y, 2)
    a, b, c = popt
    return {"a": a, "b": b, "c": c}

def get_polinomial3_params(x, y):
    x = np.array(x)
    y = np.array(y)
    popt = np.polyfit(x, y, 3)
    a, b, c, d = popt
    return {"a": a, "b": b, "c": c, "d": d}

def get_sigmoid_params(x, y):
    x = np.array(x)
    y = np.array(y)
    def sigmoid_func(X, a, b, c, d):
        y = a / (1 + np.exp(-(X - b) / c)) ** d
        return y
    popt, _ = optimize.curve_fit(sigmoid_func, x, y, maxfev=100000)
    a, b, c, d = popt
    return {"a": a, "b": b, "c": c, "d": d}


class DataRequest(BaseModel):
    x: list[float]
    y: list[float]


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/api/linear")
def linear_regression(data: DataRequest):
    x = data.x
    y = data.y

    if not x or not y:
        raise HTTPException(status_code=400, detail="Invalid data")

    x_min = min(x)
    x_max = max(x)
    x_array = np.linspace(x_min, x_max, 100)
    coefs = get_linear_params(x, y)
    y_array = (coefs["a"] * x_array) + coefs["b"]

    return {
        "a": round(coefs["a"], 2),
        "b": round(coefs["b"], 2),
        "x_array": list(x_array),
        "y_array": list(y_array),
    }


@app.post("/api/exponencial")
def exponencial_regression(data: DataRequest):
    x = data.x
    y = data.y

    if not x or not y:
        raise HTTPException(status_code=400, detail="Invalid data")

    x_min = min(x)
    x_max = max(x)
    x_array = np.linspace(x_min, x_max, 100)
    coefs = get_exponencial_params(x, y)
    y_array = coefs["b"] * np.exp(coefs["a"] * x_array)

    return {
        "a": round(coefs["a"], 2),
        "b": round(coefs["b"], 2),
        "x_array": list(x_array),
        "y_array": list(y_array),
    }


@app.post("/api/sigmoid")
def sigmoid_regression(data: DataRequest):
    x = data.x
    y = data.y

    if not x or not y:
        raise HTTPException(status_code=400, detail="Invalid data")

    x_min = min(x)
    x_max = max(x)
    x_array = np.linspace(x_min, x_max, 100)
    coefs = get_sigmoid_params(x, y)
    y_array = (
        coefs["a"] / (1 + np.exp(-(x_array - coefs["b"]) / coefs["c"])) ** coefs["d"]
    )

    return {
        "a": round(coefs["a"], 2),
        "b": round(coefs["b"], 2),
        "c": round(coefs["c"], 2),
        "d": round(coefs["d"], 2),
        "x_array": list(x_array),
        "y_array": list(y_array),
    }


@app.post("/api/normal")
def normal_regression(data: DataRequest):
    x = data.x
    y = data.y

    if not x or not y:
        raise HTTPException(status_code=400, detail="Invalid data")

    x_min = min(x)
    x_max = max(x)
    x_array = np.linspace(x_min, x_max, 100)
    coefs = get_normal_params(x, y)
    y_array = coefs["a"] * np.exp(
        -((x_array - coefs["b"]) ** 2) / (2 * coefs["c"] ** 2)
    )

    return {
        "a": round(coefs["a"], 2),
        "b": round(coefs["b"], 2),
        "c": round(coefs["c"], 2),
        "x_array": list(x_array),
        "y_array": list(y_array),
    }


@app.post("/api/polinomial2")
def polinomial2_regression(data: DataRequest):
    x = data.x
    y = data.y

    if not x or not y:
        raise HTTPException(status_code=400, detail="Invalid data")

    x_min = min(x)
    x_max = max(x)
    x_array = np.linspace(x_min, x_max, 100)
    coefs = get_polinomial2_params(x, y)
    y_array = coefs["a"] * pow(x_array, 2) + coefs["b"] * x_array + coefs["c"]

    return {
        "a": round(coefs["a"], 2),
        "b": round(coefs["b"], 2),
        "c": round(coefs["c"], 2),
        "x_array": list(x_array),
        "y_array": list(y_array),
    }


@app.post("/api/polinomial3")
def polinomial3_regression(data: DataRequest):
    x = data.x
    y = data.y

    if not x or not y:
        raise HTTPException(status_code=400, detail="Invalid data")

    x_min = min(x)
    x_max = max(x)
    x_array = np.linspace(x_min, x_max, 100)
    coefs = get_polinomial3_params(x, y)
    y_array = (
        (coefs["a"] * pow(x_array, 3))
        + (coefs["b"] * pow(x_array, 2))
        + (coefs["c"] * x_array)
        + coefs["d"]
    )

    return {
        "a": round(coefs["a"], 2),
        "b": round(coefs["b"], 2),
        "c": round(coefs["c"], 2),
        "d": round(coefs["d"], 2),
        "x_array": list(x_array),
        "y_array": list(y_array),
    }

