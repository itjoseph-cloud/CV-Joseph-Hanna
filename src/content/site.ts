export type ImpactCategory = 'Growth' | 'Efficiency' | 'Savings' | 'Risk' | 'Reliability' | 'Adoption'

export interface ImpactMetric {
  value: string
  label: string
  category: ImpactCategory
  context: string
  employer: string
}

export interface Role {
  employer: string
  title: string
  dates: string
  scope: string
  achievements: string[]
}

export interface CaseStudy {
  slug: string
  employer: string
  title: string
  summary: string
  categories: ImpactCategory[]
  context: string
  challenge: string
  role: string
  constraints: string
  strategy: string[]
  execution: string[]
  change: string
  technology: string
  outcomes: string[]
  lessons: string[]
}

export const profile = {
  name: 'Joseph Hanna',
  role: 'Executive Technology Leader',
  positioning: 'VP of IT | Head of IT | Director of IT | CIO-track',
  location: 'Orange County, CA | Remote and Southern California hybrid',
  linkedin: 'https://www.linkedin.com/in/joseph-g-hanna/',
  statement: 'I turn business priorities into secure, scalable, practical technology operations.',
  impact: 'More than 20 years leading modernization, cybersecurity, enterprise systems, and resilient IT operations across growing and global organizations.',
  proof: 'Verified outcomes include 40% lower vulnerability exposure and 99.99% service availability.',
}

export const impacts: ImpactMetric[] = [
  { value: '30%', label: 'less system downtime', category: 'Reliability', context: 'Improved platform stability through disciplined operations and vendor governance.', employer: 'Repipe Specialists' },
  { value: '40%', label: 'lower vulnerability exposure', category: 'Risk', context: 'Strengthened controls, remediation discipline, and cybersecurity posture.', employer: 'Repipe Specialists' },
  { value: '25%', label: 'faster executive decisions', category: 'Efficiency', context: 'Improved visibility and reporting for leadership.', employer: 'Repipe Specialists' },
  { value: '30%', label: 'year-over-year growth supported', category: 'Growth', context: 'Scaled technology foundations as company headcount grew from 50+ to 100+.', employer: 'Repipe Specialists' },
  { value: '99.9%', label: 'infrastructure uptime', category: 'Reliability', context: 'Stabilized services for a 75+ user environment.', employer: 'SafewayTax' },
  { value: '40%', label: 'security-risk reduction', category: 'Risk', context: 'Implemented practical controls across identity, endpoints, and operations.', employer: 'SafewayTax' },
  { value: '50%', label: 'faster onboarding', category: 'Adoption', context: 'Standardized provisioning and employee setup.', employer: 'SafewayTax' },
  { value: '45%', label: 'fewer repeat tickets', category: 'Efficiency', context: 'Improved root-cause resolution and user enablement.', employer: 'SafewayTax' },
  { value: '99.99%', label: 'service availability', category: 'Reliability', context: 'Delivered a multi-tenant data-center build and migration.', employer: 'Jaidah Group' },
  { value: '$2M', label: 'SAP S/4HANA program', category: 'Efficiency', context: 'Led an enterprise ERP program across 15 non-automotive subsidiaries.', employer: 'Jaidah Group' },
]

export const roles: Role[] = [
  {
    employer: 'SafewayTax',
    title: 'IT Consultant',
    dates: 'May 2025 - August 2026',
    scope: 'Technology modernization and operations for a 75+ user organization.',
    achievements: [
      'Migrated 85 people from Google Workspace to Microsoft 365 with structured adoption support.',
      'Sustained 99.9% infrastructure uptime while reducing downtime by 25%.',
      'Improved operational efficiency by 30%, productivity by 20%, and onboarding speed by 50%.',
      'Reduced security risk by 40% and repeat support tickets by 45%.',
    ],
  },
  {
    employer: 'Repipe Specialists',
    title: 'Vice President of Information Technology',
    dates: 'March 2023 - September 2024',
    scope: 'Sole internal IT leader, later selecting and governing an MSP for help desk and incident management as headcount grew from 50+ to 100+.',
    achievements: [
      'Built the technology operating model that supported 30% year-over-year business growth.',
      'Reduced system downtime by 30%, vulnerability exposure by 40%, and incident resolution time by 35%.',
      'Improved executive decision speed by 25% and workflow efficiency by 20%.',
      'Led the NetSuite implementation as business owner, personally led third-party integrations, and administered the environment.',
    ],
  },
  {
    employer: 'Repipe Specialists',
    title: 'Senior Director of Information Technology',
    dates: 'June 2022 - March 2023',
    scope: 'Established enterprise IT operations, governance, cybersecurity, and business systems for a growing organization.',
    achievements: ['Created practical service, security, vendor, and platform disciplines that enabled the expanded VP mandate.'],
  },
  {
    employer: 'AVEVA',
    title: 'IT Leadership Assignment',
    dates: 'February 2022 - May 2022',
    scope: 'Coordinated a 10-person global end-user computing team without formal management authority.',
    achievements: ['Supported an end-user computing estate of approximately 2,800 employees and 2,800 endpoints across global regions.'],
  },
  {
    employer: 'Cherokee Federal',
    title: 'IT Operations Leadership Assignment',
    dates: 'August 2021 - December 2021',
    scope: 'Led seven direct reports across three shifts in a 24/7 operating model.',
    achievements: ['Supported 2,400 employees and computers, plus approximately 1,000 mobile devices and 650 additional tablets.'],
  },
  {
    employer: 'PTS',
    title: 'Independent IT Consultant',
    dates: 'August 2019 - July 2021',
    scope: 'Independent one-person IT consulting and project-delivery function serving multiple small and midsize businesses.',
    achievements: ['Delivered practical infrastructure, systems, security, and modernization work aligned to each client\'s operating needs.'],
  },
  {
    employer: 'Master Engineering Services',
    title: 'IT Leader',
    dates: 'November 2017 - June 2019',
    scope: 'Led seven internal staff plus vendors supporting approximately 250 employees.',
    achievements: ['Directed internal IT service delivery, infrastructure, business systems, and external partners.'],
  },
  {
    employer: 'Jaidah Group',
    title: 'Group IT Leader',
    dates: 'March 2006 - October 2017',
    scope: 'Led the IT department through direct and indirect reporting lines, growing the team from 9 to 17 and supporting 1,250 employees across 17 subsidiaries.',
    achievements: [
      'Led an approximately $2M SAP S/4HANA program across 15 non-automotive subsidiaries and 650 employees.',
      'Delivered separate Incadea implementations for two automotive subsidiaries, standardizing dealer operations, workflows, and reporting.',
      'Built and migrated a multi-tenant data center that achieved 99.99% service availability.',
    ],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'repipe-scalable-it', employer: 'Repipe Specialists', title: 'Building a scalable IT operating model',
    summary: 'Created the technology foundation, governance, and service model required by a rapidly growing organization.', categories: ['Growth', 'Risk', 'Reliability'],
    context: 'Company headcount grew from 50+ to 100+ employees during Joseph’s tenure.',
    challenge: 'A growing business needed stronger reliability, cybersecurity, service ownership, and decision support without a large internal IT organization.',
    role: 'Sole internal IT leader with executive accountability; later selected and governed an MSP for help desk and incident management.',
    constraints: 'Lean internal capacity, rapid workforce growth, and the need to improve service while building formal operating discipline.',
    strategy: ['Prioritize business-critical risks and service gaps.', 'Define vendor accountability and measurable service routines.', 'Standardize security, incident, and platform-management practices.'],
    execution: ['Established a practical IT operating cadence.', 'Transitioned repeatable support work to a governed MSP.', 'Improved reporting and executive visibility.'],
    change: 'Made new processes usable for employees and reinforced ownership with leaders and external partners.',
    technology: 'Enterprise systems, endpoints, identity, security controls, service management, and reporting.',
    outcomes: ['30% reduction in system downtime.', '40% reduction in vulnerability exposure.', '35% faster incident resolution.', '25% faster executive decision-making.', 'Technology capacity supported 30% year-over-year business growth.'],
    lessons: ['Scale the operating model before tool sprawl begins.', 'Vendor outsourcing succeeds only with clear internal ownership.'],
  },
  {
    slug: 'repipe-netsuite', employer: 'Repipe Specialists', title: 'Leading a business-owned NetSuite implementation',
    summary: 'Connected business ownership, partner delivery, hands-on integration leadership, and environment administration.', categories: ['Efficiency', 'Adoption'],
    context: 'A growing organization needed a more integrated enterprise platform and dependable data flows.',
    challenge: 'The implementation had to connect business processes and third-party tools while maintaining clear ownership after go-live.',
    role: 'Executive sponsor and business owner who led the implementation, personally led third-party integrations, and administered the environment.',
    constraints: 'Lean internal resources and dependence on implementation partners for selected technical work.',
    strategy: ['Anchor configuration decisions in business workflows.', 'Keep integration accountability inside the business.', 'Build administration knowledge during implementation.'],
    execution: ['Directed partner activities and key decisions.', 'Led integration work with third-party tools.', 'Administered setup and post-implementation operation.'],
    change: 'Worked with business stakeholders to align the system with real operating practices and adoption needs.',
    technology: 'NetSuite and approved third-party business-tool integrations.',
    outcomes: ['20% workflow and operational-efficiency improvement.', 'A maintainable operating model with internal business ownership.'],
    lessons: ['ERP ownership cannot be delegated entirely to an implementation partner.', 'Hands-on integration leadership reduces gaps between process intent and system behavior.'],
  },
  {
    slug: 'jaidah-enterprise-platforms', employer: 'Jaidah Group', title: 'Modernizing ERP across 17 subsidiaries',
    summary: 'Led a portfolio of SAP S/4HANA and Incadea implementations across a diverse holding group.', categories: ['Efficiency', 'Adoption', 'Growth'],
    context: 'The group supported 1,250 employees across 17 subsidiaries: 15 non-automotive businesses and two automotive businesses.',
    challenge: 'Different operating models needed standard platforms without erasing the workflow requirements of each sector.',
    role: 'Group IT leader accountable for program direction, business alignment, team leadership, and partner coordination.',
    constraints: 'Seventeen subsidiaries, multiple stakeholder groups, mixed reporting lines, and distinct automotive and non-automotive requirements.',
    strategy: ['Use SAP S/4HANA across the 15 non-automotive subsidiaries.', 'Implement Incadea separately for each automotive subsidiary.', 'Align governance while respecting sector-specific workflows.'],
    execution: ['Led the approximately $2M SAP program.', 'Directed two Incadea implementations.', 'Expanded the IT department from 9 to 17 through direct and indirect reporting lines.'],
    change: 'Aligned leaders and users across the holding group, pairing platform rollout with process standardization and adoption.',
    technology: 'SAP S/4HANA for 650 employees across 15 subsidiaries, plus two Incadea environments for approximately 600 automotive employees.',
    outcomes: ['Materially improved processing speed and reporting.', 'Standardized automotive operations, reporting, and dealer workflows across both subsidiaries.'],
    lessons: ['Portfolio architecture should reflect real business-model differences.', 'Enterprise adoption depends on local stakeholder alignment, not only global standards.'],
  },
  {
    slug: 'jaidah-data-center', employer: 'Jaidah Group', title: 'Delivering resilient shared infrastructure',
    summary: 'Built and migrated a multi-tenant data center for a 17-subsidiary holding group.', categories: ['Reliability', 'Risk'],
    context: 'A diverse group needed shared infrastructure capable of supporting business-critical systems across multiple subsidiaries.',
    challenge: 'Modernize hosting and migration while protecting continuity across a complex organization.',
    role: 'Group IT leader accountable for the program, team, vendors, migration governance, and operational readiness.',
    constraints: 'Multi-entity requirements, business continuity risk, and the need to avoid exposing sensitive architecture details.',
    strategy: ['Design for shared services and tenant separation.', 'Sequence migration around business risk.', 'Establish operational ownership before cutover.'],
    execution: ['Coordinated the internal team and delivery partners.', 'Governed build, migration, validation, and transition to operations.'],
    change: 'Prepared business stakeholders and support teams for cutover and new service processes.',
    technology: 'Sanitized multi-tenant data-center and shared-infrastructure model.',
    outcomes: ['Successful build and migration.', '99.99% service availability.'],
    lessons: ['Operational readiness belongs inside the infrastructure program.', 'A safe public case study can prove leadership without publishing sensitive architecture.'],
  },
  {
    slug: 'safeway-microsoft-365', employer: 'SafewayTax', title: 'Modernizing collaboration and IT operations',
    summary: 'Migrated 85 people to Microsoft 365 while improving security, reliability, onboarding, and support quality.', categories: ['Adoption', 'Efficiency', 'Risk', 'Reliability'],
    context: 'A 75+ user organization needed a modern collaboration platform and more dependable technology operations.',
    challenge: 'Move from Google Workspace to Microsoft 365 while reducing disruption and improving the surrounding operating model.',
    role: 'IT consultant responsible for modernization, security, operations, migration leadership, and user adoption.',
    constraints: 'Small-organization capacity and the need to maintain day-to-day service during change.',
    strategy: ['Treat the migration as an operating-model change, not only a platform swap.', 'Standardize identity, provisioning, and support routines.', 'Pair controls with clear user guidance.'],
    execution: ['Migrated 85 people.', 'Improved onboarding and root-cause support practices.', 'Strengthened endpoint and identity controls.'],
    change: 'Provided structured adoption support and clearer employee workflows.',
    technology: 'Microsoft 365, identity, endpoints, collaboration, and service-management practices.',
    outcomes: ['99.9% uptime and 25% less downtime.', '30% operational-efficiency and 20% productivity improvement.', '40% security-risk reduction.', '50% faster onboarding and 45% fewer repeat tickets.'],
    lessons: ['Adoption, security, and service design should move together.', 'Repeat-ticket reduction is a useful signal of operational maturity.'],
  },
  {
    slug: 'global-end-user-operations', employer: 'AVEVA and Cherokee Federal', title: 'Leading end-user operations at scale',
    summary: 'Two distinct assignments demonstrate coordination across global regions and direct 24/7 operational leadership.', categories: ['Reliability', 'Adoption'],
    context: 'AVEVA’s function served approximately 2,800 employees and endpoints globally. Cherokee Federal required 24/7 coverage for a large, diverse device estate.',
    challenge: 'Maintain reliable end-user services across geography, scale, shift coverage, and varied device types.',
    role: 'At AVEVA, coordinated 10 people without formal management authority. At Cherokee Federal, led seven direct reports across three shifts.',
    constraints: 'Short, high-accountability assignments with distributed teams and continuity requirements.',
    strategy: ['Clarify coverage, escalation, and ownership.', 'Coordinate work across regions and shifts.', 'Focus on consistent service routines.'],
    execution: ['Supported approximately 2,800 AVEVA employees and endpoints.', 'At Cherokee, supported 2,400 employees and computers, approximately 1,000 mobile devices, and 650 additional tablets.'],
    change: 'Used direct communication and clear handoffs to align contributors across regions and shifts.',
    technology: 'End-user computing, endpoint operations, mobile-device support, incident escalation, and service coordination.',
    outcomes: ['Global coordination across a 10-person AVEVA team.', 'Direct 24/7 leadership of a seven-person Cherokee Federal team across three shifts.'],
    lessons: ['Influence and formal authority require different leadership methods.', 'Shift transitions are a critical operational control in 24/7 service environments.'],
  },
]

export const credentials = {
  education: [
    'MBA, Project Management - International Business School of Scandinavia',
    'MBA, Business Management - Rome Business School',
    'Bachelor of Applied Science, Information Technology - American Business and Technology University',
    'Bachelor of Commerce, Accounting - Ain Shams University',
  ],
  certifications: [
    'Project Management Professional (PMP)', 'ITIL Foundation', 'Microsoft Certified Technology Specialist (MCTS)',
    'Microsoft Certified Professional (MCP)', 'Data Center Design Associate (DCDA)', 'CIW 410', 'CIW 430',
    'Scrum Fundamentals Certified', 'AI Fluency Framework & Foundations', 'AI Fluency for Small Businesses', 'Claude 101',
  ],
}

export const expertise = [
  ['Business-aligned technology strategy', 'Portfolio prioritization, investment framing, operating models, executive communication'],
  ['Cybersecurity and resilience', 'Risk reduction, identity, endpoints, vulnerability management, continuity, governance'],
  ['Cloud and infrastructure', 'Modern workplace, Microsoft 365, shared infrastructure, availability, vendor operations'],
  ['Enterprise applications', 'SAP S/4HANA, Incadea, NetSuite, integrations, ERP governance, adoption'],
  ['IT operations and service delivery', 'Service management, incident leadership, MSP governance, onboarding, root-cause improvement'],
  ['Transformation leadership', 'Stakeholder alignment, change management, team development, multi-entity delivery'],
] as const
