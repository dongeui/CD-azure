import {UploadParams } from 'angular-azure-blob-service';

export const Config: UploadParams = {
    sas: '?sv=2017-04-17&ss=b&srt=sco&sp=rwdlac&se=2017-12-26T23:59:59Z&st=2017-12-26T01:00:00Z&sip=192.168.15.1-192.168.15.10&spr=https,http&sig=yqRoBBu90ei4v7yGFTrmodi6B9wIUAJHGAfLyzNysL8%3D',
    storageAccount: 'dongeuistorage',
    containerName: 'blob'
    
  };