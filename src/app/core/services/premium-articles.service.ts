import { Injectable } from '@angular/core';
import { Article } from '../../shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class PremiumArticlesService {
  private articles: Article[] = [
    {
      id: 1,
      title: "Impacto del Ejercicio en la Salud Mental",
      author: "Dr. Ana Pérez",
      date: new Date("2024-03-15"),
      content: "El ejercicio regular no solo mejora la salud física, sino que también tiene un profundo impacto en la salud mental. Las investigaciones han demostrado que actividades como correr, nadar o practicar yoga pueden liberar endorfinas, conocidas como 'hormonas de la felicidad'. Estas sustancias químicas naturales en el cerebro ayudan a reducir el estrés, la ansiedad y la depresión, mejorando el estado de ánimo y la calidad del sueño. Además, el ejercicio puede actuar como una especie de meditación en movimiento. Las rutinas repetitivas y rítmicas, como caminar a paso rápido, pueden calmar la mente y proporcionar un estado de relajación, similar a los efectos de la meditación. Los estudios también han destacado cómo el ejercicio puede mejorar la memoria y el aprendizaje al aumentar la producción de una proteína llamada BDNF (factor neurotrófico derivado del cerebro), que juega un papel clave en la función cognitiva. En términos de prevención, las personas que mantienen una actividad física regular tienen un menor riesgo de desarrollar enfermedades mentales graves como la demencia y el Alzheimer. Incluso, para aquellos que ya experimentan problemas de salud mental, el ejercicio puede ser una herramienta poderosa en el tratamiento, complementando la terapia y los medicamentos. En resumen, incorporar cualquier tipo de actividad física en la rutina diaria, incluso durante 30 minutos al día, puede marcar una diferencia sustancial en la salud emocional y cognitiva.",
      image: 'assets/images/premium-articles/im1.jpg'
    },
    {
      id: 2,
      title: "Nutrición para un Corazón Saludable",
      author: "Lic. Marcos Sánchez",
      date: new Date("2024-04-10"),
      content: "Una dieta equilibrada es fundamental para un corazón saludable. Incorporar alimentos ricos en nutrientes como frutas, verduras, granos enteros y grasas saludables, como las que se encuentran en los aguacates y los frutos secos, es clave para proteger el sistema cardiovascular. Estudios a largo plazo han demostrado que las personas que siguen una dieta mediterránea, que se caracteriza por un alto consumo de estos alimentos, tienen un menor riesgo de desarrollar enfermedades cardíacas. Limitar el consumo de alimentos procesados, ricos en grasas saturadas y trans, y azúcar es crucial. Las grasas trans, en particular, son conocidas por aumentar los niveles de colesterol LDL (colesterol 'malo') y disminuir el HDL (colesterol 'bueno'). Además, el exceso de sal puede elevar la presión arterial, un factor de riesgo importante para enfermedades cardíacas y accidentes cerebrovasculares. Además de la dieta, es importante adoptar otros hábitos saludables, como mantener un peso adecuado y realizar chequeos médicos regulares. Los avances en la investigación también sugieren que ciertos suplementos, como los omega-3, pueden ofrecer beneficios adicionales para la salud del corazón, aunque siempre es recomendable consultar a un profesional de la salud antes de iniciar cualquier régimen de suplementación.",
      image: 'assets/images/premium-articles/im2.jpg'
    },
    {
      id: 3,
      title: "Meditación: Beneficios Científicamente Comprobados",
      author: "Psic. Laura Gómez",
      date: new Date("2024-05-02"),
      content: "La meditación ha ganado popularidad no solo como una práctica espiritual, sino también como una herramienta respaldada científicamente para mejorar la salud mental y física. Investigaciones recientes han demostrado que la meditación regular puede reducir la presión arterial, mejorar la concentración y aumentar la resiliencia emocional. La práctica de la atención plena o 'mindfulness' implica prestar atención al momento presente sin juzgar, lo cual puede ayudar a las personas a gestionar el estrés y las emociones negativas de manera más efectiva. Los estudios han utilizado técnicas de imágenes cerebrales para mostrar cómo la meditación puede cambiar la estructura y función del cerebro. Por ejemplo, las personas que meditan regularmente tienen una corteza prefrontal más desarrollada, que es la región asociada con la toma de decisiones y el control emocional. Además, el tamaño de la amígdala, el centro de respuesta al miedo, puede reducirse con la práctica continua, lo que lleva a una menor reactividad al estrés. Más allá de los beneficios psicológicos, la meditación también ha demostrado tener un impacto positivo en el sistema inmunológico, ayudando al cuerpo a combatir infecciones de manera más eficaz. Incluso sesiones cortas de meditación de 10 a 15 minutos al día pueden ofrecer resultados significativos, y la mejor parte es que cualquiera puede comenzar en cualquier momento y lugar.",
      image: 'assets/images/premium-articles/im3.jpg'
    },
    {
      id: 4,
      title: "Técnicas Avanzadas de Entrenamiento de Fuerza",
      author: "Prof. Carlos Núñez",
      date: new Date("2024-06-12"),
      content: "El entrenamiento de fuerza es esencial no solo para el desarrollo muscular, sino también para mantener la densidad ósea y mejorar el metabolismo. Con técnicas avanzadas como las superseries, los entrenamientos en pirámide y el método de descanso-pausa, los atletas pueden llevar su rendimiento al siguiente nivel. Las superseries implican realizar dos ejercicios seguidos sin descanso, lo que aumenta la intensidad y maximiza el tiempo en el gimnasio. El entrenamiento en pirámide, por otro lado, implica aumentar progresivamente el peso y reducir las repeticiones con cada serie, o viceversa. Esto no solo mejora la fuerza, sino que también ayuda a la hipertrofia muscular. El método de descanso-pausa es otro enfoque eficaz, donde se toman descansos breves entre repeticiones pesadas para lograr una mayor sobrecarga en los músculos. Es importante recordar que, aunque estas técnicas pueden ser beneficiosas, también aumentan el riesgo de lesiones si no se ejecutan correctamente. Por lo tanto, es esencial mantener una buena forma y escuchar al cuerpo. Además, la nutrición adecuada y el descanso son componentes vitales para la recuperación y el crecimiento muscular. Los atletas deben asegurarse de obtener suficientes proteínas y calorías para sostener su entrenamiento intensivo.",
      image: 'assets/images/premium-articles/im4.jpg'
    },
    {
      id: 5,
      title: "Los Secretos de una Piel Saludable",
      author: "Derm. Elena Castro",
      date: new Date("2024-07-08"),
      content: "Cuidar la piel no se trata solo de aplicar productos tópicos, sino de mantener un enfoque holístico que incluye la hidratación, la dieta y la protección solar. La piel es el órgano más grande del cuerpo, y su salud refleja tanto los cuidados externos como los internos. Una rutina de cuidado efectiva debe comenzar con la limpieza adecuada, utilizando productos que no alteren el equilibrio natural del pH de la piel. La hidratación es fundamental, tanto desde fuera como desde dentro. Beber suficiente agua durante el día mantiene la piel flexible y ayuda a eliminar las toxinas. Además, incorporar alimentos ricos en antioxidantes, como las bayas, el té verde y los frutos secos, combate el envejecimiento prematuro al neutralizar los radicales libres. Los ácidos grasos omega-3, presentes en el salmón y las semillas de chía, ayudan a mantener la piel suave y reducen la inflamación. El uso de protector solar no puede subestimarse; la exposición prolongada al sol sin protección es la principal causa de envejecimiento prematuro y puede llevar a afecciones graves como el cáncer de piel. Se recomienda aplicar un protector solar de amplio espectro, con un factor de protección (SPF) de al menos 30, todos los días, incluso en días nublados. No menos importante es cuidar la barrera natural de la piel. Esto incluye evitar productos agresivos que contengan alcoholes deshidratantes y exfoliantes físicos muy abrasivos. El sueño adecuado también juega un papel crucial, ya que durante el descanso el cuerpo repara los tejidos y la piel se regenera. Una noche de sueño interrumpido puede llevar a ojeras, piel opaca y otros signos de envejecimiento.",
      image: 'assets/images/premium-articles/im5.jpg'
    },
    {
      id: 6,
      title: "La Importancia de Dormir Bien",
      author: "Dr. Eduardo Fernández",
      date: new Date("2024-08-01"),
      content: "El sueño es uno de los pilares fundamentales de la salud y afecta casi todos los aspectos de la vida. Durante el sueño, el cuerpo realiza funciones cruciales, como la consolidación de la memoria, la regulación hormonal y la reparación de tejidos. Dormir entre 7 y 9 horas por noche es vital para mantener un equilibrio físico y mental, y la falta de sueño crónica puede conducir a serios problemas de salud, como hipertensión, diabetes y enfermedades cardíacas. Una de las funciones más importantes del sueño es la regulación de las emociones. Cuando no dormimos bien, la capacidad del cerebro para gestionar el estrés y procesar las emociones se ve comprometida, lo que puede llevar a irritabilidad y problemas de salud mental, como ansiedad y depresión. Además, la falta de sueño afecta la atención, la creatividad y la capacidad de tomar decisiones, lo que impacta negativamente en el rendimiento académico y laboral. El sueño también es vital para la salud metabólica. Las investigaciones han mostrado que la privación del sueño puede alterar la sensibilidad a la insulina, lo que aumenta el riesgo de desarrollar enfermedades metabólicas. También afecta el equilibrio hormonal del hambre, aumentando los niveles de grelina (la hormona del apetito) y disminuyendo la leptina (la hormona de la saciedad), lo que lleva a comer en exceso y a la ganancia de peso. Establecer una rutina de sueño saludable es esencial. Esto incluye mantener un horario regular de sueño, crear un ambiente oscuro y tranquilo en el dormitorio, y evitar el uso de dispositivos electrónicos al menos una hora antes de acostarse. Practicar la relajación y evitar estimulantes como la cafeína en las horas previas al sueño también puede ayudar a lograr un descanso reparador.",
      image: 'assets/images/premium-articles/im6.jpg'
    },
    {
      id: 7,
      title: "Cómo Mejorar tu Productividad con Hábitos Saludables",
      author: "Coach Isabel Ramírez",
      date: new Date("2024-08-22"),
      content: "La productividad no solo depende de trabajar más horas, sino de optimizar el tiempo y las energías a través de hábitos saludables. Comenzar el día con un desayuno balanceado puede marcar una gran diferencia en el nivel de energía y concentración durante el día. Alimentos ricos en proteínas, como huevos o yogur griego, junto con carbohidratos complejos, como la avena, proporcionan un combustible constante para el cerebro. El ejercicio regular es otro hábito que mejora la productividad. Una caminata rápida de 20 minutos o una sesión corta de entrenamiento pueden aumentar la oxigenación del cerebro y liberar endorfinas, ayudando a mantener un estado de ánimo positivo y mejorando la agudeza mental. Además, las pausas regulares durante el trabajo, conocidas como el método Pomodoro (trabajar en intervalos de 25 minutos seguidos de 5 minutos de descanso), pueden prevenir la fatiga mental y mantener un rendimiento óptimo. La hidratación es clave para la concentración. Incluso una deshidratación leve puede afectar la función cognitiva, por lo que es importante beber suficiente agua durante el día. Mantener una botella de agua en el escritorio es un recordatorio simple pero efectivo. Otra estrategia es la planificación diaria. Dedicar unos minutos por la mañana para establecer metas y prioridades ayuda a mantener el enfoque en lo que es más importante. Es útil dividir las tareas en fragmentos más pequeños y realizables, y celebrar los logros, incluso los pequeños, para mantenerse motivado. El autocuidado no debe descuidarse; dormir bien, desconectarse de las redes sociales y dedicar tiempo a actividades relajantes como la lectura o la meditación son maneras de recargar energías y mantener la productividad a largo plazo.",
      image: 'assets/images/premium-articles/im7.jpg'
    },
    {
      id: 8,
      title: "Alimentos que Mejoran la Salud Digestiva",
      author: "Nutri. Jorge Valdivia",
      date: new Date("2024-09-15"),
      content: "La salud digestiva es fundamental para el bienestar general, ya que el sistema digestivo es responsable de absorber los nutrientes y eliminar los desechos del cuerpo. Incluir una variedad de alimentos ricos en fibra, como frutas, verduras, granos integrales y legumbres, puede mejorar significativamente la digestión. La fibra ayuda a mantener el movimiento regular de los intestinos y previene el estreñimiento. Además de la fibra, los alimentos fermentados, como el yogur, el kéfir, el kimchi y el chucrut, contienen probióticos, que son bacterias beneficiosas que equilibran la flora intestinal. Un equilibrio adecuado de bacterias intestinales está asociado con un sistema inmunológico más fuerte y un mejor estado de ánimo, ya que el intestino está estrechamente conectado con el cerebro a través del eje intestino-cerebro. Los alimentos ricos en agua, como la sandía, el pepino y las sopas ligeras, también ayudan a mantener la digestión suave. Mantenerse bien hidratado es crucial para que la fibra haga su trabajo y para prevenir problemas digestivos. Además, algunas hierbas y especias, como el jengibre y la menta, pueden aliviar las molestias digestivas, como la hinchazón y los calambres, gracias a sus propiedades antiinflamatorias. Es importante comer despacio y masticar bien los alimentos, ya que la digestión comienza en la boca. Tomarse el tiempo para comer también permite que el cuerpo libere las enzimas digestivas necesarias y que el cerebro reciba las señales de saciedad, ayudando a evitar comer en exceso. Evitar comidas copiosas antes de acostarse y seguir un horario regular de comidas también favorece una digestión óptima.",
      image: 'assets/images/premium-articles/im8.jpg'
    }
  ];
  constructor() { }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | null {
    return this.articles.find(article => article.id === id) ?? null;
  }
}
