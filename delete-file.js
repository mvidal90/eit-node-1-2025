import fs from "node:fs"
import colors from "colors"
import prompt from "prompt-sync"

const promptFunc = prompt()

const fileNameToDelete = promptFunc(colors.red("Ingrese el nombre del archivo a eliminar: "))

const filePath = `./files/${fileNameToDelete}`

fs.rm(filePath,
    error => {
            if (error) console.log(colors.red("El archivo no se ha podido eliminar correctamente."))
            else console.log(colors.green("El archivo ha sido eliminado correctamente."))
        }
)