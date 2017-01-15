import $ from 'jquery';
export function log(content){
  $('#content').append("<h4 class='bg-info'>"+ content + "</h4>")
}
export function logTittle(content){
  $('#content').append("<h4 class= 'bg-primary'>"+ content + "</h4>")
}
