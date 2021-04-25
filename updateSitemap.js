const fs = require("fs");
const xml2js = require("xml2js");

const updateSitmap = async () => {
  const parser = new xml2js.Parser();
  const builder = new xml2js.Builder();
  const args = process.argv.slice(2);
  const [slug, date] = args;

  console.log("args: ", args);

  const sitemapLocation = __dirname + "/public/sitemap.xml";

  const source = fs.readFileSync(sitemapLocation);
  const parsedSource = await parser.parseStringPromise(source);

  const newPost = {
    loc: [`https://www.techwaffle.dev/posts/${slug}`],
    lastmod: [date],
    priority: ["0.80"],
  };

  parsedSource.urlset.url.splice(2, 0, newPost);

  const xml = builder.buildObject(parsedSource);

  fs.writeFileSync(sitemapLocation, xml);
};

updateSitmap();
