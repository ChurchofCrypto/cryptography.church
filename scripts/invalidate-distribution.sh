#!/bin/bash

# Configuration
DISTRIBUTION_ID="EAWU14VZXNY3D"

# Create CloudFront invalidation
echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"

echo "Invalidation created!" 