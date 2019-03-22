const gulp        = require('gulp'),
	gulpif          = require('gulp-if'),
	pug             = require('gulp-pug'),
	plumber         = require('gulp-plumber'),
	frontMatter     = require('gulp-front-matter'),
	// emitty          = require('emitty').setup('src/pug', 'pug'),
	changedInPlace    = require('gulp-changed-in-place'),
	htmlmin         = require('gulp-htmlmin'),
	moment 					= require('moment'),
	fs							= require('fs');

/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
	configOption    = require('../config/configOption');


/**
 *
 * @type {*[]}
 */
const srcPath = configPath.src.templates + '/*.pug';


/**
 * @description Gulp PUG/JADE - preprocessor for creating html files.
 */
const renderPug = () => {
	/**
 	* Load Django Configs Dump
 	*/
	let platformConfigs = {};
	try {
		const platformConfigContents = fs.readFileSync(configOption.platformConfigFile);
		platformConfigs = JSON.parse(platformConfigContents);
	} catch (e) {
	}

	let webpackBundle = {};
	try {
		const webpackStatsContents = fs.readFileSync(configOption.webpackStatsFile);
		webpackBundle = JSON.parse(webpackStatsContents);
	} catch (e) {
	}

	return gulp
		.src(srcPath)
		.pipe(plumber(configOption.pipeBreaking.err))
		// .pipe(gulpif(global.isPugWatching, emitty.stream(global.emittyChangedPugFile)))
		// .pipe(emitty.stream(global.emittyChangedPugFile))
		.pipe(frontMatter({
			property: 'data'
		}))
		.pipe(pug({
			pretty: true,
			data: {
				env : (argv.prod) ? 'production' : "",
				config: platformConfigs,
				webpackBundle: webpackBundle,
				moment: moment,
			},
		}))
		.pipe(gulpif(argv.prod, htmlmin({
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			removeEmptyAttributes: true,
			removeComments: true
		})))
		.pipe(changedInPlace(configOption.changed))
		.pipe(gulp.dest(configPath.dest.html));
};

gulp.task('pug', function() {
	return renderPug();
});


/**
 * @description Gulp PUG/JADE watch - keeps track of changes in files.
 */
gulp.task('pug:watch', function() {
	// global.isPugWatching = true;

	gulp.watch([
		configPath.src.templates + '/**',
		configPath.src.templates + '/**/**',
		configPath.src.templates + '/**/**/**',
	], ['pug']).on('all', (event, filepath) => {
		// global.emittyChangedPugFile = filepath;
	});
});
