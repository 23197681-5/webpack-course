import { log, logTittle} from '../WindowLogger'
export default function(){
 logTittle("Spread");
 const frutas = ['abacate', 'morango'];
 const vendedores = ['Emerson', 'Regis'];
 const frutasevendedores = [...frutas, ...vendedores];
 log(frutasevendedores);

 const name = 'Willian';
 log(...name.length);
 //can do that to add
}
