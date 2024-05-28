#include <iostream>
#include <string>

using namespace std;

struct Pasajero {
    string nombre;
    int id;
};

struct NodoPasajero {
    Pasajero pasajero;
    NodoPasajero* siguiente;
};

struct ColaPasajeros {
    NodoPasajero* frente;
    NodoPasajero* final;
    int tamanio;

    ColaPasajeros() : frente(NULL), final(NULL), tamanio(0) {}

    bool vacia() {
        return frente == NULL;
    }

    void encolar(const Pasajero& pasajero) {
        NodoPasajero* nuevo = new NodoPasajero();
        nuevo->pasajero = pasajero;
        nuevo->siguiente = NULL;
        if (final != NULL) {
            final->siguiente = nuevo;
        }
        final = nuevo;
        if (frente == NULL) {
            frente = nuevo;
        }
        tamanio++;
    }

    void desencolar() {
        if (frente != NULL) {
            NodoPasajero* temp = frente;
            frente = frente->siguiente;
            if (frente == NULL) {
                final = NULL;
            }
            delete temp;
            tamanio--;
        }
    }

    Pasajero obtenerFrente() {
        if (frente != NULL) {
            return frente->pasajero;
        } else {
            return Pasajero();
        }
    }

    int obtenerTamanio() {
        return tamanio;
    }
};

struct Viaje {
    string id; // Identificador único
    string matricula;
    string nombreEmbarcacion;
    string destino;
    double precio;
    int dia, mes, anio;
    int capacidad;
    ColaPasajeros pasajeros; // Cola FIFO de pasajeros
};

struct NodoAVL {
    Viaje viaje;
    NodoAVL* izq;
    NodoAVL* der;
    int altura;
};

int altura(NodoAVL* N) {
    if (N == NULL)
        return 0;
    return N->altura;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

NodoAVL* nuevoNodo(const Viaje& viaje) {
    NodoAVL* nodo = new NodoAVL();
    nodo->viaje = viaje;
    nodo->izq = NULL;
    nodo->der = NULL;
    nodo->altura = 1;
    return nodo;
}

NodoAVL* rotacionDerecha(NodoAVL* y) {
    NodoAVL* x = y->izq;
    NodoAVL* T2 = x->der;

    x->der = y;
    y->izq = T2;

    y->altura = max(altura(y->izq), altura(y->der)) + 1;
    x->altura = max(altura(x->izq), altura(x->der)) + 1;

    return x;
}

NodoAVL* rotacionIzquierda(NodoAVL* x) {
    NodoAVL* y = x->der;
    NodoAVL* T2 = y->izq;

    y->izq = x;
    x->der = T2;

    x->altura = max(altura(x->izq), altura(x->der)) + 1;
    y->altura = max(altura(y->izq), altura(y->der)) + 1;

    return y;
}

int obtenerBalance(NodoAVL* N) {
    if (N == NULL)
        return 0;
    return altura(N->izq) - altura(N->der);
}

string generarId(const string& matricula, int anio, int mes, int dia) {
    string id = matricula.substr(0, 2); // Los dos primeros caracteres de la matrícula
    id += to_string(anio);
    if (mes < 10) id += '0'; // Agregar un cero inicial para meses de un solo dígito
    id += to_string(mes);
    if (dia < 10) id += '0'; // Agregar un cero inicial para días de un solo dígito
    id += to_string(dia);
    return id;
}

Viaje crearViaje() {
    Viaje nuevoViaje;
    cout << "Ingrese la matrícula de la embarcación: ";
    cin >> nuevoViaje.matricula;
    cout << "Ingrese el nombre de la embarcación: ";
    cin.ignore();
    getline(cin, nuevoViaje.nombreEmbarcacion);
    cout << "Ingrese el destino del viaje: ";
    getline(cin, nuevoViaje.destino);
    cout << "Ingrese el precio del viaje: ";
    cin >> nuevoViaje.precio;
    cout << "Ingrese la fecha del viaje (dia mes año): ";
    cin >> nuevoViaje.dia >> nuevoViaje.mes >> nuevoViaje.anio;
    cout << "Ingrese la capacidad de la embarcación: ";
    cin >> nuevoViaje.capacidad;
    nuevoViaje.id = generarId(nuevoViaje.matricula, nuevoViaje.anio, nuevoViaje.mes, nuevoViaje.dia);
    return nuevoViaje;
}

NodoAVL* insertarViaje(NodoAVL* nodo, const Viaje& viaje) {
    if (nodo == NULL)
        return nuevoNodo(viaje);

    if (viaje.id < nodo->viaje.id)
        nodo->izq = insertarViaje(nodo->izq, viaje);
    else if (viaje.id > nodo->viaje.id)
        nodo->der = insertarViaje(nodo->der, viaje);
    else
        return nodo;

    nodo->altura = 1 + max(altura(nodo->izq), altura(nodo->der));

    int balance = obtenerBalance(nodo);

    if (balance > 1 && viaje.id < nodo->izq->viaje.id)
        return rotacionDerecha(nodo);

    if (balance < -1 && viaje.id > nodo->der->viaje.id)
        return rotacionIzquierda(nodo);

    if (balance > 1 && viaje.id > nodo->izq->viaje.id) {
        nodo->izq = rotacionIzquierda(nodo->izq);
        return rotacionDerecha(nodo);
    }

    if (balance < -1 && viaje.id < nodo->der->viaje.id) {
        nodo->der = rotacionDerecha(nodo->der);
        return rotacionIzquierda(nodo);
    }

    return nodo;
}

void recorridoInOrden(NodoAVL* raiz) {
    if (raiz != NULL) {
        recorridoInOrden(raiz->izq);
        cout << "ID: " << raiz->viaje.id << ", Embarcación: " << raiz->viaje.nombreEmbarcacion << ", Destino: " << raiz->viaje.destino << endl;
        recorridoInOrden(raiz->der);
    }
}

NodoAVL* buscarViaje(NodoAVL* raiz, const string& id) {
    if (raiz == NULL || raiz->viaje.id == id)
        return raiz;

    if (raiz->viaje.id < id)
        return buscarViaje(raiz->der, id);

    return buscarViaje(raiz->izq, id);
}

NodoAVL* minValorNodo(NodoAVL* nodo) {
    NodoAVL* actual = nodo;

    while (actual->izq != NULL)
        actual = actual->izq;

    return actual;
}

NodoAVL* eliminarViaje(NodoAVL* raiz, const string& id) {
    if (raiz == NULL)
        return raiz;

    if (id < raiz->viaje.id)
        raiz->izq = eliminarViaje(raiz->izq, id);
    else if (id > raiz->viaje.id)
        raiz->der = eliminarViaje(raiz->der, id);
    else {
        if ((raiz->izq == NULL) || (raiz->der == NULL)) {
            NodoAVL* temp = raiz->izq ? raiz->izq : raiz->der;

            if (temp == NULL) {
                temp = raiz;
                raiz = NULL;
            } else
                *raiz = *temp;

            delete temp;
        } else {
            NodoAVL* temp = minValorNodo(raiz->der);

            raiz->viaje = temp->viaje;

            raiz->der = eliminarViaje(raiz->der, temp->viaje.id);
        }
    }

    if (raiz == NULL)
        return raiz;

    raiz->altura = 1 + max(altura(raiz->izq), altura(raiz->der));

    int balance = obtenerBalance(raiz);

    if (balance > 1 && obtenerBalance(raiz->izq) >= 0)
        return rotacionDerecha(raiz);

    if (balance > 1 && obtenerBalance(raiz->izq) < 0) {
        raiz->izq = rotacionIzquierda(raiz->izq);
        return rotacionDerecha(raiz);
    }

    if (balance < -1 && obtenerBalance(raiz->der) <= 0)
        return rotacionIzquierda(raiz);

    if (balance < -1 && obtenerBalance(raiz->der) > 0) {
        raiz->der = rotacionDerecha(raiz->der);
        return rotacionIzquierda(raiz);
    }

    return raiz;
}

int registrarPasajero(NodoAVL* raiz, const string& id, const Pasajero& pasajero) {
    NodoAVL* viaje = buscarViaje(raiz, id);
    if (viaje != NULL) {
        if (viaje->viaje.pasajeros.obtenerTamanio() < viaje->viaje.capacidad) {
            viaje->viaje.pasajeros.encolar(pasajero);
            return 0; // Éxito
        } else {
            cout << "El viaje ha alcanzado su capacidad máxima." << endl;
            return -1; // Capacidad máxima alcanzada
        }
    } else {
        cout << "Viaje no encontrado." << endl;
        return -2; // Viaje no encontrado
    }
}

void listarPasajeros(NodoAVL* raiz, const string& id) {
    NodoAVL* viaje = buscarViaje(raiz, id);
    if (viaje != NULL) {
        NodoPasajero* actual = viaje->viaje.pasajeros.frente;
        while (actual != NULL) {
            cout << "Nombre: " << actual->pasajero.nombre << ", ID: " << actual->pasajero.id << endl;
            actual = actual->siguiente;
        }
    } else {
        cout << "Viaje no encontrado." << endl;
    }
}

int main() {
    NodoAVL* raiz = NULL;
    int opcion;
    do {
        cout << "1. Registrar un nuevo viaje." << endl;
        cout << "2. Buscar un viaje por identificador." << endl;
        cout << "3. Listar todos los viajes." << endl;
        cout << "4. Eliminar un viaje por identificador." << endl;
        cout << "5. Registrar un pasajero en un viaje." << endl;
        cout << "6. Listar todos los pasajeros de un viaje." << endl;
        cout << "7. Salir." << endl;
        cout << "Seleccione una opción: ";
        cin >> opcion;

        switch (opcion) {
            case 1: {
                Viaje nuevoViaje = crearViaje();
                raiz = insertarViaje(raiz, nuevoViaje);
                break;
            }
            case 2: {
                string id;
                cout << "Ingrese el identificador del viaje: ";
                cin >> id;
                NodoAVL* viaje = buscarViaje(raiz, id);
                if (viaje != NULL) {
                    cout << "ID: " << viaje->viaje.id << ", Embarcación: " << viaje->viaje.nombreEmbarcacion
                         << ", Destino: " << viaje->viaje.destino << ", Precio: " << viaje->viaje.precio << endl;
                } else {
                    cout << "Viaje no encontrado." << endl;
                }
                break;
            }
            case 3: {
                recorridoInOrden(raiz);
                break;
            }
            case 4: {
                string id;
                cout << "Ingrese el identificador del viaje a eliminar: ";
                cin >> id;
                raiz = eliminarViaje(raiz, id);
                break;
            }
            case 5: {
                string id;
                cout << "Ingrese el identificador del viaje: ";
                cin >> id;
                Pasajero pasajero;
                cout << "Ingrese el nombre del pasajero: ";
                cin.ignore();
                getline(cin, pasajero.nombre);
                cout << "Ingrese el ID del pasajero: ";
                cin >> pasajero.id;
                int result = registrarPasajero(raiz, id, pasajero);
                if (result == 0) {
                    cout << "Pasajero registrado con éxito." << endl;
                }
                break;
            }
            case 6: {
                string id;
                cout << "Ingrese el identificador del viaje: ";
                cin >> id;
                listarPasajeros(raiz, id);
                break;
            }
            case 7: {
                cout << "Saliendo del programa." << endl;
                break;
            }
            default: {
                cout << "Opción no válida. Intente de nuevo." << endl;
                break;
            }
        }
    } while (opcion != 7);

    return 0;
}
