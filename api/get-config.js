// api/get-config.js

export default function handler(request, response) {
  try {
    // 1. Comprueba si las variables de entorno están configuradas en Vercel.
    if (!process.env.FIREBASE_API_KEY || !process.env.MASTER_PASSWORD) {
      return response.status(500).json({ error: 'Las variables de entorno no están configuradas en el servidor.' });
    }

    // 2. Construye el objeto de configuración usando las claves secretas.
    const config = {
      apiKey: process.env.FIREBASE_API_KEY, // Lee la clave de API desde las variables de Vercel
      authDomain: "torneo-interclases.firebaseapp.com",
      projectId: "torneo-interclases",
      storageBucket: "torneo-interclases.firebasestorage.app",
      messagingSenderId: "676891636137",
      appId: "1:676891636137:web:06562e91b7680ad7ad54b8",
      masterPassword: process.env.MASTER_PASSWORD // Lee la clave maestra desde las variables de Vercel
    };

    // 3. Envía el objeto de configuración de vuelta al navegador.
    response.status(200).json(config);

  } catch (error) {
    // Manejo de cualquier otro error inesperado.
    response.status(500).json({ error: 'Fallo al cargar la configuración.' });
  }
}

