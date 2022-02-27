const yamljs = require('yamljs')
const fs = require('fs')
module.exports.functions = function() {    
    let ymlfiles = fs.readdirSync('./ymls')
    ymlfiles = ymlfiles.filter(file => file.endsWith('yml'))
    ymlfiles = ymlfiles.map(file => `./ymls/${file}`)
    console.log(ymlfiles)

    let fns = ymlfiles.map(path => fs.readFileSync(path, 'utf8'))
    fns = fns.map(raw => yamljs.parse(raw).functions)

    fns.map(f => {
        Object.keys(f).map(k => {
            f[k]["layers"] = [{"Ref" : "LibsLambdaLayer"}]
        })
    });

    fns = fns.reduce((result, functions) => {return Object.assign(result, functions)}, {})
    return fns
}