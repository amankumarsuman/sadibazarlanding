import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  
/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
  return (
    <>
      <SeoHead title="Shadibazar All in one solution for Events" siteName="Shadibazar Events" description="India Best Event Management Company In Bihar" url="www.sadibazar.tech" type="Event Management Company Wedding Company Birthday Party Pre wedding post wedding Virtual Events All In One Event Solution "/>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
