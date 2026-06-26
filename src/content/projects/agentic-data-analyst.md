---
title: "Agentic Data Analyst"
description: "An AI agent that accepts natural language questions about a dataset and autonomously writes SQL queries, runs pandas operations, generates charts, and explains the results. Built with LangGraph and Streamlit."
tags: ["Python", "LangGraph", "LangChain", "OpenAI", "SQLite", "Streamlit"]
category: "agents"
github: "https://github.com/bryancourtneywhite/agentic-data-analyst"
featured: true
order: 4
status: "planned"
---

## Overview

An AI agent that bridges natural language and data — ask a question in plain English, get back SQL results, visualizations, and explanations.

## Problem

Querying data requires knowing SQL or pandas. This project removes that barrier by letting an LLM decide how to answer a question, using tools to retrieve and visualize the data.

## Approach

LangGraph ReAct agent with three tools: SQL query execution, pandas operations, and chart generation. The agent first fetches the schema, then plans and executes its approach, then explains the result. Streamlit provides the chat interface.

## Tech Stack

- **LangGraph** — agent state machine orchestration
- **LangChain** — tool definitions and LLM binding
- **OpenAI gpt-4o-mini** — language model
- **SQLite** — data store (from Project 1)
- **Streamlit** — chat UI

## Key Decisions

- LangGraph over plain chains because agents that use tools need explicit state and conditional routing — not a linear pipeline
- Tool-level validation restricts SQL to SELECT only — the agent can't modify data
- Schema fetch as the first tool call ensures the agent always knows the data structure before writing queries

## What I'd Do Differently

Add LangGraph's MemorySaver checkpointer for persistent conversation memory across sessions, so the agent remembers what was discussed earlier in the conversation.
