import { KeystoneContext } from '@keystone-6/core/types';

interface Arguments {
  title: string;
  url: string;
  frontendUrl: string;
}


async function createSiteCDCD(root: any, { title, url, frontendUrl }: Arguments, context: KeystoneContext): Promise<any> {
  

  const siteTestRes = await fetch(`${url}/wp-json`);
  const siteTest = await siteTestRes.json();
  
  let typeOptions = [];
  
  if (siteTest.namespaces.includes('cdcd/v2')) {
    const typeOptionsRaw = await fetch(`${url}/wp-json/cdcd/v2/post-type-options`);
    typeOptions = await typeOptionsRaw.json();
  }

  const graphql = String.raw;
  const site = await context.db.Site.createOne({
    data: { title, url, frontendUrl, postTypes: typeOptions, updatePostTypes: typeOptions },
    resolveFields: graphql`
      id
      title
      url
      postTypes
      updatePostTypes
    `
  });

  return site;
  // const siteTestRes = await fetch(`${site.url}/wp-json`);
  // const siteTest = await siteTestRes.json();

  // if (siteTest.namespaces.includes('cdcd/v2')) {
  //   const siteFetchRes = await fetch(`${site.url}/wp-json/cdcd/v2/updates?types=${site.postTypes?.join(',')}`);
  //   const siteFetch = await siteFetchRes.json();
    
  //   return siteFetch;
  // }
  // return {error: 'v2 plugin missing'};
  

}

export default createSiteCDCD;