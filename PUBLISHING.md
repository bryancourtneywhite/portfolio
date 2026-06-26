# Publishing a Completed Project

Follow these steps every time you finish a project and want it live on the portfolio.

---

## The Workflow

### 1. Create the project's GitHub repo

Go to github.com/new and create a repo matching the name in the project's frontmatter.
Push your completed project code there.

### 2. Update the project content file

Open the relevant file in `src/content/projects/`. Change two things:

```yaml
status: "complete"          # was "planned" or "in-progress"
github: "https://github.com/bryancourtneywhite/YOUR-REPO-NAME"  # confirm this is correct
```

If you have a live demo URL, add it too:
```yaml
demo: "https://your-demo-url.com"
```

Fill in the body of the markdown with the real write-up (problem, approach, results).

### 3. Run the project checker

```bash
npm run check:projects
```

This validates all project files and warns you if any complete projects still have placeholder links.

### 4. Push to trigger Vercel deploy

```bash
git add src/content/projects/
git commit -m "content: mark data-pipeline as complete"
git push
```

Vercel detects the push and rebuilds the site automatically. Live in ~60 seconds.

### 5. Verify

Open https://bryancourtneywhite.vercel.app and confirm:
- Project card shows "Complete" badge
- GitHub link goes to the correct repo
- Demo link works (if applicable)
- Project detail page reads well

---

## Project Status Reference

| Status | Meaning | Card Badge |
|---|---|---|
| `planned` | Not started yet | Gray |
| `in-progress` | Currently being built | Yellow |
| `complete` | Finished and published | Green |

---

## Changing Status to In-Progress

When you start a project, update it to `in-progress` so the site reflects your current work:

```yaml
status: "in-progress"
```

Push the change. The card badge turns yellow — shows visitors you're actively building.
