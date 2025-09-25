export const pricingData = {
  tabs: [
    "Product & Social Reviews",
    "CRO",
  ],
  plansByTab: {
    "Product & Social Reviews": [
      {
        title: "Coffee",
        monthlyPrice: "Free",
        yearlyPrice: "Free",
        oldPrice: "",
        description: "For new businesses building their brand, instead of students learning a new experience",
        featureHeading: "Core Features",
        packageName: "",
        buttonText: "Sign Up Free",
        buttonLink: "https://dashboard.kudobuzz.com/signup",
        features: [
          "Import Facebook Reviews",
          "10 Monthly Review Requests",
          "Published 50 Reviews",
          "Checkout Reviews",
        ],
        moreLink: "#",
        showFooter: true,
      },
      {
        title: "Lunch",
        monthlyPrice: "$99.9",
        yearlyPrice: "$1990",
        oldPrice: "",
        description: "For growing businesses ready to scale",
        featureHeading: "Everything in Coffee plus",
        packageName: "",
        buttonText: "Sign Up Free",
        buttonLink: "https://dashboard.kudobuzz.com/signup",
        features: [
          "Import AliExpress Reviews",
          "1500 Monthly Review Requests",
          "Published 500 Reviews",
          "Photo Reviews",
          "Google Product Richsnippet",
          "Customer Loyalty",
          "Advance Customization",
        ],
        moreLink: "#",
        showFooter: true,
      },
      {
        title: "Dinner",
        monthlyPrice: "$39.9",
        yearlyPrice: "$469.9",
        oldPrice: "",
        description: "For enterprise brands seeking full control",
        featureHeading: "Everything on Lunch plus",
        packageName: "",
        buttonText: "Sign Up Free",
        buttonLink: "https://dashboard.kudobuzz.com/signup",
        features: [
          "Import Etsy Reviews",
          "3000 Monthly Review Requests",
          "Published 1000 Reviews",
          "Video Reviews",
          "Google Product Ratings",
          "Domain Branding",
          "API Access",
        ],
        moreLink: "#",
        showFooter: true,
      },
    ],
    "UGC & Shoppable Videos": [
      {
        title: "UGC Basic",
        monthlyPrice: "Free",
        yearlyPrice: "Free",
        description: "Best for: New or small merchants starting with UGC.",
        featureHeading: "Free for you",
        features: [
          "1 connected social account (Instagram or TikTok)",
          "Up to 10 UGC posts",
          "1 widget (Grid layout)",
          "Manual moderation",
          "Basic widget styling",
          "Kudobuzz branding included"
        ],
        buttonText: "Sign Up Free",
        buttonLink: "https://dashboard.kudobuzz.com/signup",
        moreLink: "#",
        showFooter: false,
      },
      {
        title: "UGC Growth",
        monthlyPrice: "$10",
        yearlyPrice: "$100",
        description: "Best for: Merchants ready to scale UGC and display it beautifully.",
        featureHeading: "Supercharge Your Sales",
        features: [
          "Up to 5 connected social accounts",
          "Up to 200 UGC posts",
          "Unlimited widgets",
          "Automatic moderation",
          "Shoppable UGC",
          "Product tagging",
          "Engagement analytics",
          "Full widget customization",
          "Remove Kudobuzz branding"

        ],
        buttonText: "Sign Up Free",
        buttonLink: "https://dashboard.kudobuzz.com/signup",
        moreLink: "#",
        showFooter: false,
      },

    ],
    CRO: [
      {
        title: "Basic",
        monthlyPrice: "Free",
        yearlyPrice: "Free",
        description: "For starter merchants",
        featureHeading: "Free for you ",
        features: [
          "1 Basic CRO Report per month",
          "Data stored for 1 day",
        ],
        buttonText: "Start Free",
        buttonLink: "#",
        moreLink: "#",
        showFooter: false,
      },
      {
        title: "Growth",
        monthlyPrice: "$20",
        yearlyPrice: "$200",
        description: "For merchants looking to scale",
        featureHeading: "Supercharge Your Sales",
        features: [
          "10 Premium CRO Reports /month",
          "1000 Customer Replays /month",
          "AI Powered Insights",
          "Data stored for 15 days",
        ],

        buttonText: "Choose Growth",
        buttonLink: "#",
        moreLink: "#",
        showFooter: false,
      },
    ],
  },
  modalContent: {
    "Product & Social Reviews": [
      {
        title: "Collect Social Reviews",
        rows: [
          { feature: "Social Reviews", values: ["1 Facebook Page", "Unlimited Accounts", "Unlimited Accounts"] },
          { feature: "Collect Photo", values: ["1 Facebook Page", true, true] },
          { feature: "Collect Video", values: ["", "", true] },
          { feature: "Collect Q&A", values: ["", true, true] },
          { feature: "Allowed Social Accounts", values: ["1 Facebook Page", "Unlimited Accounts", "Unlimited Accounts"] },
        ],
      },
      {
        title: "Collect Reviews",
        rows: [
          { feature: "Offline Reviews", values: [true, true, true] },
          { feature: "After Purchase Reviews", values: ["10 Orders / Month", "500 Orders / Month", "3000 Orders / Month"] },
          { feature: "Campaigns", values: ["", "", true] },
          { feature: "Advance Customization", values: [true, true, true] },
          { feature: "Import Reviews (CSV)", values: [true, true, true] },
          { feature: "Edit Review Request Email", values: [true, true, true] },
          { feature: "Review Request Translation", values: [true, true, true] },
        ],
      },
      {
        title: "Reviews Moderation",
        rows: [
          { feature: "Publish Reviews", values: ["50 Reviews", "500 Reviews", "2000 Reviews"] },
          { feature: "Review Update Requests", values: [false, true, true] },
          { feature: "Review Reminders", values: [false, true, true] },
          { feature: "Review Moderation (Manual)", values: [true, true, true] },
          { feature: "Review Moderation (Automatic)", values: [false, false, true] },
          { feature: "Reply to Reviews", values: [false, true, true] },
        ],
      },
      {
        title: "Q&A Moderation",
        rows: [
          { feature: "Q&A", values: [false, "500 Q&A", "2000 Q&A"] },
          { feature: "Q&A Moderation", values: [false, true, true] },
          { feature: "Answer Questions", values: [false, true, true] },
        ],
      },
      {
        title: "SEO",
        rows: [
          { feature: "Business Rich Snippet", values: [false, true, true] },
          { feature: "Product Rich Snippet", values: [false, true, true] },
          { feature: "Google Shopping Reviews", values: [false, false, true] },
          { feature: "SEO Mini Site", values: [false, true, true] },
        ],
      },
      {
        title: "Customer Loyalty",
        rows: [
          { feature: "Coupon Rewards", values: [false, true, true] },
          { feature: "Block Reviewers", values: [false, true, true] },
          { feature: "Domain Branding", values: [false, false, true] },
          { feature: "Product Upsell", values: [false, false, true] },
        ],
      },
      {
        title: "Social Proof",
        rows: [
          { feature: "Manual Review Share", values: [true, true, true] },
          { feature: "Automatic Review Share", values: [false, true, true] },
        ],
      },
      {
        title: "Branding & Widgets",
        rows: [
          { feature: "Widgets Display", values: [true, true, true] },
          { feature: "Email Customization", values: [false, "Advanced", "Advanced"] },
          { feature: "Widget Branding", values: [false, false, "Advanced"] },
          { feature: "Widget Translation", values: [false, true, true] },
          { feature: "Remove Kudobuzz Branding", values: [false, false, true] },
        ],
      },
      {
        title: "Export Reviews",
        rows: [
          { feature: "CSV Reviews Export", values: [false, true, true] },
        ],
      },
      {
        title: "Collaboration",
        rows: [
          { feature: "Team Collaboration", values: [false, "2 Team Members", "Up to 10 Team Members"] },
          { feature: "Multi Location Reviews", values: [false, "Up to 10 Team Members", true] },
        ],
      },
      {
        title: "Orders",
        rows: [
          { feature: "Sync POS Orders", values: [false, true, true] },
          { feature: "Sync Restaurant Orders", values: [false, true, true] },
          { feature: "Bookings", values: [false, false, true] },
        ],
      },
      {
        title: "Kudobuzz Insights & API",
        rows: [
          { feature: "Kudobuzz Insight", values: [false, false, "Advanced"] },
          { feature: "API", values: [false, false, true] },
        ],
      },
      {
        title: "Extra Services",
        rows: [
          { feature: "Complete Installation & Setup", values: [false, false, true] },
          { feature: "Expedite Time to Market", values: [false, false, true] },
          { feature: "Dedicated Account Management", values: [false, false, true] },
          { feature: "Dedicated Security & Compliance", values: [false, false, true] },
          { feature: "Dedicated Customer Success Manager", values: [false, false, true] },
          { feature: "Review Request Translation", values: [false, false, true] },
        ],
      },
    ],
    "UGC & Shoppable Videos": [
      {
        title: "UGC Capabilities",
        rows: [
          { feature: "UGC Uploads", values: ["20 / Month", "200 / Month", "Unlimited"] },
          { feature: "Product Tagging", values: [true, true, true] },
          { feature: "Shoppable Galleries", values: [true, true, true] },
          { feature: "Video Analytics", values: [false, true, true] },
        ],
      },
      {
        title: "Collaboration",
        rows: [
          { feature: "Creator Portal", values: [false, true, true] },
          { feature: "Approval Workflows", values: [false, true, true] },
          { feature: "Dedicated Manager", values: [false, false, true] },
        ],
      },
    ],
    CRO: [
      {
        title: "Optimization",
        rows: [
          { feature: "Heatmaps", values: [true, true, true] },
          { feature: "A/B Testing", values: [true, true, true] },
          { feature: "Session Replay", values: [true, true, true] },
          { feature: "AI Insights", values: [false, true, true] },
        ],
      },
      {
        title: "Personalization",
        rows: [
          { feature: "Behavioral Targeting", values: [false, true, true] },
          { feature: "Dynamic Blocks", values: [false, true, true] },
          { feature: "Enterprise SLA", values: [false, false, true] },
        ],
      },
    ],
  },
};
