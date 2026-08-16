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

    //Pulseras elegance

    { id: "pulsera-cielo-y-mar", name: "Pulsera Cielo y Mar", script: "Cielo y Mar", category: "pulseras", season: "primavera", price: "S/. 55.00", 
      images: ["assets/img/pulsera-elegance/cielo-y-mar-1.png", "assets/img/pulsera-elegance/cielo-y-mar-2.png"], description: "Una delicada combinación de piedras de lapislázuli azul profundo y perlas blancas, coronada por un encantador dije de corazón dorado que aporta romanticismo y sofisticación.", properties: [["Serenidad y Sabiduría", "El lapislázuli azul fomenta la calma interior y la intuición, mientras que las perlas aportan dulzura y pureza."], ["Elegancia Femenina", "El dije de corazón inflado en tono dorado le otorga un toque romántico, moderno y distintivo."]] },      

    { id: "pulsera-ojo-protector-dorado", name: "Pulsera Ojo Protector Dorado", script: "Ojo Protector Dorado", category: "pulseras", season: "otoño", price: "S/. 55.00", 
      images: ["assets/img/pulsera-elegance/protector-dorado-1.png", "assets/img/pulsera-elegance/protector-dorado-2.png"], description: "Un elegante diseño elaborado con cuentas de ojo de tigre en tonos dorados y moscados, realzado por un dije central de ojo turco con circones deslumbrantes.", properties: [["Protección y Luz", "El dije de ojo turco actúa como un escudo protector contra las malas energías, mientras atrae la buena fortuna."], ["Sofisticación Cálida", "Los destellos satinados de la piedra ojo de tigre combinados con acabados dorados le otorgan un aire místico y elegante."]] },

    { id: "pulsera-corazon-carmesi", name: "Pulsera Corazón Carmesí", script: "Corazón Carmesí", category: "pulseras", season: "otoño", price: "S/. 55.00", 
      images: ["assets/img/pulsera-elegance/corazon-carmesi-2.png", "assets/img/pulsera-elegance/corazon-carmesi-1.png"], description: "Un contraste elegante entre la calidez de las ágatas en tono carmesí y la pureza de las perlas blancas, unidas por un dije de corazón dorado que transmite romanticismo.", properties: [["Pasión y Dulzura", "Las perlas blancas aportan serenidad y delicadeza, mientras que las piedras rojas estimulan la vitalidad y el amor propio."], ["Detalle Romántico", "El dije de corazón inflado en acabado dorado resalta como un símbolo refinado de afecto y elegancia."]] },

    { id: "pulsera-luz-dorada", name: "Pulsera Luz Dorada", script: "Luz Dorada", category: "pulseras", season: "verano", price: "S/. 55.00", 
      images: ["assets/img/pulsera-elegance/luz-dorada-1.png", "assets/img/pulsera-elegance/luz-dorada-2.png"], description: "Un sofisticado diseño que combina la calidez del cuarzo amarillo con el brillo natural de las perlas blancas, complementado por dijes dorados de corazón y la letra D.", properties: [["Luminosidad y Enfoque", "Las tonalidades amarillas atraen la energía positiva y la abundancia, mientras que las perlas aportan armonía."], ["Diseño Personalizado", "Los finos dijes dorados le otorgan un toque distintivo, elegante y cargado de significado."]] },  

    { id: "pulsera-esencia-terrenal", name: "Pulsera Esencia Terrenal", script: "Esencia Terrenal", category: "pulseras", season: "otoño", price: "S/. 55.00", 
      images: ["assets/img/pulsera-elegance/esencia-terrenal-1.png", "assets/img/pulsera-elegance/esencia-terrenal-2.png"], description: "Un elegante diseño que combina la sobriedad de piedras naturales en tonos oscuros y marrones con el brillo sutil de perlas blancas, acentuado por un dije dorado con la letra X.", properties: [["Estabilidad y Protección", "Las piedras en tonos terrosos y oscuros aportan firmeza, arraigo y protección en el día a día."], ["Personalidad y Elegancia", "El dije de inicial en acabado dorado y las perlas crean un contraste sofisticado, ideal para lucir una pieza única."]] },

    { id: "pulsera-pasion-azabache", name: "Pulsera Pasión Azabache", script: "Pasión Azabache", category: "pulseras", season: "invierno", price: "S/. 55.00", 
      images: ["assets/img/pulsera-elegance/pasion-azabache-1.png", "assets/img/pulsera-elegance/pasion-azabache-2.png"], description: "Un audaz diseño que combina piedras en intenso rojo carmesí y negro azabache, adornado con finos dijes dorados en forma de corazón y la letra A.", properties: [["Fuerza y Protección", "La combinación del rojo vibrante y el negro aporta dinamismo, protección e intensidad a tu energía."], ["Estilo Personal", "Los dijes colgantes en tono dorado ofrecen un toque personalizado, romántico y moderno."]] },

    { id: "pulsera-atardecer-terracota", name: "Pulsera Atardecer Terracota", script: "Atardecer Terracota", category: "pulseras", season: "otoño", price: "S/. 55.00", 
      images: ["assets/img/pulsera-elegance/atardecer-terracota-1.png", "assets/img/pulsera-elegance/atardecer-terracota-2.png"], description: "Un cálido diseño confeccionado con ágatas en gradientes terracota y naranja, complementado con detalles de piedra volcánica, piedra jaspe y un dije dorado con la letra F.", properties: [["Energía y Vitalidad", "Las ágatas en tonos cálidos estimulan la motivación y la confianza, mientras que la piedra volcánica aporta equilibrio."], ["Diseño Exclusivo", "El contraste entre texturas naturales y el dije de inicial dorado le otorga un estilo refinado y con personalidad."]] },

    { id: "pulsera-fe-y-malaquita", name: "Pulsera Fe y Malaquita", script: "Fe y Malaquita", category: "pulseras", season: "invierno", price: "S/. 55.00", 
      images: ["assets/img/pulsera-elegance/fe-y-malaquita-1.png", "assets/img/pulsera-elegance/fe-y-malaquita-2.png"], description: "Un refinado diseño que integra cuentas de malaquita verde, perlas cultivadas y un centro de ópalo, resaltado por dijes dorados de cruz calada y la letra S.", properties: [["Espiritualidad y Protección", "La combinación de la cruz calada y la malaquita actúa como un poderoso amuleto de fe, serenidad y transformación."], ["Diseño Místico", "El resplandor del ópalo junto a los detalles dorados le otorgan un carácter sofisticado y sumamente especial."]] },

    { id: "pulsera-armonia-madera", name: "Pulsera Armonía Madera", script: "Armonía Madera", category: "pulseras", season: "otoño", price: "S/. 55.00", 
      images: ["assets/img/pulsera-elegance/armonia-madera-1.png", "assets/img/pulsera-elegance/armonia-madera-2.png"], description: "Un cálido y natural diseño que combina cuentas de madera en tono café con acentos de ojo de tigre y cuarzo, realzado por un dije circular esmaltado en blanco con la letra G.", properties: [["Calma y Arraigo", "La calidez de la madera y las piedras naturales promueven el equilibrio, la serenidad y la conexión con la naturaleza."], ["Elegancia Versátil", "El medallón circular con inicial en contraste crea un detalle sofisticado, moderno y lleno de significado."]] },

    //Pulseras tejido

    { id: "pulsera-cruz-sombra-dorada", name: "Pulsera Cruz Sombra Dorada", script: "Cruz Sombra Dorada", category: "pulseras", season: "invierno", price: "S/. 45.00", 
      images: ["assets/img/pulsera-tejida/cruz-sombra-dorada-1.png", "assets/img/pulsera-tejida/cruz-sombra-dorada-2.png"], description: "Un sobrio y elegante tejido macramé en hilo negro, resaltado por una cruz central fija y esferas laterales en acabado dorado que simbolizan fe y protección.", properties: [["Fe y Protección", "La cruz central actúa como un amuleto espiritual que aporta fortaleza, guía y protección constante."], ["Estilo Versátil", "El contraste sobrio entre el tejido negro y los destellos dorados ofrece un diseño moderno ideal para el uso diario."]] },

    { id: "pulsera-trebol-arena-rose", name: "Pulsera Trébol Arena Rosé", script: "Trébol Arena Rosé", category: "pulseras", season: "primavera", price: "S/. 45.00", 
      images: ["assets/img/pulsera-tejida/trebol-arena-rose-1.png", "assets/img/pulsera-tejida/trebol-arena-rose-2.png"], description: "Un delicado tejido macramé en tono beige y café con un dije central de trébol de cuatro hojas y balines laterales en un elegante acabado oro rosa.", properties: [["Buena Fortuna y Esperanza", "El trébol de cuatro hojas simboliza la suerte, la prosperidad y los buenos deseos en cada momento."], ["Estilo Sutil y Cálido", "Los tonos neutros del hilo combinados con el resplandor del oro rosa brindan un toque femenino, fino y delicado."]] },

   { id: "pulsera-corazon-rojo-dorado", name: "Pulsera Corazón Rojo Dorado", script: "Corazón Rojo Dorado", category: "pulseras", season: "primavera", price: "S/. 45.00", 
      images: ["assets/img/pulsera-tejida/corazon-rojo-dorado-1.png", "assets/img/pulsera-tejida/corazon-rojo-dorado-2.png"], description: "Un lazo carmesí tejido a mano que abraza un destello dorado en el centro, capturando la latente calidez del afecto y el susurro eterno de la protección.", properties: [["Fuego y Esencia", "El hilo rojo entrelaza la devoción y la energía vital, creando un refugio sutil pero inquebrantable para el alma."], ["Destellos de Amor", "La calidez del corazón dorado suspendido en el tejido evoca un romántico refugio de luz en la piel."]] },

    { id: "pulsera-infinito-albor-dorado", name: "Pulsera Infinito Albór Dorado", script: "Infinito Albór Dorado", category: "pulseras", season: "primavera", price: "S/. 45.00", 
      images: ["assets/img/pulsera-tejida/infinito-albor-dorado-1.png", "assets/img/pulsera-tejida/infinito-albor-dorado-2.png"], description: "Pulsera de tejido macramé confeccionada en hilo sintético color blanco, integrada con un dije central de infinito y balines terminales en acero con acabado dorado.", properties: [["Luz Eterna", "El tono blanco puro simboliza la armonía y la claridad, mientras que el símbolo del infinito celebra promesas sin final."], ["Reflejo Celestial", "La calidez del metal dorado contrasta sutilmente con la frescura del tejido, envolviendo la muñeca con elegancia imperecedera."]] }, 

    { id: "pulsera-cruz-carmesi-dorada", name: "Pulsera Cruz Carmesí Dorada", script: "Cruz Carmesí Dorada", category: "pulseras", season: "invierno", price: "S/. 45.00", 
      images: ["assets/img/pulsera-tejida/cruz-carmesi-dorada-1.png", "assets/img/pulsera-tejida/cruz-carmesi-dorada-2.png"], description: "Pulsera de tejido macramé elaborada en hilo sintético rojo, intercalada con balines dorados de acero y una cruz central fija con acabado dorado brillante.", properties: [["Mano de Protección", "El tejido rojo simboliza un lazo inquebrantable de resguardo, mientras que la cruz central actúa como un faro de devoción y fortaleza."], ["Elegancia Vibrante", "El contraste del rojo pasional con las cuentas doradas abraza la muñeca con calidez y un brillo distintivo."]] },

    { id: "pulsera-infinito-azabache-dorado", name: "Pulsera Infinito Azabache Dorado", script: "Infinito Azabache Dorado", category: "pulseras", season: "otoño", price: "S/. 45.00", 
      images: ["assets/img/pulsera-tejida/infinito-azabache-dorado-1.png", "assets/img/pulsera-tejida/infinito-azabache-dorado-2.png"], description: "Pulsera de tejido macramé elaborada en hilo sintético color negro, integrada con un dije central de infinito y balines laterales en acero con acabado dorado.", properties: [["Eternidad Misteriosa", "El lienzo del hilo negro evoca la elegancia de la noche, sosteniendo un ciclo de infinito que trasciende el tiempo."], ["Contraste Intemporal", "El vivo fulgor del dorado resalta sobre el tejido sobrio, creando una pieza moderna, mística y llena de carácter."]] },

    //Pulseras juvenil

    { id: "pulsera-trebol-menta-silvestre", name: "Pulsera Trébol Menta Silvestre", script: "Trébol Menta Silvestre", category: "pulseras", season: "primavera", price: "S/. 45.00", 
      images: ["assets/img/pulsera-juvenil/trebol-menta-silvestre-1.png", "assets/img/pulsera-juvenil/trebol-menta-silvestre-2.png"], description: "Pulsera de hilo sintético regulable en color verde menta, compuesta por cristales faceteados en tonos verde y humo, balines dorados y un dije central en forma de trébol.", properties: [["Fortuna Fresca", "La suavidad del tono menta y el trébol dorado entrelazan augurios de buena suerte, serenidad y constante renovación."], ["Destellos Juveniles", "Los cristales faceteados capturan la luz a cada movimiento, ofreciendo un estilo fresco, desenfadado y lleno de vitalidad."]] },

    { id: "pulsera-amor-familiar-dorado", name: "Pulsera Amor Familiar Dorado", script: "Amor Familiar Dorado", category: "pulseras", season: "primavera", price: "S/. 55.00", 
      images: ["assets/img/pulsera-juvenil/amor-familiar-dorado-1.png", "assets/img/pulsera-juvenil/amor-familiar-dorado-2.png"], description: "Pulsera ajustable de esferas metálicas doradas, decorada con un conjunto central de dijes en forma de corazones y figuras de niños con incrustaciones de circones brillantes.", properties: [["Lazo Inquebrantable", "Los dijes encendidos en circones celebran el amor incondicional y la unión eterna que abraza a la familia."], ["Destello Maternal", "Un resplandor dorado de elegancia clásica que guarda el latido de los recuerdos más preciados cerca de la piel."]] },

    { id: "pulsera-inicial-turquesa-brisa", name: "Pulsera Inicial Turquesa Brisa", script: "Inicial Turquesa Brisa", category: "pulseras", season: "verano", price: "S/. 45.00", 
      images: ["assets/img/pulsera-juvenil/inicial-turquesa-brisa-1.png", "assets/img/pulsera-juvenil/inicial-turquesa-brisa-2.png"], description: "Pulsera de hilo blanco regulable elaborada con cuentas de piedra turquesa, una perla natural barroca, balines dorados de acero y un dije colgante con la letra 'B' en acabado dorado.", properties: [["Esencia Personal", "La inicial dorada cuelga como un secreto íntimo, convirtiendo cada detalle en una firma de identidad única."], ["Serenidad Marina", "La frescura de la turquesa combinada con la calidez de la perla evoca la calma y el encanto vibrante del océano."]] },

    { id: "pulsera-inicial-amatista-mística", name: "Pulsera Inicial Amatista Mística", script: "Inicial Amatista Mística", category: "pulseras", season: "otoño", price: "S/. 45.00", 
      images: ["assets/img/pulsera-juvenil/inicial-amatista-mistica-1.png", "assets/img/pulsera-juvenil/inicial-amatista-mistica-2.png"], description: "Pulsera de hilo crema regulable elaborada con cuentas de piedras naturales amatista y ágatas en tonos morados, un dije de corazón en cuarzo traslúcido, balines dorados de acero y un dije colgante con la letra 'R' en acabado dorado.", properties: [["Misticismo y Calma", "Los tonos violeta y morados evocan la serenidad espiritual, transmutando la energía en un aura de paz e intuición."], ["Identidad Luminosa", "El cuarzo cristalino y la inicial dorada añaden un destello personal que celebra la esencia de quien la lleva."]] },

    { id: "pulsera-mariposa-azabache-primavera", name: "Pulsera Mariposa Azabache Primavera", script: "Mariposa Azabache Primavera", category: "pulseras", season: "primavera", price: "S/. 48.00", 
      images: ["assets/img/pulsera-juvenil/mariposa-azabache-primavera-1.png", "assets/img/pulsera-juvenil/mariposa-azabache-primavera-2.png"], description: "Pulsera doble de hilo regulable en verde menta claro, compuesta por cuentas de perlas cultivo, cristales faceteados en tonos olivo y humo, balines dorados de acero y un encantador dije colgante de mariposa negra.", properties: [["Transformación y Elegancia", "La silueta de la mariposa negra simboliza el renacer y la metamorfosis hacia una versión llena de sofisticación."], ["Armonía Orgánica", "El contraste entre el brillo suave de las perlas y la calidez de los cristales oliváceos transmite una delicada conexión con la naturaleza."]] },

    { id: "pulsera-destello-lunar-plata", name: "Pulsera Destello Lunar Plata", script: "Destello Lunar Plata", category: "pulseras", season: "invierno", price: "S/. 45.00", 
      images: ["assets/img/pulsera-juvenil/destello-lunar-plata-1.png", "assets/img/pulsera-juvenil/destello-lunar-plata-2.png"], description: "Pulsera doble de hilo blanco regulable, confeccionada con cristales faceteados en tono blanco nacarado e intercalada con balines de acero en acabado plateado.", properties: [["Pureza y Luz", "El brillo perlado de los cristales traslada la serenidad de la luna llena, envolviendo la muñeca en un aura de paz y claridad."], ["Elegancia Argéntea", "El matiz frío del acero plateado entrelazado con destellos cristalinos aporta una sutileza fresca, moderna y etérea."]] },

    { id: "pulsera-latido-carmesi", name: "Pulsera Latido Carmesí", script: "Latido Carmesí", category: "pulseras", season: "invierno", price: "S/. 48.00", 
      images: ["assets/img/pulsera-juvenil/latido-carmesi-1.png", "assets/img/pulsera-juvenil/latido-carmesi-2.png"], description: "Pulsera elaborada con cristales faceteados en tonos rojo vivo y humo metalizado, combinada con balines de acero dorado, cadena regulable y un dije colgante en forma de corazón dorado.", properties: [["Pasión y Fuerza", "El contraste entre el rojo intenso y el humo metalizado evoca la vitalidad del alma y la intensidad de los sentimientos sinceros."], ["Resplandor Cálido", "El corazón dorado suspendido en el centro destella con gracia a cada movimiento, añadiendo un toque romántico y moderno."]] },

    { id: "pulsera-sombra-bronce-amor", name: "Pulsera Sombra Bronce Amor", script: "Sombra Bronce Amor", category: "pulseras", season: "otoño", price: "S/. 48.00", 
      images: ["assets/img/pulsera-juvenil/sombra-bronce-amor-1.png", "assets/img/pulsera-juvenil/sombra-bronce-amor-2.png"], description: "Pulsera de cristales faceteados tornasolados en tonos verde oscuro y humo, montada con balines y broche con cadena en tono bronce antiguo, complementada con dijes colgantes de corazón y una figura de niña.", properties: [["Vínculo Imperecedero", "Los dijes en acabado bronce evocan la calidez de un afecto nostálgico y eterno que guarda la inocencia de la infancia."], ["Resplandor Místico", "Los reflejos tornasolados sobre la base oscura danzan suavemente con la luz, envolviendo la muñeca en un halo de elegancia sobria."]] },




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
   
    { id: "collar-brisa-terracota", name: "Collar Brisa Terracota", script: "Brisa Terracota", category: "collares", season: "Verano damas", price: "S/. 65.00", 
      images: [ "assets/img/piedra-de-rio/brisa-terracota-3.png", "assets/img/piedra-de-rio/brisa-terracota-2.png", "assets/img/piedra-de-rio/brisa-terracota-1.png"], description: "Collar elaborado con una hilera de perlas cultivadas de agua dulce, acentuado en el centro con cuentas naturales de ágata y granate en tonos terracota y vino, con broche y balines en acero dorado.", properties: [["Luz Orgánica", "El brillo sutil de las perlas puras evoca la serenidad del mar, envolviendo el cuello con una elegancia delicada y atemporal."], ["Calidez Otoñal", "Las cuentas centrales en tonos cálidos actúan como un destello de fuego suave, aportando vitalidad, arraigo y dinamismo."]] },

    { id: "collar-espuma-de-mar", name: "Collar Espuma de Mar", script: "Espuma de Mar", category: "collares", season: "verano", price: "S/. 65.00", 
      images: ["assets/img/piedra-de-rio/espuma-de-mar-1.png", "assets/img/piedra-de-rio/espuma-de-mar-2.png", "assets/img/piedra-de-rio/espuma-de-mar-3.png"], description: "Collar elaborado con perlas cultivadas de agua dulce en tonos blanco y rosáceo, intercalado con finos balines y un broche con cadena regulable en acero dorado.", properties: [["Eternidad Marina", "La delicada secuencia de perlas puras evoca el suave murmullo de las olas, rodeando el cuello de armonía y serenidad."], ["Sutileza Radiante", "Los pequeños destellos dorados entre la calidez de las perlas aportan un halo de luz atemporal y sofisticada."]] },

    { id: "collar-florecer-de-rio", name: "Collar Florecer de Río", script: "Florecer de Río", category: "collares", season: "primavera", price: "S/. 65.00", 
      images: ["assets/img/piedra-de-rio/florecer-de-rio-1.png", "assets/img/piedra-de-rio/florecer-de-rio-2.png", "assets/img/piedra-de-rio/florecer-de-rio-3.png"], description: "Collar confeccionado con perlas naturales cultivadas de río y un dije central en forma de flor con incrustaciones de circones brillantes en acabado dorado.", properties: [["Jardín Celestial", "El sutil resplandor de las perlas abrazadas por una flor brillante evoca el renacer de la naturaleza y la delicadeza del espíritu."], ["Brillo Romántico", "Los pequeños circones centrales capturan la luz del día, envolviendo el cuello en una estela de gracia y distinción eterna."]] },


      //Aretes
    { id: "aretes-brisa-serena", name: "Aretes Brisa Serena", script: "Brisa Serena", category: "aretes", season: "verano", price: "S/. 30.00", images: ["assets/img/collar-k-3.png", "assets/img/aretes-cascada-perlas.png", "assets/img/aretes-cascada-perlas.png"]
      , description: "Estos hermosos aretes colgantes han sido elaborados artesanalmente con piedra jade, piedras del río y acero dorado, logrando una pieza elegante, ligera y versátil para cualquier ocasión.", properties: classicProperties },
    
    { id: "aretes-cascada-perlas", name: "Aretes Cascada de Perlas", script: "Cascada de Perlas", category: "aretes", season: "invierno", price: "S/. 35.00", image: "assets/img/aretes-cascada-perlas.png", description: classicDescription, properties: classicProperties }

  ];

  const getProduct = (id) => products.find((product) => product.id === id);

  window.LumaData = { WHATSAPP_NUMBER, products, getProduct };
})();
