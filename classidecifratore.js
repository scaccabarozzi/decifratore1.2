class Decifratore{
    static exbin(E){
        let stringaex=E.replace(/^0x/, '');
        let bin='';
        for(let i=0; i<stringaex.length; i++){
            let cifrabin= parseInt(stringaex[i], 16).toString(2).padStart(4, '0');
            bin += cifrabin;
        }
    
    return bin; 
    }
    
    static ultimi16bit2(binario){
        let ultimi16bit=binario.slice(-16);
        return ultimi16bit;
    }
    
    static errorpos(str){
        let stringainvertita = str.split('').reverse().join('');
        let poserr = [];
        for(let i=0; i<stringainvertita.length; i++){
            if(stringainvertita[i]==0){
                poserr.push(i);
            }
        }
    return poserr;
    }
    
    static messaggiErrore(errorBits) {
    
        const errorDescriptions = {
            0: "DCM Connection State - Connessione fallita",
            1: "UCM Connection State - Connessione fallita",
            2: "UCM DCM Connection State - Connessione fallita",
            3: "SPM Connection State - Connessione fallita",
            4: "CT Detector Connection State - Connessione fallita",
            5: "DR Detector Connection State - Connessione fallita",
            6: "RCS Connection State - Connessione fallita",
            7: "ControlServer Connection State - Connessione fallita",
            8: "DR Dataserver Connection State - Connessione fallita",
            9: "CT Dataserver Connection State - Connessione fallita",
            10: "IPS Connection State - Connessione fallita",
            11: "IPS 3D Connection State - Connessione fallita",
            12: "ActweblQ Service Connection State - Connessione fallita",
            13: "IPS3D FTP Server Connection State - Connessione fallita",
            14: "RCS Algorithm Initialization State - Connessione fallita",
            15: "Dataserver FTP Server State - Connessione fallita",
            16: "IPS FTP Server State - Connessione fallita",
        };
    
        return errorBits.map(bit => errorDescriptions[bit] || "Bit non gestito");
    }

    static messaggioerroreOUTPUT(i) {
        return this.messaggiErrore(this.errorpos(this.ultimi16bit2(this.exbin(i))));
    }   
}