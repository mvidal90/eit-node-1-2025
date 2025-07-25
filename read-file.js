
import fs from "node:fs"

const file = fs.readFileSync("./files/ejemplo.txt")
const content = file.toString()

console.log(content)