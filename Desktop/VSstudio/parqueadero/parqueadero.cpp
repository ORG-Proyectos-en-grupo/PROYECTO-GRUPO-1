#include <iostream>
#include <malloc.h>
using namespace std;

// Definición de la estructura nodo para la pila LIFO
struct nodo {
    int placa;
    int documento;
    int tipo; // 1 para carro, 2 para moto
    nodo* sig;
};

struct nodo *aux, *top, *top_aux;

// Función para registrar un nuevo vehículo en el parqueadero
int registrar(int tipo, int placa, int documento) {
    aux = ((struct nodo *) malloc(sizeof(struct nodo)));
    if (top == NULL) {
        top = aux;
        top->placa = placa;
        top->documento = documento;
        top->tipo = tipo;
        top->sig = NULL;
    } else {
        aux->sig = top;
        aux->placa = placa;
        aux->documento = documento;
        aux->tipo = tipo;
        top = aux;
    }
    aux = NULL;
    free(aux);
    return 0;
}

// Función para mostrar los vehículos en el parqueadero
int mostrar() {
    cout << endl;
    for (aux = top; aux != NULL; aux = aux->sig) {
        cout << "Placa: " << aux->placa << " Tipo: " << (aux->tipo == 1 ? "Carro" : "Moto") << " Documento: " << aux->documento << endl;
    }
    return 0; 
}


int eliminar() {
    int valor;
    mostrar();
    cout << "Placa a eliminar: ";
    cin >> valor;
    while (top != NULL && top->placa != valor) {
        if (top_aux == NULL) {
            top_aux = top;
            top = top->sig;
            top_aux->sig = NULL;
        } else {
            aux = top;
            top = top->sig;
            aux->sig = top_aux;
            top_aux = aux;
            aux = NULL;
        }
    }
    if ((top != NULL) && (top->placa == valor)) {
        aux = top;
        top = top->sig;
        // Elimina.
        cout << "Vehículo eliminado, placa: " << aux->placa << " Tipo: " << (aux->tipo == 1 ? "Carro" : "Moto") << " Documento: " << aux->documento << endl;
        free(aux);
    } else {
        cout << "Vehículo no encontrado, placa: " << valor << endl;
    }
    while (top_aux != NULL) {
        aux = top_aux->sig;
        top_aux->sig = top;
        top = top_aux;
        top_aux = aux;
        aux = NULL;
    }
    return 0; 
}


int calcularValorDevengado() {
    int total = 0;
    int movimientoCarro = 0;
    int movimientoMoto = 0;
    for (aux = top; aux != NULL; aux = aux->sig) {
        if (aux->tipo == 1) { // Carro
            total += 1000;
            movimientoCarro += 100;
        } else if (aux->tipo == 2) { // Moto
            total += 500;
            movimientoMoto += 50;
        }
    }
    total -= movimientoCarro;
    total -= movimientoMoto;
    return total;
}

int main() {
    int opc;
    do {
        cout << "1. Registrar carro" << endl;
        cout << "2. Registrar moto" << endl;
        cout << "3. Mostrar vehículos" << endl;
        cout << "4. Eliminar vehículo" << endl;
        cout << "5. Calcular valor devengado" << endl;
        cout << "6. Salir" << endl;
        cout << "Seleccione una opción: ";
        cin >> opc;
        switch (opc) {
            case 1: {
                int placa, documento;
                cout << "Ingrese la placa del carro: ";
                cin >> placa;
                cout << "Ingrese el documento del propietario: ";
                cin >> documento;
                registrar(1, placa, documento); // Tipo 1 para carro
                break;
            }
            case 2: {
                int placa, documento;
                cout << "Ingrese la placa de la moto: ";
                cin >> placa;
                cout << "Ingrese el documento del propietario: ";
                cin >> documento;
                registrar(2, placa, documento); // Tipo 2 para moto
                break;
            }
            case 3:
                mostrar();
                break;
            case 4:
                eliminar();
                break;
            case 5: {
                int valorDevengado = calcularValorDevengado();
                cout << "Valor devengado hasta el momento: " << valorDevengado << " pesos" << endl;
                break;
            }
            case 6:
                cout << "Saliendo del programa..." << endl;
                break;
            default:
                cout << "Opción inválida, por favor intente de nuevo." << endl;
                break;
        }
    } while (opc != 6);
    return 0;
}
