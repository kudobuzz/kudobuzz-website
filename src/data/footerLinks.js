const currentYear = new Date().getFullYear();

export const footerLinks = {
  branding: {
    logo: {
      src: "/assets/kudobuzz-logo.svg",
      alt: "Kudobuzz Logo",
    },
    tagline: "Start building trust today",
  },
  columns: [
    {
      title: "Features",
      links: [
        { name: "Product Reviews", url: "/solutions/product-reviews" },
        { name: "Social Reviews", url: "/solutions/social-reviews" },
        { name: "UGC & Shoppable Videos", url: "/solutions/ugc" },
        { name: "CRO", url: "/solutions/cro" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Pricing", url: "/pricing" },
        { name: "Blog", url: "https://blog.kudobuzz.com/", target: "_blank" },
        { name: "Jobs", url: "https://wellfound.com/company/kudobuzz-1/jobs", target: "_blank" },
      ],
    },
    {
      title: "Integration",
      links: [
        { name: "Developer API", url: "/developer-api" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", url: "https://support.kudobuzz.com/en/", target: "_blank" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "E-book", url: "https://blog.kudobuzz.com/tag/e-book/", target: "_blank" },
        { name: "Merchant Stories", url: "https://blog.kudobuzz.com/tag/merchant-stories/", target: "_blank" },
      ],
    },
  ],
  advancedTitle: "Other Resources",
  advancedColumns: [
    {
      title: "",
      links: [
        { name: "Kudobuzz vs Yotpo Compare", url: "#", target: "_blank" },
        { name: "Kudobuzz vs Loox Compare", url: "https://blog.kudobuzz.com/kudobuzz-vs-loox-which-product-review-app-is-best/", target: "_blank" },
        { name: "Kudobuzz Reviews vs Judge.me", url: "https://blog.kudobuzz.com/kudobuzz-vs-judge-me/", target: "_blank" },
        { name: "Kudobuzz Reviews to Okendo", url: "#", target: "_blank" },
      ],
    },
    {
      title: "",
      links: [
        { name: "Kudobuzz Reviews vs PowerReviews", url: "https://blog.kudobuzz.com/kudobuzz-vs-powerreviews-an-honest-detailed-comparison-for-your-business/", target: "_blank" },
        { name: "Kudobuzz Reviews vs BazaarVoice", url: "#", target: "_blank" },
        { name: "Kudobuzz Reviews vs Reviews.io", url: "https://blog.kudobuzz.com/kudobuzz-vs-reviews-io-14-smart-questions-every-brand-should-ask/", target: "_blank" },
        { name: "Kudobuzz Reviews vs Fera Reviews", url: "#", target: "_blank" },
      ],
    },
    {
      title: "",
      links: [
        { name: "10+ Proven Review Request Email Templates", url: "https://blog.kudobuzz.com/10-proven-review-request-email-templates-that-get-3x-more-responses/", target: "_blank" },
        { name: "How to Write Review Requests", url: "https://blog.kudobuzz.com/how-to-write-review-requests-that-get-you-noticed-and-get-you-reviews/", target: "_blank" },
        { name: "Post-Purchase Review Request Timing: The Ultimate Guide", url: "#", target: "_blank" },
        { name: "Free Email Templates for Every Stage of the Customer Journey", url: "#", target: "_blank" },
      ],
    },
    {
      title: "",
      links: [
        { name: "How to Respond to Negative Reviews: 25+ Professional Templates", url: "#", target: "_blank" },
        { name: "Thank You Templates for 5-Star Reviews That Build Loyalty", url: "#", target: "_blank" },
        { name: "The Ultimate Guide to Shopify Customer Reviews", url: "#", target: "_blank" },
        { name: "The Ultimate Guide to Wix Customer Reviews", url: "#", target: "_blank" },
      ],
    },
    {
      title: "",
      links: [
        { name: "The Ultimate Guide to Shoplazza Customer Reviews", url: "#", target: "_blank" },
        { name: "The Ultimate Guide to Bigcommerce Customer Reviews", url: "#", target: "_blank" },
        { name: "How to Increase Review Response Rates by 300%", url: "#", target: "_blank" },
        { name: "Review Response Rate Study: What Time, Day, and Method Work Best", url: "#", target: "_blank" },
      ],
    },
  ],
  social: [
    { icon: "/assets/icons/icon-linkedin.svg", url: "https://www.linkedin.com/company/kudobuzz", target: "_blank" },
    { icon: "/assets/icons/icon-x.svg", url: "https://x.com/kudobuzz", target: "_blank" },
    { icon: "/assets/icons/icon-youtube.svg", url: "https://www.youtube.com/channel/UC3RyY_cyWlEBgIjsDE0-8fg", target: "_blank" },
    { icon: "/assets/icons/icon-instagram.svg", url: "https://www.instagram.com/kudobuzz/", target: "_blank" },
    { icon: "/assets/icons/icon-facebook.svg", url: "https://www.facebook.com/kudobuzz/", target: "_blank" },
  ],
  bottom: {
    text: `© ${currentYear} Kudobuzz, Inc. All Rights Reserved.`,
    links: [
      { name: "GDPR", url: "/gdpr" },
      { name: "Terms", url: "/terms" },
      { name: "Privacy", url: "/privacy" },
      { name: "Cookie", url: "/cookie" },
      { name: "Security", url: "/security" },
    ],
  },
};
