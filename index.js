function validarumero(valor1){
    
    var result = 'falha'
    
    if(valor1 < 0){
        result = 'negativo'
    }else if (valor1 == 0){
        result = 'zero'
    }else if(valor1 > 0){
        result  = 'positivo'
    }
    
    return result
    }


    function cordisponive(cor){
        var retornocor = 0
        
        switch (cor){
        case 'branco':
        retornocor = 1
        break
        case 'azul':
        retornocor = 1
        break
        case 'preto':
        retornocor = 1
        break
        default:
        retornocor = 0
        }
        
        return retornocor
        }

        function numeroprimo(numero){
        for (let i = 2; i < numero; i++)
        if (numero % i === 0) {
        return 1;
        }
        return 0;
        }




        module.exports = {cordisponive, validarumero, numeroprimo}

        
