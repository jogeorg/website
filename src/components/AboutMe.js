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
                <h1>About Me</h1>
                <p>
                    Learn-it-all with a growth mindset, I never shy away from a challenge. I eagerly engage with difficult problems and enjoy the complexitiy of facing
                    a problem that has no known solution. I enjoy developing a solution to a problem Through trial, error, and itterative small successes. This is one of the
                    reasons I am passionate and drawn to technology and DevOps methodologies. I joined the Tennessee Air National Guard in 2012 as 3D0, Cyberspace system adminsitrator.
                    I developed my skills and understanding of Windows and Linux system engineering, network architecture, and site reliabiltiy engineering of critical business apps
                    through kubernetes, containization, and hypervisor technologies.

                    I then transitioned to an Azure DevOps Engineer in Microsoft's Federal Consulting business unit. There I an able to use my subject matter expert knowledge to assist
                    government customers with their Cloud journey. Developing cost saving methodologies, educating government entities on industry best practices, and honing my craft
                    in a variety of challenging, constantly changing, fast paced environments.
                </p>
            </div>

            <div>
                <h2 className="aboutMe">Customer Success Stories</h2>
            </div>

            <div className="py-2">
                <div className="aboutMe">
                    <h3>Kobayashi Maru</h3>
                    <p>
                        The United States Space Force's Kobayashi Maru organization was faced with a challenging situation. The facility which housed their primary
                        datacenter was being decommissioned. However, due to funding constraints, a new facitiy that could accomadate their current on-premises infrastrucure
                        was never procured. Their organization hosts mores than 30 classified applications to thousands of customers globally, and the max allowable downtime for any given applicaiton can not exceed more than 2 minutes.
                        The legacy infrastcure was several thousand nodes of VMware Tanzu kubernetes orchestration with supporting software such as harbor, contour/envoy, argoCD, and GitLab.
                        On a short timeframe, I was able to migrate their entire on-premises infrastrucure to Azure Kubernetes Service clusters and continue using the same supporting software suite.
                        This prevented the existing management team from having to learning a new technology stack and downtime never exceeded the allowable two minutes during cutover.

                    </p>
                </div>
            </div>
            <div className="py-2">
                <div className="aboutMe">
                    <h3>Verteran Affairs Financial Management and Business Transactions</h3>
                    <p>Azure synapse, data factory, HIPAA data, Azure SQL, Terraform</p>
                </div>
            </div>
            <div className="py-2">
                <div className="aboutMe">
                    <h3>Joint Artificial Intelligence Center</h3>
                    <p>CI/CD Terraform SACA hub, no access to production, scrum agile high stakes</p>
                </div>
            </div>
            <div className="py-2">
                <div className="aboutMe">
                    <h3>Air Force Network As A Service</h3>
                    <p>Express route, networking</p>
                </div>
            </div>
            <div className="py-2">
                <div className="aboutMe">
                    <h3>Glasco Smith and Kline</h3>
                    <p>AKS healthcare data, HIPAA</p>
                </div>
            </div>


            <div>

                <h2>Certifications</h2>

                <table>
                    <th>Certifications</th>
                    <tr>
                        <td>Azure Certified: DevOps Engineer Expert</td>
                        <td>Azure Certified: Azure AI Engineer</td>

                    </tr>
                    <tr>
                        <td>Azure Certified: Azure Data Scientist</td>
                        <td>CISSP</td>
                    </tr>
                    <tr>
                        <td>Security+</td>
                        <td>Network+</td>
                    </tr>
                </table>

            </div>
        </div >
    )
}

export default AboutMe