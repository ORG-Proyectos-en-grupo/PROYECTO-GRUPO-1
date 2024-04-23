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
    string nombre;
    string fecha;

    Student(int student_id, const string& student_nombre, const string& student_fecha)
        : id(student_id), nombre(student_nombre), fecha(student_fecha) {}
};