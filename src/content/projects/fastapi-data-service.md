---
title: "FastAPI Data Service"
description: "A production-ready REST API built on top of the data pipeline database. Supports filtering, pagination, and aggregation endpoints with full Pydantic validation and Swagger docs. Dockerized for deployment."
tags: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "Docker", "REST API"]
category: "app"
github: "https://github.com/bryancourtneywhite/data-api-service"
featured: true
order: 2
status: "planned"
---

## Overview

A FastAPI service that exposes the pipeline database through a clean, validated REST API — the bridge between the data layer and anything that consumes it.

## Problem

Data sitting in a database is only useful if something can query it. This project builds the API layer that makes the data accessible to frontends, agents, and ML models.

## Approach

FastAPI with SQLAlchemy ORM, Pydantic v2 schemas for request/response validation, and a dependency-injected database session pattern. Every endpoint is documented automatically via Swagger UI.

## Tech Stack

- **FastAPI** — async API framework
- **SQLAlchemy** — ORM with session management
- **Pydantic v2** — data validation
- **Uvicorn** — ASGI server
- **Docker** — containerized deployment

## Key Decisions

- Dependency injection for DB sessions (`get_db`) ensures sessions are always closed — no leaks
- Pagination on all list endpoints by default, not as an afterthought
- Separated CRUD logic from route handlers for testability

## What I'd Do Differently

Add JWT authentication from the start. Even for a portfolio project, showing auth-aware API design signals production readiness.
