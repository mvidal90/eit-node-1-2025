import fs from "node:fs"
import colors from "colors"
import prompt from "prompt-sync"

const promptFunc = prompt()

const fileNameToCreate = promptFunc(colors.blue("Ingrese el nombre del archivo: "))

const fileContent = promptFunc(colors.blue("Ingrese el contenido del archivo: "))

const filePath = `./files/${fileNameToCreate}`

const bufferContent = new Uint8Array(Buffer.from(fileContent))

fs.writeFile(
    filePath,
    bufferContent,
    error => {
        if (error) console.log(colors.red("El archivo no se ha podido crear correctamente."))
        else console.log(colors.green("El archivo ha sido creado correctamente."))
    }
)