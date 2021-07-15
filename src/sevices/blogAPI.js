import {default as axios} from 'axios';

export class blogApi {
    
    constructor(baseUrl) {
        if(baseUrl){
            this.baseUrl = baseUrl + ''
        }
        else{
            this.baseUrl= 'https://blog-carmandee.herokuapp.com/ghost/api/v3'
        }
    }

    key = '01971c307b90b3ea4d8bec3765'

    loadPosts(){
        return axios.get(`${this.baseUrl}/content/posts?key=${this.key}`)
    }
}