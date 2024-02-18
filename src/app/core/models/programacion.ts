export interface Programacion {
    id:                number;
    fechaNumero:       number;
    fechaNumeroTexto:  FechaNumeroTexto;
    idLocal:           number;
    nombreLocal:       string;
    resultadoLocal:    number;
    rutaLogoLocal:     string;
    idVisita:          number;
    nombreVisita:      string;
    resultadoVisita:   number;
    rutaLogoVisita:    string;
    fecha:             Date;
    fechaTexto:        FechaTexto;
    hora:              string;
    horaTexto:         string;
    idVocalia:         number | null;
    nombreVocalia:     null | string;
    idEstadio:         number;
    nombreEstadio:     NombreEstadio;
    ordenEstadio:      number;
    colorEstadio:      ColorEstadio;
    idEstado:          number;
    descripcionEstado: DescripcionEstado;
    colorEstado:       ColorEstado;
    select:            boolean;
}

export enum ColorEstadio {
    The004Ff1 = "#004ff1",
    The00B93B = "#00b93b",
}

export enum ColorEstado {
    D00000 = "#d00000",
}

export enum DescripcionEstado {
    Finalizado = "Finalizado",
}

export enum FechaNumeroTexto {
    Fecha13 = "FECHA 13",
    Fecha14 = "FECHA 14",
    Fecha16 = "FECHA 16",
}

export enum FechaTexto {
    Sáb16DeDicDe2023 = "Sáb, 16 de Dic de 2023",
}

export enum NombreEstadio {
    LaBatea = "La Batea",
    SixtoDuránBallen = "Sixto Durán Ballen",
}