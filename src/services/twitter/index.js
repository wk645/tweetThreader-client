import TwitterService from '../tweets/TwitterService';

const { tweetThreaderHome } = CONFIG.server;

const tweets = new TwitterService(tweetThreaderHome);

export default tweets;
