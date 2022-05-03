import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Visual SPA Editor</>,
    imageUrl: '/assets/illustrations/SPA-Devs-and-Marketers-1024x512.png',
    description: (
      <>
        Allow authors to work directly in the experience with a WYSIWYG "page builder" with your <i>components</i>, instead of just with forms.

      </>
    ),
  },
  {
    title: <>Enterprise Headless</>,
    imageUrl: '/assets/illustrations/Headless-SPA-development-List.png',
    description: (
      <>
        Enterprise power. Frontend speed. 
        We think it just might be the first enterprise CMS you actually enjoy developing with. (We call it 'light development'.)

      </>
    ),
  },
  {
    title: <>Quality and Friendliness</>,
    imageUrl: '/assets/illustrations/SPA-block-1024x512.png',
    description: (
      <>
        Helping developers put handles and knobs on front-end components since 2008.
        
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={('https://docs.magnolia-cms.com/headless/index.html')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
            <div className="container">
              <div className="row ">
                <div className="col col--6 col--offset-3 message">
              Magnolia has a free &amp; open source Community edition suitable for small projects, 
          and an Enterprise edition with the additional features needed for big projects.
              </div>
              </div>
            </div>
          </section>

        
      </main>
    </Layout>
  );
}

export default Home;
