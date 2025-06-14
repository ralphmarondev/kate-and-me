export interface GalleryItem {
	id: string
	image: string
	title: string
	description: string
	date: string
	location: string
}

export const galleryItems: GalleryItem[] = [
	{
		id: '1',
		image: import.meta.env.BASE_URL + 'img_20240906.jpg',
		title: 'hehehehe',
		description: 'First time that I saw her (pababa yung camera tapos kunwari yung chess board ang pinipicturan HAHAHAHH). Elims for chess [for college day], sumali ang person pero natalo sa first round kaya umuwi HAHHAHA.',
		date: '2024-09-06',
		location: 'ROOM A14 - COEA BUILDING',
	},
	{
		id: '2',
		image: import.meta.env.BASE_URL + 'img_20240909.jpg',
		title: 'Goodluck kateeee',
		description: 'Just watching people with same hobby as me (chess) coz I didn\'t win on elims diba? hahaha, and then yan sya, yung meryenda asan na gutom na kami(*cry *cry)',
		date: '2024-09-09',
		location: 'ROOM A24 - COEA BUILDING',
	},
	{
		id: '3',
		image: import.meta.env.BASE_URL + 'img_20250307_1.jpg',
		title: 'I don\'t know why I captured this lol.',
		description: 'I\'m not sure why I captured this, but I\'m glad I did. They invited me to go there, and I didn\'t expect to see you there [as if ahahh]. Aside from the things I shared, I learned something too. It only happened once, but whatever HAHAHA.',
		date: '2025-03-07',
		location: 'ROOM A14 - COEA BUILDING',
	},
	{
		id: '4',
		image: import.meta.env.BASE_URL + 'img_20250307_2.jpg',
		title: 'You having fun with binaries HAHA.',
		description: 'So you mean 1+1=10 in binary, 1+1=1 in boolean and 1+1=2 in math HAHAHAH. Look, you look cute there, maem Kate Ann :)',
		date: '2025-03-07',
		location: 'ROOM A14 - COEA BUILDING',
	},
	{
		id: '5',
		image: import.meta.env.BASE_URL + 'img_20250307_3.jpeg',
		title: 'Me watching you solve HAHAHHA.',
		description: 'Watching you solve the given problems. So number 3 and 4 are mine? HAHA. Luckily I still sovled it, thanks for your help. Those shortcuts HAHAHAH.',
		date: '2025-03-07',
		location: 'ROOM A14 - COEA BUILDING',
	},
	{
		id: '6',
		image: import.meta.env.BASE_URL + 'img_20250307_4.jpeg',
		title: 'Close up picture of you solving.',
		description: 'You\'re so brilliant HAHAHA, hopefully you didn\'t look at me (back then) while you\'re solving.🤭',
		date: '2025-03-07',
		location: 'ROOM A14 - COEA BUILDING',
	},
	{
		id: '7',
		image: import.meta.env.BASE_URL + 'img_20250604_1.jpg',
		title: 'On our way to Robinson 😁😊',
		description: 'You probably didn\'t knew that I captured this, not until I put it here. I just like capturing things that matters. :) I will surely look back on these pictures on the future.',
		date: '2025-06-04',
		location: 'Infront of CVMC',
	},
	{
		id: '8',
		image: import.meta.env.BASE_URL + 'img_20250604_2.jpg',
		title: 'Picture before going home. Such a memorable night. #core_memories_unlocked.',
		description: 'Last picture before going home. I had so much fun on the arcade games with you [I hope you too]. This was my first time experiencing going out with a girl, at night (just us HAHA). So cutie! I will always cherish this shared moment with you, that\'s for sure.',
		date: '2025-06-04',
		location: 'Robinson Tuguegarao',
	},
]