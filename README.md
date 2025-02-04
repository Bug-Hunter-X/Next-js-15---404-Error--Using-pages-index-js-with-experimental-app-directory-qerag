# Next.js 15 App Directory Error: Using pages/index.js

This repository demonstrates a common error encountered when migrating to Next.js 15's `app` directory structure.  The problem arises when attempting to use the legacy `pages` directory after enabling the experimental `app` directory feature.

Next.js 15, with the `app` directory enabled, expects all pages to reside within the `app` directory.  Attempting to access a page defined in the `pages` directory results in a 404 error because the routing mechanism no longer looks in the old location.

## Solution

The solution is to move your page component from the `pages` directory into the `app` directory or to completely remove the pages directory.  This ensures correct routing and avoids the 404 error.

See the `bugSolution.js` file for the corrected version.