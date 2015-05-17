System.config({
  "baseURL": "public/static/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "lib/jspm_packages/github/*.js",
    "npm:*": "lib/jspm_packages/npm/*.js",
    "angular2/*": "lib/angular2/es5/*.js"
  }
});

System.config({
  "map": {
    "rx": "npm:rx@2.5.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "zone.js": "npm:zone.js@0.5.0",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:rx@2.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:zone.js@0.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

