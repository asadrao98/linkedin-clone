import styled from "styled-components";

const Main = (props) => {
	return (
		<Container>
			<ShareBox>
				<div>
					<img src="/images/user.svg" alt="" />
					<button>Start a post</button>
				</div>
				<div>
					<button>
						<Image
							src="data:image/png;base64,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"
							alt=""
						/>
						<span>Photo</span>
					</button>

					<button>
						<Image
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABWklEQVRoge2YsUrDUBSG/6QptiIWlTo4WKiUiIgi2OCgdi2IQ59AnNxE8H18BSdRxKWDgy4iOKjFBixqQSkoYoTUxEGUau0gnJND8XxbuPDf83FyD5cLKIqiKP8Zo/WjUNoJpQr5C+Xtpa+6TclCKLA6LbRaAu3dkV7/pOs7oALS6BSSRgWkYRGYWplFT3+CI7oNFoGh8WE4GwsYcUZ/jAl62H4hKxmHXZrE9GoeiVSSaxv+MzCYS8PZXESmMAbDoG9HJIc4Fo8hW7QxszaH3nQfaXakUyiVGUB+ff6jGyZNNyIfo6ZlIlu0kVueIMnreJ3m4vXRg7t/ifrJDUleZAK+56NWrqJ26CJoBmS57ALBW4Dbo2u4BxU0PZ88n00gDEPcn9VR3buA13jh2oZHoFF5wNXuOZ7vnjjiv8EicLp1zBH7K3oblabrBfRdSBoVkEbfhRRFURRFkneQnXFwYEqs4gAAAABJRU5ErkJggg=="
							alt=""
						/>
						<span>Video</span>
					</button>

					<button>
						<Image src="/images/event.png" alt="" />
						<span>Event</span>
					</button>

					<button>
						<Image src="/images/write-article.png" alt="" />
						<span>Write article</span>
					</button>
				</div>
			</ShareBox>
			<div>
				<Article>
					<SharedActor>
						<a>
							<img src="/images/user.svg" alt="" />
							<div>
								<span>Title</span>
								<span>Info</span>
								<span>Date</span>
							</div>
						</a>
						<button>
							<Image src="/images/ellipsis.png" alt="" />
						</button>
					</SharedActor>
					<Description>Description</Description>
					<SharedImage>
						<a>
							<img src="/images/shared-image.jpg" alt="" />
						</a>
					</SharedImage>
					<SocialCounts>
						<li>
							<button>
								<img
									src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
									alt=""
								/>
								<img
									src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
									alt=""
								/>
								<spna>75</spna>
							</button>
						</li>
						<li>
							<a> 2 comments</a>
						</li>
					</SocialCounts>
					<SocialActions>
						<button>
							<img
								src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
								alt=""
							/>
							<span>Like</span>
						</button>
						<button>
							<Image src="./images/comment.png" alt="" />
							<span>Comments</span>
						</button>
						<button>
							<Image src="./images/share.png" alt="" />
							<span>Share</span>
						</button>
						<button>
							<Image src="./images/send.png" alt="" />
							<span>Send</span>
						</button>
					</SocialActions>
				</Article>
			</div>
		</Container>
	);
};

const Container = styled.div`
	/* width: 80%; */
`;

const CommonCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
	display: flex;
	flex-direction: column;
	color: #958b7b;
	margin: 0 0 8px;
	background: white;
	div {
		button {
			outline: none;
			color: rgba(0, 0, 0, 0.6);
			font-size: 16px;
			line-height: 1.5;
			min-height: 48px;
			background: transparent;
			border: none;
			display: flex;
			align-items: center;
			font-weight: 600;
		}
		&:first-child {
			display: flex;
			align-items: center;
			padding: 8px 16px 0px 16px;
			img {
				width: 48px;
				border-radius: 50%;
				margin-right: 8px;
			}
			button {
				margin: 4px 0;
				flex-grow: 1;
				border-radius: 35px;
				padding-left: 16px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				background-color: white;
				text-align: left;
			}
		}
		&:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 4px;
			button {
				img {
					margin: 0 4px 0 -2px;
				}
				span {
					color: #70b5f9;
				}
			}
		}
	}
`;

const Image = styled.img`
	height: 16 px;
	width: 16px;
`;

const Article = styled(CommonCard)`
	padding: 0;
	margin: 0 0 8px;
	overflow: visible;
`;

const SharedActor = styled.div`
	padding-right: 40px;
	flex-wrap: nowrap;
	padding: 12px 16px 0;
	margin-bottom: 8px;
	align-items: center;
	display: flex;
	a {
		margin-right: 12px;
		flex-grow: 1;
		overflow: hidden;
		display: flex;
		text-decoration: none;
		img {
			width: 48px;
			height: 48px;
		}
		& > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-basis: 0;
			overflow: hidden;
			span {
				text-align: left;
				&:first-child {
					font-size: 14px;
					font-weight: 700;
					color: rgba(0, 0, 0, 1);
				}
				&:nth-child(n + 1) {
					font-size: 12px;
					color: rgba(0, 0, 0, 0.6);
				}
			}
		}
	}
	button {
		position: absolute;
		right: 12px;
		top: 0;
		background: transparent;
		border: none;
		outline: none;
	}
`;

const Description = styled.div`
	padding: 0 16px;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.9);
	font-size: 14px;
	text-align: left;
`;

const SharedImage = styled.div`
	margin-top: 8px;
	width: 100%;
	display: block;
	position: relative;
	background-color: #f9fafb;
	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`;

const SocialCounts = styled.ul`
	line-height: 1.3;
	display: flex;
	align-items: flex-start;
	overflow: auto;
	margin: 0 16px;
	padding: 8px 0;
	border-bottom: 1px solid #e9e5df;
	list-style: none;
	li {
		margin-right: 5px;
		font-size: 12px;
		button {
			display: flex;
		}
	}
`;

const SocialActions = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-start;
	margin: 0;
	min-height: 40px;
	padding: 4px 8px;
	button {
		display: inline-flex;
		align-items: center;
		padding: 8px;
		color: #0a66c2;

		@media (min-width: 768px) {
			span {
				margin-left: 8px;
			}
		}
	}
`;

export default Main;
