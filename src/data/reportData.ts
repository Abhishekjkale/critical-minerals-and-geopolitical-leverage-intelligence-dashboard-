export interface MineralData {
  id: string;
  name: string;
  category: 'Battery Minerals' | 'Magnetics & Electronics' | 'Renewables' | 'Semiconductors';
  extractionLeader: string;
  extractionChinaShare: number;
  refiningChinaShare: number;
  downstreamChinaShare: number;
  primaryApplication: string;
  vulnerabilityTier: 'Critical' | 'Severe' | 'Elevated';
  chokepointSummary: string;
  leadTimeYears: string;
}

export interface RegionRiskProfile {
  id: string;
  region: string;
  archetype: 'Processing Monopoly' | 'Friend-Shoring Block' | 'Resource Nationalists' | 'Trusted Suppliers';
  riskRating: 'HIGH' | 'MEDIUM' | 'LOW';
  riskScore: number; // 0 to 100
  riskSummary: string;
  coreStrategicGoal: string;
  primarySupplyRisk: string;
  keyMinerals: string[];
  primaryLeverageTool: string;
  tenYearHorizon: string;
}

export interface CaseStudy {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  region: string;
  riskRating: 'HIGH' | 'MEDIUM' | 'LOW';
  riskDescription: string;
  overview: string;
  tableData: {
    domain: string;
    extractionShare: string;
    refiningShare: string;
    marketControl: string;
  }[];
  leverageMechanisms: {
    title: string;
    description: string;
  }[];
  countermeasuresAndChokepoints: {
    title: string;
    description: string;
    type: 'chokepoint' | 'vulnerability' | 'countermeasure';
  }[];
  tenYearOutlook: string;
  keyTakeaway: string;
}

export interface UpstreamStrategyComparison {
  country: string;
  keyMineral: string;
  primaryPolicyTool: string;
  downstreamSuccessFactor: 'High' | 'Moderate' | 'Emerging';
  notes: string;
}

export interface PolicyItem {
  id: string;
  name: string;
  jurisdiction: string;
  policyType: 'Subsidies & Tax Credits' | 'Export Restrictions' | 'Foreign Investment Screening' | 'Multilateral Alliances' | 'State Equity & Ownership';
  targetDomain: string;
  strategicObjectives: string;
  keyMechanisms: string[];
  enactedYear: string;
  impactScore: number; // 1-100
  vulnerabilities: string;
}

export interface SimulationScenario {
  id: string;
  title: string;
  mineral: string;
  eventDescription: string;
  baseSeverity: number; // 1-100
  affectedTech: {
    name: string;
    impactLevel: 'Critical' | 'Severe' | 'Moderate';
    details: string;
  }[];
  mitigationTimelineMonths: number;
  recommendedCountermeasures: string[];
  geopoliticalImplication: string;
}

// 2026 BASELINE MINERAL DATA
export const MINERALS_DATA: MineralData[] = [
  {
    id: 'rees',
    name: 'Rare Earth Elements (REEs)',
    category: 'Magnetics & Electronics',
    extractionLeader: 'China (~60% domestic)',
    extractionChinaShare: 60,
    refiningChinaShare: 89,
    downstreamChinaShare: 93,
    primaryApplication: 'Permanent magnets for EV motors, F-35 defense actuators, wind turbine direct-drives',
    vulnerabilityTier: 'Critical',
    chokepointSummary: 'Near-monopoly on heavy REE chemical separation (Dysprosium, Terbium). Embargo on magnet-making IP.',
    leadTimeYears: '10–14 years'
  },
  {
    id: 'graphite',
    name: 'Battery Anode Graphite',
    category: 'Battery Minerals',
    extractionLeader: 'China (~70% natural flake)',
    extractionChinaShare: 70,
    refiningChinaShare: 90,
    downstreamChinaShare: 92,
    primaryApplication: 'Lithium-ion battery negative electrode (anode), synthetic spherical graphite',
    vulnerabilityTier: 'Critical',
    chokepointSummary: 'Licensing controls on high-purity natural and synthetic graphite. Energy-intensive graphitization.',
    leadTimeYears: '5–8 years'
  },
  {
    id: 'cobalt',
    name: 'Cobalt',
    category: 'Battery Minerals',
    extractionLeader: 'DRC (~73% mining, Chinese SOE owned)',
    extractionChinaShare: 1, // domestic extraction is negligible
    refiningChinaShare: 75,
    downstreamChinaShare: 80,
    primaryApplication: 'NMC battery cathodes for high-energy density EVs, aerospace superalloys',
    vulnerabilityTier: 'Severe',
    chokepointSummary: 'Midstream chemical refining bottleneck in China despite primary ore extraction concentrated in DRC.',
    leadTimeYears: '7–10 years'
  },
  {
    id: 'lithium',
    name: 'Lithium (Hydroxide & Carbonate)',
    category: 'Battery Minerals',
    extractionLeader: 'Australia (Spodumene) & Chile (Brine)',
    extractionChinaShare: 15,
    refiningChinaShare: 65,
    downstreamChinaShare: 78,
    primaryApplication: 'All commercial EV batteries (NMC, LFP, NCA), grid-scale energy storage systems',
    vulnerabilityTier: 'Severe',
    chokepointSummary: 'Raw spodumene shipped from Australia to China for chemical conversion into battery-grade hydroxide.',
    leadTimeYears: '6–10 years'
  },
  {
    id: 'nickel',
    name: 'Class 1 Nickel / Matte',
    category: 'Battery Minerals',
    extractionLeader: 'Indonesia (>50% global production)',
    extractionChinaShare: 4,
    refiningChinaShare: 68,
    downstreamChinaShare: 72,
    primaryApplication: 'High-nickel cathode chemistry (NMC 811) for long-range electric vehicles',
    vulnerabilityTier: 'Severe',
    chokepointSummary: 'Indonesia Hilirisasi export ban forced Chinese-financed HPAL smelting; high coal emissions and WTO friction.',
    leadTimeYears: '7–9 years'
  },
  {
    id: 'solar-wafer',
    name: 'Solar PV Ingot & Wafer (Silicon)',
    category: 'Renewables',
    extractionLeader: 'China (Silicon mining ~75%)',
    extractionChinaShare: 75,
    refiningChinaShare: 95,
    downstreamChinaShare: 97,
    primaryApplication: 'Photovoltaic cells, crystalline solar panels, renewable power generation',
    vulnerabilityTier: 'Critical',
    chokepointSummary: 'Total downstream wafering and ingot pulling dominance; extreme economies of scale and electricity pricing.',
    leadTimeYears: '4–6 years'
  },
  {
    id: 'gallium-germanium',
    name: 'Gallium, Germanium & Antimony',
    category: 'Semiconductors',
    extractionLeader: 'China (>80% byproduct extraction)',
    extractionChinaShare: 82,
    refiningChinaShare: 88,
    downstreamChinaShare: 85,
    primaryApplication: 'Compound semiconductors (GaAs, GaN), radar optics, military night vision, infrared sensors',
    vulnerabilityTier: 'Critical',
    chokepointSummary: 'Unannounced export licensing curbs under dual-use export laws constraining defense and chip foundries.',
    leadTimeYears: '8–12 years'
  }
];

// REGIONAL RISK PROFILES
export const REGION_PROFILES: RegionRiskProfile[] = [
  {
    id: 'china',
    region: 'China',
    archetype: 'Processing Monopoly',
    riskRating: 'HIGH',
    riskScore: 88,
    riskSummary: 'High probability of targeted export curbs during geopolitical and trade escalations.',
    coreStrategicGoal: 'Maintain midstream industrial domination and intellectual property lock-in.',
    primarySupplyRisk: 'Geopolitical weaponization, export embargoes, and technological export bans.',
    keyMinerals: ['Rare Earth Elements', 'Battery Anode Graphite', 'Lithium Hydroxide', 'Gallium/Germanium'],
    primaryLeverageTool: 'Dual-use export licensing, technology export bans, SOE overseas mine stakes.',
    tenYearHorizon: 'Retains midstream control through 2030 due to massive capital expenditure leadership.'
  },
  {
    id: 'indonesia-latam',
    region: 'Indonesia & South America',
    archetype: 'Resource Nationalists',
    riskRating: 'HIGH',
    riskScore: 78,
    riskSummary: 'Frequent regulatory shifts, contract renegotiations, mandatory JVs, and nationalization risks.',
    coreStrategicGoal: 'Capture local industrial value-add by compelling domestic midstream smelting.',
    primarySupplyRisk: 'Policy instability, sudden raw export bans, ESG compliance vulnerabilities, carbon taxes.',
    keyMinerals: ['Class 1 Nickel (Indonesia)', 'Lithium Brine (Chile, Argentina)', 'Hard-rock Lithium (Zimbabwe)'],
    primaryLeverageTool: 'Raw ore export prohibitions (Hilirisasi), public-private state equity mandates (Codelco).',
    tenYearHorizon: 'Aggressive export bans risk driving capital toward alternative mining basins or sodium-ion substitutions.'
  },
  {
    id: 'usa-eu',
    region: 'United States & European Union',
    archetype: 'Friend-Shoring Block',
    riskRating: 'MEDIUM',
    riskScore: 58,
    riskSummary: 'Regulatory compliance friction, 10-16 year permitting lags, and 30-50% higher CAPEX/labor costs.',
    coreStrategicGoal: 'De-risk adversarial single-source reliance and establish allied ESG supply corridors.',
    primarySupplyRisk: 'Severe midstream chemical processing lag and permitting bottlenecks during multi-year transition.',
    keyMinerals: ['Mountain Pass REEs', 'Salton Sea Lithium', 'Battery Recycling Feeds', 'Silicon Wafers'],
    primaryLeverageTool: 'Tax credit subsidies (IRA Sec 30D), CRMA quotas (10/40/15/65%), MSP allied co-investments.',
    tenYearHorizon: 'Will build parallel, high-cost supply chains for defense & premium EVs; full decoupling economically unfeasible.'
  },
  {
    id: 'australia-canada',
    region: 'Australia & Canada',
    archetype: 'Trusted Suppliers',
    riskRating: 'LOW',
    riskScore: 28,
    riskSummary: 'High stability, trusted democratic rule-of-law, stringent ESG standards; limited refining capacity.',
    coreStrategicGoal: 'Anchor allied critical mineral security while blocking hostile state-backed takeovers.',
    primarySupplyRisk: 'Midstream processing deficit (raw spodumene and concentrates must be refined overseas).',
    keyMinerals: ['Lithium Spodumene (Greenbushes)', 'Hard-rock Cobalt', 'Nickel', 'PGMs', 'Graphite'],
    primaryLeverageTool: 'Foreign Investment Review Board (FIRB) screening, Investment Canada Act divestment orders.',
    tenYearHorizon: 'Remains foundational upstream anchor of Western energy transition, expanding domestic refinery pilots.'
  }
];

// 4 IN-DEPTH CASE STUDIES (Exact data from report pages 1-4)
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'china',
    number: 1,
    title: 'Case Study 1: China',
    subtitle: 'Midstream Processing Monopoly & Downstream Dominance',
    region: 'East Asia',
    riskRating: 'HIGH',
    riskDescription: 'High probability of targeted export curbs during trade tensions and geopolitical escalation.',
    overview: 'Beijing has built a dominant, vertically integrated monopoly spanning midstream chemical processing, precursor synthesis, component manufacturing, and final clean technology assembly over three decades of targeted state subsidies and relaxed environmental externalities.',
    tableData: [
      {
        domain: 'Rare Earth Elements (REEs)',
        extractionShare: '~60% (Domestic mining)',
        refiningShare: '~89% (Chemical refining)',
        marketControl: 'Near-Monopoly on Heavy REEs (Dysprosium, Terbium)'
      },
      {
        domain: 'Battery Anode Graphite',
        extractionShare: '~70% (Natural flake)',
        refiningShare: '~90% (Synthetic / Spherical)',
        marketControl: 'Dominant supply for global EV gigafactories'
      },
      {
        domain: 'Lithium Hydroxide / Carbonate',
        extractionShare: '~15% (Domestic spodumene)',
        refiningShare: '~65% (Chemical refining)',
        marketControl: 'Critical midstream bottleneck for high-nickel cathodes'
      },
      {
        domain: 'Solar Photovoltaics (Wafer / Ingot)',
        extractionShare: '~75% (Silicon mining)',
        refiningShare: '>95% (Ingot & Wafer pulling)',
        marketControl: 'Total downstream price leadership and leverage'
      }
    ],
    leverageMechanisms: [
      {
        title: 'Targeted Export Controls',
        description: 'Licensing restrictions on natural and synthetic graphite, gallium, germanium, and antimony under revised dual-use export laws to constrain foreign defense and semiconductor sectors.'
      },
      {
        title: 'State-Backed Foreign Assets',
        description: 'Direct equity stakes by state-owned enterprises (e.g., Ganfeng, Tianqi, CMOC) in Congolese cobalt mines (Tenke Fungurume) and South American lithium salars.'
      },
      {
        title: 'Technological Embargoes',
        description: 'Ban on exporting rare-earth magnet manufacturing and alloy-making intellectual property to preserve midstream technological dominance.'
      }
    ],
    countermeasuresAndChokepoints: [
      {
        title: 'Environmental Liabilities',
        description: 'Severe soil and groundwater pollution in Jiangxi and Inner Mongolia from heavy REE in-situ leaching and graphite graphitization.',
        type: 'vulnerability'
      },
      {
        title: 'Upstream Raw Ore Dependency',
        description: 'High reliance on raw lithium spodumene imports from Australia and raw cobalt concentrates from the Democratic Republic of Congo (DRC).',
        type: 'chokepoint'
      },
      {
        title: 'Adversarial Decoupling Countermeasures',
        description: 'Western industrial policies (US IRA Section 30D, EU CRMA) explicitly designed to exclude Foreign Entities of Concern (FEOC) from clean energy tax credits.',
        type: 'countermeasure'
      }
    ],
    tenYearOutlook: 'China will retain control of midstream refining through 2030 due to cost leadership and scale, though market share may dilute slightly as Western capacity comes online. High vulnerability to targeted retaliation and trade friction.',
    keyTakeaway: 'The vulnerability is not mining ore in the ground; it is the hazardous, complex chemical separation and precursor processing where China holds 65–95% market control.'
  },
  {
    id: 'usa-eu',
    number: 2,
    title: 'Case Study 2: United States & European Union',
    subtitle: 'Friend-Shoring & Defense Securitization',
    region: 'North America & Western Europe',
    riskRating: 'MEDIUM',
    riskDescription: 'Risks stem from regulatory shifts, 10–16 year permitting lags, and midstream bottlenecks during the energy transition.',
    overview: 'Faced with profound supply chain vulnerabilities, Western market economies are using state-directed industrial policies, friend-shoring networks, and defense authorities to de-risk critical mineral dependency on single-source adversarial nations.',
    tableData: [
      {
        domain: 'US Inflation Reduction Act (IRA Sec 30D)',
        extractionShare: 'EV & Battery Supply Chain',
        refiningShare: 'FEOC Exclusion',
        marketControl: 'Mandates escalating % sourced from US/FTA partners for $7,500 tax credit.'
      },
      {
        domain: 'EU Critical Raw Materials Act (CRMA)',
        extractionShare: 'Strategic Autonomy',
        refiningShare: '2030 Targets',
        marketControl: '≥10% EU extraction, ≥40% EU processing, ≥15% recycling, ≤65% single third-country dependence.'
      },
      {
        domain: 'US Defense Production Act (Title III)',
        extractionShare: 'Defense & Industrial Base',
        refiningShare: 'Direct Grants',
        marketControl: 'Direct federal capital for feasibility studies, battery recycling, and rare earth processing (e.g. MP Materials).'
      },
      {
        domain: 'Minerals Security Partnership (MSP)',
        extractionShare: 'Multilateral Friend-shoring',
        refiningShare: '14 Allied Nations',
        marketControl: 'Co-investing in ESG-compliant mining, refining, and recycling across trusted partner jurisdictions.'
      }
    ],
    leverageMechanisms: [
      {
        title: 'Section 30D FEOC Disqualification',
        description: 'Restricting $7,500 consumer tax credits to vehicles free of battery components and critical minerals extracted or processed by Chinese-owned entities.'
      },
      {
        title: 'Binding EU Domestic Benchmarks',
        description: 'Enforcing the 10/40/15/65 formula across all 27 EU member states to cap vulnerability to single non-EU suppliers by 2030.'
      },
      {
        title: 'Title III National Security Appropriations',
        description: 'Invoking the Defense Production Act to finance domestic heavy rare-earth separation, magnetic alloy facilities, and recycling infrastructure.'
      }
    ],
    countermeasuresAndChokepoints: [
      {
        title: 'Acute Refining Deficit',
        description: 'Despite domestic extraction (e.g., Mountain Pass REEs in California), raw concentrates must still be shipped overseas to China for chemical separation.',
        type: 'chokepoint'
      },
      {
        title: 'Lengthy Permitting Timelines',
        description: 'Mine development timelines average 10–16 years in North America and Western Europe due to rigorous environmental reviews and local community litigation.',
        type: 'vulnerability'
      },
      {
        title: 'Cost Competitiveness Gap',
        description: 'Higher labor costs, rigorous ESG compliance, and strict environmental permitting increase capital intensity by 30–50% over Chinese counterparts.',
        type: 'vulnerability'
      }
    ],
    tenYearOutlook: 'The US and EU will successfully build parallel, high-cost supply chains for defense systems and premier EV sectors, but full industrial decoupling across mass-market clean energy remains economically unfeasible within a decade.',
    keyTakeaway: 'Industrial policy and subsidies can finance domestic mines, but cannot magically compress the decade-long engineering and permitting cycle required for midstream chemical plants.'
  },
  {
    id: 'indonesia-latam',
    number: 3,
    title: 'Case Study 3: Indonesia & South America',
    subtitle: 'Resource Nationalism & Downstream Capture',
    region: 'Southeast Asia & South America',
    riskRating: 'HIGH',
    riskDescription: 'Frequent policy shifts, contract renegotiations, export taxes, and nationalization risks drive high volatility.',
    overview: 'Resource-rich developing nations are departing from traditional raw mineral export models. By deploying export bans, state equity mandates, and cartels, these states force foreign multinationals to invest in domestic midstream processing and downstream manufacturing.',
    tableData: [
      {
        domain: 'Indonesia (Nickel Hilirisasi)',
        extractionShare: '>50% Global Nickel',
        refiningShare: 'HPAL Smelting Boom',
        marketControl: '2020 complete raw nickel ore export ban; attracted >$15B in Chinese FDI.'
      },
      {
        domain: 'Chile & Lithium Triangle',
        extractionShare: 'World Highest-Grade Brine',
        refiningShare: 'Salar de Atacama',
        marketControl: 'National Lithium Strategy: SQM & Albemarle must partner with state SOE Codelco.'
      },
      {
        domain: 'Zimbabwe (Spodumene Mandate)',
        extractionShare: 'Hard-Rock Lithium',
        refiningShare: 'Local Concentrators',
        marketControl: 'Unprocessed lithium export ban forced Chinese firms to construct domestic concentrators.'
      },
      {
        domain: 'OPEC-Style Critical Minerals Cartel',
        extractionShare: 'Trilateral Lithium Proposals',
        refiningShare: 'Pricing Floors',
        marketControl: 'Emerging coordination attempts between Chile, Bolivia, and Argentina to control global pricing.'
      }
    ],
    leverageMechanisms: [
      {
        title: 'The Hilirisasi Raw Ore Prohibition',
        description: 'Total ban on raw unrefined nickel ore exports (effective 2020), forcing foreign miners to construct domestic High-Pressure Acid Leach (HPAL) smelters.'
      },
      {
        title: 'Mandatory State Equity & Rent Capture',
        description: 'Chile National Lithium Strategy requires private operators to cede majority ownership to state-owned Codelco for all new brine concessions in Salar de Atacama.'
      },
      {
        title: 'Technology Transfer & Environmental Quotas',
        description: 'Compelling foreign firms to build domestic refining capacity, transfer chemical IP, and adhere to domestic value-add thresholds to obtain export licenses.'
      }
    ],
    countermeasuresAndChokepoints: [
      {
        title: 'High Carbon Intensity & Coal Smelters',
        description: 'Indonesian HPAL smelters are heavily powered by captive coal power plants, clashing with EU battery passport and US ESG carbon border regulations.',
        type: 'vulnerability'
      },
      {
        title: 'Tailings Disposal & Environmental Liabilities',
        description: 'Deep-sea tailings placement (DSTP) and dry-stack storage create severe ecological risks for coral reefs and local indigenous communities.',
        type: 'vulnerability'
      },
      {
        title: 'Capital Flight & Chemistry Substitution',
        description: 'Aggressive export bans and sovereign risk push Western capital to Australia/Canada and accelerate battery chemistry pivots toward sodium-ion and LFP.',
        type: 'chokepoint'
      }
    ],
    tenYearOutlook: 'Developing mineral powers will continue using resource leverage to capture higher value-add steps in the value chain. However, aggressive export bans risk driving foreign capital toward alternative extraction regions or chemistry substitutions.',
    keyTakeaway: 'Resource nationalism successfully attracts midstream capital, but creates high ESG friction and incentivizes customers to invent chemistries that bypass their minerals.'
  },
  {
    id: 'australia-canada',
    number: 4,
    title: 'Case Study 4: Australia & Canada',
    subtitle: 'Upstream Security & ESG Standards',
    region: 'Oceania & North America',
    riskRating: 'LOW',
    riskDescription: 'Stable democratic governance, rule of law, and high ESG compliance create the lowest geopolitical risk profile.',
    overview: 'Australia and Canada serve as the anchors of Western upstream supply security. Leveraging vast resource reserves, established mining sectors, and high ESG compliance standards, both nations operate as trusted suppliers to allied nations while restricting foreign adversary investments in their domestic mining sectors.',
    tableData: [
      {
        domain: 'Australia: Hard-Rock Powerhouse',
        extractionShare: "World's Largest Lithium Exporter",
        refiningShare: 'Spodumene Concentrates',
        marketControl: 'Greenbushes & Mt Marion mines provide primary feed for global EV supply chains.'
      },
      {
        domain: 'Australia: Foreign Investment Screening',
        extractionShare: 'FIRB Enforcement',
        refiningShare: 'Strategic Veto',
        marketControl: 'Uses Foreign Investment Review Board to block Chinese SOE equity buyouts of domestic explorers.'
      },
      {
        domain: 'Canada: Clean Energy Corridor',
        extractionShare: 'Lithium, Nickel, Graphite, PGMs',
        refiningShare: 'North American Hub',
        marketControl: 'Investment Canada Act orders divestments of Chinese SOEs (Sinomine, Chengxin, Zangge).'
      },
      {
        domain: 'Cross-Border Defense Integration',
        extractionShare: 'US DPA Title III Alignment',
        refiningShare: 'FTA Integration',
        marketControl: 'Canadian and Australian mines qualify directly for US IRA $7,500 electric vehicle tax credits.'
      }
    ],
    leverageMechanisms: [
      {
        title: 'FIRB & Investment Canada Act Filtering',
        description: 'Aggressive national security screening to veto hostile state-backed takeovers and order mandatory divestments of foreign SOE equity stakes in domestic critical mineral explorers.'
      },
      {
        title: 'Core Anchor in the Minerals Security Partnership',
        description: 'Serving as the primary ESG-compliant feedstock anchors for 14 partner economies, supplying Japan, South Korea, the EU, and the United States.'
      },
      {
        title: 'Domestic Downstream Refinery Incentives',
        description: 'Federal tax credits and critical minerals production incentives (e.g. Australian Production Tax Incentive) to build local lithium hydroxide and nickel sulfate conversion plants.'
      }
    ],
    countermeasuresAndChokepoints: [
      {
        title: 'Severe Midstream Processing Deficit',
        description: 'Despite mining immense lithium spodumene and nickel ore, Australia and Canada still export the vast majority of raw concentrates to China for chemical refining.',
        type: 'chokepoint'
      },
      {
        title: 'High Capital Expenditure & Operating Costs',
        description: 'Remote deposit logistics, high domestic wages, and stringent environmental compliance make establishing local chemical refineries 2–3x costlier than in Asia.',
        type: 'vulnerability'
      },
      {
        title: 'Refinery Ramp-up Delays',
        description: 'Early domestic lithium hydroxide refineries in Western Australia (e.g., Kwinana, Kemerton) suffered technical commissioning delays and cost overruns.',
        type: 'vulnerability'
      }
    ],
    tenYearOutlook: 'Australia and Canada will remain indispensable trusted upstream suppliers to the West, gradually expanding domestic midstream processing while deepening military-industrial integration with the US and Europe.',
    keyTakeaway: 'Australia and Canada possess the reserves, governance, and ESG credentials, but their biggest hurdle is closing the midstream conversion gap without pricing themselves out of the market.'
  }
];

// UPSTREAM CAPTURE VS MIDSTREAM INTEGRATION (Page 3 table)
export const UPSTREAM_STRATEGY_COMPARISON: UpstreamStrategyComparison[] = [
  {
    country: 'Indonesia',
    keyMineral: 'Class 1 Nickel / Matte',
    primaryPolicyTool: 'Raw Export Ban (2020) + Tax Holidays',
    downstreamSuccessFactor: 'High',
    notes: 'Created world-class local refining infrastructure ($15B+ FDI), but high coal reliance and carbon footprint.'
  },
  {
    country: 'Chile',
    keyMineral: 'Lithium Carbonate & Hydroxide',
    primaryPolicyTool: 'Public-Private Mandates (Codelco Partnership)',
    downstreamSuccessFactor: 'Moderate',
    notes: 'Generated high sovereign revenues, but created investor uncertainty and slower private capacity expansion.'
  },
  {
    country: 'Zimbabwe',
    keyMineral: 'Hard-Rock Spodumene Lithium',
    primaryPolicyTool: 'Unprocessed Lithium Raw Ore Export Ban',
    downstreamSuccessFactor: 'Emerging',
    notes: 'Forced Chinese battery companies (Zhejiang Huayou) to construct domestic processing concentrators.'
  }
];

// COMPARATIVE STAKEHOLDER MATRIX (Page 4 table)
export const COMPARATIVE_STAKEHOLDER_MATRIX = [
  {
    archetype: 'Processing Monopoly',
    stakeholders: 'China',
    coreStrategicGoal: 'Maintain midstream industrial domination and technology lock-in',
    primarySupplyRisk: 'Geopolitical weaponization, export curbs, and technology embargoes',
    riskLevel: 'HIGH'
  },
  {
    archetype: 'Friend-Shoring Block',
    stakeholders: 'USA, EU, Japan, South Korea',
    coreStrategicGoal: 'De-risk dependencies, secure ESG-compliant supply, onshore value chain',
    primarySupplyRisk: 'High capital costs, permitting lags (10–16 yrs), and transition deficits',
    riskLevel: 'MEDIUM'
  },
  {
    archetype: 'Resource Nationalists',
    stakeholders: 'Indonesia, Chile, DRC, Zimbabwe',
    coreStrategicGoal: 'Capture local industrial value-add and sovereign resource rent',
    primarySupplyRisk: 'Policy instability, sudden export bans, expropriation, and WTO disputes',
    riskLevel: 'HIGH'
  },
  {
    archetype: 'Trusted Suppliers',
    stakeholders: 'Australia, Canada',
    coreStrategicGoal: 'Anchor allied supply chains under rigorous ESG and rule-of-law standards',
    primarySupplyRisk: 'Midstream processing deficit (exporting unrefined ore abroad)',
    riskLevel: 'LOW'
  }
];

// POLICY MATRIX
export const POLICY_ITEMS: PolicyItem[] = [
  {
    id: 'us-ira',
    name: 'US Inflation Reduction Act (IRA Sec 30D)',
    jurisdiction: 'United States',
    policyType: 'Subsidies & Tax Credits',
    targetDomain: 'EV & Battery Supply Chains',
    strategicObjectives: 'Mandates escalating % of critical minerals sourced from US or FTA partners to qualify for $7,500 tax credit. Excludes Foreign Entities of Concern (FEOC).',
    keyMechanisms: ['FEOC exclusion clauses', '50-80% mineral sourcing threshold', 'FTA partner qualification eligibility'],
    enactedYear: '2022 (Phased through 2026+)',
    impactScore: 92,
    vulnerabilities: 'Allied trade friction (EU/Korea initial disputes), lack of domestic refining capacity to satisfy strict thresholds.'
  },
  {
    id: 'eu-crma',
    name: 'EU Critical Raw Materials Act (CRMA)',
    jurisdiction: 'European Union',
    policyType: 'Subsidies & Tax Credits',
    targetDomain: 'Strategic Autonomy & Green Tech',
    strategicObjectives: 'Sets legally binding 2030 targets: ≥10% EU extraction, ≥40% EU processing, ≥15% recycling, and max 65% single third-country dependence.',
    keyMechanisms: ['Strategic Project fast-tracking', 'One-stop permitting authorities', 'Joint procurement mechanisms'],
    enactedYear: '2024',
    impactScore: 88,
    vulnerabilities: 'Permitting opposition in member states (Portugal, Serbia lithium), high EU industrial energy costs.'
  },
  {
    id: 'indo-hilirisasi',
    name: 'Indonesian Nickel Raw Export Ban (Hilirisasi)',
    jurisdiction: 'Indonesia',
    policyType: 'Export Restrictions',
    targetDomain: 'Nickel Smelting & Battery Chemicals',
    strategicObjectives: 'Complete prohibition on unrefined nickel ore exports to force foreign mining firms to build domestic HPAL smelters.',
    keyMechanisms: ['Raw export ban', 'Tax holidays for domestic smelters', 'Concession renewal conditions'],
    enactedYear: '2020 (Permanent)',
    impactScore: 94,
    vulnerabilities: 'Vulnerability to WTO legal disputes, heavy reliance on Chinese capital and captive coal power plants.'
  },
  {
    id: 'china-export-controls',
    name: 'China Dual-Use Export Licensing (Ga, Ge, Sb, Graphite)',
    jurisdiction: 'China',
    policyType: 'Export Restrictions',
    targetDomain: 'Semiconductors, Defense & Battery Anodes',
    strategicObjectives: 'Enforce selective government export licenses for high-purity gallium, germanium, antimony, and synthetic graphite.',
    keyMechanisms: ['Dual-use end-user screening', 'Quota allocation', 'Case-by-case ministry approval'],
    enactedYear: '2023-2024',
    impactScore: 90,
    vulnerabilities: 'Accelerates Western recycling initiatives and alternate synthetic sourcing in Japan and North America.'
  },
  {
    id: 'chile-lithium',
    name: 'Chile National Lithium Strategy',
    jurisdiction: 'Chile',
    policyType: 'State Equity & Ownership',
    targetDomain: 'Lithium Brine Extraction',
    strategicObjectives: 'Establishes public-private partnership requirement where private operators (SQM, Albemarle) partner with state SOE Codelco.',
    keyMechanisms: ['Majority state ownership in strategic salars', 'Direct extraction technology mandate', 'Domestic processing quotas'],
    enactedYear: '2023',
    impactScore: 84,
    vulnerabilities: 'Capital flight risks to Australia and Argentina, slower private capital deployment.'
  },
  {
    id: 'aus-firb',
    name: 'Australia FIRB Critical Minerals Directives',
    jurisdiction: 'Australia',
    policyType: 'Foreign Investment Screening',
    targetDomain: 'Upstream Mining & Refining Concessions',
    strategicObjectives: 'Empowers Foreign Investment Review Board to block non-allied state-owned enterprises from purchasing equity stakes in critical mineral mines.',
    keyMechanisms: ['National interest test enforcement', 'Mandatory divestment orders', 'Supply agreement audits'],
    enactedYear: 'Ongoing (Tightened 2023-2025)',
    impactScore: 82,
    vulnerabilities: 'Limits pool of available exploration capital for junior miners during commodity price downturns.'
  },
  {
    id: 'msp-alliance',
    name: 'Minerals Security Partnership (MSP)',
    jurisdiction: 'Multilateral (14 Nations + EU)',
    policyType: 'Multilateral Alliances',
    targetDomain: 'Allied Supply Chain Financing',
    strategicObjectives: '14-nation coalition (US, EU, Japan, Korea, Australia, Canada, UK, etc.) co-investing in ESG-compliant extraction, processing, and recycling.',
    keyMechanisms: ['Export credit agency co-financing', 'Diplomatic de-risking in Global South', 'Standardized ESG metrics'],
    enactedYear: '2022',
    impactScore: 85,
    vulnerabilities: 'Lack of unified supranational enforcement mechanism; slower capital deployment than Chinese SOEs.'
  },
  {
    id: 'us-dpa-title-iii',
    name: 'US Defense Production Act (Title III)',
    jurisdiction: 'United States',
    policyType: 'Subsidies & Tax Credits',
    targetDomain: 'Defense Critical Materials',
    strategicObjectives: 'Direct presidential authorization to provide federal grants, feasibility funding, and purchase commitments for domestic mineral processing.',
    keyMechanisms: ['Direct capital grants (MP Materials, Albemarle)', 'Purchase guarantees', 'Feasibility funding'],
    enactedYear: 'Active (Expanded 2022-2025)',
    impactScore: 79,
    vulnerabilities: 'Budget caps require repeated congressional appropriations; focuses primarily on defense quantities.'
  },
  {
    id: 'canada-ica',
    name: 'Investment Canada Act Critical Minerals Framework',
    jurisdiction: 'Canada',
    policyType: 'Foreign Investment Screening',
    targetDomain: 'Lithium, Nickel, Graphite Explorers',
    strategicObjectives: 'Strict national security review ordering Chinese state-backed companies to divest all shareholdings in Canadian critical mineral explorers.',
    keyMechanisms: ['Forced divestment decrees', 'Prohibition of SOE joint ventures', 'Pre-closing mandatory notifications'],
    enactedYear: '2022-2024',
    impactScore: 81,
    vulnerabilities: 'Strains bilateral trade relations; juniors struggle to replace Chinese exploration capital.'
  },
  {
    id: 'zimbabwe-ban',
    name: 'Zimbabwe Raw Lithium Export Ban',
    jurisdiction: 'Zimbabwe',
    policyType: 'Export Restrictions',
    targetDomain: 'Hard-rock Lithium Spodumene',
    strategicObjectives: 'Prohibition of unrefined lithium raw ore exports to compel Chinese mining companies to build local concentrator plants.',
    keyMechanisms: ['Customs border ban on raw spodumene ore', 'Concentrate purity thresholds', 'Smelter incentives'],
    enactedYear: '2022',
    impactScore: 76,
    vulnerabilities: 'Border smuggling, infrastructure constraints, reliance on foreign-owned concentrators.'
  }
];

// SIMULATION SCENARIOS
export const SIMULATION_SCENARIOS: SimulationScenario[] = [
  {
    id: 'china-graphite-cut',
    title: 'China Restricts Synthetic & Natural Graphite Exports by 50%',
    mineral: 'Battery Anode Graphite',
    eventDescription: 'Beijing invokes revised dual-use export laws to reduce monthly export licenses for battery-grade coated spherical graphite by 50% in response to Western EV tariffs.',
    baseSeverity: 88,
    affectedTech: [
      {
        name: 'Electric Vehicle Gigafactories',
        impactLevel: 'Critical',
        details: 'Immediate anode bottleneck for NMC and LFP cell manufacturing in US and Europe; estimated 30–45% production curtailment within 60 days.'
      },
      {
        name: 'Grid-Scale Energy Storage',
        impactLevel: 'Severe',
        details: 'Utility battery project delays; cell pricing spikes 22-35% due to secondary market bidding for synthetic anode material.'
      },
      {
        name: 'Consumer Electronics & Drones',
        impactLevel: 'Moderate',
        details: 'Pouch cell price inflation; margin compression for portable electronic makers.'
      }
    ],
    mitigationTimelineMonths: 24,
    recommendedCountermeasures: [
      'Accelerate commercialization of synthetic graphite facilities in North America and Norway.',
      'Deploy synthetic silicon-dominant anode substitution (up to 15% silicon blend in anode active materials).',
      'Invoke US Defense Production Act Title III to subsidize domestic graphitization energy costs.',
      'Ramp up closed-loop gigafactory black mass battery recycling.'
    ],
    geopoliticalImplication: 'Exposes the West’s total reliance on China’s high-temperature graphitization infrastructure, where China controls 90% of global spherical graphite processing.'
  },
  {
    id: 'indonesia-nickel-escalation',
    title: 'Indonesia Expands Hilirisasi & Imposes HPAL Carbon Caps',
    mineral: 'Class 1 Nickel / Matte',
    eventDescription: 'Jakarta halts approvals of new coal-fired captive power plants for HPAL smelters and introduces a 20% export levy on nickel matte to prioritize domestic battery cell assembly.',
    baseSeverity: 79,
    affectedTech: [
      {
        name: 'High-Nickel EV Batteries (NMC 811)',
        impactLevel: 'Critical',
        details: 'Tight supply of battery-grade nickel sulfate; prices jump 38%, squeezing margins of Western premium electric vehicle automakers.'
      },
      {
        name: 'Stainless Steel Smelting',
        impactLevel: 'Severe',
        details: 'Raw feed diversion; higher input costs for European industrial machinery and chemical tanks.'
      },
      {
        name: 'Energy Storage Systems',
        impactLevel: 'Moderate',
        details: 'Accelerates shift toward Nickel-free LFP and sodium-ion chemistries for stationary storage.'
      }
    ],
    mitigationTimelineMonths: 36,
    recommendedCountermeasures: [
      'Fast-track Canadian and Australian nickel sulfide projects (e.g. Crawford, Mt Keith expansion).',
      'Invest in green hydrogen and geothermal-powered HPAL refining retrofits in Indonesia.',
      'Pivot mass-market automotive architectures to LFP (Lithium Iron Phosphate) and Sodium-ion cells.',
      'Negotiate Critical Minerals Agreement (CMA) between the US/EU and Indonesia to enable IRA compliance.'
    ],
    geopoliticalImplication: 'Demonstrates the power of the Global South to dictate environmental and value-add terms when controlling over 50% of an indispensable battery chemical.'
  },
  {
    id: 'china-ree-magnet-ban',
    title: 'China Imposes Total Embargo on Heavy REE Permanent Magnets',
    mineral: 'Rare Earth Elements (Dysprosium & Terbium)',
    eventDescription: 'China retaliates against semiconductor export curbs by placing sintered NdFeB permanent magnets containing Dysprosium and Terbium on the complete export prohibition list.',
    baseSeverity: 95,
    affectedTech: [
      {
        name: 'Defense Guidance & F-35 Actuators',
        impactLevel: 'Critical',
        details: 'Emergency depletion of Department of Defense strategic stockpiles; radar steering and precision missile actuator manufacturing threatened.'
      },
      {
        name: 'Direct-Drive Offshore Wind Turbines',
        impactLevel: 'Critical',
        details: 'Production halt for 14MW+ offshore turbine nacelles; manufacturers forced to redesign for geared induction generators.'
      },
      {
        name: 'Automotive Traction Motors',
        impactLevel: 'Severe',
        details: 'Western EV makers forced to transition to wound-rotor synchronous motors (magnet-free) with 15–20% redesign weight penalties.'
      }
    ],
    mitigationTimelineMonths: 48,
    recommendedCountermeasures: [
      'Execute emergency Defense Production Act Title III contracts with MP Materials and Lynas for heavy REE separation.',
      'Accelerate commercialization of iron-nitrogen (FeN) and ferrite permanent magnet alternatives.',
      'Mandate industrial motor redesigns using magnet-free wound-rotor synchronous motor architectures.',
      'Release emergency reserves from the US National Defense Stockpile.'
    ],
    geopoliticalImplication: 'China’s absolute nuclear option in critical minerals: complete control over heavy REE refining (89%) and magnet patent IP enables surgical asymmetric shock.'
  },
  {
    id: 'latam-lithium-cartel',
    title: 'South American Lithium Triangle Imposes Sovereign Price Floor',
    mineral: 'Lithium (Carbonate & Hydroxide)',
    eventDescription: 'Chile, Argentina, and Bolivia sign the Santiago Protocol, establishing a sovereign export cartel that sets a minimum floor price of $28,000/ton on lithium carbonate.',
    baseSeverity: 74,
    affectedTech: [
      {
        name: 'All Commercial EV Battery Cells',
        impactLevel: 'Severe',
        details: 'Pack-level battery costs increase by $1,800 to $2,400 per EV vehicle; slows mainstream consumer price parity timeline by 2–3 years.'
      },
      {
        name: 'Residential & Commercial Solar Storage',
        impactLevel: 'Moderate',
        details: 'Higher battery capital costs slow rooftop storage adoption in Europe and North America.'
      },
      {
        name: 'Portable Industrial Electronics',
        impactLevel: 'Moderate',
        details: 'Moderate price inflation absorbed by consumer electronics supply chains.'
      }
    ],
    mitigationTimelineMonths: 18,
    recommendedCountermeasures: [
      'Increase spodumene extraction quotas and direct shipping ore (DSO) from Western Australia.',
      'Subsidize Direct Lithium Extraction (DLE) pilots in North American geothermal brines (Salton Sea, Smackover).',
      'Accelerate deployment of sodium-ion battery chemistries for budget vehicles and stationary storage.',
      'Challenge export quota legality under bilateral free trade agreements with Chile.'
    ],
    geopoliticalImplication: 'Highlights the vulnerability of global energy transition economics to sovereign cartelization, mimicking the 1973 OPEC oil embargo playbook.'
  },
  {
    id: 'western-permitting-gridlock',
    title: 'Western Mine Permitting Stalls: Timelines Extend to 16+ Years',
    mineral: 'All Critical Minerals (Lithium, Nickel, REEs)',
    eventDescription: 'Litigation and environmental review bottlenecks in the US, EU, and Canada extend average mine development lead times to 16 years, missing 2030 CRMA targets.',
    baseSeverity: 82,
    affectedTech: [
      {
        name: 'All Western Clean Tech Hubs',
        impactLevel: 'Critical',
        details: 'EU fails to achieve 10% domestic extraction and 40% processing by 2030; reliance on Chinese and Global South imports remains above 75%.'
      },
      {
        name: 'US IRA-Compliant Battery Supply',
        impactLevel: 'Severe',
        details: 'Carmakers face widespread disqualification from $7,500 Section 30D tax credits as FEOC rules tighten without domestic supply.'
      },
      {
        name: 'Domestic Battery Gigafactories',
        impactLevel: 'Severe',
        details: 'Underutilization of billions in newly built Western gigafactories due to unrefined precursor supply shortages.'
      }
    ],
    mitigationTimelineMonths: 72,
    recommendedCountermeasures: [
      'Enact comprehensive federal permitting reform with statutory deadlines and designated strategic corridors.',
      'Treat critical mineral projects under emergency defense authorities equivalent to wartime infrastructure.',
      'Expand bilateral Critical Minerals Agreements with Australia and Canada to share refining feedstock.',
      'Increase capital allocation to urban mining and end-of-life battery recycling.'
    ],
    geopoliticalImplication: 'The greatest threat to Western supply chain security is not foreign embargoes, but self-inflicted domestic regulatory paralysis and cost inflation.'
  }
];

// STRATEGIC CITATIONS & REFERENCES (Page 4)
export const STRATEGIC_REFERENCES = [
  {
    org: 'International Energy Agency (IEA)',
    reportTitle: 'Global Critical Minerals Outlook & Clean Energy Transitions Strategy',
    url: 'iea.org/reports/critical-minerals-market-review',
    scope: 'Market concentration benchmarks, projected demand spikes through 2040, and clean energy technology material intensities.'
  },
  {
    org: 'U.S. Geological Survey (USGS)',
    reportTitle: 'Mineral Commodity Summaries & Critical Mineral Supply Vulnerabilities',
    url: 'usgs.gov/centers/national-minerals-information-center',
    scope: 'Global extraction and reserve statistics, import reliance percentages, and critical mineral designation lists.'
  },
  {
    org: 'Center for Strategic and International Studies (CSIS)',
    reportTitle: 'Critical Minerals and National Security Series',
    url: 'csis.org/programs/energy-security-and-climate-change-program',
    scope: 'Geopolitical weaponization risks, defense supply chain vulnerabilities, and multilateral counter-strategy analysis.'
  },
  {
    org: 'European Commission',
    reportTitle: 'European Critical Raw Materials Act Framework & Supply Chain Mapping',
    url: 'single-market-economy.ec.europa.eu/sectors/raw-materials',
    scope: 'Legislative targets (10/40/15/65%), strategic project certification, and EU single-market de-risking mechanisms.'
  },
  {
    org: 'Eurasia Group',
    reportTitle: 'Geopolitical Risk Top Risks: Energy Transition and Resource Nationalism',
    url: 'eurasiagroup.net/research',
    scope: 'Sovereign resource nationalization metrics, Hilirisasi policy impacts, and Global South state equity trends.'
  },
  {
    org: 'U.S. Department of Energy (DOE)',
    reportTitle: 'Critical Materials Assessment & Supply Chain Strategy',
    url: 'energy.gov/cmm/critical-materials-assessment',
    scope: 'Midstream refining chokepoints, IRA Section 30D implementation guidelines, and Defense Production Act Title III allocations.'
  }
];
