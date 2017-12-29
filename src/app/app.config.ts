import {UploadParams } from 'angular-azure-blob-service';

export const Config: UploadParams = {
    sas: '?sv=2017-04-17&ss=b&srt=sco&sp=rwdlac&se=2018-01-02T23:16:38Z&st=2017-12-26T15:16:38Z&sip=192.168.15.2&spr=https,http&sig=8ZuoMdrrGBcs0HA74S7z8K04Kw3ZHIsl84bBPv30vDU%3D',
    storageAccount: 'angularblob2',
    containerName: 'blob'
    
  };