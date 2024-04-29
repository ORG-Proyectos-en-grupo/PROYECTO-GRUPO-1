/*Realizar un
sistema que permita el registro de estudiantes con el uso de árboles binarios,
el sistema debe permitir realizar la indexación (orden de inserción) a través
del código del estudiante (cada estudiante ya tiene un código asignado por
tanto se le debe preguntar) y también por la fecha de nacimiento.

El sistema debe
permitir recorrer la solución planteada con el uso de los métodos de Inorden,
Preorden y Postorden.


Puede darse el
caso de que dos estudiantes proporcionen la misma fecha de nacimiento en cuyo
caso deberá ubicarse al nuevo nodo a la derecha de su igual


El sistema debe
permitir eliminar el registro del estudiante. 


Del alumno se
deben solicitar: código, nombres, apellidos y fecha de nacimiento (año, mes y día)*/

#include <iostream>
using namespace std;


struct Student {
    int id;
    char nombre[40];
    char apellido[40];
    int anio;
    int mes;
    int dia;
    Student *iza, *der;
};
 Student*raiz,*aux, *aux2;


int posicionar() {
    while (true) {
        if (aux->id < aux2->id) {
            if (aux2->iza != NULL) {
                aux2 = aux2->iza;
            } else {
                aux2->iza = aux;
                break;
            }
        } else if (aux->id > aux2->id) {
            if (aux2->der != NULL) {
                aux2 = aux2->der;
            } else {
                aux2->der = aux;
                break;
            }
        } else if (aux->anio < aux2->anio || 
                   (aux->anio == aux2->anio && aux->mes < aux2->mes) ||
                   (aux->anio == aux2->anio && aux->mes == aux2->mes && aux->dia < aux2->dia)) {
            if (aux2->iza != NULL) {
                aux2 = aux2->iza;
            } else {
                aux2->iza = aux;
                break;
            }
        } else {
            if (aux2->der != NULL) {
                aux2 = aux2->der;
            } else {
                aux2->der = aux;
                break;
            }
        }
    }
    return 0;
}

int registrarEstudiante (){
   aux = (struct Student *)malloc(sizeof(struct Student));   
    cout << "Ingrese un codigo del Estudiante: ";
    cin >> aux->id;     
    cout << "Ingrese el nombre del Estudiante: ";
    cin >> aux->nombre;
    cout << "Ingrese el apellido del Estudiante: ";
    cin >> aux->apellido;
    cout << "Ingrese el año de nacimiento del estudiante: ";
    cin >> aux->anio;
    cout << "Ingrese el mes de nacimiento del estudiante: ";
    cin >> aux->mes;
    cout << "Ingrese el día de nacimiento del estudiante: ";
    cin >> aux->dia;
    aux->iza = aux->der = NULL;
   
    if(raiz ==NULL){
        raiz= aux;
        aux = NULL;
    }
    else{
        aux2=raiz;
        posicionar();
    }
return 0;
}

void inorden(Student* aux) {
    if (aux != NULL) {
        inorden(aux->iza); 
        cout << "ID: " << aux->id << ", Nombre: " << aux->nombre << " " << aux->apellido 
             << ", Fecha de nacimiento: " << aux->dia << "/" << aux->mes << "/" << aux->anio << endl; 
        inorden(aux->der); 
    }
}

void preorden(Student* aux) {
    if (aux != NULL) {
        cout << "ID: " << aux->id << ", Nombre: " << aux->nombre << " " << aux->apellido 
             << ", Fecha de nacimiento: " << aux->dia << "/" << aux->mes << "/" << aux->anio << endl; 
        preorden(aux->iza); 
        preorden(aux->der); 
    }
}

void postorden(Student* aux) {
    if (aux != NULL) {
        postorden(aux->iza); 
        postorden(aux->der); 
        cout << "ID: " << aux->id << ", Nombre: " << aux->nombre << " " << aux->apellido 
             << ", Fecha de nacimiento: " << aux->dia << "/" << aux->mes << "/" << aux->anio << endl; 
    }
}

void liberarMemoria(Student *aux) {
    if (aux == NULL) return;
    liberarMemoria(aux->iza);
    liberarMemoria(aux->der);
    free(aux);}

int main() {
    setlocale(LC_ALL, "");
    int opcion = 0;
    do {
        // Menú de opciones <3
        cout << "***************************************  Institución Educativa *********************************************" << endl;
        cout << "*************************************          El Macho        *******************************************" << endl;
        cout << "1. Registrar Estudiante" << endl;
        cout << "2. Recorrido Inorden" << endl;
        cout << "3. Recorrido Preorden" << endl;
        cout << "4. Recorrido Postorden" << endl;
        cout << "5. Eliminar Estudiante" << endl;
        cout << "6. Salir" << endl;
        cout << "Ingrese la opción deseada: ";
        cin >> opcion; 
        switch (opcion) {
            case 1: registrarEstudiante(); break;
            case 2:cout << "Recorrido Inorden:" << endl;
                   inorden(raiz); ; break;
            case 3:cout << "Recorrido Preorden:" << endl;
                   preorden(raiz); ; break;
            case 4: cout << "Recorrido Postorden:" << endl;
                   postorden(raiz);; break;
            case 5: ; break;
            case 6:cout << "Gracias por usar nuestro sistema <3" << endl; break;
        default: cout << "Opción no válida. Por favor, elija una opción válida." << endl; break;
        
 } }while (opcion != 6);
 return 0;
 }


