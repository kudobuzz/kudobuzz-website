export const pricingData = {
  tabs: [
    "Product & Social Reviews",
    "UGC & Shoppable Videos",
  ],
  plansByTab: {
    "Product & Social Reviews": [
      {
        title: "Coffee",
        monthlyPrice: "Free",
        yearlyPrice: "Free",
        oldPrice: "",
        discountText: {
          monthly: { tag: "", text: "" },
          yearly: { tag: "", text: "" },
        },
        description: "For new businesses building their brand",
        featureHeading: "Coffee Features",
        packageName: "",
        buttonText: "Sign Up Free",
        buttonLink: "https://dashboard.kudobuzz.com/signup",
        features: [
          "Import Facebook, AliExpress, Yelp, Amazon, Etsy and Google Reviews",
          "10 Monthly Review Requests",
          "Published 50 Reviews",
          "Checkout Reviews",
        ],
        moreLink: "#",
        showFooter: true,
      },
      // {
      //   title: "Lunch",
      //   monthlyPrice: "$49.99",
      //   yearlyPrice: "$499.9",
      //   oldPrice: "",
      //   discountText: {
      //     monthly: { tag: "", text: "" },
      //     yearly: { tag: "", text: "" },
      //   },
      //   description: "For growing businesses ready to scale",
      //   featureHeading: "Everything in Coffee plus",
      //   packageName: "",
      //   buttonText: "Sign Up Free",
      //   buttonLink: "https://dashboard.kudobuzz.com/signup",
      //   features: [
      //     "Import AliExpress Reviews",
      //     "1500 Monthly Review Requests",
      //     "Published 500 Reviews",
      //     "Photo Reviews",
      //     "Google Product Richsnippet",
      //     "Customer Loyalty",
      //     "Advanced Customization",
      //   ],
      //   moreLink: "#",
      //   showFooter: true,
      // },
      {
        title: "Dinner",
        monthlyPrice: "$99.99",
        yearlyPrice: "$999.9",
        oldPrice: "",
        discountText: {
          monthly: { tag: "Discounted", text: "$19.99" },
          yearly: { tag: "Discounted", text: "$199.9" },
        },
        description: "For enterprise brands seeking full control",
        featureHeading: "Dinner Features",
        packageName: "",
        buttonText: "Sign Up Free",
        buttonLink: "https://dashboard.kudobuzz.com/signup",
        features: [
          "Import Facebook, AliExpress, Yelp, Amazon, Etsy and Google Reviews",
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
        title: "Free",
        monthlyPrice: "Free",
        yearlyPrice: "Free",
        discountText: {
          monthly: { tag: "", text: "" },
          yearly: { tag: "", text: "" },
        },
        description: "Best for: New or small merchants starting with UGC.",
        featureHeading: "Free for you",
        features: [
          "Up to 10 synced videos",
          "Manual sync only",
          "1 widget",
          "Basic moderation tools",
          "Kudobuzz branding"
        ],
        buttonText: "Sign Up Free",
        buttonLink: "https://apps.shopify.com/kudobuzz-tiktok-gallery",
        moreLink: "#",
        showFooter: false,
      },
      {
        title: "Starter",
        monthlyPrice: "$9.99",
        yearlyPrice: "$99",
        discountText: {
          monthly: { tag: "", text: "" },
          yearly: { tag: "", text: "" },
        },
        description: "Best for: Merchants ready to scale UGC and display it beautifully.",
        featureHeading: "Supercharge Your Sales",
        features: [
          "Up to 50 synced videos",
          "Automatic video syncing (every 24 hours)",
          "Unlimited widgets",
          "Advanced moderation tools",
          "Remove Kudobuzz branding",
          "Product tagging"
        ],
        buttonText: "Sign Up Free",
        buttonLink: "https://apps.shopify.com/kudobuzz-tiktok-gallery",
        moreLink: "#",
        showFooter: false,
      },
      {
        title: "Growth",
        monthlyPrice: "$19.99",
        yearlyPrice: "$199",
        discountText: {
          monthly: { tag: "", text: "" },
          yearly: { tag: "", text: "" },
        },
        description: "Best for: Merchants seeking deep UGC customization.",
        featureHeading: "Scale Your Growth",
        features: [
          "Up to 150 synced videos",
          "Faster automatic syncing (every 3 hours)",
          "Unlimited widgets",
          "Priority video processing",
          "Advanced performance analytics",
          "Priority support"
        ],
        buttonText: "Sign Up Free",
        buttonLink: "https://apps.shopify.com/kudobuzz-tiktok-gallery",
        moreLink: "#",
        showFooter: false,
      },
    ],
    // CRO: [
    //   {
    //     title: "Basic",
    //     monthlyPrice: "Free",
    //     yearlyPrice: "Free",
    //     discountText: {
    //       monthly: { tag: "", text: "" },
    //       yearly: { tag: "", text: "" },
    //     },
    //     description: "For starter merchants",
    //     featureHeading: "Free for you ",
    //     features: [
    //       "1 Basic CRO Report per month",
    //       "Data stored for 1 day",
    //     ],
    //     buttonText: "Start Free",
    //     buttonLink: "#",
    //     moreLink: "#",
    //     showFooter: false,
    //   },
    //   {
    //     title: "Growth",
    //     monthlyPrice: "$20",
    //     yearlyPrice: "$200",
    //     discountText: {
    //       monthly: { tag: "", text: "" },
    //       yearly: { tag: "", text: "" },
    //     },
    //     description: "For merchants looking to scale",
    //     featureHeading: "Supercharge Your Sales",
    //     features: [
    //       "10 Premium CRO Reports /month",
    //       "1000 Customer Replays /month",
    //       "AI Powered Insights",
    //       "Data stored for 15 days",
    //     ],

    //     buttonText: "Choose Growth",
    //     buttonLink: "#",
    //     moreLink: "#",
    //     showFooter: false,
    //   },
    // ],
  },
  modalContent: {
    "Product & Social Reviews": [
      {
        title: "Collect Social Reviews",
        rows: [
          { feature: "Social Reviews", values: ["Unlimited Accounts", "Unlimited Accounts"] },
          { feature: "Collect Photo", values: ["", true] },
          { feature: "Collect Video", values: ["", true] },
          { feature: "Collect Q&A", values: ["", true] },
          { feature: "Allowed Social Accounts", values: ["Unlimited Accounts", "Unlimited Accounts"] },
        ],
      },
      {
        title: "Collect Reviews",
        rows: [
          { feature: "Offline Reviews", values: [true, true] },
          { feature: "After Purchase Reviews", values: ["10 Orders / Month", "3000 Orders / Month"] },
          { feature: "Campaigns", values: ["", true] },
          { feature: "Advanced Customization", values: [true, true] },
          { feature: "Import Reviews (CSV)", values: [true, true] },
          { feature: "Edit Review Request Email", values: [true, true] },
          { feature: "Review Request Translation", values: [true, true] },
        ],
      },
      {
        title: "Reviews Moderation",
        rows: [
          { feature: "Published Reviews", values: ["50 Reviews", "2000 Reviews"] },
          { feature: "Review Update Requests", values: [false, true] },
          { feature: "Review Reminders", values: [false, true] },
          { feature: "Review Moderation (Manual)", values: [true, true] },
          { feature: "Review Moderation (Automatic)", values: [false, true] },
          { feature: "Reply to Reviews", values: [false, true] },
        ],
      },
      {
        title: "Q&A Moderation",
        rows: [
          { feature: "Q&A", values: [false, "2000 Q&A"] },
          { feature: "Q&A Moderation", values: [false, true] },
          { feature: "Answer Questions", values: [false, true] },
        ],
      },
      {
        title: "SEO",
        rows: [
          { feature: "Business Rich Snippet", values: [false, true] },
          { feature: "Product Rich Snippet", values: [false, true] },
          { feature: "Google Shopping Reviews", values: [false, true] },
          { feature: "SEO Mini Site", values: [false, true] },
        ],
      },
      {
        title: "Customer Loyalty",
        rows: [
          { feature: "Coupon Rewards", values: [false, true] },
          { feature: "Block Reviewers", values: [false, true] },
          { feature: "Domain Branding", values: [false, true] },
          { feature: "Product Upsell", values: [false, true] },
        ],
      },
      {
        title: "Social Proof",
        rows: [
          { feature: "Manual Review Share", values: [true, true] },
          { feature: "Automatic Review Share", values: [false, true] },
        ],
      },
      {
        title: "Branding & Widgets",
        rows: [
          { feature: "Widgets Display", values: [true, true] },
          { feature: "Email Customization", values: [false, "Advanced"] },
          { feature: "Widget Branding", values: [false, "Advanced"] },
          { feature: "Widget Translation", values: [false, true] },
          { feature: "Remove Kudobuzz Branding", values: [false, true] },
        ],
      },
      {
        title: "Export Reviews",
        rows: [
          { feature: "CSV Reviews Export", values: [false, true] },
        ],
      },
      {
        title: "Collaboration",
        rows: [
          { feature: "Team Collaboration", values: [false, "Up to 10 Team Members"] },
          { feature: "Multi Location Reviews", values: [false, true] },
        ],
      },
      {
        title: "Orders",
        rows: [
          { feature: "Sync POS Orders", values: [false, true] },
          { feature: "Sync Restaurant Orders", values: [false, true] },
          { feature: "Bookings", values: [false, true] },
        ],
      },
      {
        title: "Kudobuzz Insights & API",
        rows: [
          { feature: "Kudobuzz Insight", values: [false, "Advanced"] },
          { feature: "API", values: [false, true] },
        ],
      },
      {
        title: "Extra Services",
        rows: [
          { feature: "Complete Installation & Setup", values: [false, true] },
          { feature: "Expedite Time to Market", values: [false, true] },
          { feature: "Dedicated Account Management", values: [false, true] },
          { feature: "Dedicated Security & Compliance", values: [false, true] },
          { feature: "Dedicated Customer Success Manager", values: [false, true] },
          { feature: "Review Request Translation", values: [false, true] },
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
