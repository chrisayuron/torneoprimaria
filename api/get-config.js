// api/get-config.js

export default function handler(request, response) {
  try {
    // 1. Revisa que las variables de Vercel estén configuradas
    if (!process.env.FIREBASE_API_KEY || !process.env.MASTER_PASSWORD) {
      return response.status(500).json({ 
        error: 'Error: Las variables de entorno FIREBASE_API_KEY y MASTER_PASSWORD deben estar configuradas en Vercel.' 
      });
    }

    // 2. Define el ID único para este torneo específico
    const ID_DEL_TORNEO = 'futbol-infantil-primaria';

    // 3. Construye el objeto de configuración de Firebase con tus datos
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY, // Se lee de forma segura desde Vercel
      authDomain: "torneo-interclases.firebaseapp.com",
      projectId: "torneo-interclases",
      storageBucket: "torneo-interclases.firebasestorage.app",
      messagingSenderId: "676891636137",
      appId: "1:676891636137:web:06562e91b7680ad7ad54b8"
    };

    // 4. Envía la configuración en el formato anidado correcto
    response.status(200).json({
      firebase: firebaseConfig, // La configuración de Firebase va DENTRO de la propiedad "firebase"
      masterPassword: process.env.MASTER_PASSWORD,
      torneoId: ID_DEL_TORNEO
    });

  } catch (error) {
    response.status(500).json({ error: 'Fallo inesperado al cargar la configuración.' });
  }
}
