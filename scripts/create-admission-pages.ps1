# Create all admission pages with template

$pages = @(
    @{Path="app/admissions/undergraduate/bs-software-engineering/page.tsx"; Title="BS Software Engineering"; Breadcrumb="BS Software Engineering"},
    @{Path="app/admissions/undergraduate/bs-artificial-intelligence/page.tsx"; Title="BS Artificial Intelligence"; Breadcrumb="BS Artificial Intelligence"},
    @{Path="app/admissions/undergraduate/bs-data-science/page.tsx"; Title="BS Data Science"; Breadcrumb="BS Data Science"},
    @{Path="app/admissions/undergraduate/be-electrical/electronic/page.tsx"; Title="BE Electrical - Electronic"; Breadcrumb="Electronic"},
    @{Path="app/admissions/undergraduate/be-electrical/power/page.tsx"; Title="BE Electrical - Power"; Breadcrumb="Power"},
    @{Path="app/admissions/undergraduate/be-computer-systems/page.tsx"; Title="BE Computer Systems"; Breadcrumb="BE Computer Systems"},
    @{Path="app/admissions/undergraduate/be-tech/computer/page.tsx"; Title="Bachelor of Engineering Technology (Computer)"; Breadcrumb="Computer"},
    @{Path="app/admissions/undergraduate/be-tech/software/page.tsx"; Title="Bachelor of Engineering Technology (Software)"; Breadcrumb="Software"},
    @{Path="app/admissions/undergraduate/bba/page.tsx"; Title="BBA"; Breadcrumb="BBA"},
    @{Path="app/admissions/undergraduate/bs-accounting-finance/page.tsx"; Title="BS Accounting and Finance"; Breadcrumb="BS Accounting and Finance"},
    @{Path="app/admissions/graduate/ms-electrical-engineering/page.tsx"; Title="MS Electrical Engineering"; Breadcrumb="MS Electrical Engineering"},
    @{Path="app/admissions/graduate/ms-communication-network/page.tsx"; Title="MS Communication and Network Engineering"; Breadcrumb="MS Communication and Network Engineering"},
    @{Path="app/admissions/graduate/ms-computer-science/page.tsx"; Title="MS Computer Science"; Breadcrumb="MS Computer Science"},
    @{Path="app/admissions/information/page.tsx"; Title="Admissions Information"; Breadcrumb="Information"},
    @{Path="app/admissions/faqs/page.tsx"; Title="Admissions FAQs"; Breadcrumb="FAQs"},
    @{Path="app/admissions/how-to-apply/page.tsx"; Title="How to Apply"; Breadcrumb="How to Apply"},
    @{Path="app/admissions/sample-test-paper/page.tsx"; Title="Sample Test Paper"; Breadcrumb="Sample Test Paper"},
    @{Path="app/admissions/photographs-specification/page.tsx"; Title="Photographs Specification"; Breadcrumb="Photographs Specification"},
    @{Path="app/admissions/fee-structure/page.tsx"; Title="Fee Structure"; Breadcrumb="Fee Structure"},
    @{Path="app/admissions/fee-refund-policy/page.tsx"; Title="Fee Refund Policy"; Breadcrumb="Fee Refund Policy"},
    @{Path="app/admissions/scholarship-policy/page.tsx"; Title="Scholarship Policy"; Breadcrumb="Scholarship Policy"},
    @{Path="app/admissions/admission-test-results/page.tsx"; Title="Admission Test Results"; Breadcrumb="Admission Test Results"},
    @{Path="app/admissions/outreach-programs/page.tsx"; Title="Outreach Programs"; Breadcrumb="Outreach Programs"}
)

foreach ($page in $pages) {
    $content = @"
import React from 'react';
import PageBanner from '@/components/ui/page-banner';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <PageBanner
        title="$($page.Title)"
        subtitle="Admissions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "$($page.Breadcrumb)" }
        ]}
        backgroundImage="/images/bg-1-1.jpg"
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">$($page.Title)</h2>
          <p className="text-lg text-gray-600">Content coming soon...</p>
        </div>
      </section>
    </div>
  );
}
"@
    
    Set-Content -Path $page.Path -Value $content
    Write-Host "Created: $($page.Path)"
}

Write-Host "`nAll pages created successfully!"
