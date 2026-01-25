# Phase 01: User Setup Required

**Generated:** 2026-01-25
**Phase:** 01-foundation-strategy
**Status:** Incomplete

Complete these items for the GoHighLevel (GHL) integration to function. Claude automated the utility and API integration; these items require human access to the GHL dashboard.

## Environment Variables

| Status | Variable | Source | Add to |
|--------|----------|--------|--------|
| [ ] | `GHL_API_KEY` | GHL Marketplace → API Keys (Version 2) | `.env` |

## Account Setup

- [ ] **Create GoHighLevel (GHL) Sub-Account**
  - URL: https://app.gohighlevel.com/
  - Skip if: Already have a sub-account for Tenor Creative

## Dashboard Configuration

- [ ] **Enable API Access**
  - Location: GHL Settings → API Keys
  - Note: Ensure you are using Version 2 API keys.

## Verification

After completing setup, verify with:

```bash
# Check if API key is set
grep GHL_API_KEY .env

# Test the contact API (replace localhost:3000 with your actual port if different)
curl -i -X POST -H "Content-Type: application/json" \
  -d '{"firstname":"Test", "email":"test@example.com", "message":"Hello"}' \
  http://localhost:3000/api/contact
```

Expected results:
- HTTP 200 OK with success message (if key is valid)
- HTTP 401 Unauthorized (if key is invalid/missing)
- Contact appears in GHL "Contacts" list.

---

**Once all items complete:** Mark status as "Complete" at top of file.
