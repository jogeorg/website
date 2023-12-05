// function customer(customer, paragraph) {
//     return (
//         <div className="py-2">
//             <div className="aboutMe">
//                 <h3>customer</h3>
//                 <p>paragraph</p>
//             </div>
//         </div>
//     )
// }

function AboutMe(props) {
    return (
        <div>
            <div className="py-5">
                <div className="text-center">
                    <h1>About Me: Igniting Solutions in the World of Technology</h1>
                </div>
                <p>
                    Embarking on a continuous quest for knowledge, I thrive on challenges that push the boundaries of what's possible. With a growth mindset at my core, I find joy in unraveling the intricacies of problems that defy conventional solutions. I am not one to back down; instead, I eagerly embrace the complexity of the unknown, reveling in the process of turning challenges into triumphs through trial, error, and the sweet taste of incremental victories.

                    My passion for technology and dedication to DevOps methodologies stem from this innate desire to conquer the unconquerable. My journey commenced in 2012 when I enlisted in the Tennessee Air National Guard as a "3D0," Cyberspace system administrator. In the dynamic world of military tech, I honed my skills in Windows and Linux system engineering, delved into the intricacies of network architecture, and mastered the art of site reliability engineering. From Kubernetes to containerization and hypervisor technologies, I immersed myself in cutting-edge solutions to ensure the seamless operation of critical business applications.

                    The evolution of my technical prowess took a significant leap when I transitioned to the role of an Azure DevOps Engineer in Microsoft's federal consulting business unit. Armed with my subject matter expertise, I assumed the mantle of a digital transformation guide for government customers. Leading them through the intricate terrain of technological innovation, I orchestrated solutions that not only addressed their immediate needs but also laid the groundwork for future success.

                    In every role, I bring not just technical acumen but a strategic mindset that transforms challenges into opportunities. I am not just a problem solver; I am an architect of solutions, navigating the ever-changing landscape of technology with confidence and a hunger for the next big breakthrough.                </p>
            </div>

            <div id="custss">
                <h2 className="aboutMe text-center">Customer Success Stories</h2>
            </div>

            <div className="py-2">
                <div className="aboutMe">
                    <h3>Transformational Resilience at Kobayashi Maru</h3>
                    <p>
                        As the strategic leader at Kobayashi Maru within the United States Space Force, I orchestrated a decisive response to a critical infrastructure challenge. Facing the decommissioning of our primary datacenter and constrained by budgetary limitations, I successfully led the migration of over 30 mission-critical applications serving thousands of global customers to Azure Kubernetes Service clusters. Leveraging my expertise in VMware Tanzu Kubernetes orchestration and associated software suite, including harbor, contour/envoy, argoCD, and GitLab, I ensured a seamless transition without exceeding the mandated 2-minute downtime. My strategic approach not only averted potential disruptions but also minimized knowledge debt for the existing team, as they continued with familiar technologies.                    </p>
                </div>
            </div>
            <div className="py-2">
                <div className="aboutMe">
                    <h3>Modernizing VA FMBT's Data Landscape</h3>
                    <p>
                        As a data engineer for the Veteran Affairs Financial Management and Business Transactions (VA FMBT), I revolutionized their data infrastructure to meet the demands of the modern era. Faced with outdated data warehousing solutions and the need for robust ad-hoc querying, I implemented a cutting-edge solution using a modified Dataverse. Utilizing Azure Data Factories, I orchestrated the seamless transition of petabytes of HIPAA-compliant and transactional data through three meticulously designed data lakes into Azure Synapse SQL managed instances. My leadership ensured strict adherence to HIPAA and financial protection laws, and through rigorous scrutiny and cross-team collaboration, we achieved a coveted 3-year Authority to Operate (ATO), solidifying our commitment to data security and compliance.
                    </p>
                </div>
            </div>
            <div className="py-2">
                <div className="aboutMe">
                    <h3>Pioneering Secure Collaboration at JAIC</h3>
                    <p>
                        As the DevOps lead at the Joint Artificial Intelligence Center (JAIC), I spearheaded the creation of a groundbreaking AI delivery platform that transcended organizational and industry boundaries. Tasked with ensuring the utmost confidentiality, integrity, and availability of sensitive data on Azure Cloud and OpenAI technologies, I navigated the unique challenge of an entirely immutable production environment. Through the meticulous implementation of proper authentication and authorization protocols, including Azure Active Directory, Active Directory Federated Services, and KeyCloak, I enabled cross-organizational, cross-industry collaboration. Overcoming the absence of pre-production or UAT environments, I delivered a fully automated and highly secure $106 million AI platform. My strategic use of Terraform, combined with robust CI/CD pipelines and stringent branching policies, set the standard for secure and efficient project delivery in a complex and dynamic landscape.                    </p>
                </div>
            </div>
            <div className="py-5 row text-center justify-content-center">
                <h2 id="certs">Certifications</h2>
                <div>
                    <table className="table table-responsive">
                        <tr className="pw-1 ph-1 border">
                            <td className="pw-1 ph-1 border">Azure Certified: DevOps Engineer Expert</td>
                            <td className="pw-1 ph-1 border">Azure Certified: Azure AI Engineer</td>
                            <td className="pw-1 ph-1 border">SAS Certified Statistical Business Analyst Using SAS 9: Regression and Modeling</td>
                            <td className="pw-1 ph-1 border">Azure Certified: Azure Security Engineer</td>
                        </tr>
                        <tr className="pw-1 ph-1 border">
                            <td className="pw-1 ph-1 border">Azure Certified: Azure Data Scientist</td>
                            <td className="pw-1 ph-1 border">CISSP</td>
                            <td className="pw-1 ph-1 border">SAS Certified Specialist: Base Programming Using SAS 9.4</td>
                            <td className="pw-1 ph-1 border">Azure Certified: Azure administrator</td>
                        </tr>
                        <tr className="pw-1 ph-1 border">
                            <td className="pw-1 ph-1 border">CompTIA Security+</td>
                            <td className="pw-1 ph-1 border">CompTIA Network+</td>
                            <td className="pw-1 ph-1 border">CompTIA Linux+</td>
                            <td className="pw-1 ph-1 border">CompTIA Project+</td>
                        </tr>
                        <tr className="pw-1 ph-1 border">
                            <td className="pw-1 ph-1 border">CCNA - Security</td>
                            <td className="pw-1 ph-1 border">CCNA - Routing and Switching</td>
                            <td className="pw-1 ph-1 border">CompTIA A+</td>
                            <td className="pw-1 ph-1 border">Microsoft Certified Trainer</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default AboutMe