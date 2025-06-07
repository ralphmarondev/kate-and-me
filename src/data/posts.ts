// src/data/posts.ts
export interface GalleryItem {
	id: string
	image: string
	description: string
	date: string
	location: string
}

export const galleryItems: GalleryItem[] = [
	{
		id: '1',
		image: import.meta.env.BASE_URL + 'img_20250307_1.jpg',
		description: 'I don\'t know why I captured this lol.',
		date: '2025-03-07',
		location: 'ROOM A14 - COEA BUILDING',
	},
	{
		id: '2',
		image: import.meta.env.BASE_URL + 'img_20250307_2.jpg',
		description: 'You having fun with binaries HAHA.',
		date: '2025-03-07',
		location: 'ROOM A14 - COEA BUILDING',
	},
	{
		id: '3',
		image: import.meta.env.BASE_URL + 'img_20250307_3.jpeg',
		description: 'Me watching you solve HAHAHHA.',
		date: '2025-03-07',
		location: 'ROOM A14 - COEA BUILDING',
	},
	{
		id: '4',
		image: import.meta.env.BASE_URL + 'img_20250307_4.jpeg',
		description: 'Close up picture of you solving.',
		date: '2025-03-07',
		location: 'ROOM A14 - COEA BUILDING',
	},
	{
		id: '5',
		image: import.meta.env.BASE_URL + 'img_20250604_1.jpg',
		description: 'On our way to Robinson 😁😊',
		date: '2025-06-04',
		location: 'Infront of CVMC',
	},
	{
		id: '6',
		image: import.meta.env.BASE_URL + 'img_20250604_2.jpg',
		description: 'Picture before going home. Only few people are there. First time experiencing that though. So cutie!',
		date: '2025-06-04',
		location: 'Robinson Tuguegarao',
	},
]
