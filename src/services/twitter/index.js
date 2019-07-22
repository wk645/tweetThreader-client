import TwitterService from './TwitterService';

const { tweetThreaderHome } = CONFIG.server;

const tweets = new TwitterService(tweetThreaderHome);

export default tweets;
