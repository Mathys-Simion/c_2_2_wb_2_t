import { lit, litAsync, litSync } from '../src/dico.js'
import * as assert from 'assert'
import { filePath } from '../src/utils/file.js'

describe('Read a dictionary', () => {
    const dicoFilePath = filePath('/data/dico.txt')
    console.log('dico file path', dicoFilePath)
    const check = async fun => {
        const words = await fun(dicoFilePath, 5)
        assert.strictEqual(words[0], 'ANGLE')
        assert.strictEqual(words[20], 'MEUBLE')
    }
    it('should read sync', () => check(litSync))
    it('should read promise', () => check(lit))
    it('should read async', () => check(litAsync))
})