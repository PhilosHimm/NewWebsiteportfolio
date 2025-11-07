import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Timeline } from "@/components/ui/timeline"

export const metadata: Metadata = {
  title: "Resume | Philos Portfolio",
  description: "View and download Philos's resume",
}

export default function ResumePage() {
  const timelineData = [    
    {
      title: "2025 - Present",
      content: (
        <div>
          {/* Ontario Government - Current */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ontario Government | Gouvernement de l'Ontario
            </h3>
            <p className="text-sm font-medium text-muted-foreground">Experience Designer</p>
            <p className="text-xs text-muted-foreground mb-4">September 2025 - Present</p>
            <p className="text-sm text-muted-foreground">
              Currently working on designing user experiences for government digital services.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          {/* The Salvation Army - Administrative Assistant */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              The Salvation Army in Canada
            </h3>
            <p className="text-sm font-medium text-muted-foreground">Administrative Assistant</p>
            <p className="text-xs text-muted-foreground mb-4">July 2025 - August 2025 (2 months)</p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
              <li>Streamlined vendor outreach across 500+ ministry units, enhancing response rates through targeted contact lists.</li>
              <li>Improved internal communications by editing and publishing procurement updates on SharePoint, increasing resource visibility.</li>
              <li>Conducted comprehensive vendor research for RFPs, providing timely data for strategic sourcing decisions.</li>
              <li>Created financial visualizations from general ledger data, identifying cost-saving opportunities in procurement efficiencies.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2025",
      content: (
        <div>
          {/* Toronto Metropolitan University - Concurrent with Salvation Army */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Column 1: Toronto Metropolitan University */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Toronto Metropolitan University
              </h3>
              <p className="text-sm font-medium text-muted-foreground">Intramurals Assistant</p>
              <p className="text-xs text-muted-foreground mb-4">September 2023 - April 2025 (1 year 8 months)</p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                <li>Coordinated weekly procedures for all genders of volleyball intramurals, ensuring smooth game flow and adherence to rules.</li>
                <li>Advocated for a positive environment by promoting fun, safety, and encouraging social interaction, fair play, and equality.</li>
                <li>Achieved an average game time of 15 minutes, streamlining event execution, setups, takedowns and timely game starts.</li>
              </ul>
            </div>

            {/* Column 2: The Salvation Army - Office Support Assistant */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                The Salvation Army in Canada
              </h3>
              <p className="text-sm font-medium text-muted-foreground">Office Support Assistant</p>
              <p className="text-xs text-muted-foreground mb-4">May 2024 - July 2024 (3 months)</p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                <li>Created 50+ Charts and reports using Excel and PowerBI from 20+ financial invoice & expense spreadsheets for 150+ Ministry units across Canada.</li>
                <li>Implemented excel functions and data filtering for raw data of 700,000+ general ledger purchases and sales invoices.</li>
                <li>Conduct research on various vendors for collaboration with The Salvation Army.</li>
                <li>Regular liaising with members of the supplies & purchasing team for multiple projects and other mission supports.</li>
                <li>Organized documentation, filing and archiving of 200+ invoices and other supplies & purchasing duties.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          {/* Marigolds & Onions - Both positions */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Column 1: Beverage Inventory Assistant */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Marigolds & Onions
              </h3>
              <p className="text-sm font-medium text-muted-foreground">Beverage Inventory Assistant</p>
              <p className="text-xs text-muted-foreground mb-2">June 2023 - August 2023 (3 months)</p>
              <p className="text-xs italic text-muted-foreground mb-4">
                RBC Open Golf tournament and NBO Open Tennis tournament
              </p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                <li>Assisted setup of concession stands</li>
                <li>Delivered beverages to concession stands throughout the course via golf cart</li>
                <li>Supported event managers with important deliveries to guests/hospitality lounges</li>
                <li>Restocking walk-in reefers with beverages</li>
                <li>Handling beverages such as wines, liquor, beers, and mixers</li>
              </ul>
            </div>

            {/* Column 2: Distribution Assistant */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Marigolds & Onions
              </h3>
              <p className="text-sm font-medium text-muted-foreground">Distribution Assistant</p>
              <p className="text-xs text-muted-foreground mb-2">June 2022 - August 2022 (3 months)</p>
              <p className="text-xs italic text-muted-foreground mb-4">
                RBC Open Golf tournament and NBO Open Tennis tournament
              </p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                <li>Assisted setup of concession stands</li>
                <li>Delivered products (beverages, food) to concession stands throughout the course via golf cart</li>
                <li>Supported event managers with important deliveries to guests/hospitality lounges</li>
                <li>Restocking walk-in reefers with beverages</li>
                <li>Supported kitchen staff with produce and frozen goods</li>
                <li>Delivered ingredients to kitchens and concession tents</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          {/* Best Buy */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Best Buy</h3>
            <p className="text-sm font-medium text-muted-foreground">Product Process Specialist</p>
            <p className="text-xs text-muted-foreground mb-4">
              October 2020 - January 2022 (1 year 4 months) • Toronto, Ontario, Canada
            </p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
              <li>Receiving and putting out stock: Accurately received and organized incoming inventory, ensuring timely and efficient stocking of shelves.</li>
              <li>Picking products for quick pick up or shipping: Efficiently selected and prepared products for customer orders, meeting tight deadlines and maintaining accuracy.</li>
              <li>Packaging of products for customers: Carefully packaged products to prevent damage during shipping or pickup, ensuring customer satisfaction.</li>
              <li>Asset protection: Applied security casing & cables to prevent theft and loss, safeguarding company assets.</li>
              <li>Assisting customers in locating products: Provided excellent customer service by helping customers find the products they needed, enhancing their shopping experience.</li>
              <li>Working in a team environment: Collaborated effectively with team members to achieve common goals, demonstrating strong teamwork and communication skills.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Resume</h1>
            <Button asChild>
              <a href="/Philos%20Resume%20Winter%202026.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-medium">Business Technology Management</h3>
                <p className="text-muted-foreground">Toronto Metropolitan University</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Design</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>UX/UI Design</li>
                    <li>Figma</li>
                    <li>User Research</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Development</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>React/Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Analysis</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Excel</li>
                    <li>Power BI</li>
                    <li>Data Visualization</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </div>
    </main>
  )
}
