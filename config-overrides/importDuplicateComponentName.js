// Auto-duplicates the component name in imports
// EXAMPLE: '@/components/App' becomes '@/components/App/App' (which is the actual valid path)

const rule = paths => {
	return {
		test: /\.(js|jsx)$/,
		include: paths.appSrc,
		loader: require.resolve('babel-loader'),
		options: {
			plugins: [
				[
					"module-resolver",
					{
						resolvePath: (sourcePath, currentFile, opts) => {
							return sourcePath.replace(/(@\/components(\/?.*)\/(.*))/, '$1/$3');
						},
					},
				],
			],
		},
	};
};

module.exports = (config, paths) => {
	if(!config.module) {
		config.module = {};
	}

	if(!config.module.rules) {
		config.module.rules = [];
	}

	config.module.rules.unshift(rule(paths));
	return config;
};
