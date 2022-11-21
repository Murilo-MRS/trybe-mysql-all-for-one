const Importer = require('mysql-import');

const northwindImporter = new Importer(
  {
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.HOSTNAME,
    port: process.env.PORT,
  },
);

northwindImporter.import('./northwind.sql')
  .then(() => {
    console.error('Database restore successfully!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error restoring database: \n', err);
    process.exit(1);
  })
  .finally(() => {
    northwindImporter.disconnect();
  });