// Allows importing from the src/ directory using '@'
// EXAMPLE:	import App from '@/components/App/App';

const path = require('path');

module.exports = (config, paths) => {
	config.resolve.alias['@'] = path.resolve(__dirname, `${paths.appSrc}/`); // import from "@/components/...";
	return config;
};
