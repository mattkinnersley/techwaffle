#!/bin/bash

read -rep $'What\'s the title of the post?\n' TITLE
read -rep $'What\'s the subtitle of the post?\n' SUBTITLE
read -rep $'Who\'s the author of the post?\n' AUTHOR

AUTHOR=${AUTHOR:-Matt Kinnersley}

SLUG=${TITLE// /-}

git checkout -b $SLUG

NEWFILEPATH=src/pages/posts/$SLUG.mdx
touch $NEWFILEPATH

TITLECASE=$(echo $TITLE | awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) substr($i,2) }}1')
DATE=$(date +"%Y-%m-%dT%T")
DATEZ=$(date +"%Y-%m-%dT%T%z")

#define the template.

echo "import PostLayout from \"@techwaffle/components/post-layout\";

export const meta = {
  title: \"$TITLECASE\",
  subtitle: \"$SUBTITLE\",
  excerpt: \"random\",
  date: \"$DATE\",
  author: \"$AUTHOR\",
};

export default PostLayout;" > $NEWFILEPATH

echo New Post created at $NEWFILEPATH

node updateSitemap.js $SLUG $DATEZ

echo New Sitemap URL created

echo Opening Project...

code .

echo Starting Server...

yarn dev