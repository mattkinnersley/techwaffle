#!/bin/bash

echo What\'s the title of the post?
read TITLE
echo What\'s the subtitle of the post?
read SUBTITLE
echo Who\'s the author of the post?
read AUTHOR

NEWFILEPATH=src/pages/posts/${TITLE// /-}.mdx
touch $NEWFILEPATH

TITLECASE=$(echo $TITLE | awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) substr($i,2) }}1')
DATE=$(date +"%Y-%m-%dT%T")

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

