import { promises } from 'fs'
import * as fs from 'fs'

export const litSync = (filepath, minlength) => {
    try {
        const data = fs.readFileSync(filepath)
        const lines = data
            .toString('utf-8')
            .split('\n')
        return lines.filter(line => line.length >= minlength)
    } catch (e) {
        console.log(e)
        return []
    }
}
export const lit = async (filepath, minlength) => new Promise((async (resolve, reject) => {
    try {
        const data = await promises.readFile(filepath)
        const lines = data
            .toString('utf-8')
            .split('\n')
        resolve(lines.filter(line => line.length >= minlength))
    } catch (e) {
        reject(e)
    }
}))
export const litAsync = async (filepath, minlength) => {
    try {
        return (await promises.readFile(filepath))
            .toString('utf-8')
            .split('\n')
            .filter(line => line.length >= minlength)
    } catch (e) {
        console.log(e)
    }
}
