export interface PageContent {
  title: string;
  items: string[];
}

export interface SiteContent {
  siteTitle: string;
  disclaimer: string;
  backHome: string;
  langLabel: string;
  shareLabel: string;
  printLabel: string;
  emergencyContactTitle: string;
  emergencyContactPlaceholderName: string;
  emergencyContactPlaceholderPhone: string;
  emergencyContactSave: string;
  emergencyContactSaved: string;
  emergencyContactClear: string;
  pages: Record<string, PageContent>;
  navButtons: { slug: string; label: string }[];
}

export const en: SiteContent = {
  siteTitle: "ICE Encounter Resource Guide",
  disclaimer:
    "For emergency readiness and education purposes only and is not legal advice",
  backHome: "Back to Home",
  langLabel: "ES",
  shareLabel: "Share",
  printLabel: "Print",
  emergencyContactTitle: "Emergency Contacts",
  emergencyContactPlaceholderName: "Name",
  emergencyContactPlaceholderPhone: "Phone number",
  emergencyContactSave: "Save",
  emergencyContactSaved: "Saved",
  emergencyContactClear: "Clear",
  navButtons: [
    { slug: "confronted", label: "If Confronted by ICE (Any Location)" },
    { slug: "at-home", label: "ICE Encounters at Home" },
    { slug: "public-work", label: "ICE Encounters in Public or at Work" },
    { slug: "detained", label: "If Detained by ICE" },
    {
      slug: "family-steps",
      label: "Family Steps If a Loved One Is Detained",
    },
    { slug: "deportation", label: "If Deportation Occurs" },
    { slug: "preparation", label: "Preparation Before Anything Happens" },
  ],
  pages: {
    confronted: {
      title: "If Confronted by ICE (Any Location)",
      items: [
        "Remain calm and do not run or physically resist. Sudden movements or resistance can escalate the encounter.",
        "You have the constitutional right to remain silent. This applies regardless of immigration status.",
        "You do NOT have to answer questions about where you were born, your citizenship, or how you entered the U.S.",
        "State clearly and calmly: \u2018I choose to remain silent and want to speak to a lawyer.\u2019 Repeat if necessary.",
        "Do not lie or present fake documents. Providing false information can permanently damage immigration relief options.",
        "Do not sign any documents unless reviewed by an immigration attorney. ICE may present paperwork framed as routine.",
      ],
    },
    "at-home": {
      title: "ICE Encounters at Home",
      items: [
        "ICE agents cannot legally enter your home without a warrant signed by a judge.",
        "Administrative ICE warrants (Forms I\u2011200 or I\u2011205) are NOT judge\u2011signed and do not authorize home entry.",
        "Keep the door closed. You may speak through the door.",
        "Ask agents to slide the warrant under the door or hold it up to a window.",
        "If no judicial warrant is provided, you may refuse entry.",
        "Do not open the door voluntarily, as opening the door can be interpreted as consent.",
      ],
    },
    "public-work": {
      title: "ICE Encounters in Public or at Work",
      items: [
        "ICE may approach and ask questions in public spaces.",
        "You may ask: \u2018Am I free to go?\u2019",
        "If the answer is yes, calmly walk away.",
        "If the answer is no, you are being detained and should remain silent and request a lawyer.",
        "Employers generally must be presented with proper warrants or subpoenas before cooperating.",
      ],
    },
    detained: {
      title: "If Detained by ICE",
      items: [
        "Ask immediately to speak with an immigration lawyer.",
        "You have the right to an attorney, but the government does not provide one.",
        "Do not agree to voluntary departure or expedited removal without legal advice.",
        "If possible, share your A\u2011number (Alien Registration Number) with family.",
        "Try to memorize key phone numbers, as access to personal phones is often limited.",
      ],
    },
    "family-steps": {
      title: "Family Steps If a Loved One Is Detained",
      items: [
        "Use the ICE Online Detainee Locator System once you have the person\u2019s A\u2011number or full identifying details.",
        "Determine which detention facility they are held in and learn its phone and visitation rules.",
        "Set up phone or commissary accounts if allowed.",
        "Contact an immigration attorney or nonprofit legal aid organization immediately.",
        "Gather all immigration paperwork, identification, and any court or criminal records.",
      ],
    },
    deportation: {
      title: "If Deportation Occurs",
      items: [
        "Confirm the destination country and date of removal.",
        "Coordinate with counsel regarding post\u2011deportation legal options if any exist.",
        "Assist with access to bank accounts, property, or family needs left behind.",
        "Help the deported individual connect with support resources in their destination country.",
      ],
    },
    preparation: {
      title: "Preparation Before Anything Happens",
      items: [
        "Identify and consult with an immigration attorney in advance.",
        "Memorize phone numbers of family, lawyers, and trusted contacts.",
        "Store copies of documents in a safe location and with a trusted person.",
        "Prepare an emergency bag with documents, medications, cash, and contact lists.",
        "Create a family plan for childcare, finances, housing, and communication.",
      ],
    },
  },
};

export const es: SiteContent = {
  siteTitle: "Gu\u00eda de Recursos para Encuentros con ICE",
  disclaimer:
    "Solo para fines de preparaci\u00f3n de emergencias y educaci\u00f3n, y no es asesoramiento legal",
  backHome: "Volver al Inicio",
  langLabel: "EN",
  shareLabel: "Compartir",
  printLabel: "Imprimir",
  emergencyContactTitle: "Contactos de Emergencia",
  emergencyContactPlaceholderName: "Nombre",
  emergencyContactPlaceholderPhone: "N\u00famero de tel\u00e9fono",
  emergencyContactSave: "Guardar",
  emergencyContactSaved: "Guardado",
  emergencyContactClear: "Borrar",
  navButtons: [
    {
      slug: "confronted",
      label: "Si es Confrontado por ICE (Cualquier Ubicaci\u00f3n)",
    },
    { slug: "at-home", label: "Encuentros con ICE en Casa" },
    {
      slug: "public-work",
      label: "Encuentros con ICE en P\u00fablico o en el Trabajo",
    },
    { slug: "detained", label: "Si es Detenido por ICE" },
    {
      slug: "family-steps",
      label: "Pasos Familiares Si un Ser Querido es Detenido",
    },
    { slug: "deportation", label: "Si Ocurre una Deportaci\u00f3n" },
    {
      slug: "preparation",
      label: "Preparaci\u00f3n Antes de que Suceda Algo",
    },
  ],
  pages: {
    confronted: {
      title: "Si es Confrontado por ICE (Cualquier Ubicaci\u00f3n)",
      items: [
        "Mantenga la calma y no corra ni se resista f\u00edsicamente. Los movimientos repentinos o la resistencia pueden escalar el encuentro.",
        "Usted tiene el derecho constitucional de permanecer en silencio. Esto aplica independientemente de su estatus migratorio.",
        "NO tiene que responder preguntas sobre d\u00f3nde naci\u00f3, su ciudadan\u00eda o c\u00f3mo entr\u00f3 a los EE.UU.",
        "Declare clara y calmadamente: \u2018Elijo permanecer en silencio y quiero hablar con un abogado.\u2019 Repita si es necesario.",
        "No mienta ni presente documentos falsos. Proporcionar informaci\u00f3n falsa puede da\u00f1ar permanentemente las opciones de alivio migratorio.",
        "No firme ning\u00fan documento a menos que sea revisado por un abogado de inmigraci\u00f3n. ICE puede presentar documentos enmarcados como rutinarios.",
      ],
    },
    "at-home": {
      title: "Encuentros con ICE en Casa",
      items: [
        "Los agentes de ICE no pueden entrar legalmente a su hogar sin una orden firmada por un juez.",
        "Las \u00f3rdenes administrativas de ICE (Formularios I\u2011200 o I\u2011205) NO est\u00e1n firmadas por un juez y no autorizan la entrada al hogar.",
        "Mantenga la puerta cerrada. Puede hablar a trav\u00e9s de la puerta.",
        "Pida a los agentes que deslicen la orden por debajo de la puerta o que la sostengan frente a una ventana.",
        "Si no se proporciona una orden judicial, puede rechazar la entrada.",
        "No abra la puerta voluntariamente, ya que abrir la puerta puede interpretarse como consentimiento.",
      ],
    },
    "public-work": {
      title: "Encuentros con ICE en P\u00fablico o en el Trabajo",
      items: [
        "ICE puede acercarse y hacer preguntas en espacios p\u00fablicos.",
        "Puede preguntar: \u2018\u00bfSoy libre de irme?\u2019",
        "Si la respuesta es s\u00ed, al\u00e9jese con calma.",
        "Si la respuesta es no, est\u00e1 siendo detenido y debe permanecer en silencio y solicitar un abogado.",
        "Los empleadores generalmente deben recibir \u00f3rdenes o citaciones apropiadas antes de cooperar.",
      ],
    },
    detained: {
      title: "Si es Detenido por ICE",
      items: [
        "Solicite inmediatamente hablar con un abogado de inmigraci\u00f3n.",
        "Tiene derecho a un abogado, pero el gobierno no proporciona uno.",
        "No acepte la salida voluntaria o la remoci\u00f3n acelerada sin asesoramiento legal.",
        "Si es posible, comparta su n\u00famero A (N\u00famero de Registro de Extranjero) con su familia.",
        "Intente memorizar n\u00fameros de tel\u00e9fono clave, ya que el acceso a tel\u00e9fonos personales a menudo es limitado.",
      ],
    },
    "family-steps": {
      title: "Pasos Familiares Si un Ser Querido es Detenido",
      items: [
        "Use el Sistema de Localizaci\u00f3n de Detenidos en L\u00ednea de ICE una vez que tenga el n\u00famero A de la persona o detalles completos de identificaci\u00f3n.",
        "Determine en qu\u00e9 centro de detenci\u00f3n est\u00e1n retenidos y conozca sus reglas de tel\u00e9fono y visitas.",
        "Configure cuentas de tel\u00e9fono o economato si est\u00e1 permitido.",
        "Contacte a un abogado de inmigraci\u00f3n u organizaci\u00f3n de ayuda legal sin fines de lucro inmediatamente.",
        "Re\u00fana todos los documentos de inmigraci\u00f3n, identificaci\u00f3n y cualquier registro judicial o criminal.",
      ],
    },
    deportation: {
      title: "Si Ocurre una Deportaci\u00f3n",
      items: [
        "Confirme el pa\u00eds de destino y la fecha de remoci\u00f3n.",
        "Coordine con un abogado sobre las opciones legales despu\u00e9s de la deportaci\u00f3n si existen.",
        "Ayude con el acceso a cuentas bancarias, propiedades o necesidades familiares dejadas atr\u00e1s.",
        "Ayude a la persona deportada a conectarse con recursos de apoyo en su pa\u00eds de destino.",
      ],
    },
    preparation: {
      title: "Preparaci\u00f3n Antes de que Suceda Algo",
      items: [
        "Identifique y consulte con un abogado de inmigraci\u00f3n con anticipaci\u00f3n.",
        "Memorice n\u00fameros de tel\u00e9fono de familia, abogados y contactos de confianza.",
        "Almacene copias de documentos en un lugar seguro y con una persona de confianza.",
        "Prepare una bolsa de emergencia con documentos, medicamentos, efectivo y listas de contactos.",
        "Cree un plan familiar para el cuidado de ni\u00f1os, finanzas, vivienda y comunicaci\u00f3n.",
      ],
    },
  },
};
