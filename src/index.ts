import puppeteer from "puppeteer"
import { readFileSync, writeFile } from "fs"
// import { setTimeout } from "timers/promises"
import { join } from "path"
import type { livro } from "./types"

( async () => {

	// le arquivo com nomes dos livros
	const livros_nomes = readFileSync(
		join(__dirname,"..","data","livros.txt"),
		{"encoding":"utf-8"}
	).trim().split("\n")

	// colecao que vai ler 
	let livros:livro[] = new Array( 0 )

	// iniciar navegador
	const browser = await puppeteer.launch( {"headless":false} )

	// iniciar pagina
	const page = await browser.newPage()

	console.time()
	console.log( "Start searching" )

	// iterar a lista de nomes dos livros
	for ( const livro of livros_nomes ) {

		// procurar pelo autor do livro
		await page.goto(`https://www.google.com/search?q=autor+livro+${livro.toLowerCase().replace(" ","+")}`)
		const autor = <string|undefined> await page.evaluate( () => document.querySelector("a.FLP8od")?.textContent ?? undefined )

		// procurar pelo ano de publicaçao do livro
		await page.goto(`https://www.google.com/search?q=ano+publicacao+livro+${livro.toLowerCase().replace(" ","+")}`)
		const data = <string|undefined> await page.evaluate( () => document.querySelector("div.Z0LcW.t2b5Cf")?.textContent?.slice(-4) ?? undefined )

		// adiciona livro na lista
		livros = [ ...livros, {"nome": livro,"autor": autor ?? null ,"ano": parseInt( data ) ?? null } ]

		// printa saída
		console.log( livro,"-",autor,"-",data )

		// espera 3.5 segundos
		// await setTimeout( 4000 )

	}

	console.table( livros )
	console.timeEnd()

	// escreve um arquivo json com as ifnormaçoes dos livros
	writeFile(
		join(__dirname,"..","data","livros.json"),
		JSON.stringify( livros ),
		(err) => { if (err) console.log(err) }
	)

	// fecha a pagina e o navegador
	await page.close()
	await browser.close()
} ).call( this )