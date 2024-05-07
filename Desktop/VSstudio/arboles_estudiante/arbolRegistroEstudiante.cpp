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


//Primer Arbol por Fecha del estudiante.
struct Student {
    int id;
    char nombre[40];
    char apellido[40];
    int anio;
    int mes;
    int dia;
    Student *iza, *der;
};
 Student*raiz= NULL,*aux, *aux2;
 
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
        } 
    }
    return 0;
}

int posicionarB(){
    while (true) {
            if (aux->anio < aux2->anio || 
                   (aux->anio == aux2->anio && aux->mes < aux2->mes) ||
                   (aux->anio == aux2->anio && aux->mes == aux2->mes && aux->dia < aux2->dia)) {
            if (aux2->iza != NULL) {
                aux2 = aux2->iza;
            } else {
                aux2->iza = aux;
                break;
            }
        }     else {
            if (aux2->der != NULL) {
                aux2 = aux2->der;
            } else {
                aux2->der = aux;
                break;
            }
        }  
}return 0;}

int RegistrarEstudiante() {
    int i = 0;
    cout << "Bienvenido al área de registro" << endl;
    cout << "\n";

    do {
        aux = (struct Student *)malloc(sizeof(struct Student));
        cout << "Ingresa el nombre del estudiante: " << endl;
        cin >> aux->nombre;
        cout << "\n";

        cout << "Ingresa el apellido del estudiante: " << endl;
        cin >> aux->apellido;
        cout << "\n";

        cout << "Fecha de nacimiento del estudiante (ingresa solo números):" << endl;
        system("pause");
        cout << "\n";

        cout << "Día:" << endl;
        cin >> aux->dia;
        cout << "\n";
        cout << "Mes:" << endl;
        cin >> aux->mes;
        cout << "\n";
        cout << "Año:" << endl;
        cin >> aux->anio;
        cout << "\n";

        cout << "Ingresa el código del estudiante:" << endl;
        cin >> aux->id;
        cout << "\n";

        aux->iza = aux->der = NULL;

        if (raiz == NULL) {
            raiz = aux;
            aux = NULL;
            free(aux);
        } else { 
            aux2 = raiz;
            posicionar();
        }
        cout << "\n";
        cout << "Estudiante Registrado." << endl;
        system("pause");
        cout << "¿Desea registrar otro estudiante? (1.SI/2.NO)";
        cin >> i;
        cout << "\n";
    } while (i != 2);
    return 0;
}

int preorden (Student*recursive) {
 cout << "ID: " << aux->id << ", Nombre: " << aux->nombre << " " << aux->apellido 
             << ", Fecha de nacimiento: " << aux->dia << "/" << aux->mes << "/" << aux->anio << endl;
    cout<<"\n";
    cout<<"----------------------------------------------------------"<<endl;
    cout<<"\n";
if(recursive -> iza != NULL)
preorden (recursive->iza);
if(recursive -> der != NULL)
preorden (recursive -> der);
return 0;}

int inorden(Student*recursive) {
if (recursive-> iza != NULL) 
inorden(aux->iza); 
        cout << "ID: " << aux->id << ", Nombre: " << aux->nombre << " " << aux->apellido 
        << ", Fecha de nacimiento: " << aux->dia << "/" << aux->mes << "/" << aux->anio << endl;
        cout<<"\n";
        cout <<"***********************************************************************************"<< endl;
        cout<<"\n";
if(recursive->der!=NULL){ inorden(recursive->der);}
return 0;
}

int postorden(Student*recursive) {
if (recursive-> iza != NULL)
postorden(aux->iza); 
postorden(aux->der); 
cout << "ID: " << aux->id << ", Nombre: " << aux->nombre << " " << aux->apellido 
             << ", Fecha de nacimiento: " << aux->dia << "/" << aux->mes << "/" << aux->anio << endl;
        cout <<"***********************************************************************************"<< endl;
        cout<<"\n"<< endl; 
        cout<<"\n";
return 0;
}

int recorrer(){
	  int iu = 0;
    	aux = raiz;
       if(aux!=NULL){
            cout << "***************************************  Institucion Educativa *********************************************" << endl;
            cout << "************************************          El Macho           ****************************************" << endl;
            cout<<"***********************************          Recorrer arbol           **************************************"<<endl;
		  cout<<"\n";
		  do{
			  cout<<"Elige el recorrido:"<<endl;
		      cout<<"1. InOrden"<<endl;
	          cout<<"2. PreOrden"<<endl;
	          cout<<"3. PostOrden"<<endl;
	          cout<<"4. salir"<<endl;
		      cin>>iu;
	          switch (iu)
	           {
	             case 1: 
					aux = raiz;
					inorden(aux);
					system("pause"); 
					break;
	             case 2: 
					aux = raiz;
					preorden(aux);
					system("pause");
					break;
	             case 3: 
	            	aux = raiz;
					postorden(aux);
					system("pause");
	            	break;
	             case 4: cout<<"Adios"; break;
	             default:cout<<"Opcion Invalida."; break;
	            }
		    }while(iu!=4);
        }else{
         cout<<"Vacio..."<<endl;
         cout<<"No se ha registrado estudiantes"<<endl;
         system("pause");
	    }
	 return 0;
    }

//Segundo Arbol por Fecha del estudiante.
struct Student2 {
    int id2;
    char nombre2[40];
    char apellido2[40];
    int anio2;
    int mes2;
    int dia2;
    Student *iza2, *der2;
};
 Student*raiz= NULL,*auxB, *aux2B;

int main() {
    setlocale(LC_ALL, "");
    int opcion = 0;
    do {
        // Menú de opciones <3
        cout << "***************************************  Institucion Educativa *********************************************" << endl;
        cout << "*************************************          El Macho        *******************************************" << endl;
        cout << "1. Registrar Estudiante" << endl; //Completado.
        cout << "2. Recorrido por ID" << endl;    //Completado.
        cout << "3. Registro Estudiante Fecha" << endl;
        cout << "4. Recorrido por Fecha" << endl;
        cout << "5. Eliminar Estudiante" << endl;
        cout << "6. Salir" << endl; 
        cout << "Ingrese la opción deseada: ";
        cin >> opcion; 
        switch (opcion) {
            case 1: RegistrarEstudiante(); break;
            case 2: recorrer(); ; break;
            case 3:break;
            case 4: break;
            case 5: break;
            case 6: break;
            case 7: ; break;
            case 8:cout << "Gracias por usar nuestro sistema <3" << endl; break;
            default: cout << "Opcion no válida. Por favor, elija una opcion valida." << endl; break;
        
 } }while (opcion != 8);
 return 0;
 }


