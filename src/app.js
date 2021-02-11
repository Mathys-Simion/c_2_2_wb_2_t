import readline from 'readline'
import { lit, litAsync, litSync } from './dico.js'
import { filePath } from './utils/file.js'
import { Pendu } from './pendu.js'
const pauseTerminal = () => {
    readline.emitKeypressEvents(process.stdin)
    process.stdin.setRawMode(true)
    process.stdin.on('keypress', (_str, { ctrl, name }) => {
        if (ctrl && name === 'c') {
            console.log('Quitting with control-c')
            process.exit()
        }
    })
}
const clearTerminal = () => {
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
}
const run = async () => {
    const dicoFilePath = filePath('/data/dico.txt')
    const words = litSync(dicoFilePath, 10)
    console.log(words)
    const words2 = await lit(dicoFilePath, 11)
    console.log(words2)
    const words3 = await litAsync(dicoFilePath, 12)
    console.log(words3)
    console.clear()
    new Pendu('POMME', 5).show()
    console.clear()
    const pendu = new Pendu('POMME', 5)
    console.log(pendu.keypressed('o'))
    pendu.show()
    console.log(pendu.keypressed('r'))
    pendu.show()
    pauseTerminal()
}
run()