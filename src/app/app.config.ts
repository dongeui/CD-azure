import {UploadParams } from 'angular-azure-blob-service';

export const Config: UploadParams = {
    sas: '?sv=2017-04-17&ss=b&srt=sco&sp=rwdlac&se=2017-12-22T14:30:13Z&st=2017-12-22T06:10:13Z&sip=192.168.15.2&spr=https,http&sig=JJyk2XtC969ggrL85ahop8f7JnwH%2Br9g9adq0ML8BlE%3D',
    storageAccount: 'dongeuistorage',
    containerName: 'blob'
    
  };