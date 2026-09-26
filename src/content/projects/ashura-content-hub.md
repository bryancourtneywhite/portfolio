---
title: "Ashura Whole Heavens — Creator Content Hub"
description: "A multi-page creator brand platform that centralizes a gaming channel's videos, build guides, gear, and sponsorships. Interactive Three.js 3D background, JSON-driven content, embedded YouTube/Twitch players, and a config-driven affiliate engine. Live at solashur.com."
tags: ["JavaScript", "Three.js", "HTML/CSS", "WebGL", "YouTube API", "Twitch Embed", "GitHub Pages", "CI/CD"]
category: "app"
github: "https://github.com/bryancourtneywhite/content-creation-playbook"
demo: "https://solashur.com"
featured: true
order: 1
status: "complete"
---

## Overview

A complete, live creator content hub for a gaming brand (Ashura Whole Heavens / SolAshur) that consolidates videos, AION 2 build guides, hardware, and sponsorships into one branded, monetized site. Shipped and running at [solashur.com](https://solashur.com).

## Problem

A content creator's audience, videos, guides, and affiliate income were scattered across YouTube, Twitch, and third-party build tools. There was no single home that presented the brand professionally, let viewers browse content without leaving, and captured affiliate revenue in one place.

## Approach

Built as a fast, framework-free multi-page static site (vanilla JS/CSS) for zero build-step maintainability. Content — products, videos, and builds — is rendered from JSON data sources, so the catalog updates without touching markup. An animated Three.js WebGL background carries the brand identity, with a persisted light/dark theming system and client-side search and filtering across all content.

## Results

Launched on a custom domain with enforced HTTPS and automated deploys. The site hosts multiple written build guides, an embedded searchable video library, a dual-store affiliate purchase flow, and a sponsors page — and is used as the creator's primary link in video descriptions.

- **JavaScript (vanilla)** — all interactivity, no framework
- **Three.js / WebGL** — animated 3D background with dynamic theming
- **JSON-driven rendering** — products, videos, and builds decoupled from markup
- **YouTube + Twitch embeds** — inline players with oEmbed data fetching and client-side search
- **Config-driven affiliate engine** — routes purchases across Amazon Associates, Razer, and Best Buy
- **GitHub Pages + custom domain** — automated CI/CD on push, enforced HTTPS/TLS

## Key Decisions

- Chose a static, framework-free architecture so the site stays fast and free to host, with content managed through JSON rather than code
- Built a single affiliate config so a new partner link updates every relevant product site-wide
- Used a graceful-fallback pattern for third-party embeds (e.g. the character-builder iframe) so the page never shows a broken component
- Persisted theme choice in localStorage and re-themed the WebGL scene live on toggle

## What I'd Do Differently

Add a small serverless backend (e.g. Vercel functions) to pull live product prices and availability from retailer APIs, replacing the manually curated JSON with an automated feed as the catalog grows.
