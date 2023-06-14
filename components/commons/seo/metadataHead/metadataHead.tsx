interface MetadataHeadProps {
  title?: string;
  type?: string;
  url?: string;
  image?: string;
  description?: string;
}

const MetadataHead = ({
  title,
  type,
  url,
  image,
  description,
}: MetadataHeadProps) => {
  return (
    <>
      {/*OpenGraph metadata*/}
      <meta name='robots' content='index, follow' />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={title} />
      <meta property='og:image' content={`${url}${image}`} />

      {/* HTML Meta Tags */}
      <meta name='description' content={description} />

      {/*  Google / Search Engine Tags */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={`${url}${image}`} />

      {/* Facebook Meta Tags */}
      <meta property='og:url' content={url} />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${url}${image}`} />

      {/* Twitter Meta Tags  */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${url}${image}`} />
    </>
  );
};

export default MetadataHead;
