export class Pendu {
    constructor(word, maxErrors = 5) {
        this.word = word
        this.maxErrors = maxErrors
        this.errors = 0
        this.foundcount = 0
        this.letters = [...Array(word.length)].map(() => '_')
    }

    show() {
        console.log(`Erreurs: ${this.errors}/${this.maxErrors}`)
        console.log(this.letters)
    }

    keypressed(c) {
        const nbFound = this.word
            .split('')
            .map((letter, i) => ({ letter, i }))
            .filter(({ letter }) => letter.toUpperCase() === c.toUpperCase())
            .map(({ i }) => this.letters[i] = c.toUpperCase())
            .length
        if (nbFound) return 1
        this.errors++
        if (this.errors === this.maxErrors) return 0
    }
}