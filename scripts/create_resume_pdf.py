from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak

OUT = "output/pdf/Joseph_Hanna_Executive_Resume.pdf"
NAVY = colors.HexColor("#071A2B")
TEAL = colors.HexColor("#087F75")
MUTED = colors.HexColor("#52626E")
LINE = colors.HexColor("#D7DDDF")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", fontName="Helvetica-Bold", fontSize=25, leading=28, textColor=NAVY, spaceAfter=3))
styles.add(ParagraphStyle(name="Position", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=TEAL, spaceAfter=6))
styles.add(ParagraphStyle(name="Contact", fontName="Helvetica", fontSize=8.5, leading=11, textColor=MUTED, spaceAfter=8))
styles.add(ParagraphStyle(name="Section", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=NAVY, spaceBefore=8, spaceAfter=5, borderWidth=0, borderPadding=0))
styles.add(ParagraphStyle(name="BodyX", fontName="Helvetica", fontSize=8.5, leading=11.2, textColor=colors.HexColor("#22333F"), spaceAfter=4))
styles.add(ParagraphStyle(name="Role", fontName="Helvetica-Bold", fontSize=9.3, leading=11.5, textColor=NAVY))
styles.add(ParagraphStyle(name="Employer", fontName="Helvetica-Bold", fontSize=8.5, leading=11, textColor=TEAL))
styles.add(ParagraphStyle(name="Date", fontName="Helvetica", fontSize=8.2, leading=11, textColor=MUTED, alignment=TA_LEFT))
styles.add(ParagraphStyle(name="BulletX", fontName="Helvetica", fontSize=8.1, leading=10.5, leftIndent=10, firstLineIndent=-7, textColor=colors.HexColor("#22333F"), spaceAfter=2))
styles.add(ParagraphStyle(name="Small", fontName="Helvetica", fontSize=7.6, leading=9.7, textColor=MUTED))

roles = [
    ("IT Consultant", "SafewayTax", "May 2025 - Aug 2026", "Technology modernization and operations for a 75+ user organization.", [
        "Migrated 85 people from Google Workspace to Microsoft 365 with structured adoption support.",
        "Sustained 99.9% infrastructure uptime while reducing downtime by 25%.",
        "Improved operational efficiency by 30%, productivity by 20%, and onboarding speed by 50%.",
        "Reduced security risk by 40% and repeat support tickets by 45%.",
    ]),
    ("Vice President of Information Technology", "Repipe Specialists", "Mar 2023 - Sep 2024", "Sole internal IT leader who later selected and governed an MSP as company headcount grew from 50+ to 100+.", [
        "Built a scalable technology operating model that supported 30% year-over-year business growth.",
        "Reduced downtime by 30%, vulnerability exposure by 40%, and incident resolution time by 35%.",
        "Improved executive decision speed by 25% and workflow efficiency by 20%.",
        "Led NetSuite implementation as business owner, personally led third-party integrations, and administered the environment.",
    ]),
    ("Senior Director of Information Technology", "Repipe Specialists", "Jun 2022 - Mar 2023", "Established enterprise IT operations, governance, cybersecurity, and business systems for a growing organization.", []),
    ("IT Leadership Assignment", "AVEVA", "Feb 2022 - May 2022", "Coordinated a 10-person global end-user computing team without formal management authority, supporting approximately 2,800 employees and endpoints.", []),
    ("IT Operations Leadership Assignment", "Cherokee Federal", "Aug 2021 - Dec 2021", "Led seven direct reports across three shifts in a 24/7 model supporting 2,400 employees and computers, approximately 1,000 mobile devices, and 650 additional tablets.", []),
    ("Independent IT Consultant", "PTS", "Aug 2019 - Jul 2021", "Operated a one-person IT consulting and project-delivery function serving multiple small and midsize businesses.", []),
    ("IT Leader", "Master Engineering Services", "Nov 2017 - Jun 2019", "Led seven internal staff plus vendors supporting approximately 250 employees.", []),
    ("Group IT Leader", "Jaidah Group", "Mar 2006 - Oct 2017", "Led the IT department through direct and indirect reporting lines, growing the team from 9 to 17 and supporting 1,250 employees across 17 subsidiaries.", [
        "Led an approximately $2M SAP S/4HANA program across 15 non-automotive subsidiaries and 650 employees.",
        "Delivered separate Incadea implementations for two automotive subsidiaries, standardizing dealer operations and reporting.",
        "Built and migrated a multi-tenant data center that achieved 99.99% service availability.",
    ]),
]

def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE); canvas.line(0.62*inch, 0.47*inch, 7.88*inch, 0.47*inch)
    canvas.setFont("Helvetica", 7); canvas.setFillColor(MUTED)
    canvas.drawString(0.62*inch, 0.3*inch, "Joseph Hanna | Executive Technology Leadership")
    canvas.drawRightString(7.88*inch, 0.3*inch, f"Page {doc.page}")
    canvas.restoreState()

doc = SimpleDocTemplate(OUT, pagesize=LETTER, rightMargin=0.62*inch, leftMargin=0.62*inch, topMargin=0.55*inch, bottomMargin=0.58*inch, title="Joseph Hanna Executive Resume", author="Joseph Hanna", subject="Executive technology leadership resume")
story = []
story += [Paragraph("Joseph Hanna", styles["Name"]), Paragraph("VP OF IT | HEAD OF IT | DIRECTOR OF IT | CIO-TRACK", styles["Position"]), Paragraph("Orange County, CA | Open to remote and Southern California hybrid roles | linkedin.com/in/joseph-g-hanna", styles["Contact"])]
story.append(Table([[""]], colWidths=[7.26*inch], rowHeights=[2], style=TableStyle([("BACKGROUND",(0,0),(-1,-1),TEAL)])))
story += [Paragraph("EXECUTIVE PROFILE", styles["Section"]), Paragraph("Business-minded technology executive with more than 20 years of experience translating strategy into secure, scalable, practical technology operations. Leadership spans cybersecurity, cloud modernization, enterprise applications, infrastructure, service delivery, vendor governance, team development, and complex transformation across growing, global, and multi-entity organizations.", styles["BodyX"])]
story += [Paragraph("SELECTED LEADERSHIP IMPACT", styles["Section"])]
impact_data = [
    [Paragraph("30%", styles["Role"]), Paragraph("less system downtime", styles["Small"]), Paragraph("40%", styles["Role"]), Paragraph("lower vulnerability exposure", styles["Small"])],
    [Paragraph("99.99%", styles["Role"]), Paragraph("data-center availability", styles["Small"]), Paragraph("2,800", styles["Role"]), Paragraph("global employees and endpoints supported", styles["Small"])],
]
impact = Table(impact_data, colWidths=[0.55*inch,2.1*inch,0.65*inch,3.0*inch], hAlign="LEFT")
impact.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("BOX",(0,0),(-1,-1),0.5,LINE),("INNERGRID",(0,0),(-1,-1),0.5,LINE),("BACKGROUND",(0,0),(-1,-1),colors.HexColor("#F4F8F7")),("LEFTPADDING",(0,0),(-1,-1),7),("RIGHTPADDING",(0,0),(-1,-1),7),("TOPPADDING",(0,0),(-1,-1),5),("BOTTOMPADDING",(0,0),(-1,-1),5)]))
story += [impact, Paragraph("PROFESSIONAL EXPERIENCE", styles["Section"])]
for title, employer, dates, scope, bullets in roles:
    if employer == "PTS":
        story.append(PageBreak())
        story.append(Paragraph("PROFESSIONAL EXPERIENCE (CONTINUED)", styles["Section"]))
    heading = Table([[Paragraph(title, styles["Role"]), Paragraph(dates, styles["Date"])]], colWidths=[5.65*inch,1.61*inch])
    heading.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("ALIGN",(1,0),(1,0),"RIGHT"),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),0)]))
    block = [heading, Paragraph(employer, styles["Employer"]), Paragraph(scope, styles["BodyX"])]
    block += [Paragraph("• " + item, styles["BulletX"]) for item in bullets]
    block.append(Spacer(1, 4))
    story.append(KeepTogether(block))

story += [Paragraph("EDUCATION", styles["Section"]), Paragraph("MBA, Project Management - International Business School of Scandinavia | MBA, Business Management - Rome Business School<br/>Bachelor of Applied Science, Information Technology - American Business and Technology University | Bachelor of Commerce, Accounting - Ain Shams University", styles["Small"])]
story += [Paragraph("CREDENTIALS", styles["Section"]), Paragraph("PMP | ITIL Foundation | MCTS | MCP | Data Center Design Associate (DCDA) | CIW 410 | CIW 430 | Scrum Fundamentals Certified | AI Fluency Framework & Foundations | AI Fluency for Small Businesses | Claude 101", styles["Small"])]
doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
print(OUT)
