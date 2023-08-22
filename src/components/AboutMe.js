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
                    <h1>About Me</h1>
                </div>
                <p>
                    Learn-it-all with a growth mindset, I never shy away from a challenge. I eagerly engage with difficult problems and enjoy the complexity of facing a problem that has no known solution. I enjoy developing a solution to a problem Through trial, error, and iterative small successes. This is why I am passionate and drawn to technology and DevOps methodologies. My technology journey begins when I joined the Tennessee Air National Guard in 2012 as a “3D0,” Cyberspace system administrator. I developed my skills and understanding of Windows and Linux system engineering, network architecture, and site reliability engineering of critical business apps through Kubernetes, containerization, and hypervisor technologies. I then transitioned to an Azure DevOps Engineer position in Microsoft’s federal consulting business unit. There, I use my subject matter expertise to lead government customers through their digital transformation.
                </p>
            </div>

            <div id="custss">
                <h2 className="aboutMe text-center">Customer Success Stories</h2>
            </div>

            <div className="py-2">
                <div className="aboutMe">
                    <h3>Kobayashi Maru</h3>
                    <p>
                        The United States Space Force's Kobayashi Maru organization was faced with a challenging situation. The facility which housed their primary datacenter was being decommissioned. However, due to funding constraints, a new facility that could accommodate their current on-premises infrastructure was never procured. Their organization hosts more than 30 highly available applications to thousands of customers globally. The maximum allowable downtime for any given application cannot exceed 2 minutes. The legacy infrastructure comprised of several thousand nodes of VMware Tanzu Kubernetes orchestration with supporting software such as harbor, contour/envoy, argoCD, and GitLab. On a short timeframe, I was able to migrate their entire on-premises infrastructure to Azure Kubernetes Service clusters. I was also able to continue using the same supporting software suite to minimize the current developers and maintainers knowledge debt. This prevented the existing management team from having to learn a new technology stack and downtime never exceeded the allowable two minutes during the cutover.
                    </p>
                </div>
            </div>
            <div className="py-2">
                <div className="aboutMe">
                    <h3>Verteran Affairs Financial Management and Business Transactions</h3>
                    <p>
                        The VA FMBT hosts several petabytes of veteran’s HIPAA and transactional data. Their data warehousing solution was antiquated, and they needed a more robust solution that also offered inexpensive ad-hoc report querying. The design we developed to meet this need was a modified Dataverse. I leveraged Azure Data Factories to copy the on-premises SQL database. The data would then transition through three data cleaning and quarantining data lakes before being loaded in the Azure synapse SQL managed instances. The entire system had to adhere to strict HIPAA and financial protection laws. Furthermore, the entire system had to meet strict disaster recovery and data retention policies as well. Through meticulous scrutiny and cross-team coordination we were able to obtain a 3-year ATO.

                    </p>
                </div>
            </div>
            <div className="py-2">
                <div className="aboutMe">
                    <h3>Joint Artificial Intelligence Center</h3>
                    <p>
                        JAIC is a cross-organizational, cross-industry AI delivery platform that allows other government agencies and individuals from academia to leverage the power of the Azure Cloud and OpenAI technologies to collaborate, develop, and train complex AI models. Data confidentiality, integrity, and availability were paramount for this product. Proper authentication and authorization paired with just-in-time access and a least-privilege design was top priority. This project presented a unique challenge as no one was allowed to access the production environment during the delivery. This challenge becomes two-fold as it not only makes all pushes to production immutable, but also prevents any manual configuration from occurring whatsoever. The entirety of the platform must be automated. Furthermore, there wasn’t a pre-production or UAT environment. Only development and production. Cross-organizational, cross-industry authentication was achieved through a combination of Azure Active Directory, Active Directory Federated Services, and KeyCloak. By leveraging Terraform deployed with CI/CD pipelines tightly controlled through branching policies and a rigorous pull request process, I was able to deliver a fully automated, highly secure $106 million dollar AI platform.
                    </p>
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