---
title: "ML Model Training & Serving Pipeline"
description: "An end-to-end machine learning pipeline: data preprocessing, model training with experiment tracking via MLflow, and a FastAPI prediction endpoint. Reproducible and deployable."
tags: ["Python", "scikit-learn", "MLflow", "FastAPI", "pandas", "XGBoost"]
category: "ml"
github: "https://github.com/bryancourtneywhite/ml-pipeline"
featured: true
order: 3
status: "planned"
---

## Overview

A complete ML workflow from raw data to a served prediction API — not just a notebook, but a reproducible, trackable, deployable pipeline.

## Problem

Most ML demos stop at a Jupyter notebook. This project shows what happens after the notebook: packaging the model, tracking experiments, and serving predictions via an API endpoint.

## Approach

scikit-learn Pipeline for preprocessing (prevents data leakage), MLflow for experiment tracking and model versioning, FastAPI for the prediction endpoint. Everything is reproducible via a config YAML.

## Tech Stack

- **scikit-learn** — feature engineering and modeling
- **XGBoost** — gradient boosted classifier
- **MLflow** — experiment tracking and model registry
- **FastAPI** — prediction serving
- **joblib** — model serialization

## Key Decisions

- sklearn Pipeline for preprocessing ensures the same transformations apply at training and inference — critical for preventing leakage
- MLflow logs every training run so experiments are comparable and reproducible
- Pydantic input validation on the prediction endpoint catches bad inputs before they reach the model

## What I'd Do Differently

Add data drift detection at the prediction endpoint — log input feature distributions and alert when they diverge from training data.
