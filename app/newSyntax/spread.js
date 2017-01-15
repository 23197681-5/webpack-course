import { log, logTitle} from '../WindowLogger'
export default function(){
 logTitle("Spread");
 const frutas = ['abacate', 'morango'];
 const vendedores = ['Emerson', 'Regis'];
 const frutasevendedores = [...frutas, ...vendedores];
 log(frutasevendedores);

 const name = 'Willian';
 log(...name.length);
 //can do that to add
}
