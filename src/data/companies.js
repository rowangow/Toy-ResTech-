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
    redditSearchTerms: ["Listen Labs", "ListenLabs AI research"],
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
    redditSearchTerms: ["Conveo AI", "Conveo market research"],
    twitterHandle: "conveo_ai",
  },
  {
    id: "focaldata",
    name: "Focaldata",
    tagline: "Smarter quantitative research powered by AI",
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
    redditSearchTerms: ["Focaldata", "Focaldata survey"],
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
    redditSearchTerms: ["CoLoop AI", "CoLoop research"],
    twitterHandle: "coloop_ai",
  },
];

export const getCompany = (id) => companies.find((c) => c.id === id);
