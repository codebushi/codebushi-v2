import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

class DisclosurePage extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet>
                    <title>Disclosure | Code Bushi</title>
                    <meta name="description" content="Code Bushi's disclosure and disclaimers" />
                </Helmet>

                <div className="banner banner--blog">
                    <div className="banner__content text-center">
                        <div>
                        <h1 className="font-weight-light mb-3"><span className="u-font-secondary text-uppercase">Code</span> <span className="u-font-special">Bushi</span></h1>
                        <h2 className="font-primary text-uppercase"><strong>&lt; Disclosure &gt;</strong></h2>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <h2>Disclosure</h2>

                    <p>Last updated: April 05, 2018</p>

                    <p>Please note that Code Bushi has financial relationships with some of the merchants mentioned on this blog. Code Bushi may be compensated if consumers choose to utilize the links located throughout the content on this site and generate sales for the said merchant. Code Bushi is compensated for certain paid links and advertisements on this blog. You are not obligated to click on any link or buy any products that are advertised.</p>

                    <p>Per FTC guidelines, this website may be compensated by companies mentioned through advertising, affiliate programs, or otherwise. Any references to third party products, rates, or websites are subject to change without notice. Please do the appropriate research before participating in any third party offers.</p>

                    <h3 className="mt-5">Disclaimer</h3>

                    <p>The information contained on https://codebushi.com website (the "Service") is for general information purposes only.</p>

                    <p>Code Bushi assumes no responsibility for errors or omissions in the contents on the Service.</p>

                    <p>In no event shall Code Bushi be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Code Bushi reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice.</p>

                    <p>Code Bushi does not warrant that the website is free of viruses or other harmful components.</p>

                    <p>This Disclaimer for Code Bushi is powered by TermsFeed</p>

                    <h3 className="mt-5">External links disclaimer</h3>

                    <p>https://codebushi.com website may contain links to external websites that are not provided or maintained by or in any way affiliated with Code Bushi</p>

                    <p>Please note that the Code Bushi does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

                </div>

            </Layout>
        )
    }
}

export default DisclosurePage