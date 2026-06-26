---
title: "Automated ML Pipeline with Orchestration"
description: "A scheduled ML pipeline that detects new data, retrains the model, compares it against production, and auto-promotes if performance improves. Orchestrated with Prefect."
tags: ["Python", "Prefect", "scikit-learn", "MLflow", "PostgreSQL", "MLOps"]
category: "ml"
github: "https://github.com/bryancourtneywhite/ml-orchestration-pipeline"
featured: false
order: 5
status: "planned"
---

## Overview

An MLOps pipeline that keeps a model current automatically — detects new data, retrains, evaluates, and promotes the best version without manual intervention.

## Problem

Models degrade as data changes. This project automates the full retraining cycle so the production model stays current without someone manually triggering a notebook.

## Approach

Prefect flows with three tasks: data change detection (MD5 hash comparison), model training and evaluation, and promotion logic (new AUC must beat production by a defined threshold). MLflow tracks every run.

## Tech Stack

- **Prefect** — workflow orchestration and scheduling
- **scikit-learn** — model training (reuses Project 3)
- **MLflow** — experiment tracking and model versioning
- **PostgreSQL** — production database
- **joblib** — model serialization

## Key Decisions

- Prefect over Airflow for simpler local setup with the same orchestration concepts
- Hash-based data change detection is lightweight and reliable for file-based sources
- Explicit promotion threshold (new AUC ≥ production + 0.005) prevents noise-driven model churn

## What I'd Do Differently

Add statistical data drift detection (KS test on feature distributions) as a trigger condition alongside the hash check, so the pipeline also retrains when input data distribution shifts even without new rows.
