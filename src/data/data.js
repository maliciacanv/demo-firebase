// Subir imagenes a Storage

export const subirImagenStorage = () => firebase.storage().ref();

// Enviar datos a firestore

export const subirImageUrlFirestore = (obj) => firebase.firestore().collection('imagenes-firebase').add(obj);

// Traer datos de firestore

export const traerDatosDeFirestore = (result) => firebase.firestore()
    .collection('imagenes-firebase')
    .onSnapshot((dataFirestoreImages) => {
        let data = [];
        dataFirestoreImages.forEach(ele => 
            data.push({ele, ...ele.data()})
            )
            result(data);
});