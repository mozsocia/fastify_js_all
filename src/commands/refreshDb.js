const fs = require('fs').promises;
const path = require('path');

async function deleteRecursive(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await deleteRecursive(fullPath);
    } else {
      await fs.unlink(fullPath);
      console.log(`Deleted file: ${fullPath}`);
    }
  }

  await fs.rmdir(dir);
  console.log(`Deleted directory: ${dir}`);
}

async function refreshDb() {
  const dbPath = path.join(__dirname, '..', 'sqlite.db');
  const migrationsPath = path.join(__dirname, '..', 'database', 'migrations');

  try {
    // Delete sqlite.db file
    await fs.unlink(dbPath);
    console.log('Deleted sqlite.db file.');

    // Delete all files and folders in migrations folder
    await deleteRecursive(migrationsPath);

    // Recreate the empty migrations folder
    await fs.mkdir(migrationsPath);
    console.log('Recreated empty migrations folder.');

    console.log('Database refresh completed successfully.');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('The database file or migration folder does not exist. Skipping deletion.');
    } else {
      console.error('Error refreshing database:', error);
    }
  }
}

refreshDb();