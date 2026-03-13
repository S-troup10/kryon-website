# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room  
- front-door  

### SSH

- home-server  192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## External integrations I can use (examples)

- gog (Google Workspace CLI) — Gmail, Calendar, Drive, Contacts, Sheets, Docs
- notion (Notion API integration)
- github (via gh CLI)
- clawhub (ClawHub CLI for skills)
- openai-whisper / openai-whisper-api (audio transcription)
- weather (wttr.in / Open-Meteo)
- mcporter (MCP servers/tools)
- skill-creator (create/update AgentSkills)
- healthcheck (host security/hardening)

Add whatever helps you do your job. This is your cheat sheet.

---

## Configured/available tools (this machine)

- git (installed) — used for cloning, branching, commits, PRs via gh/gh CLI when available
- gh (GitHub CLI) — available for repo operations (issues, PRs) when authenticated
- curl / curl.exe — available for HTTP API access
- node / npm — available for building JS projects
- powershell / cmd — shell access for automation
- Notion integration — configured via ~/.config/notion/api_key (used for reading pages, not storing keys here)
- Google Workspace (gog) — available via configured skill when authenticated

(Do not store secrets or API keys here.)