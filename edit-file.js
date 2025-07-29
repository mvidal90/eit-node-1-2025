import fs from "node:fs"
import colors from "colors"
import prompt from "prompt-sync"

const promptFunc = prompt()

const fileNameToEdit = promptFunc(colors.magenta("Ingrese el nombre del archivo a editar: "))

const filePath = `./files/${fileNameToEdit}`

if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath)
    const initialContentFile = fileBuffer.toString()
    const contentFile = promptFunc(colors.magenta("Edite el contenido del archivo: "))
    const buffer = new Uint8Array(Buffer.from(`${initialContentFile}\n${contentFile}`))
    fs.writeFile(
        filePath,
        buffer,
        error => {
            if (error) console.log(colors.red("El archivo no se ha podido editar correctamente."))
            else console.log(colors.green("El archivo ha sido editado correctamente."))
        }
    )
} else {
    const contentFile = promptFunc(colors.magenta("Ingrese el contenido del archivo: "))
    const buffer = new Uint8Array(Buffer.from(contentFile))
    fs.writeFile(
        filePath,
        buffer,
        error => {
            if (error) console.log(colors.red("El archivo no se ha podido crear correctamente."))
            else console.log(colors.green("El archivo ha sido creado correctamente."))
        })
}