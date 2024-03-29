// Used to send broadcast message whenever features are added
module.exports = {
	color: '#FF9800',
	title: 'New feature released! :star_struck:',
	// author: {
	// 	name: 'Some name',
	// 	icon_url: 'https://i.imgur.com/wSTFkRM.png',
	// 	url: 'https://discord.js.org',
	// },
	description: 'I am now at v1.4.0. A new command was added.',
	thumbnail: {
		//url: 'bot logo here',
	},
	fields: [
        {
            name: 'CoDM-Bot version',
            value: 'v1.4.0'
        },
		{
			name: '!gameoff',
			value: 'Try it out. :wink:',
		},
        { name: '\u200B', value: '\u200B' },
	],
	image: {
		//url: 'https://i.imgur.com/wSTFkRM.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'CoDM-Bot',
		//icon_url: 'https://i.imgur.com/wSTFkRM.png',
	},
};