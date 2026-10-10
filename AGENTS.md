# Documentation authoring rules

These rules apply whenever creating or substantially editing the homeowner-facing renovation guide in `docs/`, including Markdown/MDX stage pages, checklists, overviews, and topic pages.

## Source of truth and reference pages

- For construction-stage pages, use [`docs/01-stage-template.md`](docs/01-stage-template.md) for the shared structure and [`docs/stages/08-tiling-and-leveling.md`](docs/stages/08-tiling-and-leveling.md) as the depth and practicality benchmark. Match its level of decision support; do not copy tile-specific content into unrelated stages.
- Before editing an existing page, inspect that page, its checklist, linked overview/sidebar entries, and relevant notes in [`docs/references/topic-source-notes.md`](docs/references/topic-source-notes.md). Preserve useful existing details and links.
- Keep one authoritative explanation for each topic. Put stage-specific instructions in the stage page, compressed field checks in its checklist, project-wide rules in the overview/template, and source research in the reference notes.

## Reader and purpose

Write for a homeowner in China who buys materials directly and hires workers. The reader coordinates, checks, records, and decides whether to release the next stage; the guide does not train them to replace qualified workers, designers, inspectors, or licensed trades.

Every practical instruction should answer as many of these as the subject requires:

1. What to check or do, and at what point in the sequence.
2. Where to check and what tool, document, label, or measurement to use.
3. What acceptable evidence/result looks like and what standard or product instruction defines it.
4. What to photograph or record.
5. What to do if it fails, and whether work must stop before covering or continuing.

Replace vague advice such as “check carefully,” “use good materials,” or “follow standard practice” with concrete steps, examples, observable signs, and escalation/hold instructions. Explain unavoidable uncertainty rather than hiding it behind generic language.

## Required structure for a construction-stage page

Follow the sequence below. Combine adjacent sections only when the stage genuinely has no separate content for them; do not omit material acceptance, waiting, or release decisions just to shorten the page.

1. YAML front matter consistent with neighboring pages, then a clear H1.
2. Links to previous stage, overall process, next stage, and the matching field checklist.
3. **Stage goal**: finished state and key interfaces.
4. **Entry conditions**: documents, prior-stage acceptance, dimensions, and site readiness.
5. **Scope of work**: what is included, excluded, and priced separately.
6. **Materials and selection**: product types, decision criteria, common sizes/specifications, suitable locations, alternatives, and trade-offs.
7. **Procurement and arrival acceptance**: ordering information, delivery checks, documents, batch/lot/label checks, quantity, damage, storage, and issue handling.
8. **Accessories, consumables, and tools**: what accompanies the main material, compatible models/specifications, quantity calculation, practical use, removal/cleanup, reuse, and limitations.
9. **Methods and work sequence**: common workmanship options, site preparation, step-by-step checkpoints, interfaces, and sample/mock-up approval where relevant.
10. **Common defects and cost-cutting signals**: visible symptom, likely cause, risk, how to verify, and corrective action.
11. **Questions to confirm with workers**: specific decisions to write into the scope, quotation, or change order.
12. **Waiting, curing, and hold points**: why to wait, what condition permits inspection/next work, what must not be covered, and who releases it.
13. **Acceptance method**: tools, inspection order, observation/measurement/test, evidence to retain, and decision criteria.
14. **Rectification and retest**, **finished-product protection**, **records**, and **payment/release conditions**.
15. Relevant standards, official references, product instructions, and source notes.

Use headings that tell the homeowner what they will learn or do, such as “到货怎么验” or “调平卡扣怎么核量”; avoid generic headings like “注意事项” when a precise topic heading is possible.

## Material acceptance standard

For every important main material, explain the physical delivery workflow, not only how to choose it:

- Compare the signed order/quotation, delivery note, package label, and product/technical documents. State which fields must match: seller and manufacturer, exact product name/model, dimensions, grade/class, batch/lot, color/shade, production date where relevant, quantity, and declared standard.
- Show where the homeowner finds each field on the box, label, nameplate, certificate, report, invoice, or delivery note. Explain distinctions such as seller address vs. actual factory address, nominal size vs. working size, product category vs. quality grade, certificate scope vs. a brand-wide claim.
- Describe a proportionate sampling plan and practical visual/dimensional checks. Say which checks are only screening observations and which require a formal test. Give a stop/segregate/document/escalate action for mismatches, mixed lots, missing documents, shortages, or damage.
- Explain relevant certification precisely: whether it is mandatory for this product category, how to check certificate status and exact model/manufacturer/site coverage, and what the certificate does not prove. Never tell readers that every product in a broad category needs the same mark.
- Cover packaging, storage, shelf life, matching/compatibility, and how to preserve labels, sample pieces, invoices, photos, and delivery discrepancies when they affect later claims.

For accompanying materials and accessories, identify whether they are consumables or reusable tools; list the compatibility parameters, how to estimate and inventory quantity, what the worker should demonstrate, correct use/removal/clean-up, and common failure modes. Base quantities and timing on the approved layout, actual dimensions, applicable standard, and the specific manufacturer's chart/instructions. Label experience-based estimates as estimates, not universal requirements.

## Technical accuracy, standards, and evidence

- The default case is a residential project in Jiangsu. State the relevant city and date for local prices, delivery/labor practices, or local administrative rules. Do not repeat boilerplate about Jiangsu where it adds no decision value.
- Prioritize sources in this order: current laws and mandatory national standards; current official national/industry standards and authoritative government notices; local government/authority sources for Jiangsu-specific matters; manufacturer technical sheets for that exact product/system; then clearly labeled field experience. Separate legal requirements, recommended standards, contract requirements, manufacturer instructions, and common practice.
- For each important technical claim, give the standard identifier and title, relevant clause/table when known, current/abolished status and effective date when material, and a direct authoritative link. Check current status before publishing; record the source and verification date in `docs/references/topic-source-notes.md` when a claim is important, time-sensitive, disputed, or used across pages.
- Never invent clause numbers, exact tolerances, waiting periods, coverage rates, prices, certification status, brand/manufacturer origin, or “national” rules. When the value depends on design, substrate, product, climate, city, or contract, say what controls it and how the homeowner obtains the correct value.
- Price examples must state city/region, date or period, source, unit, product specification, and what is included/excluded. Distinguish retail quotes from construction cost-information references; never imply a city price is a province-wide price.
- Discuss production regions and brand examples as leads for comparison, not proof of quality. Ask readers to verify the actual production enterprise/site, exact model, batch, test data, and after-sales responsibility. Avoid unsourced rankings and blanket claims that a region or brand is always superior.
- Correct intuitive but misleading tests explicitly. Explain what a field test can indicate, what it cannot establish, and when a recognized laboratory test or document is needed.

## Matching checklist and site-wide workflow

- Each stage page must link to a corresponding one-page checklist. Update the checklist in the same change when material fields, hold points, tests, or acceptance requirements change.
- A checklist item must be observable and answerable in the field. Prefer one verifiable action per item; do not copy long explanatory paragraphs into the checklist.
- Preserve the project release loop: entry readiness → material verification → written method/scope → work and evidence → required wait/curing → hold-point acceptance → correction and retest → protection → release to next stage/payment condition.
- Keep the overview, stage links, checklist index, navigation/sidebar, source notes, and templates consistent with any page/file changes.

## Completion check

Before finishing a documentation change:

1. Compare the edited stage with the structure above and the practical depth of stage 08; confirm no required decision/check is left at a generic “注意施工” level.
2. Verify every citation supports the adjacent statement and uses a current authoritative source; clearly mark uncertain or experience-based details.
3. Check Markdown/MDX formatting, tables, links, front matter, heading hierarchy, and any Chinese emphasis syntax in the rendered output when relevant.
4. Update the matching checklist and source notes where required; confirm internal links and navigation still resolve.
5. Run `npm run build` for site-content or site-UI changes and fix any build errors before handing off.
