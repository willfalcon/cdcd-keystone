import { KeystoneContext } from '@keystone-6/core/types';


interface Arguments {
  id: string;
}


async function siteData(root: any, { id }: Arguments, context: KeystoneContext): Promise<any> {
  
  // console.log(context.db.Site.findOne({ args: { where: { id } } }));
  const graphql = String.raw;
  const site = await context.db.Site.findOne({
    where: { id },
    resolveFields: graphql`
      id
      title
      url
      postTypes
      updatePostTypes
    `
  });

  const siteTestRes = await fetch(`${site.url}/wp-json`);
  const siteTest = await siteTestRes.json();

  if (siteTest.namespaces.includes('cdcd/v2')) {
    const siteFetchRes = await fetch(`${site.url}/wp-json/cdcd/v2/updates?types=${site.postTypes?.join(',')}&updateTypes=${site.updatePostTypes?.join(',')}`);
    const siteFetch = await siteFetchRes.json();
    
    return siteFetch;
  }
  return {error: 'v2 plugin missing'};
  

}

export default siteData;