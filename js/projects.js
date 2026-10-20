const PROJECTS = [
  {
    id: "p8",
    title: {
      en: "Home Lab & Network",
      es: "Homelab y red casera",
      pt: "Homelab e rede doméstica",
    },
    description: {
      en: "Homelab in progress: fiber into a modem, then a Ruijie Wi‑Fi 6 AX3000 router and a Cudy switch that feed my PC and a screenless MacBook. On that machine, I host game servers, my own apps, and a safe testing environment; Pi-hole filters ads for the whole network; Proxmox and Docker Compose handle operation and orchestration.",
      es: "Homelab en marcha: fibra a un módem, después un router Ruijie Wi‑Fi 6 AX3000 y un switch Cudy que alimentan mi PC y una MacBook sin pantalla. En esa máquina, se logró alojar servidores de juegos, apps propias y un entorno para probar con seguridad; Pi-hole filtra publicidad para toda la red; Proxmox y Docker Compose permiten el funcionamiento y la orquestación.",
      pt: "Homelab em andamento: fibra num modem, depois um roteador Ruijie Wi‑Fi 6 AX3000 e um switch Cudy que alimentam meu PC e um MacBook sem tela. Nessa máquina, passei a hospedar servidores de jogos, apps próprias e um ambiente para testar com segurança; o Pi-hole filtra anúncios para toda a rede; Proxmox e Docker Compose permitem o funcionamento e a orquestração.",
    },
    details: {
      en: [
        "The chain starts with fiber into a modem, then a Ruijie Wi‑Fi 6 AX3000 router, and a four‑port Cudy switch. That switch hands out wired LAN to my personal PC and to a server laptop whose built‑in display no longer works; the laptop runs headless in a corner.",
        "Proxmox on the laptop hosts VMs and workloads. Services are orchestrated with Docker Compose. Nginx acts as a reverse proxy in front of what I publish. Pi-hole filters ads at the network level, and Tailscale with split DNS lets me reach the lab remotely without exposing every port.",
        "Game servers, small apps I build myself, and an isolated space to try ideas safely all run on this stack. It is a hands‑on home project I plan to keep expanding as hardware and requirements grow.",
      ],
      es: [
        "La cadena arranca con fibra óptica a un módem, sigue un router Ruijie Wi‑Fi 6 AX3000 y un switch Cudy de cuatro puertos. Ese switch reparte LAN por cable a mi PC personal y a una laptop servidor cuya pantalla integrada ya no funciona; la laptop corre sin monitor en un rincón.",
        "Proxmox en esa laptop aloja VMs y cargas. Los servicios se orquestan con Docker Compose. Nginx hace de proxy inverso de lo que publico. Pi-hole filtra publicidad a nivel de red, y Tailscale con DNS repartido me permite llegar al lab desde afuera sin abrir todos los puertos.",
        "Servidores de juegos, aplicaciones propias y un espacio aislado para probar ideas con seguridad corren en este stack. Es un proyecto casero manual que quiero seguir ampliando según el hardware y lo que necesite.",
      ],
      pt: [
        "A cadeia começa com fibra óptica num modem, segue um roteador Ruijie Wi‑Fi 6 AX3000 e um switch Cudy de quatro portas. Esse switch distribui LAN cabeada ao meu PC pessoal e a um notebook servidor cuja tela integrada não funciona mais; o notebook roda sem monitor num canto.",
        "O Proxmox nesse notebook hospeda VMs e cargas. Os serviços são orquestrados com Docker Compose. O Nginx atua como proxy reverso do que publico. O Pi-hole filtra anúncios em nível de rede, e o Tailscale com DNS repartido me deixa chegar ao lab de fora sem expor todas as portas.",
        "Servidores de jogos, aplicativos próprios e um espaço isolado para testar ideias com segurança rodam nessa pilha. É um projeto doméstico feito na mão que pretendo continuar expandindo conforme o hardware e as necessidades crescem.",
      ],
    },
    techs: [
      { name: "Proxmox" },
      { name: "Docker Compose" },
      { name: "Pi-hole" },
      { name: "Nginx" },
      { name: "Tailscale" },
      { name: "Docker", filter: true },
    ],
    github: "",
    demo: "",
    video: "",
    start: "Sep 2026",
    end: "",
    image: "assets/images/homelab.webp",
  },
  {
    id: "p2",
    title: {
      en: "Travel Database & Business Intelligence Platform",
      es: "Base de datos de viajes y plataforma de inteligencia de negocios",
      pt: "Banco de dados de viagens e plataforma de inteligência de negócios",
    },
    description: {
      en: "This project implements a comprehensive Business Intelligence system for a travel agency offering tourism services, developed as an integrator project for UTN's database class. A denormalized master table is normalized into a transactional schema and then loaded into a star schema with ten analytical views.",
      es: "Este proyecto implementa un sistema de inteligencia de negocios para una agencia de viajes, desarrollado como proyecto integrador de la materia de bases de datos de la UTN. Una tabla maestra desnormalizada se normaliza en un esquema transaccional y después se carga en un esquema estrella con diez vistas analíticas.",
      pt: "Este projeto implementa um sistema de inteligência de negócios para uma agência de viagens, desenvolvido como projeto integrador da disciplina de banco de dados da UTN. Uma tabela mestra desnormalizada é normalizada num esquema transacional e depois carregada num esquema estrela com dez visões analíticas.",
    },
    details: {
      en: [
        "A travel agency sells flights, lodging, and excursions outright, and also quotes custom trips. Around that sit clients, agents, agencies, and the sales channel (mail, phone, in person, or WhatsApp), plus the operations: sales, quote requests, proposals, and satisfaction surveys.",
        "The source is one denormalized master table of more than 700,000 records. The first script turns it into a transactional schema: reference tables, operations, the flight, lodging, and excursion lines of each sale or proposal, and the catalogs of flights, stays, rooms, and excursions. Inconsistencies in the master data, such as duplicated IDs or inverted dates, are left as they arrived.",
        "A second script builds the warehouse on SQL Server. Dimensions cover time, client, agent, age band, season, service type, sales channel, proposal status, and survey aspect. Fact tables record sales, proposals, quote requests, and survey scores. Age bands come from the date of birth, seasons follow the southern hemisphere, and the year is split into three four-month blocks.",
        "Ten views sit on that star schema: average ticket by age band, channel, and month; share of revenue by service type; request rankings by season; how many days ahead a trip is requested; proposal acceptance rate; average quote by season; days between a request and its proposal; gap between the estimated budget and the final amount; best and worst rated aspects; and average satisfaction per agent.",
      ],
      es: [
        "Una agencia vende vuelos, hospedajes y excursiones de forma directa, y también cotiza viajes a medida. Alrededor están los clientes, los agentes, las agencias y el canal de venta (mail, teléfono, presencial o WhatsApp), y las operaciones: ventas, solicitudes de cotización, propuestas y encuestas de satisfacción.",
        "El origen es una tabla maestra desnormalizada, de más de 700.000 registros. El primer script la pasa a un esquema transaccional: tablas de referencia, operaciones, el detalle de vuelos, hospedajes y excursiones de cada venta o propuesta, y los catálogos de vuelos, hospedajes, habitaciones y excursiones. Las inconsistencias de la maestra, como DNI duplicados o fechas invertidas, quedan como vinieron.",
        "El segundo script arma el almacén en SQL Server. Las dimensiones cubren tiempo, cliente, agente, rango etario, temporada, tipo de servicio, canal de venta, estado de la propuesta y aspecto de la encuesta. Las tablas de hechos registran ventas, propuestas, solicitudes y puntajes. El rango etario sale de la fecha de nacimiento, las temporadas siguen el hemisferio sur y el año se parte en tres bloques de cuatro meses.",
        "Sobre ese esquema estrella hay diez vistas: ticket promedio por rango etario, canal y mes; porcentaje de facturación por tipo de servicio; ranking de solicitudes por temporada; días de anticipación del viaje; tasa de aceptación de propuestas; cotización promedio por temporada; días entre la solicitud y la propuesta; desvío entre el presupuesto estimado y el importe final; aspectos mejor y peor valorados; y satisfacción promedio por agente.",
      ],
      pt: [
        "Uma agência vende voos, hospedagens e excursões de forma direta, e também cota viagens sob medida. Em volta ficam os clientes, os agentes, as agências e o canal de venda (e-mail, telefone, presencial ou WhatsApp), e as operações: vendas, pedidos de cotação, propostas e pesquisas de satisfação.",
        "A origem é uma tabela mestra desnormalizada, com mais de 700.000 registros. O primeiro script a transforma num esquema transacional: tabelas de referência, operações, o detalhe de voos, hospedagens e excursões de cada venda ou proposta, e os catálogos de voos, hospedagens, quartos e excursões. As inconsistências da mestra, como documentos duplicados ou datas invertidas, ficam como chegaram.",
        "O segundo script monta o armazém no SQL Server. As dimensões cobrem tempo, cliente, agente, faixa etária, temporada, tipo de serviço, canal de venda, estado da proposta e aspecto da pesquisa. As tabelas de fatos registram vendas, propostas, pedidos e notas. A faixa etária sai da data de nascimento, as temporadas seguem o hemisfério sul e o ano se divide em três blocos de quatro meses.",
        "Sobre esse esquema estrela há dez visões: ticket médio por faixa etária, canal e mês; percentual de faturamento por tipo de serviço; ranking de pedidos por temporada; dias de antecedência da viagem; taxa de aceitação de propostas; cotação média por temporada; dias entre o pedido e a proposta; desvio entre o orçamento estimado e o valor final; aspectos melhor e pior avaliados; e satisfação média por agente.",
      ],
    },
    techs: [
      { name: "SQL", filter: true },
      { name: "T-SQL" },
      { name: "Microsoft SQL Server" },
    ],
    github: "https://github.com/josephmansilla/tp-agencia-viajes-BI-bbdd-1c-2026",
    demo: "",
    video: "",
    start: "Mar 2026",
    end: "Jul 2026",
    image: "assets/images/octopus.webp",
  },
  {
    id: "p1",
    title: {
      en: "Operating System from Scratch",
      es: "Sistema operativo desde cero",
      pt: "Sistema operacional do zero",
    },
    description: {
      en: "This integrator project was developed throughout UTN's Operating Systems class, focusing on the simulation of a distributed operating system. Kernel, CPU, memory, and IO run as separate modules and talk over HTTP, with memory in charge of page tables and swap.",
      es: "Este proyecto integrador se desarrolló a lo largo de la materia Sistemas Operativos de la UTN y se centra en la simulación de un sistema operativo distribuido. Kernel, CPU, memoria y E/S corren como módulos separados y se hablan por HTTP, y la memoria se encarga de las tablas de páginas y del swap.",
      pt: "Este projeto integrador foi desenvolvido ao longo da disciplina de Sistemas Operacionais da UTN e se concentra na simulação de um sistema operacional distribuído. Kernel, CPU, memória e E/S rodam como módulos separados e se falam por HTTP, e a memória cuida das tabelas de páginas e do swap.",
    },
    details: {
      en: [
        "The work of the operating system is split across four modules that talk to each other over HTTP: Kernel, CPU, Memory, and IO. The Kernel schedules processes in the short, medium, and long term and holds the connections to the other three. The CPU interprets instructions and keeps a TLB and a page cache. IO stands in for a device and leaves the process waiting while an operation runs.",
        "Memory owns user space, the page tables, and swap. I built that module. It gives each process its address space, keeps the page tables, and moves pages out to swap when they have to leave main memory. The Kernel and the CPU reach it through the same HTTP API.",
        "The modules run concurrently in Go. Scheduling, instruction execution, and device operations proceed at the same time, and Memory answers reads and writes without mixing one process's address space with another's.",
      ],
      es: [
        "El trabajo del sistema operativo se reparte en cuatro módulos que se hablan por HTTP: Kernel, CPU, Memoria y E/S. El Kernel planifica procesos a corto, mediano y largo plazo y mantiene las conexiones con los otros tres. La CPU interpreta instrucciones y conserva una TLB y una caché de páginas. E/S simula un dispositivo y deja al proceso en espera mientras dura la operación.",
        "Memoria administra el espacio de usuario, las tablas de páginas y el swap. Me encargué de ese módulo. Asigna el espacio de cada proceso, mantiene las tablas de páginas y mueve páginas a swap cuando tienen que salir de la memoria principal. El Kernel y la CPU llegan a ella por la misma API HTTP.",
        "Los módulos corren a la vez, en Go. La planificación, la ejecución de instrucciones y las operaciones de dispositivo avanzan en paralelo, y Memoria responde lecturas y escrituras sin mezclar el espacio de un proceso con el de otro.",
      ],
      pt: [
        "O trabalho do sistema operacional se divide em quatro módulos que se falam por HTTP: Kernel, CPU, Memória e E/S. O Kernel escalona processos no curto, médio e longo prazo e mantém as conexões com os outros três. A CPU interpreta instruções e guarda uma TLB e um cache de páginas. E/S simula um dispositivo e deixa o processo esperando enquanto a operação dura.",
        "Memória administra o espaço de usuário, as tabelas de páginas e o swap. Fiquei com esse módulo. Ele entrega o espaço de cada processo, mantém as tabelas de páginas e move páginas para o swap quando elas têm de sair da memória principal. O Kernel e a CPU chegam nela pela mesma API HTTP.",
        "Os módulos rodam ao mesmo tempo, em Go. O escalonamento, a execução de instruções e as operações de dispositivo avançam em paralelo, e a Memória responde leituras e escritas sem misturar o espaço de um processo com o de outro.",
      ],
    },
    techs: [
      { name: "Go", filter: true },
      { name: "Multithreading" },
      { name: "Concurrency" },
      { name: "Git", card: false },
    ],
    github: "https://github.com/josephmansilla/tp-sistemas-operativos-1c-2025",
    demo: "",
    video: "https://www.youtube.com/watch?v=twMAzy64x6Q",
    start: "Apr 2025",
    end: "Jul 2025",
    image: "assets/images/boca-gopher.png",
  },
  {
    id: "p4",
    title: {
      en: "Full-Stack Medical Appointment Platform",
      es: "Plataforma full-stack de turnos médicos",
      pt: "Plataforma full-stack de consultas médicas",
    },
    description: {
      en: "This project is an end-to-end software application developed as an integrator project for UTN's Software Engineering class. Covering the entire application lifecycle: core domain modeling and database architecture to front-end development, containerization, cloud deployment, and automated testing.",
      es: "Aplicación de punta a punta desarrollada como proyecto integrador de Ingeniería de Software de la UTN. Cubre el ciclo completo: modelo de dominio y base de datos, frontend, contenedores, despliegue en la nube y pruebas automáticas.",
      pt: "Aplicação de ponta a ponta desenvolvida como projeto integrador de Engenharia de Software da UTN. Cobre o ciclo completo: modelo de domínio e banco de dados, frontend, contêineres, publicação na nuvem e testes automáticos.",
    },
    details: {
      en: [
        "A patient looks up a doctor or a service and books a slot. Before the booking is confirmed, the system reads the patient's health plan and shows whether that practice is fully covered, partially covered, or not covered, together with the copay. Staff manage sites, schedules, plans, and the coverage rules tied to each specialty and practice.",
        "A doctor's week is a set of hours per site. A scheduled job turns that availability into bookable slots. A slot moves from available to reserved, then to confirmed, cancelled, or completed. Cancelling asks for a reason and the role of whoever requested it, and it has to happen at least one hour before the visit. Two people cannot take the same slot: the write checks the state and commits only if it is still free.",
        "Booking is a three-step wizard: search by doctor name or by service, pick a date that still has room, then confirm the site, the time, and the copay. My Appointments lists upcoming visits and the last three months, and cancellation is available from there. A reminder goes out 24 hours before the visit.",
        "The API is Express, documented with OpenAPI, with Zod on the payloads and MongoDB behind repositories. Passwords are hashed and sessions use JWT. The React app is one page, usable from the keyboard, with ARIA labels. Docker images for the API and the Nginx frontend run on Oracle Cloud, and Playwright covers the booking wizard and the admin panel in CI.",
      ],
      es: [
        "Un paciente busca un médico o un servicio y reserva un turno. Antes de confirmar, el sistema lee el plan de su obra social y muestra si la práctica tiene cobertura total, parcial o ninguna, junto con el copago. El personal administra sedes, agendas, planes y las reglas de cobertura de cada especialidad y práctica.",
        "La semana de un médico es un conjunto de horarios por sede. Una tarea programada convierte esa disponibilidad en turnos reservables. Un turno pasa de disponible a reservado, y después a confirmado, cancelado o realizado. Cancelar pide un motivo y el rol de quien lo solicita, y tiene que hacerse al menos una hora antes. Dos personas no pueden tomar el mismo hueco: la escritura comprueba el estado y confirma solo si sigue libre.",
        "La reserva es un asistente de tres pasos: búsqueda por nombre de médico o por servicio, una fecha que todavía tenga lugar, y la confirmación de sede, horario y copago. Mis Turnos lista las próximas visitas y las de los últimos tres meses, y desde ahí se cancela. Un recordatorio sale 24 horas antes del turno.",
        "La API es Express, documentada con OpenAPI, con Zod en los payloads y MongoDB detrás de repositorios. Las contraseñas van hasheadas y las sesiones usan JWT. La aplicación de React es una sola página, usable con teclado y con etiquetas ARIA. Las imágenes Docker de la API y del frontend en Nginx corren en Oracle Cloud, y Playwright cubre el asistente de reserva y el panel de administración en la integración continua.",
      ],
      pt: [
        "Um paciente procura um médico ou um serviço e reserva um horário. Antes de confirmar, o sistema lê o plano de saúde e mostra se a prática tem cobertura total, parcial ou nenhuma, junto com o copagamento. A equipe administra sedes, agendas, planos e as regras de cobertura de cada especialidade e prática.",
        "A semana de um médico é um conjunto de horários por sede. Uma tarefa agendada transforma essa disponibilidade em horários reserváveis. Um horário passa de disponível a reservado, e depois a confirmado, cancelado ou realizado. Cancelar pede um motivo e o papel de quem solicita, e tem de ser feito pelo menos uma hora antes. Duas pessoas não podem pegar o mesmo horário: a escrita confere o estado e confirma só se ele ainda estiver livre.",
        "A reserva é um assistente de três passos: busca por nome do médico ou por serviço, uma data que ainda tenha vaga, e a confirmação de sede, horário e copagamento. Meus horários lista as próximas consultas e as dos últimos três meses, e o cancelamento fica ali. Um lembrete sai 24 horas antes da consulta.",
        "A API é Express, documentada com OpenAPI, com Zod nos payloads e MongoDB atrás de repositórios. As senhas são hasheadas e as sessões usam JWT. A aplicação React é uma única página, usável pelo teclado e com rótulos ARIA. As imagens Docker da API e do frontend no Nginx rodam na Oracle Cloud, e o Playwright cobre o assistente de reserva e o painel de administração na integração contínua.",
      ],
    },
    techs: [
      { name: "JavaScript", filter: true },
      { name: "MERN"},
      { name: "MongoDB" },
      { name: "Express.js", card: false },
      { name: "React", filter: true },
      { name: "Node.js" , card: false},
      { name: "CSS", card: false },
      { name: "HTML", card: false },
      { name: "JWT", card: false },
      { name: "Mongoose", card: false },
      { name: "Oracle Cloud" },
      { name: "Nginx"},
      { name: "Docker", filter: true },
      { name: "Swagger", card: false },
      { name: "DuckDns", card: false },
      { name: "Docker Compose", card: false },
      { name: "Portainer" },
      { name: "Git", card: false },
    ],
    github: "https://github.com/josephmansilla/tp-sweet-medical-dds-1c-2026",
    demo: "https://sweet-medical-2026-g1.duckdns.org/",
    video: "",
    start: "Apr 2026",
    end: "Jul 2026",
    image: "assets/images/sweetmedical.webp",
  },
  {
    id: "p3",
    title: {
      en: "Full-Stack Incident Management Web Application",
      es: "Aplicación web full-stack de gestión de incidentes",
      pt: "Aplicação web full-stack de gestão de incidentes",
    },
    description: {
      en: "MetaMapa is a project developed as an integrator project for UTN's System Design class. It is a microservices-based distributed platform for collaborative mapping management designed to enhance collective intelligence. Developed with Java 17 and Spring.",
      es: "MetaMapa es el proyecto integrador de la materia Diseño de Sistemas de la UTN. Es una plataforma distribuida de microservicios para la gestión colaborativa de mapas, pensada para mejorar la inteligencia colectiva. Desarrollada con Java 17 y Spring.",
      pt: "MetaMapa é o projeto integrador da disciplina de Projeto de Sistemas da UTN. É uma plataforma distribuída de microsserviços para a gestão colaborativa de mapas, pensada para melhorar a inteligência coletiva. Desenvolvida com Java 17 e Spring.",
    },
    details: {
      en: [
        "Communities, NGOs, and public agencies record events on a map: a fire, a contaminated area, a flood, a disappearance. Anyone can browse the map without an account. A contributor, anonymous or registered, posts a fact with text and media and can edit it for seven days. An administrator moderates collections, deletion requests, and the consensus rule.",
        "Facts arrive from three kinds of sources. A static source parses CSV files of more than 10,000 rows. A dynamic source stores what people submit. A proxy source adapts external REST APIs into the same fact shape. A collection pulls from several sources and keeps or drops facts with a configurable rule: simple majority, absolute majority, multiple mentions, or none.",
        "A normalizer asks a sentence-transformer model whether a new title is too close to one already stored. Similarity at or above 0.7 counts as a duplicate. A deletion request needs a written justification of at least 500 characters, and an anti-spam filter sits beside the moderation queue. Statistics export by province, category, and spam level, as JSON or CSV.",
        "The backend is a set of Spring Boot services behind a gateway: JWT authentication, the three sources, an aggregator for collections and consensus, and a statistics service. The browser UI is Thymeleaf. Services call each other with a non-blocking HTTP client, and each one runs in its own Docker container.",
      ],
      es: [
        "Comunidades, ONG y organismos públicos cargan hechos en un mapa: un incendio, una zona contaminada, una inundación, una desaparición. Cualquiera puede mirar el mapa sin cuenta. Un contribuyente, anónimo o registrado, publica un hecho con texto y medios y puede editarlo durante siete días. Un administrador modera colecciones, pedidos de baja y la regla de consenso.",
        "Los hechos entran por tres tipos de fuente. La estática lee CSV de más de 10.000 filas. La dinámica guarda lo que cargan las personas. El proxy adapta APIs REST externas al mismo formato. Una colección junta varias fuentes y conserva o descarta hechos según una regla configurable: mayoría simple, mayoría absoluta, menciones múltiples o ninguna.",
        "Un normalizador consulta un modelo de embeddings para ver si el título nuevo se parece demasiado a uno ya guardado. Una similitud de 0,7 o más cuenta como duplicado. Un pedido de eliminación exige una justificación de al menos 500 caracteres, y un filtro anti-spam acompaña la cola de moderación. Las estadísticas se exportan por provincia, categoría y nivel de spam, en JSON o CSV.",
        "El backend son servicios Spring Boot detrás de un gateway: autenticación con JWT, las tres fuentes, un agregador de colecciones y consenso, y un servicio de estadísticas. La interfaz es Thymeleaf. Los servicios se llaman entre sí con un cliente HTTP no bloqueante, y cada uno corre en su propio contenedor Docker.",
      ],
      pt: [
        "Comunidades, ONGs e órgãos públicos registram eventos num mapa: um incêndio, uma área contaminada, uma inundação, um desaparecimento. Qualquer pessoa pode ver o mapa sem conta. Um contribuidor, anônimo ou registrado, publica um fato com texto e mídia e pode editá-lo por sete dias. Um administrador modera coleções, pedidos de exclusão e a regra de consenso.",
        "Os fatos entram por três tipos de fonte. A estática lê CSV com mais de 10.000 linhas. A dinâmica guarda o que as pessoas enviam. O proxy adapta APIs REST externas ao mesmo formato. Uma coleção junta várias fontes e mantém ou descarta fatos segundo uma regra configurável: maioria simples, maioria absoluta, menções múltiplas ou nenhuma.",
        "Um normalizador consulta um modelo de embeddings para ver se o título novo está perto demais de um já gravado. Similaridade de 0,7 ou mais conta como duplicata. Um pedido de exclusão exige uma justificativa de pelo menos 500 caracteres, e um filtro anti-spam acompanha a fila de moderação. As estatísticas saem por província, categoria e nível de spam, em JSON ou CSV.",
        "O backend é um conjunto de serviços Spring Boot atrás de um gateway: autenticação com JWT, as três fontes, um agregador de coleções e consenso, e um serviço de estatísticas. A interface é Thymeleaf. Os serviços se chamam com um cliente HTTP não bloqueante, e cada um roda no próprio contêiner Docker.",
      ],
    },
    techs: [
      { name: "Java", filter: true },
      { name: "SpringBoot", filter: true },
      { name: "MySQL" },
      { name: "Docker", filter: true },
      { name: "AWS" },
      { name: "SQL", filter: true, card: false },
      { name: "JavaScript", filter: true, card: false },
      { name: "Hibernate", card: true },
      { name: "Maven"},
      { name: "Docker Compose" },
      { name: "CSS", card: false },
      { name: "HTML", card: false },
      { name: "Git", card: false },
    ],
    github: "https://github.com/josephmansilla/tp-dsi-full-stack-app-2025",
    demo: "",
    video: "",
    start: "Apr 2025",
    end: "Dec 2025",
    image: "assets/images/metamapa.webp",
  },
  {
    id: "p6",
    title: {
      en: "Object to XML parser",
      es: "Objeto a XML parser",
      pt: "Objeto a XML parser",
    },
    description: {
      en: "A Ruby framework from UTN's Advanced Programming Techniques course. It builds XML with a small internal DSL and serializes any object through annotations, using metaprogramming instead of an external parser.",
      es: "Framework en Ruby de Técnicas Avanzadas de Programación de la UTN. Arma XML con un DSL interno y serializa cualquier objeto mediante anotaciones, con metaprogramación y sin un parser externo.",
      pt: "Framework em Ruby de Técnicas Avançadas de Programação da UTN. Monta XML com uma DSL interna e serializa qualquer objeto por meio de anotações, com metaprogramação e sem um parser externo.",
    },
    details: {
      en: [
        "Document.new runs its block with instance_eval. Unknown messages become nested tags, and keyword arguments become attributes, so a document reads like the XML it prints.",
        "Document.serialize inspects any instance. The class name is the root tag, primitives with a getter become attributes, arrays become one child tag per element, and nested objects are walked recursively.",
        "Annotations are declared with a ✨Name✨ marker just above a class, method, or accessor. method_added and inherited hooks bind the pending annotation to the next definition, including generated attr_reader and attr_accessor.",
        "Label, Ignore, Inline, Custom, Extra, and Expand change names, drop fields, flatten values, or replace the default strategy. Validate, Default, and Mask were added later without touching the serializer core. Mask keeps only the last N characters of a sensitive value.",
      ],
      es: [
        "Document.new ejecuta su bloque con instance_eval. Los mensajes desconocidos se vuelven etiquetas anidadas y los argumentos con nombre, atributos, así que el documento se lee parecido al XML que imprime.",
        "Document.serialize inspecciona cualquier instancia. El nombre de la clase es la etiqueta raíz, los primitivos con getter pasan a atributos, los arrays generan una etiqueta hija por elemento y los objetos anidados se recorren de forma recursiva.",
        "Las anotaciones se declaran con un marcador ✨Nombre✨ justo arriba de una clase, un método o un accesor. Los hooks method_added e inherited enganchan la anotación pendiente a la definición siguiente, incluidos attr_reader y attr_accessor generados.",
        "Label, Ignore, Inline, Custom, Extra y Expand cambian nombres, omiten campos, aplanan valores o reemplazan la estrategia por defecto. Validate, Default y Mask se sumaron después sin tocar el núcleo del serializador. Mask deja solo los últimos N caracteres de un dato sensible.",
      ],
      pt: [
        "Document.new executa o bloco com instance_eval. Mensagens desconhecidas viram tags aninhadas e os argumentos nomeados viram atributos, então o documento se lê parecido com o XML que imprime.",
        "Document.serialize inspeciona qualquer instância. O nome da classe é a tag raiz, primitivos com getter viram atributos, arrays geram uma tag filha por elemento e objetos aninhados são percorridos de forma recursiva.",
        "As anotações são declaradas com um marcador ✨Nome✨ logo acima de uma classe, um método ou um acessor. Os hooks method_added e inherited ligam a anotação pendente à definição seguinte, inclusive attr_reader e attr_accessor gerados.",
        "Label, Ignore, Inline, Custom, Extra e Expand mudam nomes, omitem campos, achatam valores ou substituem a estratégia padrão. Validate, Default e Mask entraram depois sem mexer no núcleo do serializador. Mask deixa só os últimos N caracteres de um dado sensível.",
      ],
    },
    techs: [
      { name: "Ruby", filter: true },
      { name: "Git", card: false },
    ],
    github: "https://github.com/josephmansilla/cursada-tadp-2025/tree/main/xml-parser",
    demo: "",
    video: "",
    start: "Aug 2025",
    end: "Sep 2025",
    image: "assets/images/xml.svg",
  },
  {
    id: "p5",
    title: {
      en: "Object-Functional Dungeons",
      es: "Object-Functional Dungeons",
      pt: "Object-Functional Dungeons",
    },
    description: {
      en: "A turn-based dungeon crawler in Scala 3, built as a group project for UTN's Advanced Programming Techniques course. A party of heroes crosses a graph of rooms, and every door, trap, and fight is an immutable state transition.",
      es: "Simulador de mazmorras por turnos en Scala 3, proyecto grupal de Técnicas Avanzadas de Programación de la UTN. Un grupo de héroes recorre un grafo de habitaciones, y cada puerta, trampa y combate es una transición de estado inmutable.",
      pt: "Simulador de masmorras por turnos em Scala 3, projeto em grupo de Técnicas Avançadas de Programação da UTN. Um grupo de heróis percorre um grafo de salas, e cada porta, armadilha e combate é uma transição de estado imutável.",
    },
    details: {
      en: [
        "Heroes, the party, doors, and rooms are case classes. Opening a door, leveling up, or losing health never mutates the old state: each step returns a new copy.",
        "Jobs and door obstacles are sealed traits, resolved with exhaustive pattern matching. A warrior's force grows with level, a thief picks locks or spots hidden doors, and a mage must know the exact spell a door was sealed with. A thief skilled enough can open any door.",
        "After a door, the room applies a pipeline of situations: shared loot, darts that hit everyone, a lion trap that removes the slowest hero, or a stranger who joins the party or fights it to the death.",
        "The leader chooses the next unopened door. The heroic leader takes the newest one, the orderly leader the oldest, and the seer simulates each branch and keeps the one with the best score: living heroes, deaths, chest size, and highest level.",
        "The expedition stops at an exit or when no path remains, and the outcome is a Try inside a CalabozoRecorrido. The same model picks the best candidate party and the minimum level-up, capped at 20, that a party needs before it can clear the dungeon. Covered with ScalaTest.",
      ],
      es: [
        "Héroes, grupo, puertas y habitaciones son case classes. Abrir una puerta, subir de nivel o perder vida no muta el estado anterior: cada paso devuelve una copia nueva.",
        "Trabajos y obstáculos de las puertas son sealed traits, resueltos con pattern matching exhaustivo. La fuerza del guerrero crece con el nivel, el ladrón fuerza cerraduras o detecta puertas escondidas, y el mago tiene que conocer el hechizo exacto con el que se selló una puerta. Un ladrón con habilidad suficiente abre cualquiera.",
        "Después de una puerta, la habitación aplica una secuencia de situaciones: botín compartido, dardos que dañan a todos, una trampa de leones que se lleva al héroe más lento, o un extraño que se suma al grupo o pelea a muerte.",
        "El líder elige la siguiente puerta sin abrir. El heroico toma la más nueva, el ordenado la más antigua, y el vidente simula cada rama y se queda con la de mejor puntaje: héroes vivos, muertes, tamaño del cofre y nivel más alto.",
        "La expedición termina en una salida o cuando no quedan caminos, y el resultado es un Try dentro de un CalabozoRecorrido. El mismo modelo elige el mejor grupo candidato y el mínimo de niveles, con tope de 20, que un grupo necesita para conquistar la mazmorra. Cubierto con ScalaTest.",
      ],
      pt: [
        "Heróis, grupo, portas e salas são case classes. Abrir uma porta, subir de nível ou perder vida não altera o estado anterior: cada passo devolve uma cópia nova.",
        "Trabalhos e obstáculos das portas são sealed traits, resolvidos com pattern matching exaustivo. A força do guerreiro cresce com o nível, o ladrão força fechaduras ou detecta portas escondidas, e o mago precisa conhecer o feitiço exato com que uma porta foi selada. Um ladrão habilidoso o bastante abre qualquer uma.",
        "Depois de uma porta, a sala aplica uma sequência de situações: tesouro compartilhado, dardos que ferem a todos, uma armadilha de leões que leva o herói mais lento, ou um estranho que entra no grupo ou luta até a morte.",
        "O líder escolhe a próxima porta ainda fechada. O heroico pega a mais nova, o ordenado a mais antiga, e o vidente simula cada ramo e fica com o de melhor pontuação: heróis vivos, mortes, tamanho do baú e nível mais alto.",
        "A expedição termina numa saída ou quando não restam caminhos, e o resultado é um Try dentro de um CalabozoRecorrido. O mesmo modelo escolhe o melhor grupo candidato e o mínimo de níveis, com teto de 20, que um grupo precisa para concluir a masmorra. Coberto com ScalaTest.",
      ],
    },
    techs: [
      { name: "Scala", filter: true },
      { name: "Git", card: false },
    ],
    github: "https://github.com/josephmansilla/cursada-tadp-2025/tree/main/dungeons",
    demo: "",
    video: "",
    start: "Oct 2025",
    end: "Nov 2025",
    image: "assets/images/dungeon.webp",
  },
  {
    id: "p7",
    title: {
      en: "MicroParser",
      es: "MicroParser",
      pt: "MicroParser",
    },
    description: {
      en: "A bottom-up LALR(1) front end for the Micro language, built with Flex and Bison for UTN's Syntax and Semantics of Programming Languages course. It scans, parses, and runs small integer programs.",
      es: "Front end ascendente LALR(1) para el lenguaje Micro, hecho con Flex y Bison para Sintaxis y Semántica de los Lenguajes de la UTN. Analiza e interpreta programas chicos de enteros.",
      pt: "Front end ascendente LALR(1) para a linguagem Micro, feito com Flex e Bison para Sintaxe e Semântica das Linguagens da UTN. Analisa e interpreta programas pequenos de inteiros.",
    },
    details: {
      en: [
        "Flex turns the source into tokens and reports unknown characters and identifiers longer than 32 characters. Bison parses a context-free grammar and gives * and / higher precedence than + and -.",
        "A symbol table keeps integer identifiers. During parsing the program assigns values, rejects division by zero, and runs the leer and escribir statements.",
        "A syntax error names the line and the token that caused it. If any lexical or syntax error is still open when the program block ends, compilation aborts instead of reporting success.",
        "The repository also includes a recursive-descent parser in C for the same language, plus .m programs for valid code, integer division, overlong identifiers, and combined lexical and syntax errors.",
      ],
      es: [
        "Flex convierte el fuente en tokens y reporta caracteres desconocidos e identificadores de más de 32 caracteres. Bison parsea una gramática independiente de contexto y le da a * y / más precedencia que a + y -.",
        "Una tabla de símbolos guarda los identificadores enteros. Durante el análisis el programa asigna valores, rechaza la división por cero y ejecuta las sentencias leer y escribir.",
        "Un error sintáctico indica la línea y el token que lo provocó. Si al cerrar el bloque del programa queda algún error léxico o sintáctico, la compilación aborta en lugar de informar éxito.",
        "El repositorio también incluye un parser descendente recursivo en C para el mismo lenguaje, más programas .m de código válido, división entera, identificadores demasiado largos y errores léxicos y sintácticos combinados.",
      ],
      pt: [
        "O Flex transforma o fonte em tokens e reporta caracteres desconhecidos e identificadores com mais de 32 caracteres. O Bison analisa uma gramática livre de contexto e dá a * e / precedência maior que a + e -.",
        "Uma tabela de símbolos guarda os identificadores inteiros. Durante a análise o programa atribui valores, rejeita a divisão por zero e executa as sentenças leer e escribir.",
        "Um erro sintático indica a linha e o token que o causou. Se ao fechar o bloco do programa ainda houver algum erro léxico ou sintático, a compilação aborta em vez de informar sucesso.",
        "O repositório também inclui um parser descendente recursivo em C para a mesma linguagem, além de programas .m de código válido, divisão inteira, identificadores longos demais e erros léxicos e sintáticos combinados.",
      ],
    },
    techs: [
      { name: "C", filter: true },
      { name: "Flex" },
      { name: "Bison" },
      { name: "Git", card: false },
    ],
    github: "https://github.com/josephmansilla/tp-compilador-sysl-2024",
    demo: "",
    video: "https://www.youtube.com/watch?v=zgRLkn-VvhM",
    start: "Aug 2024",
    end: "Dec 2024",
    image: "assets/images/yacc.webp",
  },
];


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

var MONTHS = {
  Jan: { en: "Jan", es: "Ene", pt: "Jan" },
  Feb: { en: "Feb", es: "Feb", pt: "Fev" },
  Mar: { en: "Mar", es: "Mar", pt: "Mar" },
  Apr: { en: "Apr", es: "Abr", pt: "Abr" },
  May: { en: "May", es: "May", pt: "Mai" },
  Jun: { en: "Jun", es: "Jun", pt: "Jun" },
  Jul: { en: "Jul", es: "Jul", pt: "Jul" },
  Aug: { en: "Aug", es: "Ago", pt: "Ago" },
  Sep: { en: "Sep", es: "Sep", pt: "Set" },
  Oct: { en: "Oct", es: "Oct", pt: "Out" },
  Nov: { en: "Nov", es: "Nov", pt: "Nov" },
  Dec: { en: "Dec", es: "Dic", pt: "Dez" },
};

function localizeDate(value) {
  if (!value) return "";
  return String(value).replace(/^[A-Za-z]{3}/, function (month) {
    return MONTHS[month] ? L(MONTHS[month]) : month;
  });
}

function dateRange(project) {
  var start = localizeDate(project.start);
  var end = project.end
    ? localizeDate(project.end)
    : project.start
      ? t("time.current")
      : "";
  if (start && end) return start + " – " + end;
  return start || end || "";
}

function youtubeId(url) {
  if (!url) return "";
  const match = String(url).match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
}

var FILTER_ORDER = ["Go", "Java", "JavaScript", "Scala", "Ruby", "C", "SQL", "React", "SpringBoot", "Docker"];
var STACK_ORDER = ["Java", "JavaScript", "SQL", "Go", "Scala", "Ruby", "C", "Haskell", "Python"];
var STACK_ALWAYS = { Haskell: true, Python: true };
var CARD_CHIP_LIMIT = 6;  

function techName(tech) {
  return typeof tech === "string" ? tech : tech.name;
}

function chipList(items) {
  return items
    .map(function (tech) {
      return '<li class="chip">' + escapeHtml(techName(tech)) + "</li>";
    })
    .join("");
}

function cardChipHtml(project) {
  var visible = project.techs.filter(function (tech) {
    return typeof tech !== "object" || tech.card !== false;
  });
  var shown = visible.slice(0, CARD_CHIP_LIMIT);
  var rest = visible.slice(CARD_CHIP_LIMIT);
  var html = shown
    .map(function (tech) {
      return '<li class="chip">' + escapeHtml(techName(tech)) + "</li>";
    })
    .join("");
  if (!rest.length) return html;
  return (
    html +
    '<li class="chip chip-more" aria-label="' +
    escapeHtml(rest.length + " " + t("projects.more")) +
    '">' +
    '<span class="chip-more-label">+' +
    rest.length +
    "</span>" +
    '<ul class="chip-more-panel">' +
    rest
      .map(function (tech) {
        return "<li>" + escapeHtml(techName(tech)) + "</li>";
      })
      .join("") +
    "</ul>" +
    "</li>"
  );
}

function shownTechNames() {
  var seen = {};
  var names = [];
  PROJECTS.forEach(function (project) {
    if (!L(project.title)) return;
    project.techs.forEach(function (tech) {
      if (tech && tech.card === false) return;
      var name = techName(tech);
      if (seen[name]) return;
      seen[name] = true;
      names.push(name);
    });
  });
  return names;
}

(function renderTechStack() {
  const techStack = document.querySelector("[data-tech-stack]");
  const technologies = document.querySelector("[data-technologies]");
  if (!techStack && !technologies) return;

  var names = shownTechNames();
  var stackSet = {};
  STACK_ORDER.forEach(function (name) {
    stackSet[name] = true;
  });
  if (techStack) {
    techStack.innerHTML = chipList(
      STACK_ORDER.filter(function (name) {
        return STACK_ALWAYS[name] || names.indexOf(name) !== -1;
      })
    );
  }
  if (technologies) {
    technologies.innerHTML = chipList(
      names.filter(function (name) {
        return !stackSet[name];
      })
    );
  }
})();

(function renderProjects() {
  const grid = document.querySelector("[data-project-grid]");
  const filters = document.querySelector("[data-project-filters]");
  if (!grid || !filters) return;

  let active = "All";
  const listed = PROJECTS.filter(function (project) {
    return L(project.title);
  });
  const usedFilters = {};
  listed.forEach(function (project) {
    project.techs.forEach(function (tech) {
      if (tech && tech.filter) usedFilters[tech.name] = true;
    });
  });
  const techs = ["All"].concat(
    FILTER_ORDER.filter(function (name) {
      return usedFilters[name];
    })
  );

  function mediaHtml(project) {
    var dates = dateRange(project);
    var image = project.image
      ? '<img src="' + escapeHtml(project.image) + '" alt="" width="48" height="48" />'
      : "";
    if (!image && !dates) return "";
    return (
      '<div class="card-media">' +
      image +
      (dates ? '<p class="project-dates">' + escapeHtml(dates) + "</p>" : "") +
      "</div>"
    );
  }

  function cardHtml(project) {
    return (
      '<a class="project-card" href="project.html?id=' +
      encodeURIComponent(project.id) +
      '">' +
      mediaHtml(project) +
      "<h3>" +
      escapeHtml(L(project.title)) +
      "</h3>" +
      "<p>" +
      escapeHtml(L(project.description)) +
      "</p>" +
      '<ul class="chip-list">' +
      cardChipHtml(project) +
      "</ul>" +
      "</a>"
    );
  }

  function paintGrid() {
    const visible = listed.filter(function (project) {
      return (
        active === "All" ||
        project.techs.some(function (tech) {
          return techName(tech) === active;
        })
      );
    });
    grid.innerHTML = visible.map(cardHtml).join("");
  }

  function paintFilters() {
    filters.innerHTML = techs
      .map(function (tech) {
        const pressed = tech === active ? "true" : "false";
        return (
          '<button type="button" class="filter-btn" data-filter="' +
          escapeHtml(tech) +
          '" aria-pressed="' +
          pressed +
          '">' +
          escapeHtml(tech === "All" ? t("projects.all") : tech) +
          "</button>"
        );
      })
      .join("");
  }

  grid.addEventListener("click", function (event) {
    var more = event.target.closest(".chip-more");
    if (!more || !grid.contains(more)) return;
    event.preventDefault();
    var willOpen = !more.classList.contains("is-open");
    grid.querySelectorAll(".chip-more.is-open").forEach(function (item) {
      item.classList.remove("is-open");
    });
    if (willOpen) more.classList.add("is-open");
  });

  filters.addEventListener("click", function (event) {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    const next = button.getAttribute("data-filter");
    active = next === active ? "All" : next;
    paintFilters();
    paintGrid();
  });

  paintFilters();
  paintGrid();
  document.addEventListener("langchange", function () {
    paintFilters();
    paintGrid();
  });
})();

function backLink() {
  return (
    '<p><a class="back-link" href="projects.html"><span class="icon-mask icon-arrow-left" aria-hidden="true"></span>' +
    escapeHtml(t("projects.back")) +
    "</a></p>"
  );
}

function renderProjectDetail() {
  const root = document.querySelector("[data-project-detail]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = PROJECTS.find(function (item) {
    return item.id === id;
  });

  if (!project) {
    document.title = t("projects.notFound") + " — Joseph Thomas Mansilla";
    if (typeof syncHeadMeta === "function") syncHeadMeta();
    root.innerHTML =
      "<h1>" +
      escapeHtml(t("projects.notFound")) +
      "</h1>" +
      '<p class="muted">' +
      escapeHtml(t("projects.notFoundBody")) +
      "</p>" +
      backLink();
    return;
  }

  var title = L(project.title);
  document.title = title + " — Joseph Thomas Mansilla";
  if (typeof syncHeadMeta === "function") syncHeadMeta();

  const paragraphs = (L(project.details) || [])
    .map(function (paragraph) {
      return "<p>" + escapeHtml(paragraph) + "</p>";
    })
    .join("");

  const links = [];
  if (project.github) {
    links.push(
      '<a class="source-link" href="' +
        escapeHtml(project.github) +
        '" rel="noopener noreferrer"><span class="icon-mask icon-github" aria-hidden="true"></span>' +
        escapeHtml(t("projects.source")) +
        "</a>"
    );
  }
  if (project.demo) {
    links.push(
      '<a class="try-link" href="' +
        escapeHtml(project.demo) +
        '" rel="noopener noreferrer"><span class="icon-mask icon-arcade" aria-hidden="true"></span>' +
        escapeHtml(t("projects.try")) +
        "</a>"
    );
  }

  const videoId = youtubeId(project.video);
  const videoHtml = videoId
    ? '<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/' +
      escapeHtml(videoId) +
      '" title="' +
      escapeHtml(title) +
      ' video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    : "";

  var detailDates = dateRange(project);
  var detailImage = project.image
    ? '<img src="' + escapeHtml(project.image) + '" alt="" width="72" height="72" />'
    : "";
  var detailMedia =
    detailImage || detailDates
      ? '<div class="detail-media">' +
        detailImage +
        (detailDates ? '<p class="project-dates">' + escapeHtml(detailDates) + "</p>" : "") +
        "</div>"
      : "";

  root.innerHTML =
    '<article class="detail">' +
    backLink() +
    detailMedia +
    "<h1>" +
    escapeHtml(title) +
    "</h1>" +
    (links.length ? '<p class="project-links">' + links.join("") + "</p>" : "") +
    videoHtml +
    "<p class=\"lede\">" +
    escapeHtml(L(project.description)) +
    "</p>" +
    paragraphs +
    '<ul class="chip-list">' +
    chipList(project.techs) +
    "</ul>" +
    "</article>";
}

renderProjectDetail();
document.addEventListener("langchange", renderProjectDetail);
