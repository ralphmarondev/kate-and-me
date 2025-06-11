export interface SnapsItem {
	id: string
	image: string
	title: string
	description: string
	date: string
	location: string
}

export const snapsItem: SnapsItem[] = [
	{
		id: '1',
		image: import.meta.env.BASE_URL + 'img_20250427.jpg',
		title: 'First chess game with Kate Ann.',
		description: 'HAHAHAHAH naka chamba lang ako dito, proof is the next games, hindi na me nanalo tapos parang pinagbibigyan lang ako lolz hahahaha',
		date: '2025-04-27',
		location: 'Earth',
	},
	{
		id: '2',
		image: import.meta.env.BASE_URL + 'img_20250430_2.jpg',
		title: 'Maybe 2nd or 3rd game.',
		description: 'I lost this round. The current score is me: 1, kate: 2 (and 1 draw, not counted). We don\'t play after that. Thesis things for me and lot of requirements and activities for her (tired year thingy). Fourth year na sya next school year, yey! Me? hehehe',
		date: '2025-04-30',
		location: 'Earth',
	},
	{
		id: '3',
		image: import.meta.env.BASE_URL + 'img_20250601_1.jpg',
		title: 'First Mobile Legends game with Kate Ann.',
		description: 'Playing exp lane coz ... HAHAHAH, pabuhat ang person dito, buti malakas mag core si Kate HAHAHAH.',
		date: '2025-06-01',
		location: 'Earth',
	},
	{
		id: '4',
		image: import.meta.env.BASE_URL + 'img_20250601_2.jpg',
		title: 'Second game with Kate Ann.',
		description: 'Playing core this time hehez. Just watched that cat jump jump jump throughout the game HAHAHAH.',
		date: '2025-06-01',
		location: 'Earth',
	},
	{
		id: '5',
		image: import.meta.env.BASE_URL + 'img_20250607_1.jpg',
		title: 'Ano magandang title 😭',
		description: 'Wala na akong maisip na caption.....',
		date: '2025-06-07',
		location: 'Earth',
	},
	{
		id: '6',
		image: import.meta.env.BASE_URL + 'img_20250607_2.jpg',
		title: 'Paramihan kami ng deaths dito HAHAHA',
		description: 'HAHAHAHAH paramihan kami ng deaths. hahahahahhahahahahhahh ahahashhaha.',
		date: '2025-06-07',
		location: 'Earth',
	},
]