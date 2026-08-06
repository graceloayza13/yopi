(() => {
  const WHATSAPP_NUMBER = "51999999999";

  const classicDescription = "Una obra maestra de simetría y resplandor. Seleccionamos individualmente cada perla por su lustre excepcional y forma perfecta, creando una pieza que trasciende el tiempo y las tendencias.";
  const classicProperties = [
    ["Pureza y equilibrio", "Las perlas del río simbolizan pureza, equilibrio y conexión con la naturaleza."],
    ["Armonía natural", "Aportan serenidad, armonía y belleza natural a quien las lleva."]
  ];

  const products = [
    { id: "pulsera-rio-de-luz", name: "Pulsera doble Río de Luz", script: "Río de Luz", category: "pulseras", season: "verano", price: "S/. 55.00", image: "assets/img/pulsera-rio-de-luz.png", description: classicDescription, properties: classicProperties },
    { id: "pulsera-proteccion-conexion", name: "Pulsera Protección y Conexión", script: "Protección y conexión", category: "pulseras", season: "invierno", price: "S/. 70.00", image: "assets/img/pulsera-proteccion.png", description: "Un detalle delicado que combina elegancia, amor y estilo. Perfecta para regalar o compartir con alguien especial.", properties: [["Ágata morada", "Aporta equilibrio emocional, calma la mente y brinda protección espiritual."], ["Mano turca", "Favorece la paz interior y la conexión contigo misma."], ["Elefante", "Símbolo de sabiduría, protección, fuerza y buena fortuna."], ["Protección", "Protege contra las energías negativas y atrae buena suerte y bendiciones."]] },
    { id: "tobillera-amor-eterno", name: "Tobillera Amor Eterno", script: "Amor Eterno", category: "tobilleras", season: "verano", price: "S/. 65.00", image: "assets/img/tobillera-amor-eterno.png", description: "Un detalle delicado que combina elegancia, amor y estilo. Perfecta para regalar o compartir con alguien especial.", properties: classicProperties },
    { id: "collar-rio-bonito", name: "Collar Río Bonito", script: "Río Bonito", category: "collares", season: "verano", price: "S/. 70.00", image: "assets/img/collar-rio-bonito.png", description: classicDescription, properties: classicProperties },
    { id: "collar-rio-de-luz", name: "Collar doble Río de Luz", script: "Río de Luz", category: "collares", season: "invierno", price: "S/. 70.00", image: "assets/img/collar-rio-de-luz.png", description: classicDescription, properties: classicProperties },
    { id: "aretes-brisa-serena", name: "Aretes Brisa Serena", script: "Brisa Serena", category: "aretes", season: "verano", price: "S/. 30.00", image: "assets/img/aretes-brisa-serena.png", description: "Estos hermosos aretes colgantes han sido elaborados artesanalmente con piedra jade, piedras del río y acero dorado, logrando una pieza elegante, ligera y versátil para cualquier ocasión.", properties: classicProperties },
    { id: "aretes-cascada-perlas", name: "Aretes Cascada de Perlas", script: "Cascada de Perlas", category: "aretes", season: "invierno", price: "S/. 35.00", image: "assets/img/aretes-cascada-perlas.png", description: classicDescription, properties: classicProperties }
  ];

  const getProduct = (id) => products.find((product) => product.id === id);

  window.LumaData = { WHATSAPP_NUMBER, products, getProduct };
})();
