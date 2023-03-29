function AgregarDatosTabla(){
    
    let NombreTabla=document.getElementById('Nombre').value;
    let ApellidoTabla=document.getElementById('Apellido').value;
    let EdadTabla=document.getElementById('Edad').value;
    let DniTabla=document.getElementById('Dni').value;
    let EmailTabla=document.getElementById('Correo').value;
    

    if(NombreTabla ==''){  
        alert('Por favor, ingrese su nombre.');    
    } 
    else if ( ApellidoTabla==''){
        alert('Por favor, ingrese su apellido.');
    } 
    else if(EdadTabla==''){
        alert('Por favor, ingrese su edad.');
    } 
    else if(DniTabla==''){
         alert('Por favor, ingrese su Dni.');
    } 
    else if(EmailTabla==''){
        alert('Por favor, ingrese su Email.');
    }
        
    else{
        let Tabla = document.getElementById('Tabla-Datos').insertRow(1);
        
        let NombreCargado = Tabla.insertCell(0);
        let ApellidoCargado = Tabla.insertCell(1);
        let EdadCargada = Tabla.insertCell(2);
        let DniCargado = Tabla.insertCell(3);
        let EmailCargado = Tabla.insertCell(4);


        NombreCargado.innerHTML = NombreTabla;
        ApellidoCargado.innerHTML = ApellidoTabla;
        EdadCargada.innerHTML = EdadTabla;
        DniCargado.innerHTML = DniTabla;
        EmailCargado.innerHTML = EmailTabla;

        document.getElementById('Formulario').reset();
        }  
}
