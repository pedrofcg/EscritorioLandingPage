const fs = require('fs');

const out = `window.__env = {
  VITE_SUPABASE_URL: "${process.env.VITE_SUPABASE_URL || ''}",
  VITE_SUPABASE_ANON_KEY: "${process.env.VITE_SUPABASE_ANON_KEY || ''}"
};
`;

fs.writeFileSync('public/env-config.js', out);
console.log('Wrote public/env-config.js');
