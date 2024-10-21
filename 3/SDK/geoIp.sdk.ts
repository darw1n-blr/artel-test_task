
class GeoIp {

    url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getData(ip: string){
        try {
            const response = await fetch(`${this.url}/?ip=${ip}`);
           const data = await response.json();
           return data;


        }catch(error){
           throw error;
        }
    }


}

async function test(){
    const geoIp = new GeoIp('http://localhost:5000')
    const result = await geoIp.getData("100.2000.2132.123")
    console.log(result)
}

console.log(test())




