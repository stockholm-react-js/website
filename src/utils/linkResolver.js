// -- The Link Resolver
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes

export function linkResolver(doc) {
  console.log(doc)
  // Routes
  if (doc.type === 'event') {
    return '/event/' + doc.uid;
  }

  // Homepage route fallback
  return '/';
}