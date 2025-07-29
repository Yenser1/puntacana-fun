class Destino {
    constructor(nombre, imgUrl) {
        this.name = nombre;
        this.imgUrl = imgUrl;
    }
}
export default function excursionesDinamicas({ params }) {
    const { name } = params;
    const actualName = name.replaceAll("%20", " ");
    const DESTINOS = [
        new Destino("Santo Domingo", "SantoDomingoBG.png"),
        new Destino("Buggies", "BuggiesBG.png"),
        new Destino("Isla Catalina", "IslaCatalinaBG.jpg"),
        new Destino("Isla Saona", "IslaSaonaBG.jpg"),
        new Destino("Montana Redonda", "MontanaRedondaBG.jpg"),
        new Destino("Samana", "SamanaBG.jpeg"),
        new Destino("Parasailing", "ParasailingBG.jpg"),
        new Destino("Speed Boat", "SpeedBoatBG.jpg"),
        new Destino("Altos De Chavon", "AltosDeChavonBG.webp"),
    ];
    DESTINOS;
}
