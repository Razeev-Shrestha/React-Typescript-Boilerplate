const { merge } = require('webpack-merge')

const commonConfiguration = require('./webpack.common.js')

module.exports = environmentVariables => {
	const { env } = environmentVariables
	const environmentConfiguration = require(`./webpack.${env}.js`)
	const config = merge(commonConfiguration, environmentConfiguration)

	return config
}
