# MEMORY.md

_Long-term memory. Load in private chats only. Update periodically — facts and decisions only, no narrative._

---

## Simon

- Founder of Kryon — B2B AI integration agency
- Pricing: setup fee + monthly retainer
- Communicates via Telegram — prefers short, direct responses

## Kryon (Business)

- Service: audit businesses, deploy AI agents and workflows to replace manual processes
- Building: marketing website, custom CRM, AI workflow packages to sell to clients

## Active Projects

| Project              | Status      | Notes                       |
| -------------------- | ----------- | --------------------------- |
| Kryon website        | In progress | Marketing/landing page      |
| Kryon CRM            | In progress | Custom build                |
| AI workflow packages | In progress | Products to sell to clients |

## Workers

| ID           | Role                           |
| ------------ | ------------------------------ |
| `builder`    | Website + CRM code, git ops    |
| `researcher` | Web research, analysis         |
| `workflow`   | AI workflow package design     |
| `reporter`   | Docs, Notion, Telegram reports |

## Decisions & Preferences

- Models: kryon=gpt-5.2, builder=gpt-5.1-codex, researcher=gemini-2.5-flash, workflow=gpt-5.2, reporter=gemini-2.5-flash-lite
- Heartbeat: 30m on main only
- Memory: fts/vector unavailable on Windows Node 22 (known bug, pending fix)
