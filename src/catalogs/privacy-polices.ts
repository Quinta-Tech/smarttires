const EMAIL = "contact@quinta.tech";
const ADDRESS =
	"Prol. Bernardo Quintana 562, Arboledas, 76140 Santiago de Querétaro, Qro.";

export const privacyPolices = {
	es: {
		title: "Políticas de Privacidad",
		introduction: {
			title: "1. Introducción",
			text: 'En QUINTA TECH ("la Aplicación"), respetamos la privacidad de todos nuestros usuarios y clientes. Nuestra prioridad es proteger la información que manejamos y garantizar que su uso se limite exclusivamente a las funciones operativas del sistema. Esta política describe de manera transparente qué datos tratamos, con qué propósito y bajo qué condiciones.',
		},
		dataCollection: {
			title: "2. Datos que recopilamos",
			text: "La Aplicación recopila información personal básica de los usuarios finales con fines de identificación, así como datos técnicos y operativos de las unidades, incluyendo información relacionada con el estado y uso de llantas.",
			items: [
				"Nombre y correo electrónico (para identificación del usuario).",
				"Número de unidad o placa (identificador interno).",
				"Coordenadas GPS (ubicación, velocidad, altitud).",
				"Registros de sensores (presión, temperatura, carga, estado de llantas, etc.).",
				"Información técnica necesaria para análisis, trazabilidad y recomendaciones operativas.",
			],
			disclaimer:
				"La información personal no se comparte con terceros no autorizados. Los datos técnicos pueden ser utilizados de forma agregada y anonimizada para generar recomendaciones y mejorar la experiencia de todos los usuarios.",
		},
		purpose: {
			title: "3. Finalidad del tratamiento de los datos",
			text: "Los datos son utilizados para:",
			items: [
				"Monitoreo y análisis del desempeño de las unidades.",
				"Generación de reportes técnicos y alertas operativas.",
				"Visualización en plataformas o tableros de control para los clientes autorizados.",
				"Identificación de usuarios dentro de la aplicación.",
				"Ofrecer recomendaciones personalizadas de llantas y productos relacionados.",
				"Mejorar los modelos de recomendación mediante el uso agregado de datos de todos los usuarios.",
			],
			disclaimer:
				"Los datos no se utilizan para fines publicitarios externos. Las recomendaciones se generan dentro de la plataforma y no implican la divulgación de información personal identificable a terceros ajenos al servicio.",
		},
		security: {
			title: "4. Conservación y seguridad de la información",
			text: "Los datos se almacenan en servidores seguros bajo protocolos cifrados y medidas de protección técnicas y administrativas. Solo el personal autorizado tiene acceso controlado a la información, estrictamente para fines operativos.",
		},
		transfer: {
			title: "5. Transferencia y comunicación de datos",
			text: "No compartimos, vendemos ni transferimos información a terceros. La información solo puede ser consultada por el personal técnico de QUINTA TECH o por el cliente propietario de las unidades, en el marco del servicio contratado.",
		},
		rights: {
			title: "6. Derechos y contacto",
			text: "Si el cliente desea conocer más sobre la gestión o eliminación de sus datos técnicos, puede comunicarse con nosotros en:",
			email: `Correo electrónico: ${EMAIL}`,
			address: `Domicilio: ${ADDRESS}`,
		},
		changes: {
			title: "7. Cambios en esta política",
			text: "Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento para reflejar mejoras en seguridad o cumplimiento normativo. La versión más reciente siempre estará disponible dentro de la Aplicación o en nuestro sitio web oficial.",
		},
		lastUpdate: "Última actualización: 13 de octubre de 2025",
	},
	en: {
		title: "Privacy Policy",
		introduction: {
			title: "1. Introduction",
			text: 'At QUINTA TECH ("the Application"), we respect the privacy of all our users and customers. Our priority is to protect the information we handle and ensure that its use is limited exclusively to the operational functions of the system. This policy transparently describes what data we process, for what purpose, and under what conditions.',
		},
		dataCollection: {
			title: "2. Data We Collect",
			text: "The Application collects basic personal information from end users for identification purposes, as well as technical and operational vehicle data, including information related to tire condition and usage.",
			items: [
				"Name and email address (for user identification).",
				"Vehicle unit number or license plate (internal identifier).",
				"GPS coordinates (location, speed, altitude).",
				"Sensor logs (pressure, temperature, load, tire status, etc.).",
				"Technical information required for analysis, traceability, and operational recommendations.",
			],
			disclaimer:
				"Personal information is not shared with unauthorized third parties. Technical data may be used in an aggregated and anonymized form to generate recommendations and improve the overall user experience.",
		},
		purpose: {
			title: "3. Purpose of Data Processing",
			text: "Data is used for:",
			items: [
				"Monitoring and analyzing vehicle performance.",
				"Generating technical reports and operational alerts.",
				"Visualization on platforms or dashboards for authorized clients.",
				"User identification within the application.",
				"Providing personalized tire and related product recommendations.",
				"Improving recommendation models through aggregated data from all users.",
			],
			disclaimer:
				"Data is not used for external advertising purposes. Recommendations are generated within the platform and do not involve sharing personal identifiable information with third parties unrelated to the service.",
		},
		security: {
			title: "4. Information conservation and security",
			text: "Data is stored on secure servers under encrypted protocols and technical and administrative protection measures. Only authorized personnel have controlled access to information, strictly for operational purposes.",
		},
		transfer: {
			title: "5. Data transfer and communication",
			text: "We do not share, sell, or transfer information to third parties. Information can only be accessed by technical personnel from QUINTA TECH or by the client who owns the units, within the framework of the contracted service.",
		},
		rights: {
			title: "6. Rights and contact",
			text: "If the client wishes to learn more about the management or deletion of their technical data, they can contact us at:",
			email: `Email: ${EMAIL}`,
			address: `Address: ${ADDRESS}`,
		},
		changes: {
			title: "7. Changes to this policy",
			text: "We reserve the right to update this Privacy Policy at any time to reflect security improvements or regulatory compliance. The most recent version will always be available within the Application or on our official website.",
		},
		lastUpdate: "Last updated: October 13, 2025",
	},
};
