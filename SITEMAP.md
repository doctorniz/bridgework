# Bridgework: site map (GitHub Pages)

Working title, taken from the inspiration canvas. Audience: social work students and practitioners who need to understand addiction medicine, addiction psychology, and the interventions social workers can actually use.

## What the inspiration canvas gives us
- 3 boards: **Home**, **Intervention library** (filterable), **Module 1: Motivational interviewing**.
- Top bar: crisis lines (AOD hotline, Lifeline) + nav: Foundations / Interventions / Learning paths / Case studies / Practice tools.
- Home: "Where is your client right now?" (stages of change), foundations in 3 pillars (body/brain, behaviour/mind, context), 12-intervention toolkit, worked case study (Dani, 34), 3 practice principles, footer with Review panel / Editorial policy / Contact.
- Module template: learning outcomes → concepts → skills → interactive "choose a response" quiz → "in your setting" → key reading.
- Look: deep teal `#0E4F55` / `#1F6B70`, ink `#132026`, warm off-white `#F3F4EF`, amber accent `#E6A645`.

## Site structure

```
/                          Home
/foundations/
    medicine/              Addiction medicine
        substances-body-brain
        reward-stress-neuroadaptation
        withdrawal-and-medical-risk
        medications (OAT, naltrexone, acamprosate, NRT, naloxone)
        overdose-and-harm-reduction-basics
    psychology/            Addiction psychology
        learning-habit-cue-reactivity
        ambivalence-and-motivation (stages of change)
        co-occurring-mental-health
        trauma-and-adverse-experiences
        shame-identity-and-recovery
    context/               Social determinants
        housing-income-justice
        families-children-safety
        stigma-and-access
        culture-and-communities (incl. First Nations / local context)
/interventions/            Library, filter by approach type and setting
    motivational-interviewing
    screening-brief-intervention (AUDIT, DAST, ASSIST)
    cbt-relapse-prevention
    contingency-management
    craft (family-focused)
    harm-reduction (naloxone, safer use, NSP)
    trauma-informed-practice
    case-management-recovery-capital
    peer-support-mutual-aid
    family-and-child-focused
    brief-therapies (solution-focused, etc.)
    aftercare-and-relapse-response
/paths/                    Learning paths (ordered module sequences)
    foundations (start here)
    first-conversations
    child-protection-and-aod
    hospital-and-emergency
    community-and-outreach
/modules/                  One page per module, shared template
/cases/                    Case studies, branching, with reflection prompts
/tools/                    Practice tools
    stage-of-change-finder
    screening-tool-guide
    withdrawal-risk-checklist (flags for medical referral, not diagnosis)
    language-guide (person-first, stigma-free)
    referral-pathway-builder
    glossary
/evidence/                 Reading lists and summaries, each with citation + date reviewed
/support/                  Crisis lines and local services
/about/  (editorial policy, review panel, contact, accessibility, licence)
```

## Page templates (build 4, reuse everywhere)
1. **Landing/hub**: hero, stage-of-change selector, pillar cards.
2. **Library**: card grid + two filters (approach, setting), search, "clear filters" empty state.
3. **Module**: outcomes, content, interactive quiz, "in your setting" tabs, key reading, next/prev.
4. **Case study**: scenario, decision points, feedback, debrief.

## Features
- Client-side search (Lunr or Pagefind).
- Progress tracking in `localStorage` (no accounts, no server, so it fits GitHub Pages and keeps learner data private). Replace "Sign in" with "My progress".
- Quizzes and branching cases in vanilla JS.
- Dark mode, keyboard accessible, WCAG AA, print stylesheet.
- Every page: "last reviewed" date, evidence level, and a crisis-support strip.

## Tech (GitHub Pages)
- **Eleventy (11ty)** or plain HTML/CSS/JS. Recommend 11ty: Markdown content, Nunjucks templates, zero client framework, deploys via GitHub Actions.
- Content as Markdown with front matter (`title`, `pillar`, `approach`, `setting`, `reviewed`, `evidence`).
- Layout: `src/_includes/` templates, `src/content/`, `src/assets/`, `.github/workflows/pages.yml`.

## Content and safety rules
- Educational, not clinical advice; withdrawal and overdose content always points to medical care.
- Strengths-based, non-stigmatising language throughout.
- Cite sources; show review dates; Review panel / Editorial policy pages are required, not optional.
- Hotlines are region-specific. The canvas uses Australian numbers, so I kept that default.

## Build order
1. Scaffold 11ty + design tokens + base layout + Pages deploy.
2. Home + Library + Module template, with 3 seed modules (MI, SBIRT, withdrawal).
3. Foundations pillars (medicine, psychology, context).
4. Tools (stage finder, glossary, language guide).
5. First two case studies; learning paths; search; progress tracking.
6. Evidence pages, about/policies, accessibility pass.
