(() => {
  const WHATSAPP_NUMBER = "51999999999";

  const classicDescription = "Una obra maestra de simetría y resplandor. Seleccionamos individualmente cada perla por su lustre excepcional y forma perfecta, creando una pieza que trasciende el tiempo y las tendencias.";
  const classicProperties = [
    ["Pureza y equilibrio", "Las perlas del río simbolizan pureza, equilibrio y conexión con la naturaleza."],
    ["Armonía natural", "Aportan serenidad, armonía y belleza natural a quien las lleva."]
  ];

  const products = [
    //Pulseras
    { id: "pulsera-rio-de-luz", name: "Pulsera doble Río de Luz", script: "Río de Luz", category: "pulseras", season: "verano", price: "S/. 55.00", image: "assets/img/pulsera-rio-de-luz.png", description: classicDescription, properties: classicProperties },
    
    { id: "pulsera-proteccion-conexion", name: "Pulsera Protección y Conexión", script: "Protección y conexión", category: "pulseras", season: "invierno", price: "S/. 70.00", image: "assets/img/pulsera-proteccion.png", description: "Un detalle delicado que combina elegancia, amor y estilo. Perfecta para regalar o compartir con alguien especial.", properties: [["Ágata morada", "Aporta equilibrio emocional, calma la mente y brinda protección espiritual."], ["Mano turca", "Favorece la paz interior y la conexión contigo misma."], ["Elefante", "Símbolo de sabiduría, protección, fuerza y buena fortuna."], ["Protección", "Protege contra las energías negativas y atrae buena suerte y bendiciones."]] },
    
    { id: "pulsera-fuego-interno", name: "Pulsera Fuego Interno", script: "Fuego Interno", category: "pulseras", season: "verano", price: "S/. 45.00", 
      images: ["assets/img/pulsera-hombre/Fuego Interno-1.png", "assets/img/pulsera-hombre/Fuego Interno-2.png"], description: "Un amuleto masculino de piedras cálidas y tejido ajustable, resguardado por un corazón oscuro que evoca la nobleza del espíritu.", properties: [["Fuerza y Calidez", "Piedras naturales en tonos ámbar y terracota que transmiten energía vital y determinación."], ["Lealtad y Nobleza", "El dije central en forma de corazón oscuro aporta un contraste único que simboliza firmeza y lealtad."]] },
    
    { id: "pulsera-armonia-multicolor", name: "Pulsera Armonía Multicolor", script: "Armonía Multicolor", category: "pulseras", season: "verano", price: "S/. 45.00", 
      images: ["assets/img/pulsera-hombre/armonia-multicolor-2.png", "assets/img/pulsera-hombre/armonia-multicolor-1.png"], description: "Una combinación equilibrada de piedras de diversos colores y tejido negro, diseñada para canalizar vitalidad y serenidad en el día a día.", properties: [["Equilibrio Energético", "La variedad de piedras minerales simboliza la alineación de energías, aportando estabilidad mental y enfoque."], ["Estilo Versátil", "El cordón ajustables en tono negro y los detalles de color le otorgan un carácter moderno y fácil de combinar."]] },
    
    { id: "pulsera-ojo-de-tigre-terral", name: "Pulsera Ojo de Tigre Terral", script: "Ojo de Tigre Terral", category: "pulseras", season: "otoño", price: "S/. 50.00", 
      images: ["assets/img/pulsera-hombre/tigre-terral-1.png", "assets/img/pulsera-hombre/tigre-terral-2.png"], description: "Una sobria selección de piedras en tonos ojo de tigre, tierra y matices cobrizos tejidas en cordón beige, creada para infundir confianza y seguridad a cada paso.", properties: [["Protección y Enfoque", "Las tonalidades de ojo de tigre y cuarzos ahumados promueven la claridad mental y alejan las malas energías."], ["Conexión Terrenal", "Los matices cálidos de la piedra natural junto al tejido claro aportan un estilo masculino sofisticado y lleno de temple."]] },

    { id: "pulsera-arena-y-madero", name: "Pulsera Arena y Madero", script: "Arena y Madero", category: "pulseras", season: "verano", price: "S/. 45.00", 
      images: ["assets/img/pulsera-hombre/arena-y-madero-1.png", "assets/img/pulsera-hombre/arena-y-madero-2.png"], description: "Un diseño sereno que combina cuentas mates en tono crema con un centro de ojo de tigre y madera terracota, evocando equilibrio y conexión con lo natural.", properties: [["Serenidad y Calma", "Las tonalidades claras aportadas por las cuentas opacas brindan sensación de paz mental y templanza."], ["Fuerza Natural", "El contraste central de piedras tono ojo de tigre y detalles dorados potencia la confianza y la autenticidad."]] },

    { id: "pulsera-sol-de-otoño", name: "Pulsera Sol de Otoño", script: "Sol de Otoño", category: "pulseras", season: "otoño", price: "S/. 45.00", 
      images: ["assets/img/pulsera-hombre/sol-de-otoño-1.png", "assets/img/pulsera-hombre/sol-de-otoño-2.png"], description: "Un diseño cálido que integra esferas de piedra natural en tono naranja terracota con finos separadores plateados y un suave tejido ajustable.", properties: [["Vitalidad y Creatividad", "Los tonos cálidos de la piedra melocotón estimulan la motivación, la buena energía y la creatividad."], ["Elegancia Sutil", "Los acentos en acabado plata y el cordón claro ofrecen un estilo masculino fresco, limpio y versátil."]] },

    { id: "pulsera-destello-dorado", name: "Pulsera Destello Dorado", script: "Destello Dorado", category: "pulseras", season: "verano", price: "S/. 50.00", 
      images: ["assets/img/pulsera-hombre/destello-dorado-1.png", "assets/img/pulsera-hombre/destello-dorado-2.png"], description: "Una propuesta luminosa que combina piedras de cuarzo amarillo y cuarzo blanco con finos detalles metálicos y un tejido ajustable en tono beige.", properties: [["Luz y Optimismo", "Los matices amarillos y blancos atraen la buena fortuna, la claridad mental y la energía positiva."], ["Estilo Fresco", "El tejido claro y sus detalles plateados crean un contraste versátil, sobrio y perfecto para el uso diario."]] },

    //tobilleras
    { id: "tobillera-amor-eterno", name: "Tobillera Amor Eterno", script: "Amor Eterno", category: "tobilleras", season: "verano", price: "S/. 65.00", image: "assets/img/tobillera-amor-eterno.png", description: "Un detalle delicado que combina elegancia, amor y estilo. Perfecta para regalar o compartir con alguien especial.", properties: classicProperties },
    
    //Collares
    { id: "collar-rio-bonito", name: "Collar Río Bonito", script: "Río Bonito", category: "collares", season: "verano", price: "S/. 70.00", image: "assets/img/collar-rio-bonito.png", description: classicDescription, properties: classicProperties },
    
    { id: "collar-rio-de-luz", name: "Collar doble Río de Luz", script: "Río de Luz", category: "collares", season: "invierno", price: "S/. 70.00", image: "assets/img/collar-rio-de-luz.png", description: classicDescription, properties: classicProperties },

    { id: "collar-atardecer-de-kassia", name: "Collar Atardecer de Kassia", script: "Atardecer de Kassia", category: "collares", season: "verano", price: "S/. 30.00", images: ["assets/img/collar-k-3.png", "assets/img/collar-k-2.png", "assets/img/collar-k-1.png"], 
      description: "Un poema hecho joya que evoca los matices cálices de un ocaso en el mar; entrelaza el fuego del coral y destellos dorados bajo un firmamento de estrellas, guardando en su inicial el secreto de una memoria eterna.", properties: [
    ["Fuego y calidez", "El coral aporta energía, pasión y vitalidad a quien lo lleva."],
    ["Luz eterna", "Los destellos dorados simbolizan un recuerdo que permanece siempre brillante."]
    ] },
    
    { id: "collar-latido-del-mar", name: "Collar Latido del Mar", script: "Latido del Mar", category: "collares", season: "verano", price: "S/. 40.00", images: ["assets/img/latido-de-mar-1.png", "assets/img/latido-de-mar-2.png", "assets/img/latido-de-mar-3.png"], description: "Nacido de la serenidad del océano, este collar estilo corbatero entrelaza la profundidad de la lapislázuli con la pureza de las perlas y un toque turquesa; una cadena dorada que desciende libre hasta un corazón brillante, recordando que cada latido lleva consigo el misterio del mar.", properties: [
    ["Profundidad del mar", "La lapislázuli simboliza sabiduría, intuición y calma, como las aguas profundas del océano."],
    ["Pureza y vitalidad", "Las perlas y el toque turquesa aportan pureza y protección, mientras el corazón dorado recuerda escuchar tu propio latido."]
    ] },

    { id: "collar-sueno-estelar", name: "Collar Sueño Estelar", script: "Sueño Estelar", category: "collares", season: "invierno", price: "S/. 75.00", images: ["assets/img/sueno-estelar-2.png", "assets/img/sueno-estelar-3.png", "assets/img/sueno-estelar-1.png"], 
      description: "Tejido con cristales oscuros que capturan el misterio de la noche, este amuleto abraza destellos dorados y un corazón abombado que brilla bajo la guía de dos estrellas.", 
      properties: [["Misterio de la noche", "Los cristales oscuros con reflejos irisados simbolizan la magia de la noche, aportando intuición y serenidad a quien lo lleva."], ["Luz interior", "Las estrellas y el corazón volumétrico de tono dorado representan la guía, el amor propio y la fuerza que brilla en la oscuridad."]
    ] },

    { id: "collar-susurro-de-renata", name: "Collar Susurro de Renata", script: "Susurro de Renata", category: "collares", season: "invierno", price: "S/. 65.00", images: ["assets/img/susurro-de-renata-2.png", "assets/img/susurro-de-renata-3.png", "assets/img/susurro-de-renata-1.png"], 
      description: "Entre cuentas ahumadas, destellos iridiscentes y perlas translúcidas, este amuleto estilo plata entrelaza la luz y la sombra para resguardar en su inicial R la esencia de una historia inolvidable.", 
      properties: [["Equilibrio de luz y sombra", "Los tonos ahumados y translúcidos simbolizan la armonía entre misterio y claridad, aportando serenidad a quien lo lleva."], ["Sello de identidad", "El dije de la letra R en tono plateado actúa como un amuleto personal que celebra la autenticidad y la elegancia propia."]
    ] },

    { id: "collar-bosque-de-mora", name: "Collar Bosque de Mora", script: "Bosque de Mora", category: "collares", season: "verano", price: "S/. 65.00", images: ["assets/img/bosque-de-mora-2.png", "assets/img/bosque-de-mora-3.png", "assets/img/bosque-de-mora-1.png"], description: "Inspirado en la frescura del bosque, este amuleto entrelaza cristales verde olivo, destellos dorados y tonos iridiscentes, resguardando en su inicial M en tono dorado una conexión pura con la naturaleza.", 
      properties: [["Energía de la naturaleza", "Los tonos verdes y metálicos evocan la serenidad del bosque y el renacer de la tierra, aportando calma y vitalidad."], ["Identidad resplandeciente", "El dije personalizado con la letra M en tono dorado actúa como un sello de sofisticación y luz propia."]] },
   
    { id: "collar-carmesi-y-pureza", name: "Collar Carmesí y Pureza", script: "Carmesí y Pureza", category: "collares", season: "verano", price: "S/. 80.00", images: ["assets/img/carmesi-y-pureza-2.png", "assets/img/carmesi-y-pureza-3.png", "assets/img/carmesi-y-pureza-1.png"], description: "Un contraste perfecto entre la pasión del rojo carmesí y la pureza de las perlas blancas, unido por un broche timón y flecos dorados que caen en un movimiento lleno de elegancia.", 
      properties: [["Pasión y Serenidad", "Las cuentas rojas evocan la fuerza y el fuego interior, mientras que las perlas aportan paz, equilibrio y feminidad."], ["Elegancia en movimiento", "Su broche marinero central con caídas doradas crea una silueta dinámica que estiliza y realza cada escote."]] },
   


      //Aretes
    { id: "aretes-brisa-serena", name: "Aretes Brisa Serena", script: "Brisa Serena", category: "aretes", season: "verano", price: "S/. 30.00", images: ["assets/img/collar-k-3.png", "assets/img/aretes-cascada-perlas.png", "assets/img/aretes-cascada-perlas.png"]
      , description: "Estos hermosos aretes colgantes han sido elaborados artesanalmente con piedra jade, piedras del río y acero dorado, logrando una pieza elegante, ligera y versátil para cualquier ocasión.", properties: classicProperties },
    
    { id: "aretes-cascada-perlas", name: "Aretes Cascada de Perlas", script: "Cascada de Perlas", category: "aretes", season: "invierno", price: "S/. 35.00", image: "assets/img/aretes-cascada-perlas.png", description: classicDescription, properties: classicProperties }

  ];

  const getProduct = (id) => products.find((product) => product.id === id);

  window.LumaData = { WHATSAPP_NUMBER, products, getProduct };
})();
