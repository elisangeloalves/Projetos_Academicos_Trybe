const Importer = require('mysql-import');

const restoreDB = async () => {
	const importer = new Importer(
		{ user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, host: process.env.HOSTNAME },
	);

	try {
		await importer.import('./desafio1.sql');
	}
	catch (error) {
		console.log('Erro ao restaurar o dump!');
	}

	importer.disconnect();
}

module.exports = restoreDB;
