import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Section Header
function SectionHeader({title, description}) {
    return (
        <header className={clsx("hero hero--primary heroAzureHome")} style={{ backgroundImage: 'url(/Cloud-Native/img/cloud-native-hero-bg.webp)', padding: '8rem 0rem' }}>
        <div className="container text--center">
            <div className="row" style={{ alignItems: 'center' }}>
                <div className="col col--6 text--left">
                    <h1 className="hero__title">
                        {title}
                    </h1>
                    <p>{description}</p>
                    <div className={`${styles.buttonsFFIA} hero-buttons`}>
                    <Link className="button button--primary button--lg" to="https://www.youtube.com/playlist?list=PLmsFUfdnGr3xYBEmLI7AqtWtBc31D20er" data-bi-area="Hero" data-bi-name="#DemoBytes" target="_blank">
                    Watch on demand
                    </Link>
                    </div>
                </div>
                <div className="col col--6 hide-on-mobile">

                </div>

            </div>
        </div>
      </header>
    );
}

// Section Content
function SectionContent(){
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row" style={{ paddingBottom: '1rem' }}>
                    {ContentItems.map((props, idx) => (
                        <ContentItem key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Content Item 
function ContentItem({episodeNumber, title, description, link, speaker}){
    return (
        <div className={clsx('col col--4 card-col', styles.contentItem)}>
            <Link className="card-link" to={link} target="_blank" data-bi-area="BodyGrid" data-bi-cN={title}>
                <div className="card">
                    <div className="card-body">
                        <div className="text--left">
                            <h2>{title}</h2>
                            <p>{speaker}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

// Update this dataset with links to the last 20 roundups
const ContentItems = [
    {
        episodeNumber: '1',
        title: 'Azure Kubernetes Service Automated Deployments - Streamlining Kubernetes Deployments',
        link: 'https://aka.ms/demo-bytes/ep1?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Jorge Arteiro',
        description: "In this session, we will explore how to simplify and automate your Kubernetes deployments using GitHub Actions and Azure Kubernetes Service (AKS). Automated deployments not only streamline the process of setting up a CI/CD pipeline but also ensure consistent and reliable releases. We will dive into the key features of AKS automated deployments, including continuous integration and continuous deployment (CI/CD), Draft integration for automatic creation of Dockerfiles and Kubernetes deployment files, and enhanced developer experience. Additionally, we will demonstrate how to leverage the Azure Portal for managing your deployments efficiently. Whether you are a seasoned Kubernetes user or just getting started, this session will provide valuable insights and practical tips to enhance your deployment process."
    },
    {
        episodeNumber: '2',
        title: 'Deliver AI infused app innovation with Open Liberty on AKS',
        link: 'https://aka.ms/demo-bytes/ep2?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Ed Burns',
        description: "Delivering innovation on top of an open spec commodity platform is a time-honored recipe for success in IT. Examples include Linux, graphics cards, web frameworks, just to name a few. This session shows how building on the open standards of Kubernetes, Jakarta EE, Langchain4J, and Azure OpenAI can help you deliver innovation like never before. While using GitHub copilot certainly helps building apps, this session shows how AI is applied in the problem domain of the application itself. After attending this session, you'll know how to run Open Liberty on AKS and use LangChain4J with Azure OpenAI in the problem domain of the application."
    },
    {
        episodeNumber: '3',
        title: 'Fine-Tuning Open-Source Models made easy with KAITO',
        link: 'https://aka.ms/demo-bytes/ep3?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Paul Yu',
        description: "Foundation models have a vast amount of knowledge but often need to be refined for specific tasks. In this demo, we'll see how KAITO (Kubernetes AI Toolchain Operator) can help you easily fine-tune models so that your LLMs stay on track and provide more accurate answers; just as your users expect."
    },
    {
        episodeNumber: '4',
        title: 'Get your on-prem apps AI-ready using GitHub Copilot and Azure Migrate Code Assessment tool',
        link: 'https://aka.ms/demo-bytes/ep4?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Gaurav Seth',
        description: "Now you can use GitHub Copilot to suggest updates to your application code, making it easier to move it to the cloud as part of your intelligent app strategy while ensuring seamless and secure connections to your data. See how the Azure Migrate Code Assessment tool can be used to highlight specific updates you can make based on your desired cloud platform destination, then leverage GitHub Copilot to get implementation recommendations."
    },
    {
        episodeNumber: '5',
        title: 'Add generative AI capabilities to your web apps, leveraging vector databases and caching',
        link: 'https://aka.ms/demo-bytes/ep5?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Tulika Chaudharie',
        description: "Discover how easy it can be to enhance your web apps with generative AI capabilities by utilizing web jobs and Azure OpenAI, ensuring optimal performance and low latency. Learn where to integrate APIs such as Semantic Kernel in your code to leverage multiple LLMs and enrich chat history. Additionally, see how you can optimize your scenarios by harnessing the power of SLMs, enabling greater efficiency and customization."
    },
    {
        episodeNumber: '6',
        title: 'Apply auto-scaling and load testing to your AI applications to make them customer-ready',
        link: 'https://aka.ms/demo-bytes/ep6?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Yutang Lin',
        description: "Learn how to leverage the Azure app platform features to ensure your AI-enabled apps remain performant under load while scaling in/out based on demand."
    },
    {
        episodeNumber: '7',
        title: 'Configure and Deploy Intelligent Java SpringBoot Apps on Azure App Service',
        link: 'https://aka.ms/demo-bytes/ep7?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Denver Brittain',
        description: "IT organizations looking to modernize their applications are continually searching for efficient and secure AI services and enterprise CI/CD to streamline their deployments with the benefits of intelligent, AI-enabled applications. Learn how to leverage the power of Azure App Service, Azure OpenAI, and GitHub Actions to deploy and manage intelligent, OpenAI-enabled Java Spring applications in the cloud."
    },
    {
        episodeNumber: '8',
        title: 'End-to-End AI application deployments with GitHub Copilot',
        link: 'https://aka.ms/demo-bytes/ep8?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Alfredo Deza',
        description: "In this session, we will use an existing Python project that interacts with a deployed ML model on Azure through an API. With the help of GitHub Copilot, we'll explore ways to understand the codebase better, containerize the project, and then automate it with GitHub Actions. By the end of this video, you'll be able to understand applied use-cases of GitHub Copilot to find more about specific requirements in projects like containerization and automation."
    },
    {
        episodeNumber: '9',
        title: 'Extending GitHub Copilot to chat with your Postgres Database',
        link: 'https://aka.ms/demo-bytes/ep9?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Rob Conery',
        description: "Asking Copilot for help with database queries is informative but can only go so far. But what if it was aware of your database schema? As it turns out, GitHub Copilot is remarkably good at writing SQL, generating models from the schema and more. In this video, we'll look at how to use the Postgres Chat Participant in VS Code to dramatically accelerate you PostgreSQL developer productivity."
    },
    {
        episodeNumber: '10',
        title: 'Architecting a Unified AI Stack: Secure, Responsible, and Scalable',
        link: 'https://aka.ms/demo-bytes/ep10?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Rory Preddy',
        description: "Get ready to dive into a dynamic blend of cutting-edge products that together create a mature, secure, and responsible AI portfolio! We're not just talking about one tool—we're showcasing a smorgasbord of powerful solutions that, when integrated, give you the ultimate edge in AI development. From the seamless orchestration provided by Semantic Kernel to the responsible content filtering powered by Azure's LLM, you'll see how these tools work together to elevate your applications to new heights. We'll demonstrate how you can effortlessly blend conventional programming with AI capabilities while embedding ethical principles at the core. Whether it's through AI plugins, semantic functions, or function chaining, you'll walk away with practical insights on building AI solutions that are as trustworthy as they are innovative."
    },
    {
        episodeNumber: '11',
        title: '10x Developer with GitHub Copilot',
        link: 'https://aka.ms/demo-bytes/ep11?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Rory Preddy',
        description: 'Discover the latest feature in Visual Studio Code\'s Extension Pack for Java: "Rewrite with New Java Syntax" powered by GitHub Copilot. In this session, we will demonstrate how Copilot identifies and suggests improvements for Java classes, converting legacy code into optimized, modern syntax. Attendees will experience the inline chat dialogue for quick review and application of these AI-generated suggestions. Join us to explore how integrating AI into your development workflow can streamline your coding process and keep you at the forefront of Java programming.'
    },
    {
        episodeNumber: '12',
        title: 'Building and running intelligent Spring app on Azure Container Apps',
        link: 'https://aka.ms/demo-bytes/ep12?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Sean Li',
        description: "In this session demo, we'll show you how to develop and deploy an intelligent Spring Boot application on Azure Container Apps. Using the PetClinic project as a foundation, we'll integrate a chatbot to provide information about pets and their owners. Key technologies include Langchain4j, Azure OpenAI, and Azure Cognitive Services. This session is ideal for developers looking to enhance their Spring Boot applications with AI and cloud-native features."
    },
    {
        episodeNumber: '13',
        title: 'Ingest your own content using Azure Functions OpenAI Triggers & Bindings',
        link: 'https://aka.ms/demo-bytes/ep13?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Eamon O’Reilly, Thiago Almeida',
        description: "Ingest your own content using the Azure Functions OpenAI extension into a Cosmos DB vector database to enable OpenAI query on your data."
    },
    {
        episodeNumber: '14',
        title: 'GenAI Gateway Capabilities in Azure API Management',
        link: 'https://aka.ms/demo-bytes/ep14?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Andrei Kamenev',
        description: "Learn how Azure API Management can be configured for authentication and authorization of OpenAI endpoints, enforcing rate limits based on OpenAI tokens used, load balancing across multiple OpenAI endpoints."
    },
    {
        episodeNumber: '15',
        title: 'Elevate Policy Authoring Experience in API Management with Microsoft Copilot for Azure',
        link: 'https://aka.ms/demo-bytes/ep15?ocid=biafy25h1_demobytes_webpage_azuremktg',
        speaker: 'Andrei Kamenev',
        description: "Discover how Microsoft Copilot for Azure can elevate your policy authoring process and enhance your API management experience. Explore this new capability today and unlock the full potential of simplified and intelligent policy management."
    },
];

export default function AskTheExperts() {
    const {siteConfig} = useDocusaurusContext();
    const pageProps = {
        title: "Demo Bytes",
        description: "Demo Bytes is a series of snackable AI Demos where you can connect with experts to get your questions about building intelligent app architectures answered."
    };
    return (
      <Layout
        title={pageProps.title}
        description={pageProps.description} >
        <SectionHeader 
            title={pageProps.title}
            description={pageProps.description} />
        <main className={styles.pageBg}>
            <SectionContent/>
        </main>
      </Layout>
    );
}