Public
  - Posts
      - details - embedded content
  - Pagination
      - hide buttons when no more
  - Random
    - Disqus
    - ToS
    - Google Analytics
    - Advertising
  - Test
  - bytes
    - a concept of smaller, more digestable thoughts/news
  - search
  - address lighthouse issues
    - tap targets are not appropriately sized
    - images are not appropriately sized
  - author details
    - preload
    - paginate posts
  - tooltips
  - fix download button hide/show
  - handle grpc errors
  - cleanup network calls


Productionization
  - docker/kubernetes
    - front end image
      - serve with http/2 + tls
    - backend image
      - environment configurations


Auth
 - ensure paid post visibility
  - created role leveling, need to filter paid/unpaid

Admin
  - total
    - create posts
      - commenting (review workflow)
      - embedded content
      - images
        - crop images to proper sizes (in browser if possible)
        - preview image
        - multiple upload? (would prevent need for the cropping case)

    - preview
    - approval workflow
  - tests - big oof
  - separate module?

Best practices
  - clean up/reduce css
    - this allows for theme swaping, including adding dark mode
  - user material grid instead: https://material.angular.io/components/grid-list/examples
