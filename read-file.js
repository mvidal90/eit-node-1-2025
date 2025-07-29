
import fs from "node:fs"
import util from "node:util"

const file = fs.readFileSync("./files/ejemplo.txt")
console.log(util.inspect(file))
const content = file.toString()

console.log(content)