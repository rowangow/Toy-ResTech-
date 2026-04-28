export const companies = [
  {
    id: "listen-labs",
    name: "Listen Labs",
    tagline: "AI-powered qualitative research at scale",
    founded: "2022",
    hq: "San Francisco, CA",
    stage: "Series A",
    employees: "11–50",
    website: "listenlabs.ai",
    category: "Qualitative Research",
    positioning:
      "Automates in-depth consumer interviews using conversational AI, replacing traditional focus groups with always-on, async video and text interviews. Targets brand and insights teams looking to run qual at quant scale.",
    products: [
      {
        name: "AI Interviews",
        description:
          "Conducts open-ended AI-moderated interviews with consumers, capturing video, audio, and text responses.",
      },
      {
        name: "Insight Synthesis",
        description:
          "Automatically themes, summarises, and surfaces key findings from hundreds of interview transcripts.",
      },
      {
        name: "Audience Panel",
        description:
          "On-demand access to screened consumer participants across demographics and categories.",
      },
    ],
    competitors: ["Discuss.io", "Voxpopme", "Remesh", "Conveo"],
    redditSearchTerms: ['"Listen Labs"', '"ListenLabs"'],
    relevanceTerms: ["listen labs", "listenlabs"],
    twitterHandle: "listenlabsai",
  },
  {
    id: "conveo",
    name: "Conveo",
    tagline: "Conversational AI for market research interviews",
    founded: "2023",
    hq: "Ghent, Belgium",
    stage: "Seed",
    employees: "1–10",
    website: "conveo.ai",
    category: "Qualitative Research",
    positioning:
      "European-founded platform enabling researchers to run fully automated AI moderated interviews in 50+ languages. Positions itself as researcher-first: built by researchers for researchers, with deep flexibility for discussion guides.",
    products: [
      {
        name: "AI Moderator",
        description:
          "Conducts structured and semi-structured interviews autonomously, following a custom discussion guide.",
      },
      {
        name: "Multilingual Research",
        description:
          "Supports 50+ languages natively, enabling global qualitative studies without translation overhead.",
      },
      {
        name: "Analysis Suite",
        description:
          "Provides auto-coded themes, sentiment analysis, and exportable insight reports.",
      },
    ],
    competitors: ["Listen Labs", "Speak", "Marvin"],
    redditSearchTerms: ['"Conveo" research', '"Conveo" interview'],
    relevanceTerms: ["conveo"],
    twitterHandle: "conveo_ai",
  },
  {
    id: "focaldata",
    name: "Focaldata",
    tagline: "Smarter quantitative research and AI Coworker for consumer insight",
    founded: "2018",
    hq: "London, UK",
    stage: "Series A",
    employees: "51–100",
    website: "focaldata.com",
    category: "Quantitative Research",
    positioning:
      "Combines a proprietary online survey platform with AI-driven analysis to deliver faster, more accurate quant research. Known for work with political pollsters, media organisations, and brand trackers. Differentiates on data quality and MRP (multilevel regression and poststratification) modelling.",
    products: [
      {
        name: "Survey Platform",
        description:
          "End-to-end survey creation, sampling, and fielding with real-time quality controls.",
      },
      {
        name: "MRP Modelling",
        description:
          "Statistical technique that produces granular subgroup estimates from national samples — widely used in political and regional research.",
      },
      {
        name: "Brand Tracker",
        description:
          "Continuous tracking of brand awareness, consideration, and perception across custom audiences.",
      },
    ],
    competitors: ["YouGov", "Attest", "Norstat", "Savanta"],
    redditSearchTerms: ['"Focaldata"', '"Focal data" survey'],
    relevanceTerms: ["focaldata", "focal data"],
    twitterHandle: "focaldata",
  },
  {
    id: "coloop",
    name: "CoLoop",
    tagline: "AI research analyst for qualitative synthesis",
    founded: "2023",
    hq: "London, UK",
    stage: "Pre-seed / Seed",
    employees: "1–10",
    website: "coloop.ai",
    category: "Research Synthesis",
    positioning:
      "Positioned as an AI analyst layer that sits on top of existing qual data — transcripts, reports, interview recordings. Aimed at research agencies and consultancies that have large archives of raw qual and need faster synthesis without re-running fieldwork.",
    products: [
      {
        name: "Document Analysis",
        description:
          "Ingests transcripts, PDFs, and research reports and surfaces themes, quotes, and contradictions across sources.",
      },
      {
        name: "AI Analyst Chat",
        description:
          "Conversational interface to interrogate a corpus of qual data — ask questions, get cited answers.",
      },
      {
        name: "Report Generation",
        description:
          "Drafts structured research reports with evidence trails from the source material.",
      },
    ],
    competitors: ["Dovetail", "Aurelius", "Marvin", "Notably"],
    redditSearchTerms: ['"CoLoop" research', '"CoLoop" AI'],
    relevanceTerms: ["coloop", "co-loop"],
    twitterHandle: "coloop_ai",
  },
  {
    id: "remesh",
    name: "Remesh",
    tagline: "Live AI-moderated group conversations at scale",
    founded: "2015",
    hq: "New York, NY",
    stage: "Series B",
    employees: "51–100",
    website: "remesh.ai",
    category: "Qualitative Research",
    positioning:
      "Enables brands and researchers to hold live, moderated group conversations with hundreds of participants simultaneously. AI clusters responses in real-time, giving moderators a live view of emerging themes and consensus. Bridges the depth of focus groups with the scale of surveys.",
    products: [
      {
        name: "Live Conversations",
        description:
          "Real-time group sessions with up to 1,000 participants, AI-moderated and automatically segmented by response type.",
      },
      {
        name: "Real-time Analysis",
        description:
          "Instant AI clustering of open-text responses, surfacing agreement, disagreement, and outlier perspectives as the session runs.",
      },
      {
        name: "Concept Testing",
        description:
          "Rapid stimulus testing with live groups — advertising, packaging, messaging — with immediate reaction capture.",
      },
    ],
    competitors: ["Discuss.io", "Listen Labs", "Voxpopme", "dscout"],
    redditSearchTerms: ['"Remesh" research', '"Remesh" AI survey'],
    relevanceTerms: ["remesh"],
    twitterHandle: "remesh_ai",
  },
  {
    id: "marvin",
    name: "Marvin",
    tagline: "AI-powered research repository and analysis",
    founded: "2020",
    hq: "San Francisco, CA",
    stage: "Seed",
    employees: "1–10",
    website: "heymarvin.com",
    category: "Research Synthesis",
    positioning:
      "Positions itself as the AI research repository for UX and insights teams — a central place to store, tag, search, and synthesise qualitative findings from interviews, usability tests, and survey responses. Differentiates through deep AI tagging and cross-study synthesis rather than just storage.",
    products: [
      {
        name: "Research Repository",
        description:
          "Centralises interview recordings, transcripts, notes, and artefacts with AI-generated tags and summaries.",
      },
      {
        name: "AI Synthesis",
        description:
          "Surfaces themes, patterns, and recurring findings across multiple studies with cited evidence trails.",
      },
      {
        name: "Interview Notetaker",
        description:
          "Joins live research calls to capture, transcribe, and auto-tag insights in real time.",
      },
    ],
    competitors: ["Dovetail", "Aurelius", "CoLoop", "Notably"],
    redditSearchTerms: ['"Hey Marvin" research', '"heymarvin"'],
    relevanceTerms: ["heymarvin", "hey marvin", "marvin.app", "marvin research", "marvin ux", "marvin insights", "marvin interview"],
    twitterHandle: "heymarvin",
  },
];

export const getCompany = (id) => companies.find((c) => c.id === id);
