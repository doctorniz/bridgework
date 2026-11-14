/* Intervention library data. Add an object here and it appears on the library page.
   type: "Psychosocial" | "Harm reduction" | "Family" | "Systems" | "Medical"
   settings: any of "Community", "Hospital", "Child protection", "Housing", "Justice", "Youth" */
window.INTERVENTIONS = [
  {
    id: "mi", name: "Motivational interviewing (MI)", type: "Psychosocial",
    settings: ["Community", "Hospital", "Child protection", "Justice", "Youth"],
    summary: "A collaborative conversation style that strengthens a person's own motivation and commitment to change.",
    use: "Anyone ambivalent about changing substance use, including people who did not choose to attend.",
    how: ["Spirit: partnership, acceptance, compassion, evocation.", "Core skills (OARS): open questions, affirmations, reflections, summaries.", "Listen for change talk and respond to it; avoid arguing for change."],
    evidence: "Strong evidence base across alcohol and drug use, with generally small to moderate effects; works well as a first conversation and alongside other treatment.",
    link: "modules/motivational-interviewing.html"
  },
  {
    id: "sbirt", name: "Screening and brief intervention", type: "Psychosocial",
    settings: ["Community", "Hospital", "Youth"],
    summary: "Short, structured screening for risky use followed by brief advice or a referral to treatment.",
    use: "Routine practice in health and welfare settings, particularly to catch risky use early.",
    how: ["Validated tools: AUDIT / AUDIT-C (alcohol), ASSIST (multiple substances), DAST (drugs).", "Feed back results without judgement, explore concerns, offer options.", "Refer to specialist assessment where screening indicates higher risk."],
    evidence: "Brief intervention has best support for risky alcohol use in health settings; evidence is weaker for illicit drug use.",
    link: null
  },
  {
    id: "cbt", name: "CBT and relapse prevention", type: "Psychosocial",
    settings: ["Community", "Hospital", "Justice"],
    summary: "Skills-based therapy: identify triggers, challenge unhelpful thinking, build coping and plan for lapses.",
    use: "People who have decided to change and want practical skills; delivered by trained clinicians, with social workers supporting skills practice.",
    how: ["Functional analysis of use: triggers, thoughts, feelings, consequences.", "Coping skills, refusal skills, urge management.", "Plan for high-risk situations and for what to do after a lapse."],
    evidence: "Among the best-supported psychological treatments for substance use disorders, with effects that often persist after treatment ends.",
    link: null
  },
  {
    id: "cm", name: "Contingency management", type: "Psychosocial",
    settings: ["Community", "Justice"],
    summary: "Planned, immediate rewards for evidence of behaviour change, such as drug-free tests.",
    use: "Stimulant use disorders especially; also useful to improve treatment attendance.",
    how: ["Define a target behaviour that can be objectively verified.", "Deliver reinforcement promptly and consistently.", "Agree the schedule and any limits in advance, transparently."],
    evidence: "Among the most effective approaches for stimulant use disorders, where there are no approved medications. Benefits can fade when rewards stop, so pair with other support.",
    link: null
  },
  {
    id: "craft", name: "CRAFT (Community Reinforcement and Family Training)", type: "Family",
    settings: ["Community", "Youth"],
    summary: "Trains family members to reduce risk, take care of themselves and encourage a loved one towards treatment.",
    use: "Families worried about someone who is not engaging with services.",
    how: ["Teach positive communication and reinforcement of non-use.", "Safety planning and self-care for the family.", "Identify good moments to invite the person to treatment."],
    evidence: "Evidence shows it engages more resistant loved ones into treatment than confrontational approaches or referral to support groups alone.",
    link: null
  },
  {
    id: "harm", name: "Harm reduction: naloxone and safer use", type: "Harm reduction",
    settings: ["Community", "Hospital", "Housing", "Justice"],
    summary: "Practical steps that reduce the harms of drug use without requiring abstinence.",
    use: "Anyone who uses drugs, or is at risk of overdose, including after release from prison or hospital.",
    how: ["Naloxone: supply, train others, know how to respond to opioid overdose and call emergency services.", "Needle and syringe programs, drug checking where available.", "Never using alone, tolerance drops after a break."],
    evidence: "Naloxone distribution and needle and syringe programs have strong evidence for reducing deaths and blood-borne infections.",
    link: null
  },
  {
    id: "trauma", name: "Trauma-informed practice", type: "Systems",
    settings: ["Community", "Hospital", "Child protection", "Housing", "Justice", "Youth"],
    summary: "Assumes trauma is common and designs every interaction to increase safety, choice and trust.",
    use: "All settings. Trauma and substance use frequently co-occur.",
    how: ["Safety, trustworthiness, choice, collaboration, empowerment.", "Explain what will happen and offer options.", "Avoid forcing disclosure; refer for trauma-specific therapy when indicated."],
    evidence: "A practice framework rather than a single treatment; supports engagement and reduces re-traumatisation. Trauma-specific therapies are delivered by trained clinicians.",
    link: null
  },
  {
    id: "cmgmt", name: "Case management and recovery capital", type: "Systems",
    settings: ["Community", "Hospital", "Housing", "Justice", "Child protection"],
    summary: "Coordinating housing, income, health, legal and family supports so recovery is possible.",
    use: "People with complex needs across multiple services.",
    how: ["Map strengths and resources: social, physical, human and community capital.", "Warm referrals and shared plans across services.", "Review regularly and adjust."],
    evidence: "Supports retention in treatment and outcomes such as housing stability. Quality varies with caseload and service integration.",
    link: null
  },
  {
    id: "peer", name: "Peer support and mutual aid", type: "Psychosocial",
    settings: ["Community", "Hospital", "Justice"],
    summary: "Support from people with lived experience, including 12-step groups, SMART Recovery and peer workers.",
    use: "People wanting community and shared experience alongside or after treatment.",
    how: ["Offer a range of options; fit matters more than method.", "Support first attendance, for example by going along or introducing a peer worker.", "Respect those who decline."],
    evidence: "Participation in mutual-aid groups is associated with better abstinence outcomes; peer workers improve engagement. People self-select, so results are cautious.",
    link: null
  },
  {
    id: "oat", name: "Medication supports (OAT, naltrexone, acamprosate)", type: "Medical",
    settings: ["Community", "Hospital", "Justice"],
    summary: "Medicines prescribed by doctors that treat opioid or alcohol use disorders; social workers support access and adherence.",
    use: "Opioid use disorder: methadone or buprenorphine. Alcohol use disorder: naltrexone, acamprosate and others.",
    how: ["Reduce stigma about medication: it is treatment, not substitution of one addiction for another.", "Remove practical barriers: dosing access, cost, transport, ID.", "Do not advise stopping medication; refer concerns to the prescriber."],
    evidence: "Opioid agonist treatment reduces mortality and illicit opioid use; it is among the most effective interventions in addiction medicine.",
    link: "foundations/medicine.html"
  },
  {
    id: "family", name: "Family and child-focused work", type: "Family",
    settings: ["Child protection", "Community", "Youth"],
    summary: "Supports parenting, child safety and family relationships when a parent's substance use is a concern.",
    use: "Families with children, particularly in statutory contexts.",
    how: ["Assess safety and strengths together; substance use alone is not a safety finding.", "Link parents to treatment that accommodates parenting.", "Support children directly and plan for kin care where needed."],
    evidence: "Integrated parenting and substance use programs show better outcomes than separate services; quality evidence is still developing.",
    link: "cases/dani.html"
  },
  {
    id: "aftercare", name: "Aftercare and responding to relapse", type: "Systems",
    settings: ["Community", "Hospital", "Housing"],
    summary: "Ongoing support and a non-punitive response when use returns, treating relapse as common and informative.",
    use: "Everyone, since addiction is a chronic, relapsing condition for many people.",
    how: ["Regular check-ins after treatment ends.", "Normalise lapses; review triggers and re-engage quickly.", "Overdose risk is higher after a break in use, so revisit safety."],
    evidence: "Continuing care improves long-term outcomes; relapse rates are comparable to other chronic conditions such as asthma and hypertension.",
    link: null
  }
];
