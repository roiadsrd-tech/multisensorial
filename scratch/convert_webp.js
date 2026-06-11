
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

const convert = async (dir) => {
  const files = await imagemin([`${dir}/*.{jpg,png}`], {
    destination: dir,
    plugins: [
      imageminWebp({quality: 75})
    ]
  });
  console.log('Converted:', files.map(f => f.destinationPath));
};

const dirs = [
  'public/branding',
  'public/logosasseenin',
  'public/instagram',
  'public'
];

for (const dir of dirs) {
  if (fs.existsSync(dir)) {
    console.log(`Converting images in ${dir}...`);
    await convert(dir);
  }
}
