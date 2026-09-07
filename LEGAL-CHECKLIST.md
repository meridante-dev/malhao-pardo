# Malhão Pardo — Portuguese & EU legal compliance
_Swept and rebuilt 2 September 2026. Legend: ✅ done on site · 🟡 built, needs João's data ·
🔴 needs external action (owner, lawyer, insurer, or the property itself)._

> **These are drafts prepared for legal review, not legal advice.** Everything marked
> `[… — pendente]` renders as a visible highlighted placeholder. **Nothing goes live with a
> placeholder still in it.**

## Where this stands
The site now carries a full RGPD notice, bilingual terms (12 sections), an AI-Act-compliant
concierge disclosure, and working retention + erasure machinery behind both Workers. What remains
is almost entirely **data only the owner has** (entity, RNET, rates, policies) plus the lawyer pass.

## Mandatory — website and consumer law
| Item | Legal basis | Status |
|---|---|---|
| RNET registration number displayed | DL 39/2008 (RJET) | 🟡 placeholder in footer + termos |
| Legal entity + NIPC + address on site | DL 7/2004 art.10, CSC art.171 | 🟡 placeholders |
| Livro de Reclamações Eletrónico link | DL 156/2005 (74/2017) | ✅ footer + termos §11 |
| RAL/ADR entity disclosed — **CNIACC**, competent for Évora district | Lei 144/2015 art.18 | ✅ verified 2026-09-02 |
| **No EU ODR link** (repealed; platform dead since 20-07-2025) | Reg. (UE) 2024/3228 | ✅ correctly absent |
| Terms reachable from the site | consumer law | ✅ footer now links PT + EN (was missing) |
| Prices VAT-inclusive; tourist tax shown separately | price display rules | ✅ termos §3 |
| Booking = request, contract formed on written confirmation | consumer law | ✅ termos §2 |
| Art.17(1)(l) DL 24/2014 withdrawal exemption, stated honestly | DL 24/2014 | ✅ termos §4/§5 |
| Voucher 14-day withdrawal right (no fixed date ⇒ right applies) | DL 24/2014 | ✅ termos §6 |
| Intellectual property + site use | CDADC | ✅ termos §9 (added) |
| Allergen information for the estate table | Reg. (UE) 1169/2011 | ✅ termos §10 (added) |
| Accessibility described honestly | — | 🟡 termos §10, needs the real description |
| Civil liability insurance (RJET) | RJET | 🔴 confirm policy; optionally name insurer |
| Physical: classification plaque, paper Livro, information book | RJET / DL 156/2005 | 🔴 at the property |

## Mandatory — data protection (RGPD)
| Item | Legal basis | Status |
|---|---|---|
| Controller identified | art.13(1)(a) | 🟡 placeholder |
| DPO position stated (none required, with reason) | art.13(1)(b) | ✅ added |
| Purposes + legal bases table | art.13(1)(c) | ✅ six processing operations mapped |
| **Named processors** (Cloudflare, Stripe, GitHub, Google Fonts, jsDelivr, Open-Meteo, email) | art.13(1)(e) | ✅ added — was missing |
| **International transfers** (DPF / SCCs) | art.13(1)(f) | ✅ added — was missing |
| Retention periods | art.13(2)(a) | ✅ set (24m contacts · 10y fiscal · 12m SIBA copy 🟡) |
| Data subject rights + 1-month reply | arts.15–22, 12(3) | ✅ added |
| Right to complain to CNPD | art.13(2)(d) | ✅ with address |
| **Automated decision-making — none** | art.13(2)(f) | ✅ added — was missing |
| **Security + 72h breach notification** | arts.32–34 | ✅ added — was missing |
| Special categories (health, Vitality Circuit) handled | art.9(2)(a) | ✅ added |
| SIBA guest reporting — corrected to SIBA/SSI, 3 working days | Lei 23/2007 art.16 | ✅ (was "SEF/AIMA"; SEF extinct since 2023) |
| Cookie rule — no tracking, so no banner, and it says why | Lei 41/2004 art.5 | ✅ |
| Google Fonts transfer disclosed | art.13(1)(f) | ✅ added — was undisclosed |
| Hero film self-hosted (Vimeo dropped as recipient 2026-09-02) | art.13(1)(e) | ✅ one fewer US processor — **if `VIMEO_ID` is ever set again, Vimeo must be re-added to the processors table and the `dnt=1` note restored** |

## Mandatory — EU AI Act (the concierge)
| Item | Legal basis | Status |
|---|---|---|
| Users told they are interacting with an AI, perceivably in the interaction | **Reg. (UE) 2024/1689 art.50**, applicable **since 2 Aug 2026** | ✅ chat panel states it |
| Model instructed never to deny being an AI | art.50 (in substance) | ✅ added — the prompt previously said "human host" with no counter-rule |
| Conversation data path disclosed (Cloudflare Workers AI); not stored, not used for training | RGPD art.13 | ✅ added |
| AI answers stated as non-binding | consumer law | ✅ termos §9 |

## Payments and data machinery
- Stripe named in termos §3 + privacidade ✅ · **no card data touches us** (Stripe-hosted Checkout) ✅
- `malhao-pay` stores purchaser name + email in D1 → now disclosed, with **24-month anonymisation**
  (`scheduled` weekly cron) and `/gdpr/export` + `/gdpr/erase` operator endpoints. Erasure scrubs
  identity but **keeps the financial row** — fiscal records are a 10-year legal duty. Logic tested. ✅
- `malhao-concierge` is stateless — no conversation storage anywhere. ✅
- **Not yet deployed.** `npx wrangler deploy` in `~/malhao-pay` and `~/malhao-concierge`.

## 🔴 The launch gate — in order
1. **Entity data**: legal name, NIPC, registered office, RNET number, contact email + phone.
   Fills the footer, termos §1, privacidade, and the © line.
2. **Commercial policy**: real rates, deposit terms, cancellation windows (rooms vs Casa do Monte),
   no-show, check-in/out times, children, pets, voucher validity, Vitality rescheduling.
3. **Accessibility**: an honest description of what the terrain and buildings actually allow.
4. **Insurance**: confirm the RJET civil liability policy is in force.
5. **Lawyer pass** over termos / terms / privacidade.
6. **Only then**: remove `noindex` (index.html line 5), submit the sitemap, switch Stripe to live keys.

## Caught by runtime inspection, not by reading the code
`cdn.jsdelivr.net` (GSAP + Lenis) and `api.open-meteo.com` (the live estate weather) both receive
the visitor's IP on every page load and were absent from the first draft of the policy — they only
showed up in the browser's network trace. Both are now disclosed. **Lesson for the other sites:
load the page and read the real request list before signing off a processors table.**

## Known residual risk
**Google Fonts is loaded from Google's CDN** on the site *and on the legal pages themselves*, so
every reader's IP reaches Google before any consent. It is now disclosed honestly, which is the
minimum. The clean fix is self-hosting the two families (Playfair Display + Montserrat) — it removes
the transfer entirely and speeds up first paint. Worth doing before launch.
