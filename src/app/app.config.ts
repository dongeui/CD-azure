import {UploadParams } from 'angular-azure-blob-service';

export const Config: UploadParams = {
    sas: '?sv=2017-04-17&ss=b&srt=sco&sp=rwdlac&se=2017-12-23T12:45:53Z&st=2017-12-20T04:45:53Z&sip=192.168.15.2&spr=https,http&sig=tVMb%2BoynWf19dMS3TKJIUrRfC33ZODHuNT%2F%2FvW5Zspk%3D',
    storageAccount: 'dongeuistorage',
    containerName: 'blob'
    
  };