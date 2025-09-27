// src/data/reportData.js

export const reportInfo = {
  companyName: "Colladome IT Network Solution",
  clientName: "Stay Master",
  month: "September 2025",
  reportDate: "September 27, 2025",
  clientBrandColor: "#20C997", // Matches 'staymaster-brand' defined in Tailwind config
  logo: "./src/assets/logo.png" // Path relative to the public folder
};

export const introductionText = `
We are pleased to present your monthly progress report for September 2025. This month, Colladome IT Network Solution undertook several significant tasks to enhance your digital presence and operational efficiency. We actively worked on various fronts, from the initial development of the iOS app and strengthening server infrastructure to setting up critical analytics and monitoring tools.

This detailed report provides a comprehensive overview of the key achievements and initiatives completed this month, along with an explanation of the positive impact these actions will have on your platform and user engagement.
`;

export const achievements = [
  {
    category: "iOS Application Development Progress",
    items: [
      {
        id: "STM35_36",
        title: "Initial iOS App Development & Issue Resolution (STM35, STM36)",
        description: "We successfully completed the core development of the iOS application, focusing on essential features. Several identified issues within the application were diligently resolved through rigorous testing and debugging, significantly enhancing the app's initial stability and user experience for internal review. The process for the Apple Developer Enrollment Program was initiated and is currently pending completion, which is a prerequisite for TestFlight provisioning and public deployment.",
        impact: "These development efforts have laid a solid foundation for the Stay Master iOS app, ensuring a more stable and user-friendly experience once deployed. The ongoing developer enrollment will unlock crucial steps for wider testing and eventual launch, broadening your mobile reach."
      }
    ]
  },
  {
    category: "Server and Infrastructure Management",
    items: [
      {
        id: "STM38",
        title: "Comprehensive Server Backup Process Implementation (STM38)",
        description: "A robust and automated backup process for the server infrastructure has been fully designed and implemented. This includes regular data snapshots and off-site storage configurations to ensure maximum data redundancy and quick recovery capabilities.",
        impact: "This critical implementation drastically minimizes the risk of data loss due to unforeseen incidents, ensuring business continuity and providing peace of mind. It guarantees the integrity and availability of Stay Master's valuable data."
      },
      {
        id: "STM39",
        title: "Server Migration & Advanced Platform Updates (STM39)",
        description: "The server environment was successfully migrated to an optimized infrastructure and updated with the latest software versions and security patches. This migration involved careful planning and execution to ensure zero downtime and improved resource allocation.",
        impact: "This upgrade has significantly boosted your platform's overall speed, security, and scalability. Users will experience faster load times and a more secure environment, while the enhanced scalability supports future growth and increased traffic without performance degradation."
      }
    ]
  },
  {
    category: "Essential Project Tools & Methodology Setup",
    items: [
      {
        id: "STM40",
        title: "Checkly Monitoring Tool Setup (STM40)",
        description: "Checkly, a proactive monitoring and quality assurance tool, has been fully integrated and configured for key endpoints of your project. This setup enables continuous monitoring of API performance and website uptime, sending instant alerts for any detected issues.",
        impact: "Checkly provides real-time visibility into your platform's health and performance. This proactive approach allows for immediate identification and resolution of potential problems, ensuring high availability and a consistent, reliable user experience."
      },
      {
        id: "Hotjar",
        title: "Hotjar User Behavior Analytics Setup",
        description: "Hotjar, a powerful user behavior analytics and feedback tool, has been successfully implemented on your website. This includes setting up heatmaps, session recordings, and conversion funnels to capture comprehensive insights into how users interact with your site.",
        impact: "Hotjar allows for a deep understanding of user journeys and pain points on your website. The data collected will be invaluable for making data-driven decisions to optimize user experience, improve conversion rates, and refine content strategy."
      }
      // Code Magic setup is intentionally omitted as per the update.
    ]
  },
  {
    category: "Website Creatives & General Project Management",
    items: [
      {
        id: "WebsiteCreatives",
        title: "Strategic Website Creatives Update",
        description: "The visual and creative elements of your website have undergone a strategic refresh. This includes updating banners, imagery, and promotional graphics to align with current branding and marketing objectives, enhancing visual appeal.",
        impact: "These updated creatives significantly boost the aesthetic appeal and professionalism of your website, leading to improved user engagement and a stronger, more coherent brand message. This can positively influence visitor perception and trust."
      },
      {
        id: "STM42",
        title: "Standardized Project Management Work (STM42)",
        description: "Throughout September, all project activities were managed under a standardized project management framework. This ensured disciplined planning, execution, monitoring, and control of tasks, facilitating clear communication and efficient resource allocation.",
        impact: "Adherence to standardized project management guarantees that all initiatives are executed smoothly, efficiently, and in alignment with project goals and timelines. This consistent approach minimizes risks and ensures successful, on-time delivery of objectives."
      }
    ]
  }
];

export const summaryConclusionText = `
September has been a highly productive month for Stay Master. We have made significant strides in iOS app development (with developer enrollment pending), fortified your server infrastructure for enhanced reliability and performance, and successfully integrated critical monitoring and analytical tools like Checkly and Hotjar. Additionally, your website creatives have been refreshed, all managed under robust project management practices.

All these actions are strategically designed to collectively boost your platform's performance, bolster security, enrich the user experience, and provide actionable insights for continuous improvement. We at Colladome IT Network Solution remain fully committed to your success and eagerly anticipate supporting your digital evolution in the months to come.
`;