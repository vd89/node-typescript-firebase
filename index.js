import app from './src/index';
import config from './config/config';
const { port } = config;

(async () => {
	console.info(`Starting App ....`);
	await app.listen(port, () => {
		try {
			console.info(`Express -> Server is running on http://localhost:${port}`);
		} catch (e) {
			console.error('Express -> ', e.message);
		}
	});
	console.info(`App Started .......`);
})();
