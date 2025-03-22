import Card from "../Fragments/Card"

const CardLayouts = () => {
    const Cards = [{
        id: 1,
        image: "../assets/1.png",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        name: "Kaluna",
        position: "Senior Accountant di Gojek",
        rating: "3.5(86)",
        price: "Rp 300K"
    },
    {
        id: 2,
        image: "../assets/2.png",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        name: "Ulil",
        position: "Senior Accountant di Gojek",
        rating: "3.5(86)",
        price: "Rp 650K"
    },
    {
        id: 3,
        image: "../assets/3.png",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        name: "Prima",
        position: "Senior Accountant di Gojek",
        rating: "3.5 (86)",
        price: "Rp 499K"
    },
    {
        id: 4,
        image: "../assets/4.png",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        name: "Shaka",
        position: "Senior Accountant di Gojek",
        rating: "3.5 (86)",
        price: "Rp 899K"
    },
    {
        id: 5,
        image: "../assets/5.png",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        name: "Jason",
        position: "Senior Accountant di Gojek",
        rating: "3.5 (86)",
        price: "Rp 139K"
    },
    {
        id: 6,
        image: "../assets/6.png",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        name: "Nanda",
        position: "Senior Accountant di Gojek",
        rating: "3.5 (86)",
        price: "Rp 189K"
    },
    {
        id: 7,
        image: "../assets/7.png",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        name: "Nisa",
        position: "Senior Accountant di Gojek",
        rating: "3.5 (86)",
        price: "Rp 359K"
    },
    {
        id: 8,
        image: "../assets/8.png",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        name: "Michael",
        position: "Senior Accountant di Gojek",
        rating: "3.5 (86)",
        price: "Rp 100K"
    },
    {
        id: 9,
        image: "../assets/9.png",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        name: "Jacob",
        position: "Senior Accountant di Gojek",
        rating: "3.5 (86)",
        price: "Rp 250K"
    },
]
return (
    <div className="bg-primary px-5 py-5 md:px-10 md:py-10 lg:px-28">
        <h1 className="font-bold text-2xl pt-2">
            Koleksi Video <br />Pembelajaran Unggulan
        </h1>
        <p>
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
        <div className="pt-2">
            <ul className="flex gap-3">
                <li className="hover:underline hover:text-amber-500 font-semibold cursor-pointer">Semua Kelas</li>
                <li className="hover:underline hover:text-amber-500 font-semibold cursor-pointer">Pemasaran</li>
                <li className="hover:underline hover:text-amber-500 font-semibold cursor-pointer">Desain</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4 pt-5 md:flex-col lg:flex-wrap">
            {Cards.map((Cards) => (
                <div key={Cards.id}>
                    <Card
                        image={Cards.image}
                        title={Cards.title}
                        description={Cards.description}
                        rating={Cards.rating}
                        price={Cards.price}
                        name={Cards.name}
                        position={Cards.position}
                    />
                </div>
            ))}
        </div>
    </div>
)
}

export default CardLayouts