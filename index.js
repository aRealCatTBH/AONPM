console.log("starting")

var fs = require('fs');

fetch("https://skimdb.npmjs.com/registry/_all_docs")
.then(d=>d.json())
.then(json=>{console.log("fetched")
  var packageJson = require("./package.json");
  var currentDependencies = packageJson.dependencies;
  var json = JSON.parse(body);

  packageJson.dependencies = {};

  var foundNewDeps = 0;
  json.rows.forEach(function(package){ console.log(package.id)
    // Ok, really not whole npm
    if (package.id !== 'AONPM') {
      if (!currentDependencies[package.id]) {
        foundNewDeps++;
      }

      packageJson.dependencies[package.id] = '*';
    }
  });

  console.log('Found', foundNewDeps, 'new deps');

  fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
})