# Malhão Pardo — Portuguese legal compliance checklist
_Built from the 2026 benchmark research (Aman/Barrocal teardown + Turismo de Portugal / ASAE /
Lei 144/2015 / DL 24/2014 / RGPD sources). Status legend: ✅ done on site · 🟡 built, needs João's
data · 🔴 needs external action._

## Mandatory
| Item | Legal basis | Status |
|---|---|---|
| RNET registration number displayed | DL 39/2008 (RJET) | 🟡 placeholder in footer/termos — needs the number |
| Legal entity + NIPC + address on site | DL 7/2004 art.10, CSC art.171 | 🟡 placeholders everywhere — needs data |
| Livro de Reclamações Eletrónico link | DL 156/2005 (74/2017) | ✅ footer + termos §9 |
| RAL/ADR entity disclosure (CNIACC) | Lei 144/2015 art.18 | ✅ footer + termos §9 (no dead EU-ODR link — platform closed 2025) |
| Privacy/RGPD policy in PT, named controller | RGPD | ✅ privacidade.html (controller = 🟡 placeholder) |
| Cookie rule | Lei 41/2004 art.5 | ✅ site sets no tracking cookies; Vimeo loaded dnt=1; stated in policy |
| Prices VAT-inclusive; tourist tax separate | price display rules | ✅ termos §3 + booking choreography |
| Terms & conditions incl. booking contract moment | consumer law | ✅ termos/terms (cancellation windows 🟡) |
| Art.17 DL 24/2014 withdrawal exemption stated honestly | DL 24/2014 | ✅ termos §4/§5; voucher 14-day right §6 |
| SIBA foreign-guest reporting disclosed | Lei 23/2007 | ✅ termos §7 + privacidade |
| Civil liability insurance held | RJET | 🔴 confirm policy exists; optionally name insurer |
| Physical: classification plaque, paper Livro, info book | RJET/DL156 | 🔴 at the property — João |
| Restaurant allergens info | Reg. (EU) 1169/2011 | 🔴 when menus publish — add allergen note |
| Accessibility statement | DL 163/2006 | 🔴 write honest access description when facts known |

## Payment layer (Stripe)
- Stripe named as processor in termos §3 + privacidade ✅
- No card data stored ✅ (Checkout-hosted)
- Voucher withdrawal rights ✅ · LIVE keys gated on entity+prices+lawyer 🔴

## Before removing noindex (the launch gate)
1. Entity/NIPC/morada/RNET filled (site + termos + privacidade)
2. Real rates + cancellation windows + check-in/out + pets/children policies
3. Lawyer pass over termos/terms + privacidade
4. Then: remove `noindex` meta, submit sitemap, switch Stripe to live keys.
