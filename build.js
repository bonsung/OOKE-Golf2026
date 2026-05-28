require('dotenv').config();
const fs = require('fs');

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_KEY || '';

if (!url || !key) {
  console.error('❌ .env 파일에 SUPABASE_URL, SUPABASE_KEY를 설정해주세요.');
  process.exit(1);
}

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/__SUPABASE_URL__/g, url);
html = html.replace(/__SUPABASE_KEY__/g, key);

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html, 'utf8');

console.log('✅ dist/index.html 빌드 완료');
console.log(`   URL: ${url}`);
console.log(`   KEY: ${key.substring(0, 20)}...`);
