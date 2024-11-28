var main = document.getElementById("main")

var cart = [
    {
        img : "./Images/mobile-2.jpeg",
        Rs:90_00_0,
        mobileName:"oneplus 9 pro 12gb Ram 256 GB memory back side small",
        location:"Islamabad",
        days : "2 weeks ago",
    },
    {
        img : "./Images/vivo.webp",
        Rs:25000,
        mobileName:"Vivo Mobile Phone, 7.38mm Ultra Smooth Body",
        location:"Multan",
        days : "5 days ago",
    },
    {
        img : "./Images/Huawei.jpg",
        Rs:70_00_0,
        mobileName:"Huawei Pura 70 Ultra - new beginnings 7A 4G Mobile",
        location:"Mardan Road Sahiwal",
        days : "8 weeks ago",
    },
    {
        img : "./Images/infinix.webp",
        Rs:450_00_0,
        mobileName:"Infinix Note 40 tipped to combine Samsung Galaxy",
        location:"Karachi Malir",
        days : "2 months ago",
    },
    {
        img : "./Images/motor 3.webp",
        Rs:390_00_0,
        mobileName:"8 Forgotten Yamaha bikes in India - Yamaha Enticer to Libero",
        location:"Islamabad",
        days : "2 weeks ago",
    },
    {
        img : "./Images/yamaha bike.jpg",
        Rs:550_00_0,
        mobileName:"Yamaha FZ-X launched Features price specs of this new bike",
        location:"Quetta",
        days : "1 years  ago",
    },

    {
        img : "./Images/yamaha bike2.jpg",
        Rs:650_00_0,
        mobileName:"Yamaha bikes to be E20-compliant by end of this year",
        location:"Saddar Karachi",
        days : "1 days ago",
    },
    {
        img : "./Images/sport bikes.jpg",
        Rs:650_00_0,
        mobileName:"The 2023 Yamaha Motorcycle Lineup Our Take on Each Model",
        location:"Sialkot",
        days : "7 weeks ago",
    },
    {
        img : "./Images/prado.jpg",
        Rs:200_00_00_0,
        mobileName:"Toyota Land Cruiser Prado PARADO LTDAT captivating black",
        location:"Kashmir",
        days : "2 days ago",
    },
    {
        img : "./Images/land cruiser.jpg",
        Rs:88_00_00_0,
        mobileName:"Toyota Land Cruiser Prado Review — Not Just A Baby LC",
        location:"Punjab",
        days : "3 days ago",
    },
    {
        img : "./Images/toyota dark.jpg",
        Rs:80_00_00_0,
        mobileName:"Dark elegance the Toyota Vigo shines in its captivating black",
        location:"Port Qasim karachi",
        days : "2 months ago",
    },




    {
        img : "./Images/toyota prado.jpg",
        Rs:100_00_00_0,
        mobileName:"2013 (MY13) Toyota Hilux Vigo Champ 2.5 E Prerunner VN Turbo A/T",
        location:"Islamabad",
        days : "7 hours ago",
    },
    {
        img : "./Images/house2.jpg",
        Rs:95_00_00_0,
        mobileName:"Sky Rise Apartment | K Designs House | Surat the city of Lahore",
        location:"Islamabad",
        days : "15 hours ago",
    },
    {
        img : "./Images/house3.jpg",
        Rs:100_00_00_0,
        mobileName:"Special of the Modern Elegance | Fantastic House the city of Lahore",
        location:"Multan",
        days : "2 hours ago",
    },
    {
        img : "./Images/house4.jpg",
        Rs:100_00_00_0,
        mobileName:"Harmony House – Symbolizing peace and unity within the home.",
        location:"Karachi Nazimabad",
        days : "3 months ago",
    },
    {
        img : "./Images/luxury house.jpg",
        Rs:590_00_0,
        mobileName:"A luxury house that land over the view of the city of Karachi",
        location:"Karachi Defence",
        days : "2 years ago",
    },
    {
        img : "./Images/smart watch1.jpg",
        Rs:3_00_0,
        mobileName:"Smart Watch Storm U with BT Calling Gun Metal, Smartwatch for Men,",
        location:"Karachi",
        days : "3 days ago",
       
    },
    {
        img : "./Images/smart watch2.jpg",
        Rs:10_00_0,
        mobileName:"Fitbit Versa 4 Fitness Smartwatch with Daily Readiness, GPS, 24/7 Heart Rate",
        location:"Karachi",
        days : "3 days ago",
    },
    {
        img : "./Images/smart watch4.jpg",
        Rs:6_00_0,
        mobileName:"HD Smartwatch for Men Women (Answer/Make Calls), Fitness Watch with 120+ Sports Modes",
        location:"China",
        days : "3 years ago",
      
    },
    
    {
        img : "./Images/smart watch.jpg",
        Rs:15_99_5,
        mobileName:"Shop Kids Smart Watch Phone IP67 Waterproof Smartwatch Boys Girls with Touch Screen 5",
        location:"Karachi",
        days : "5 days ago",
       
    },
    
]






for (var i = 0; i < cart.length; i++) {
    main.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card shadow-sm border-0">
                <img src="${cart[i].img}" alt="${cart[i].mobileName}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${cart[i].mobileName}</h5>
                    <p class="card-text">
                        <strong>Price:</strong> PKR ${cart[i].Rs.toLocaleString()}<br>
                        <strong>Location:</strong> ${cart[i].location}<br>
                        <strong>Days:</strong> ${cart[i].days}<br>
                    </p>
                    <a href="#" class="btn btn-primary btn-sm">View Details</a>
                </div>
            </div>
        </div>
    `;
}

