---
title: "Multi-Agent Research & Report System"
description: "A four-agent system where specialized AI agents collaborate to produce structured research reports. A Researcher, Analyst, Writer, and Reviewer work in sequence via LangGraph with a Streamlit interface."
tags: ["Python", "LangGraph", "CrewAI", "RAG", "OpenAI", "Streamlit", "Chroma"]
category: "agents"
github: "https://github.com/bryancourtneywhite/multi-agent-research-system"
featured: true
order: 6
status: "planned"
---

## Overview

A multi-agent system where four specialized agents collaborate — each with a defined role and tool set — to produce a structured research report on any topic.

## Problem

Single LLM calls produce shallow output. This project shows how to decompose a complex task (research + analysis + writing + review) into specialized agents that each do one thing well, producing higher quality output through collaboration.

## Approach

LangGraph supervisor pattern with four nodes: Researcher (Tavily web search), Analyst (insight extraction), Writer (report drafting), Reviewer (quality check). Shared state flows through the graph. Streamlit provides the UI with a PDF download option.

## Tech Stack

- **LangGraph** — multi-agent graph orchestration
- **LangChain** — agent and tool primitives
- **Tavily API** — real-time web search
- **Chroma** — vector store for RAG
- **OpenAI gpt-4o-mini** — language model
- **Streamlit** — frontend UI
- **ReportLab** — PDF generation

## Key Decisions

- Tight role definitions with minimal tool sets per agent — the Researcher only searches, the Writer only writes. Role boundaries produce predictable behavior
- Conditional routing via `next_agent` field in shared state keeps the graph logic clean
- Reviewer can flag gaps but doesn't loop back infinitely — a loop counter prevents runaway cycles

## What I'd Do Differently

Add async LangGraph execution so multiple research sub-tasks can run in parallel, cutting total latency significantly for broad topics.
