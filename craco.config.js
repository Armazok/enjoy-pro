const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@app': path.resolve(__dirname, 'src/app/'),
			'@entities': path.resolve(__dirname, 'src/entities/'),
			'@features': path.resolve(__dirname, 'src/features/'),
			'@shared': path.resolve(__dirname, 'src/shared/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@widgets': path.resolve(__dirname, 'src/widgets/'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
};
