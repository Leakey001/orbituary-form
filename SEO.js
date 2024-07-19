<!DOCTYPE html>
<html>
<head>
  <title><%= obituary.name %> - Obituary</title>
  <meta name="description" content="<%= truncate(obituary.content, 150) %>">
  <meta name="keywords" content="obituary,<%= extractKeywords(obituary.content) %>">
  <link rel="canonical" href="<%= obituary.url %>">
</head>
<body>
  <script src="https://apis.google.com/js/api.js"></script> <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "Person",
      "name": "<%= obituary.name %>"
    },
    "headline": "<%= obituary.name %> - Obituary",
    "datePublished": "<%= obituary.datePublished %>",
    "dateModified": "<%= obituary.dateModified %>",
    "description": "<%= obituary.content %>",
    }
  </script>
  </body>
</html>
