const fs = require('fs')
const sharp = require('sharp')

exports.compressImage = (file,size) =>{
    
    const newPath = file.path.split(".")[0] + '.webp'
                                // size é opcional, e nao redimenciona se nao for recebido
        return sharp(file.path).resize(size).toFormat("webp").webp({
            quality: 80
        }).toBuffer().then(data => {
            // Buffer disponivel para tratamento
            fs.access(file.path, (err) =>{
                // Deletando arquivo antigo
                // o fs.acess serve para testar se o arquivo existe 
                if(!err){
                    fs.unlink(file.path, err =>{
                        if(err){ 
                            console.log("unlink falhou")
                            console.log(err)
                        }
                    })
                }
            })
            // Aqui armazenamos o buffer em um novo caminho
            fs.writeFile(newPath, data, err =>{
                if(err){
                    console.log("write falho")
                    throw err
                }
            })
            // Retornamos o novo caminho 
            console.log("NOVO PATH: " + newPath)
            return newPath 
        })
}