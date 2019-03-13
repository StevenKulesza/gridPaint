import React, { Component } from 'react';

import EmojiPaint from './emoji-paint';

import './app.css';

const EMOJI = [{
		'symbol': '😀',
		'shortcode': ':smile:'
	},
	{
		'symbol': '😁',
		'shortcode': ':grin:'
	},
	{
		'symbol': '😎',
		'shortcode': ':sunglasses:'
	},
	{
		'symbol': '😘',
		'shortcode': ':kissing_heart:'
	},
	{
		'symbol': '⬆️',
		'shortcode': ':arrow_up:'
	},
	{
		'symbol': '➡️',
		'shortcode': ':arrow_right:'
	},
	{
		'symbol': '⬇️',
		'shortcode': ':arrow_down:'
	},
	{
		'symbol': '⬅️',
		'shortcode': ':arrow_left:'
	},
	{
		'symbol': '⚪',
		'shortcode': ':white_circle:'
	},
	{
		'symbol': '⚫',
		'shortcode': ':black_circle:'
	},
	{
		'symbol': '🔴',
		'shortcode': ':red_circle:'
	},
	{
		'symbol': '🔵',
		'shortcode': ':blue_circle:'
	},
];

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<EmojiPaint emoji={EMOJI} />
			</div>
		);
	}
}
