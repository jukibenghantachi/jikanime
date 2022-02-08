import axios from 'axios';

export async function fetch(url: string): Promise<any> {
    let res = await axios.get(url);
    return await res.data;
}
