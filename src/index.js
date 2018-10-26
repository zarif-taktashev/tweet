import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet(){
	return(
		<div className="tweet">
			<Avatar />	
			<div className="content">
				<NameWithHandle /><Time />
				<Message  />
				<div className="buttons">
					<ReplyButton />
					<RetweetButton />
					<LikeButton />
				</div>
			</div>
		</div>
	);
}

function Avatar(){
	return(
		<img src="https://www.gravatar.com/avatar/nothing"
		className="avatar"
		alt="avatar" />
	);
}

function Message(){
	return(
		<div className="message">
			This is less than 140 characters long
		</div>
	);
}

function NameWithHandle(){
	return(
		<span className="name-with-handle">
			<span className="name">Your name </span>
			<span className="handle">@yourhandle</span>
		</span>
	);
}

const Time = () => (
	<i className="time" />
);

const ReplyButton = () => (
	<i className="fa fa-reply reply-buton" />
);

const RetweetButton = () => (
	<i className="fa fa-retweet retweet-buton" />
);

const LikeButton = () => (
	<i className="fa fa-heart like-buton" />
);

ReactDOM.render(<Tweet />, document.getElementById('root'));

