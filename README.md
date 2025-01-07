# To-Do List App Frontend

Una aplicación de lista de tareas (To-Do List) desarrollada con JavaScript Vanilla.

## 📝 Descripción

Esta aplicación frontend permite a los usuarios gestionar sus tareas diarias a través de una interfaz intuitiva y fácil de usar. Está construida utilizando JavaScript puro (Vanilla JS) sin frameworks adicionales, lo que la hace ligera y de rápido rendimiento.

## 🚀 Características

- Interfaz de usuario intuitiva
- Gestión completa de tareas (CRUD)
- Diseño responsive
- Integración con API REST
- Almacenamiento local para persistencia de datos

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- dotenv (para variables de entorno)

## ⚙️ Instalación

1. Clona este repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto
   - Añade las variables necesarias siguiendo el ejemplo en `.env.example`

4. Abre el archivo `index.html` en tu navegador o utiliza un servidor local

## 📂 Estructura del Proyecto

```
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js
│       ├── api.js
│       └── utils.js
├── package.json
└── README.md
```

## 💻 Uso

1. Añadir una nueva tarea:
   - Escribe la tarea en el campo de entrada
   - Presiona Enter o haz clic en el botón "Añadir"

2. Marcar una tarea como completada:
   - Haz clic en el checkbox junto a la tarea

3. Eliminar una tarea:
   - Haz clic en el botón de eliminar (×) junto a la tarea

4. Editar una tarea:
   - Haz doble clic en el texto de la tarea
   - Modifica el texto
   - Presiona Enter para guardar

## 🔄 Integración con Backend

La aplicación se comunica con un backend REST API para:
- Obtener la lista de tareas
- Crear nuevas tareas
- Actualizar tareas existentes
- Eliminar tareas

## 👤 Autor

@david

## 📄 Licencia

ISC

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## ✨ Próximas Mejoras

- [ ] Añadir filtros por estado de tarea
- [ ] Implementar categorías para las tareas
- [ ] Añadir fecha límite para las tareas
- [ ] Mejorar la interfaz de usuario
- [ ] Implementar modo oscuro
