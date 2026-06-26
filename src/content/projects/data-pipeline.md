---
title: "Data Pipeline Automation Script"
description: "A CLI tool that ingests raw data from files or APIs, validates and transforms it with pandas, then loads it into a SQLite or PostgreSQL database. Full schema validation, logging, and pytest coverage."
tags: ["Python", "pandas", "SQLAlchemy", "Typer", "SQLite", "pytest"]
category: "data"
github: "https://github.com/bryancourtneywhite/data-pipeline-cli"
featured: true
order: 1
status: "planned"
---

## Overview

A command-line ETL pipeline that demonstrates production-quality Python scripting at the data layer.

## Problem

Raw data from external sources is messy — wrong types, missing values, inconsistent schemas. Manually cleaning it is error-prone and not repeatable. This project automates the entire ingest-transform-load cycle.

## Approach

Built as a modular CLI tool with three clear layers: Extractor (reads CSV/JSON/API), Transformer (validates schema, cleans with pandas), and Loader (writes to DB via SQLAlchemy). Config-driven via YAML so it works on any dataset without code changes.

## Tech Stack

- **Python 3.12** — core language
- **pandas** — data transformation and cleaning
- **SQLAlchemy** — database abstraction layer
- **Typer** — CLI framework with auto-generated help
- **pytest** — unit test coverage

## Key Decisions

- Used `if_exists="append"` in the loader with dedup logic in the transformer to make the pipeline idempotent
- Config via YAML + .env to separate structure from secrets
- Modular class design so each layer is independently testable

## What I'd Do Differently

Add streaming support for very large files using pandas `chunksize` parameter from the start, rather than loading entire files into memory.
