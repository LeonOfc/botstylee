import fs, {
	watchFile,
	unwatchFile
} from 'fs'
import chalk from 'chalk'
import {
	fileURLToPath
} from 'url'
import moment from 'moment-timezone'
var a = (await import("./lib/tictactoe.cjs")).default
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} Jᴀᴍ ${wibm} Mᴇɴɪᴛ ${wibs} Dᴇᴛɪᴋ`
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset    0 is  0.00
// Offset  420 is  7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, {
	weekday: 'long'
})
let date = d.toLocaleDateString(locale, {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
})
global.TicTacToe = a
global.moment = moment
global.botdate = `⫹⫺ 𝗗𝗮𝘁𝗲: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.work = `*Sᴜᴄᴄᴇꜱꜱ Fᴇᴛᴄʜɪɴɢ Dᴀᴛᴀ*\n*Sᴇɴᴅɪɴɢ Fɪʟᴇ...*`
global.error = `*Cᴀɴ\'ᴛ Fᴇᴛᴄʜɪɴɢ Dᴀᴛᴀ*`
global.thumb = fs.readFileSync("./src/baba.jpg")
global.profil = fs.readFileSync("./src/botstyle.png")
global.zippy = (await import('./lib/zippy.cjs')).zippy
global.tiny = (await import('./lib/tiny.cjs')).default
global.gc = "https://chat.whatsapp.com/KihEAYjKr04LI4uUrbiiip"
global.gh = "https://github.com/botstylee"
global.yt = "https://youtube.com/channel/UCrNO1yUYW0i3xsJp4NGBh4Q"
function ucapan() {
	const time = moment.tz('Asia/Jakarta').format('HH')
	var res
	res = tiny("Selamat pagi ")
	if (time >= 4) {
		res = tiny("Selamat pagi ")
	}
	if (time > 10) {
		res = tiny("Selamat siang ")
	}
	if (time >= 15) {
		res = tiny("Selamat sore ")
	}
	if (time >= 18) {
		res = tiny("Selamat malam ")
	}
	return res
}
global.say = ucapan()
global.getbuffer = async function getBuffer(url, options) {
	try {
		options ? options : {}
		var res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
const COUNT_FORMATS = [{ // 0 - 999
		letter: '',
		limit: 1e3
	},
	{ // 1,000 - 999,999
		letter: ' ribu',
		limit: 1e6
	},
	{ // 1,000,000 - 999,999,999
		letter: ' juta',
		limit: 1e9
	},
	{ // 1,000,000,000 - 999,999,999,999
		letter: ' miliar',
		limit: 1e12
	},
	{ // 1,000,000,000,000 - 999,999,999,999,999
		letter: ' triliun',
		limit: 1e15
	}
];

// Format Method:
global.formatnum = function formatnum(value) {
	const format = COUNT_FORMATS.find(format => (value < format.limit));

	value = (1000 * value / format.limit);
	value = Math.round(value * 10) / 10; // keep one decimal number, only if needed

	return ('' + value + format.letter);
}
global.log = async function log(data, data2, data3) {
	if (!(data2 || data3)) {
		return console.log(data)
	} else if (!data3) {
		return console.log(data, data2)
	} else {
		return console.log(data, data2, data3)
	}
}
global.owner = [
	//  ['6287760550924'],
	//['12546153210'],
	//['62895368900456'],
	['6287760550924', 'LeonStore👑', true]
	// [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
	// name: 'https://website'
	nrtm: 'https://nurutomo.herokuapp.com/',
	ghst: 'https://ghostui-api.herokuapp.com/',
        botstyle: 'https://botstyle-api.herokuapp.com',
	beni: 'https://rest-beni.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
	// 'https://website': 'apikey'
        'https://botstyle-api.herokuapp.com': 'iAEzm9gH',
	'https://ghostui-api.herokuapp.com/': 'OC2eTK'
}
// Sticker WM
global.packname = 'owner ${nomorown}\'LeonMd'
global.author = 'LEON & GHOST'
global.wm = 'LeonBotz'
global.nomorown = '6287760550924'
global.multiplier = 69 // The higher, The harder levelup
global.titlebot = `⫹⫺ RPG BOT Whatsapp | By ${author}`
global.rpg = {
	emoticon(string) {
		string = string.toLowerCase()
		let emot = {
			level: '🧬',
			limit: '🌌',
			health: '❤️',
			exp: '✉️',
			money: '💵',
			potion: '🥤',
			diamond: '💎',
			common: '📦',
			uncommon: '🎁',
			mythic: '🗳️',
			legendary: '🗃️',
			pet: '🎁',
			trash: '🗑',
			armor: '🥼',
			sword: '⚔️',
			fishingrod: '🎣',
			pickaxe: '⛏️',
			bow: '🏹',
			axe: '🪓',
			wood: '🪵',
			rock: '🪨',
			string: '🕸️',
			horse: '🐎',
			cat: '🐈',
			dog: '🐕',
			fox: '🦊',
			petFood: '🍖',
			iron: '⛓️',
			gold: '👑',
			emerald: '💚',
			brick: '🧱',
			coal: '🕳️',
			clay: '🌕',
			stick: '🦯',
			sand: '🌑',
			glass: '🪞',
			ayambakar: '🍖',
			ayamgoreng: '🍗',
			rendang: '🥘',
			steak: '🥩',
			babipanggang: '🥠',
			gulaiayam: '🍲',
			oporayam: '🍜',
			vodka: '🍷',
			sushi: '🍣',
			bandage: '💉',
			ganja: '☘️',
			soda: '🍺',
			roti: '🍞',
			wortel:'🥕',
			tomat:'🍅',
			kangkung:'🥦',
			kentang:'🥔',
			kubis:'🥬',
			jagung:'🌽',
			bayam:'🍃',
			labu: '🎃',
			seedkangkung: '🌾',
			seedwortel: '🌾',	
			seedtomat: '🌾',
			seedbrokoli: '🌾', 
			seedlabu: '🌾',
			seedkentang: '🌾', 
			seedjagung: '🌾',
			seedbayam: '🌾',
			seedkubis: '🌾',
/*=====| Hasil berburu |========*/
			kepiting: '🦀',
			lobster: '🦞',
			udang: '🦐',
			cumi: '🦑', 
			gurita: '🐙', 
			buntal: '🐡', 
			dory: '🐠', 
			orca: '🐟', 
			lumba: '🐬', 
			paus: '🐳', 
			hiu: '🦈', 
			banteng: '🐂', 
			harimau: '🐅', 
			gajah: '🐘', 
			kambing: '🐐', 
			panda: '🐼', 
			buaya: '🐊', 
			kerbau: '🐃', 
			sapi: '🐮', 
			monyet: '🐒', 
			babihutan: '🐗', 
			babi: '🐖', 
			ayam: '🐓'
		}
		let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
		if (!results.length) return ''
		else return emot[results[0][0]]
	}
}


let file = fileURLToPath(
	import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})
