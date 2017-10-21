module.exports= function(grunt){
	grunt.initConfig({
		uglify:{
	      options: {
	        mangle:{
	          toplevel: true,
            reserved: ['UndoBag']
	        },
	        compress: true,
	        beautify: false
	      },
	      target:{
	        files:{
	          "dist/undoBag.min.js":["src/undoBag.js"]
	        }
	      }
	    }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};