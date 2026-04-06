const fs = require('fs');

try {
  const fileContent = fs.readFileSync('data.json', 'utf8');
  const data = JSON.parse(fileContent);
  let failed = false;

  console.log("🔍 Validating data.json...\n");

  const checkRequired = (path, name) => {
    const keys = path.split('.');
    let val = data;
    for (const key of keys) {
      val = val ? val[key] : undefined;
    }
    if (!val) {
      console.error(`❌ Missing required field: ${name}`);
      failed = true;
    } else {
      console.log(`✅ ${name} is present.`);
    }
  };

  checkRequired('meta.name', 'meta.name');
  checkRequired('meta.tagline', 'meta.tagline');
  checkRequired('socials.github', 'socials.github');

  if (failed) {
    console.error("\n💥 Validation failed. Please fix the errors above.");
    process.exit(1);
  } else {
    console.log("\n✨ Validation passed! Your portfolio data looks good.");
  }
} catch (error) {
  console.error("❌ Failed to read or parse data.json! Check syntax.");
  console.error(error.message);
  process.exit(1);
}
