import axios from 'axios';

class TwitterService {
    constructor(apiUrl) {
        this.client = axios.create({
            baseURL: apiUrl,
            headers: {
                Accept: 'application/json'
            }
        });
    }

    async getHomeTimeline() {
        const response = await this.client.get('/homeTimeline');

        return response.data;
    }
}

export default TwitterService();
