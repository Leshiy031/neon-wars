'use strict';
try{
  if(!localStorage.getItem('neonWarsProto_v2')){
    const legacy=localStorage.getItem('neonWarsProto_v1');
    if(legacy)localStorage.setItem('neonWarsProto_v2',legacy);
  }
}catch(e){}
