'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://gitshell.net'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/qiugits'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/qiugits'
	},
	{
		label: 'Qiita',
		url: 'https://qiita.com/qiugits'
	},
	{
		label: 'Ask Me Anything',
		url: 'https://github.com/qiugits/ama'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I’m an undergraduate student, interested in Machine Learning, Engineering, and Human Mind, love Anime, Manga, and Movies.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
